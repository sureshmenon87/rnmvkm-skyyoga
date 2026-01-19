import { InstructionSection } from "@/app/data/instructions";
import { sanitizeHtml } from "@/app/lib/sanitizeHtml";

export default function InstructionsContent({
  section,
}: {
  section?: InstructionSection;
}) {
  if (!section) return null;

  return (
    <section className="flex-1 rounded-xl border border-[#E6CFA8] bg-[#FFF8E8] p-8">
      <h2 className="mb-10 text-xl font-semibold text-[#0F3A5F] text-center">
        {section.title}
      </h2>

      <div
        className="instruction-content text-[#1F3B5C]"
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(section.contentHtml),
        }}
      />
    </section>
  );
}
