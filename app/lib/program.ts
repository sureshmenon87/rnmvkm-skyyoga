import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "./firebase";
import type { Program } from "@/app/types/program";

/**
 * read adapter
 * Fetch programs from Firestore
 * Read-only, public-safe
 */
export async function getPrograms(): Promise<Program[]> {
  try {
    const q = query(collection(db, "programs"), orderBy("startDate", "asc"));

    const snapshot = await getDocs(q);

    const programs: Program[] = snapshot.docs.map((doc) => {
      const data = doc.data();

      return {
        id: doc.id,
        title: data.title,
        programType: data.programType,

        startDate: data.startDate,
        endDate: data.endDate,

        time: data.time,

        location: data.location,
        instructors: data.instructors,
        description: data.description,
        contacts: data.contacts,
        cancelled: data.cancelled ?? false,

        createdAt: data.createdAt,
      };
    });

    return programs;
  } catch (error) {
    console.error("Error fetching programs:", error);
    return [];
  }
}
