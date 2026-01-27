import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "./firebase";
import type { Program } from "@/app/types/program";
import { getCurrentMonthKey } from "./dateUtils";

/**
 * read adapter
 * Fetch programs from Firestore
 * Read-only, public-safe
 */
export async function fetchPrograms(): Promise<Program[]> {
  try {
    const monthKey = getCurrentMonthKey();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayStr = today.toISOString().slice(0, 10); // YYYY-MM-DD

    //To fetch past programs if needed
    //where("startDate", "<", todayStr)
    //orderBy("startDate", "desc")

    const q = query(
      collection(db, "programs"),
      where("startDate", ">=", todayStr),
      orderBy("startDate", "asc"),
    );
    const snapshot = await getDocs(q);

    const programs: Program[] = snapshot.docs.map((doc) => {
      const data = doc.data();

      return {
        id: doc.id,
        title: data.title,
        programType: data.programType,

        startDate: data.startDate,
        endDate: data.endDate,
        monthKey: data.monthKey,

        time: data.time,

        location: data.location,
        instructors: data.instructors,
        description: data.description,
        contacts: data.contacts,
        cancelled: data.cancelled ?? false,

        createdAt: data.createdAt
          ? data.createdAt.toDate().toISOString()
          : undefined,
      };
    });

    return programs;
  } catch (error) {
    console.error("Error fetching programs:", error);
    return [];
  }
}
