import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/lib/firebase";

const snap = await getDocs(collection(db, "programmes"));
console.log(snap.docs.length);
