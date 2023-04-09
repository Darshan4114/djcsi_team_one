import { db } from "../firebase/adminApp";

export async function coreGetDoc(db, docId) {
  const docSnapshot = await db.collection("tours").doc(docId).get();
  if (!docSnapshot.exists) {
    return null;
  } else {
    return { id: docSnapshot.id, ...docSnapshot.data() };
  }
}

export async function coreAddDoc(collectionPath, docData) {
  const docRef = await db.collection(...collectionPath).add(docData);
  return docRef;
}
export async function coreUpdateDoc(collectionPath, docId, docData) {
  const docRef = await db
    .collection(...collectionPath)
    .doc(docId)
    .update(docData);
  return docRef;
}
