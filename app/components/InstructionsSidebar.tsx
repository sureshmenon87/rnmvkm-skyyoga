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
    <aside className="w-64 space-y-3">
      {sections.map((section, index) => {
        const active = section.id === activeId;

        return (
          <button
            key={section.id}
            onClick={() => onSelect(section.id)}
            className={`
              w-full rounded-md px-4 py-2 text-left
              ${
                active
                  ? "bg-[#7A1E12] text-white"
                  : "bg-[#8B1C0D] text-[#FFFBEA]"
              }
            `}
          >
            {section.title}
          </button>
        );
      })}
    </aside>
  );
}
