import {
  getFirestore,
  getDoc,
  doc,
  updateDoc,
  collection,
  query,
  where,
  orderBy,
  getDocs,
  addDoc
} from 'firebase/firestore';

interface PeopleEntryResponse {
  answered: boolean;
  attending: boolean;
  isFromBride: boolean;
  message: string;
  name: string;
  phone: string;
  sensible: boolean;
  tutorial: boolean;
  goodfather: string;
  invitedOn?: number;
}

export interface PeopleEntry extends PeopleEntryResponse {
  token: string;
}

type AvailableFilterKeys = 'isFromBride' | 'answered' | 'attending';
export type FilterType = Pick<PeopleEntry, AvailableFilterKeys>;

export type ImportPeopleEntry = Pick<
  PeopleEntry,
  'name' | 'phone' | 'tutorial' | 'goodfather'
>;

export function determineIfIsImportPeopleEntry(
  toBeDetermined: any
): toBeDetermined is ImportPeopleEntry {
  return (
    !!toBeDetermined &&
    toBeDetermined.name &&
    toBeDetermined.phone &&
    toBeDetermined.tutorial !== undefined
  );
}

async function getAllPeopleEntries(filter?: FilterType) {
  const firestore = getFirestore();

  const peopleCollection = collection(firestore, 'people');
  const peopleQuery = query(
    peopleCollection,
    where('name', '!=', ''),
    orderBy('name')
  );

  const querySnapshot = await getDocs(peopleQuery);

  const records = querySnapshot.docs.map(docSnap => {
    const data = docSnap.data() as PeopleEntryResponse;
    const token = docSnap.id;
    return {
      ...data,
      token
    } as PeopleEntry;
  });

  if (filter) {
    const keys = Object.keys(filter) as AvailableFilterKeys[];
    return records.filter(record => {
      return keys.every(key => {
        return record[key] === filter[key];
      });
    });
  }

  return records;
}

async function getPeopleEntry(token: string) {
  const firestore = getFirestore();

  const docRef = doc(firestore, 'people', token);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { ...(docSnap.data() as PeopleEntryResponse), token } as PeopleEntry;
  }

  return undefined;
}

async function savePeopleEntries(guests: PeopleEntry[]) {
  const firestore = getFirestore();

  try {
    Promise.all(
      guests.map(async data => {
        const { token, ...props } = data;
        return await addDoc(collection(firestore, 'people'), { ...props });
      })
    );

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function setPeopleEntryInvitedDate(
  guest: Pick<PeopleEntry, 'invitedOn' | 'token'>
) {
  const firestore = getFirestore();

  const docRef = doc(firestore, 'people', guest.token);
  try {
    await updateDoc(docRef, {
      invitedOn: guest.invitedOn
    });
  } catch (error) {
    console.log(error);
  }
}

async function updatePeopleEntry(
  guest: Pick<PeopleEntry, 'attending' | 'message' | 'token'>
) {
  const firestore = getFirestore();

  const docRef = doc(firestore, 'people', guest.token);
  try {
    await updateDoc(docRef, {
      answered: true,
      attending: guest.attending,
      message: guest.message
    });
  } catch (error) {
    console.log(error);
  }
}

export {
  getAllPeopleEntries,
  getPeopleEntry,
  savePeopleEntries,
  setPeopleEntryInvitedDate,
  updatePeopleEntry
};
