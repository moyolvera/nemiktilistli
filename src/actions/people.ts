import {
  getFirestore,
  getDoc,
  doc,
  updateDoc,
  collection,
  query,
  where,
  orderBy,
  getDocs
} from 'firebase/firestore';

interface PeopleEntryResponse {
  answered: boolean;
  attending: boolean;
  sensible: boolean;
  message: string;
  name: string;
  phone: string;
  quantity: number;
}

export interface PeopleEntry extends PeopleEntryResponse {
  token: string;
}

async function getAllPeopleEntries() {
  const firestore = getFirestore();

  const peopleCollection = collection(firestore, 'people');
  const peopleQuery = query(
    peopleCollection,
    where('name', '!=', ''),
    orderBy('name')
  );

  const querySnapshot = await getDocs(peopleQuery);

  return querySnapshot.docs.map(docSnap => {
    const data = docSnap.data() as PeopleEntryResponse;
    const token = docSnap.id;
    return {
      ...data,
      token
    } as PeopleEntry;
  });
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

export { getAllPeopleEntries, getPeopleEntry, updatePeopleEntry };
