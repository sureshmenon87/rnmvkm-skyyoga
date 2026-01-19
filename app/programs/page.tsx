import { getCurrentMonthEvents } from "@/app/lib/getCurrentMonthEvents";
import EventCard from "@/app/components/ProgramCard";
import MobileEventAccordion from "@/app/components/MobileProgramAccordion";
//import { getPrograms } from "@/lib/getPrograms";

import { mockPrograms } from "@/app/data/programs.mock";
import MobileProgramAccordion from "@/app/components/MobileProgramAccordion";
import ProgramCard from "@/app/components/ProgramCard";
import { getCurrentTamilMonth } from "../lib/dateUtils";
import MandramDailySchedule from "../components/MandramDailySchedule";

export default async function ProgramsPage() {
  const programs = mockPrograms; // await getCurrentMonthEvents();

  return (
    <main className="bg-[#FFFFED] px-6 py-8">
      <MandramDailySchedule />
      <hr className="my-8 border-[#E6CFA8]" />
      <h1 className="mb-8 text-center text-2xl font-semibold text-[#7A1E12]">
        {getCurrentTamilMonth()} மாத நிகழ்ச்சிகள் நிரல்
      </h1>

      <div className="md:hidden space-y-4">
        {mockPrograms.map((program) => (
          <MobileProgramAccordion key={program.id} program={program} />
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden md:block space-y-6">
        {mockPrograms.map((e) => (
          <ProgramCard key={e.id} program={e} />
        ))}
      </div>
    </main>
  );
}
