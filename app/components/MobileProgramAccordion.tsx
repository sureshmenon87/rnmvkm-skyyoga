"use client";

import { useState } from "react";

import { Program } from "../types/program";
import { copyProgram, shareProgram } from "../util/util";

export default function MobileProgramAccordion({
  program,
}: {
  program: Program;
}) {
  const [openId, setOpenId] = useState<string | null>(null);
  const open = openId === program.id;
  const cancelled = program.cancelled;

  return (
    <div className="space-y-4 ">
      {
        <div
          key={program.id}
          className={`rounded-xl border p-4 ${
            cancelled ? "bg-[#FFF0F0]" : "bg-[#FFF8E6]"
          } 
    rounded-xl
    border border-[#E6D8B5] bg-[#FFF8E8]
    shadow-[0_4px_12px_rgba(0,0,0,0.06)]
    transition-all duration-300
    hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]
    hover:-translate-y-[2px]`}
        >
          {cancelled && (
            <div className="mb-2 text-xs text-[#B00020]">
              ❌ நிகழ்ச்சி ரத்து செய்யப்பட்டது
            </div>
          )}

          <div
            className="flex items-center gap-2
  bg-[#FFF6E5]
  border-l-4 border-[#E6A23C]
  px-4 py-2
  rounded-t-lg"
          >
            <span className="font-semibold text-[#8B1C0D]">{program.date}</span>
            <span className="text-[#B45309]">. {program.day}</span>
          </div>
          {/* DIVIDER */}
          <div className="my-4 flex ">
            <div className="w-full h-px bg-[#E6C35A] shadow-md" />
          </div>
          {/* BODY */}
          <div
            className="
  bg-[#FFFFED]
  px-5 py-4
  rounded-b-lg
  text-[#1F3B5C]
"
          >
            <h4
              className={`font-medium text-[#0F3A5F] ${
                cancelled ? "line-through" : ""
              } mb-4`}
            >
              {program.title}
            </h4>

            <p className="text-xs text-[#1F3B5C] mb-1">
              <span className="text-[#8B0000] font-medium">நேரம்:</span>
              <span className="text-[#1F3B5C]"> {program.time}</span>
            </p>
            {/* Speakers */}
            {program.instructors && program.instructors.length > 0 && (
              <div>
                <p className="text-sm font-medium text-[#8B0000] mb-4 ">
                  வழங்குபவர்கள்:
                </p>
                <ul className="list-inside text-sm text-[#1F3B5C] border-#C47A2C">
                  {program.instructors.map((s, idx) => (
                    <li key={idx}>{s}</li>
                  ))}
                </ul>
              </div>
            )}

            {!cancelled && !program.description && (
              <button
                className="mt-3 text-xs text-[#6B7280] hover:text-[#8A2C0D]"
                onClick={() => setOpenId(open ? null : program.id)}
              >
                {open ? "சுருக்கமாகப் படிக்க ▲" : "மேலும் விவரங்களுக்கு ▼"}
              </button>
            )}
            <div className="pt-3 flex items-center gap-4 text-sm">
              <button
                onClick={() => shareProgram(e)}
                className="text-[#8B1C1C] hover:underline"
              >
                பகிர
              </button>
            </div>

            {open && program.description && (
              <ul className="mt-3 list-disc list-inside space-y-1 text-sm leading-relaxed text-[##9CAF88 ]">
                {program.description && (
                  <p className="text-sm leading-relaxed text-[#1F3B5C]">
                    {program.description}
                    <br />

                    <br />
                    {<a href={program.location?.mapUrl}>Google Map</a>}
                  </p>
                )}
              </ul>
            )}
          </div>
        </div>
      }
    </div>
  );
}
