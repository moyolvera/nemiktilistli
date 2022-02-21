import { getFirestore, getDoc, doc, updateDoc } from 'firebase/firestore';

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

export { getPeopleEntry, updatePeopleEntry };
