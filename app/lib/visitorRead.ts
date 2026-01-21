import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function getVisitorTotal(): Promise<number> {
  const ref = doc(db, "analytics", "visitors");
  const snap = await getDoc(ref);

  if (!snap.exists()) return 0;

  return snap.data().total ?? 0;
}
