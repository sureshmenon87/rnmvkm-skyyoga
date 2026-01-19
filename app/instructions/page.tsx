"use client";

import { useState } from "react";
import { instructionSections } from "@/app/data/instructions";
import InstructionsSidebar from "@/app/components/InstructionsSidebar";
import InstructionsContent from "@/app/components/InstructionsContent";
import MobileInstructionsAccordion from "../components/MobileInstructionsAccordion";

export default function InstructionsPage() {
  const [activeId, setActiveId] = useState(instructionSections[0]?.id);

  const activeSection = instructionSections.find((s) => s.id === activeId);

  return (
    <main className="bg-[#FFFFED] py-8 md:py-10">
      {/* HEADER IMAGE */}
      <div className="flex justify-center mb-4 md:mb-6">
        <img
          src="/maharishi.png"
          alt="Maharishi blessing"
          className="h-40 md:h-48 w-auto object-contain
          drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
        />
      </div>

      {/* TITLE */}
      <h1
        className="
          text-center text-[#8b0000]
          text-lg md:text-xl
          font-semibold
          mb-8 md:mb-10
          px-3
        "
      >
        மனவளக்கலைப் பயிற்சியாளர்கள் பின்பற்ற வேண்டிய வழிமுறைகள்
      </h1>

      {/* DESKTOP */}
      <div className="hidden md:flex mx-auto max-w-6xl gap-10 items-start px-6 mt-6">
        <InstructionsSidebar
          sections={instructionSections}
          activeId={activeId}
          onSelect={setActiveId}
        />
        <InstructionsContent section={activeSection} />
      </div>

      {/* MOBILE — SAME AS LEARN PAGE */}
      <div className="md:hidden px-3 mt-6">
        <MobileInstructionsAccordion sections={instructionSections} />
      </div>
    </main>
  );
}
