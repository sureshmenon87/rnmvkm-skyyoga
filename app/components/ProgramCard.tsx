"use client";

import { useState } from "react";
import { Program } from "../types/program";
import { copyProgram, shareProgram } from "../util/util";
import { mockPrograms } from "../data/programs.mock";

type ProgramCardProps = {
  program: Program;
};

export default function ProgramCard({ program }: ProgramCardProps) {
  const [expanded, setExpanded] = useState(false);
  //const programs = program.;

  const isCancelled = program.cancelled === true;

  return (
    <div className="max-w-6xl mx-auto space-y-10 ">
      {
        <div key={program.id}>
          <div className="grid grid-cols-[180px_1fr] gap-6 items-start">
            {/* LEFT COLUMN */}
            <div className="text-sm text-[#7A1C1C]">
              <div className="font-semibold text-xl">{program.date}</div>
              <div className="text-sm mt-1">{program.day}</div>
            </div>

            {/* RIGHT COLUMN */}
            <div
              className="bg-[#F6EFE6] rounded-xl p-5  bg-[#FBF2E8]
    rounded-xl
    border border-[#e6cfa8]
    shadow-[0_4px_12px_rgba(0,0,0,0.06)]
    transition-all duration-300
    hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]
    hover:-translate-y-[2px]"
            >
              <h3 className="text-[#0B3A6E] font-semibold text-lg">
                {program.title}
              </h3>

              {(program.instructors ?? []).length > 0 && (
                <p className="text-sm text-[#444] mt-1">
                  {program.instructors?.join(", ")}
                </p>
              )}

              <p className="mt-2 text-sm">
                <span className="text-[#8B0000] font-medium">நேரம்:</span>
                <span className="text-[#1F3B5C]"> {program.time}</span>
              </p>

              {/* Actions */}
              <div className="mt-4 flex items-center gap-4 text-sm">
                {/* EXPAND / COLLAPSE */}
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="mt-4 text-sm font-medium text-[#8b0000] hover:underline"
                >
                  {expanded ? "சுருக்கமாகப் படிக்க" : "மேலும் விவரங்களுக்கு"}
                </button>
                {/* EXPANDED CONTENT */}
                {expanded && (
                  <div className="mt-4 text-sm text-[#1f3b5c] leading-relaxed">
                    <div
                      className="space-y-2"
                      dangerouslySetInnerHTML={{ __html: program.description }}
                    />
                  </div>
                )}

                <button
                  onClick={() => copyProgram(program)}
                  className="text-[#555] hover:text-[#000]"
                >
                  📋 Copy
                </button>

                <button
                  onClick={() => shareProgram(program)}
                  className="text-[#555] hover:text-[#000]"
                >
                  🔗 Share
                </button>
              </div>

              {program.cancelled && (
                <div className="mt-3 text-red-700 font-semibold">
                  ❌ ரத்து செய்யப்பட்டது
                </div>
              )}
            </div>
          </div>

          {/* DIVIDER */}
          <div className="my-8 flex justify-center">
            <div className="w-40 h-px bg-[#D4AF37]" />
          </div>
        </div>
      }
    </div>
  );
}
