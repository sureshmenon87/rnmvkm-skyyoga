import { InstructionSection } from "@/app/data/instructions";

interface Props {
  sections: InstructionSection[];
  activeId: string;
  onSelect: (id: string) => void;
}

export default function InstructionsSidebar({
  sections,
  activeId,
  onSelect,
}: Props) {
  return (
    <aside className="w-64 space-y-3 sticky top-24 items-start">
      {sections.map((section, index) => {
        const active = section.id === activeId;

        return (
          <button
            key={section.id}
            onClick={() => onSelect(section.id)}
            className={`
    relative w-full rounded-lg px-4 py-3 text-left
    transition-all duration-200
    cursor-pointer
    ${
      active
        ? "bg-[#7A1E12] text-[#FFFBEA] shadow-md"
        : "bg-[#8B1C0D] text-[#FFFBEA] hover:bg-[#A12414]"
    }
  `}
          >
            {/* ACTIVE DOT */}
            {active && (
              <span
                className="
        absolute left-3 top-1/2
        -translate-y-1/2
        h-2.5 w-2.5
        rounded-full
        bg-[#F2C94C]
      "
              />
            )}

            {/* TEXT */}
            <span className="ml-4">{section.title}</span>
          </button>
        );
      })}
    </aside>
  );
}
