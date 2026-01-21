import { doc, runTransaction, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export async function incrementVisitorCount() {
  const ref = doc(db, "analytics", "visitors");

  await runTransaction(db, async (transaction) => {
    const snap = await transaction.get(ref);

    const now = new Date();

    const todayStr = now.toISOString().slice(0, 10); // YYYY-MM-DD
    const monthStr = now.toISOString().slice(0, 7); // YYYY-MM

    let data = snap.exists()
      ? snap.data()
      : {
          total: 0,
          today: 0,
          thisMonth: 0,
          lastDay: "",
          lastMonth: "",
        };

    let total = data.total ?? 0;
    let today = data.today ?? 0;
    let thisMonth = data.thisMonth ?? 0;

    // Day logic
    if (data.lastDay === todayStr) {
      today += 1;
    } else {
      today = 1;
    }

    // Month logic
    if (data.lastMonth === monthStr) {
      thisMonth += 1;
    } else {
      thisMonth = 1;
    }

    total += 1;

    transaction.set(
      ref,
      {
        total,
        today,
        thisMonth,
        lastDay: todayStr,
        lastMonth: monthStr,
        updatedAt: serverTimestamp(),
      },
      { merge: true },
    );
  });
}
