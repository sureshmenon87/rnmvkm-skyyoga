import admin from "firebase-admin";
import fs from "fs";
import path from "path";

// 👇 import the month you want to seed
import { programs_2026_01 } from "../seed-data/programs";

// Load service account safely
const serviceAccountPath = path.resolve(__dirname, "serviceAccountKey.json");

if (!fs.existsSync(serviceAccountPath)) {
  throw new Error("serviceAccountKey.json not found");
}

const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf-8"));

// Init Admin SDK (safe – script only)
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function seedPrograms(programs: any[]) {
  const batch = db.batch();
  const collectionRef = db.collection("programs");

  programs.forEach((program) => {
    const docRef = collectionRef.doc(); // Auto-ID
    batch.set(docRef, {
      ...program,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
  });

  await batch.commit();
  console.log(`✅ Seeded ${programs.length} programs`);
}

seedPrograms(programs_2026_01)
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("❌ Seeding failed", err);
    process.exit(1);
  });
