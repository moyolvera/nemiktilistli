import { getFirestore, getDoc, doc } from 'firebase/firestore';

interface SecretEntryResponse {
  enabled: boolean;
}

export interface SecretEntry extends SecretEntryResponse {
  token: string;
}

async function getSecretEntry(token: string) {
  const firestore = getFirestore();

  const docRef = doc(firestore, 'secret', token);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { ...(docSnap.data() as SecretEntryResponse), token } as SecretEntry;
  }

  return undefined;
}

export { getSecretEntry };
