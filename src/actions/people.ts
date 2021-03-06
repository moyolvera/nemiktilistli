import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  Unsubscribe,
  updateDoc
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

type AvailableFilterKeys = 'isFromBride' | 'answered' | 'attending' | 'name';
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

function subscribeToAllPeopleEntries(
  updateFunction: (records: PeopleEntry[]) => void
): Unsubscribe {
  const firestore = getFirestore();

  const peopleCollection = collection(firestore, 'people');
  const peopleQuery = query(peopleCollection, orderBy('name'));

  return onSnapshot(peopleQuery, snapshot => {
    const records = snapshot.docs.map(docSnap => {
      const data = docSnap.data() as PeopleEntryResponse;
      const token = docSnap.id;
      return {
        ...data,
        token
      } as PeopleEntry;
    });

    updateFunction(records);
  });
}

function filterPeopleData(records: PeopleEntry[], filter?: FilterType) {
  if (!filter) {
    return records;
  }

  const keys = Object.keys(filter) as AvailableFilterKeys[];
  return records.filter(record => {
    return keys.every(key => {
      if (key === 'name') {
        return record[key].toLowerCase().includes(filter[key].toLowerCase());
      }

      return record[key] === filter[key];
    });
  });
}

async function getAllPeopleEntries() {
  const firestore = getFirestore();

  const peopleCollection = collection(firestore, 'people');
  const peopleQuery = query(peopleCollection, orderBy('name'));

  const querySnapshot = await getDocs(peopleQuery);

  const records = querySnapshot.docs.map(docSnap => {
    const data = docSnap.data() as PeopleEntryResponse;
    const token = docSnap.id;
    return {
      ...data,
      token
    } as PeopleEntry;
  });

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

async function savePeople(guest: Omit<PeopleEntry, 'token'>, token?: string) {
  const firestore = getFirestore();

  try {
    if (token) {
      const docRef = doc(firestore, 'people', token);
      await updateDoc(docRef, guest);
      return true;
    }

    await addDoc(collection(firestore, 'people'), guest);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
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
  filterPeopleData,
  getAllPeopleEntries,
  getPeopleEntry,
  savePeople,
  savePeopleEntries,
  setPeopleEntryInvitedDate,
  subscribeToAllPeopleEntries,
  updatePeopleEntry
};
