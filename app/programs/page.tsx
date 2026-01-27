import MobileProgramAccordion from "@/app/components/MobileProgramAccordion";
import ProgramCard from "@/app/components/ProgramCard";
import { getCurrentTamilMonth } from "../lib/dateUtils";
import MandramDailySchedule from "../components/MandramDailySchedule";
import { fetchPrograms } from "../lib/programs";
import ProgramsWithMonthDivider from "../components/ProgramsWithMonthDivider";

export default async function ProgramsPage() {
  const programs = await fetchPrograms();
  return (
    <main className="bg-gradient-to-b from-[#fffdf5] to-[#fcf8ee] px-6 py-8">
      <MandramDailySchedule />
      <hr className="my-8 border-[#E6CFA8]" />
      <h1 className="mb-8 text-center text-2xl font-semibold text-[#7A1E12]">
        வரவிருக்கும் நிகழ்ச்சிகள் நிரல்
      </h1>

      <div className="md:hidden space-y-4">
        <ProgramsWithMonthDivider
          items={programs}
          getDate={(p) => p.startDate}
          renderItem={(p) => <MobileProgramAccordion key={p.id} program={p} />}
        />
      </div>
      {/* Desktop */}
      <div className="hidden md:block space-y-6">
        <ProgramsWithMonthDivider
          items={programs}
          getDate={(p) => p.startDate}
          dividerClassName="text-lg text-center text-[#7A1E12] tracking-wide"
          renderItem={(p) => <ProgramCard key={p.id} program={p} />}
        />
      </div>
    </main>
  );
}
