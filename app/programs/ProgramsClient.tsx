// app/programs/ProgramsClient.tsx
"use client";

import ProgramCard from "@/app/components/ProgramCard";
import MobileProgramAccordion from "@/app/components/MobileProgramAccordion";
import { Program } from "../types/program";

export default function ProgramsClient({ programs }: { programs: Program[] }) {
  if (!programs.length) {
    return (
      <div className="text-center py-10 text-[#8b0000]">நிகழ்ச்சிகள் இல்லை</div>
    );
  }

  return (
    <>
      {/* Mobile */}
      <div className="md:hidden space-y-4">
        {programs.map((program) => (
          <MobileProgramAccordion key={program.id} program={program} />
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden md:block space-y-6">
        {programs.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
    </>
  );
}
