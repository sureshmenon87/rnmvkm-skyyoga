"use client";

import { useState } from "react";
import { instructionSections } from "@/app/data/instructions";
import InstructionsSidebar from "@/app/components/InstructionsSidebar";
import InstructionsContent from "@/app/components/InstructionsContent";

export default function InstructionsPage() {
  const [activeId, setActiveId] = useState(instructionSections[0].id);

  const activeSection = instructionSections.find((s) => s.id === activeId);

  return (
    <main className="bg-[#FFFFED] px-8 py-10">
      <h1 className="mb-8 text-center text-2xl font-semibold text-[#7A1E12]">
        வழிமுறைகள்
      </h1>

      <div className="mx-auto flex max-w-6xl gap-10">
        {/* LEFT SIDEBAR */}
        <InstructionsSidebar
          sections={instructionSections}
          activeId={activeId}
          onSelect={setActiveId}
        />

        {/* RIGHT CONTENT */}
        <InstructionsContent section={activeSection} />
      </div>
    </main>
  );
}
