"use client";

import { useState } from "react";
import { instructionSections } from "@/app/data/instructions";
import InstructionsSidebar from "@/app/components/InstructionsSidebar";
import InstructionsContent from "@/app/components/InstructionsContent";
import MobileInstructionsAccordion from "../components/MobileInstructionsAccordion";

export default function InstructionsPage() {
  const [activeId, setActiveId] = useState(instructionSections[0].id);

  const activeSection = instructionSections.find((s) => s.id === activeId);

  return (
    <main className="bg-[#FFFFED] px-8 py-10">
      {/* HEADER IMAGE */}
      <div className="flex justify-center mb-6">
        <img
          src="maharishi.png"
          alt="Maharishi blessing"
          className="h-48 w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)"
        />
      </div>
      <h1
        className="
    text-center font-semibold text-[#7A1E12]
    text-lg
    sm:text-xl
    md:text-2xl
    leading-relaxed
    px-4
  "
      >
        மனவளக்கலைப் பயிற்சியாளர்கள் பின்பற்ற வேண்டிய வழிமுறைகள்
      </h1>

      {/* DESKTOP */}
      <div className="hidden md:flex mx-auto max-w-6xl gap-10 items-start">
        <InstructionsSidebar
          sections={instructionSections}
          activeId={activeId}
          onSelect={setActiveId}
        />
        <InstructionsContent section={activeSection} />
      </div>

      {/* MOBILE */}
      <div className="md:hidden px-4">
        <MobileInstructionsAccordion sections={instructionSections} />
      </div>
    </main>
  );
}
