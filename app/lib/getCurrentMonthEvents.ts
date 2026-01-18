import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "@/app/lib/firebase";
import { Program } from "@/app/types/program";

export async function getCurrentMonthEvents(): Promise<Event[]> {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), 1);
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);

  const q = query(
    collection(db, "events"),
    where("date", ">=", start.toISOString()),
    where("date", "<=", end.toISOString()),
    orderBy("date", "asc")
  );

  const snap = await getDocs(q);

  return snap.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Event, "id">),
  }));
}
