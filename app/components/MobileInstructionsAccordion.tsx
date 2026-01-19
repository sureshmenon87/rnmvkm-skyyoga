"use client";

import { useState } from "react";
import { InstructionSection } from "@/app/data/instructions";
import { sanitizeHtml } from "@/app/lib/sanitizeHtml";

export default function MobileInstructionsAccordion({
  sections,
}: {
  sections: InstructionSection[];
}) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {sections.map((section) => {
        const open = openId === section.id;

        return (
          <div
            key={section.id}
            className="rounded-xl border border-[#E6CFA8] bg-[#FFF8E8]"
          >
            {/* HEADER */}
            <button
              onClick={() => setOpenId(open ? null : section.id)}
              className="
                w-full px-4 py-3 text-left
                flex items-center justify-between
                font-medium text-[#7A1E12]
                cursor-pointer
              "
            >
              <span>{section.title}</span>
              <span className="text-lg">{open ? "−" : "+"}</span>
            </button>

            {/* CONTENT */}
            {open && (
              <div className="px-4 pb-4 text-[#1F3B5C] text-sm">
                <div
                  className="instruction-content"
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(section.contentHtml),
                  }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
