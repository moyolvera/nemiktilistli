import { getFirestore, getDoc, doc } from 'firebase/firestore';

interface PeopleEntryResponse {
  answered: boolean;
  attending: boolean;
  name: string;
  phone: string;
  quantity: number;
}

export interface PeopleEntry extends PeopleEntryResponse {
  token: string;
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

export { getPeopleEntry };
