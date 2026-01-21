"use client";

import { useEffect, useRef } from "react";
import { incrementVisitorCount } from "@/app/lib/visitorCounter";
import { shouldCountVisit } from "../util/util";
export default function VisitorTracker() {
  const hasRun = useRef(false);

  useEffect(() => {
    if (shouldCountVisit()) {
      incrementVisitorCount(); // Firestore transaction
    }
  }, []);

  return null; // no UI
}
