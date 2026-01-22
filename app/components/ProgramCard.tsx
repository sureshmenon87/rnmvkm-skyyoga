"use client";

import { useState } from "react";
import { Program } from "../types/program";
import {
  copyProgram,
  formatDate,
  shareProgram,
  programDuration,
  getTamilDayWithDateFns,
} from "../util/util";
import { Copy, MapPin, Share2, Map, Phone, Landmark } from "lucide-react";

import { sanitizeHtml } from "../lib/sanitizeHtml";
import { getTamilDayFromISODate } from "../lib/dateUtils";

type ProgramCardProps = {
  program: Program;
};

export default function ProgramCard({ program }: ProgramCardProps) {
  const [expanded, setExpanded] = useState(false);
  //const programs = program.;

  const isCancelled = program.cancelled === true;
  const days = programDuration(program);

  return (
    <div className="max-w-6xl mx-auto space-y-10 ">
      {
        <div key={program.id}>
          <div className="grid grid-cols-[180px_1fr] gap-6 items-stretch">
            {program.programType === "range" && program.endDate ? (
              <div className="leading-relaxed">
                <div className="pl-3 border-l-2 border-[#d6b27c]">
                  <div className="font-semibold text-lg text-[#7A1C1C]">
                    {formatDate(program.startDate)}
                  </div>
                </div>

                <div className="text-sm text-[#7A1C1C] mt-1">
                  முதல் {formatDate(program.endDate!)}
                </div>

                <div className="text-xs text-[#7A1C1C] mt-1">
                  {days} நாட்கள்
                </div>
              </div>
            ) : (
              <div className="font-semibold text-lg text-[#7A1C1C]">
                <div className="pl-3 border-l-2 border-[#d6b27c]">
                  <div className="font-semibold text-lg text-[#7A1C1C]">
                    {formatDate(program.startDate)} <br />
                    {getTamilDayFromISODate(program.startDate)}
                  </div>
                </div>
              </div>
            )}

            {/* RIGHT COLUMN */}
            <div
              className=" bg-[#FFF8E8] rounded-xl p-5 
              rounded-xl
              border border-[#e6cfa8]
               shadow-[0_4px_12px_rgba(0,0,0,0.06)]
               transition-all duration-300
               hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]
               hover:-translate-y-[2px]"
            >
              <h3 className="text-[#0B3A6E] font-semibold text-lg">
                {program.title} {program.endDate ? `( ${days} நாட்கள் )` : ""}
              </h3>

              {(program.instructors ?? []).length > 0 && (
                <p className="text-sm text-[#444] mt-1">
                  {program.instructors?.join(", ")}
                </p>
              )}
              {program.time ? (
                <p className="mt-2 text-sm ">
                  <span className="font-medium text-[#0f6b3a]">நேரம்:</span>
                  <span className="text-[#1F3B5C]"> {program.time}</span>
                </p>
              ) : (
                ""
              )}

              {/* Actions */}
              <div className="mt-4  text-sm">
                {/* TOGGLE BUTTON */}
                {program.description && (
                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="cursor-pointer text-xs font-medium text-[#8b0000] hover:underline"
                  >
                    {expanded ? "சுருக்கமாகப் படிக்க" : "மேலும் விவரங்களுக்கு"}
                  </button>
                )}

                {/* EXPANDED CONTENT */}
                {expanded && (
                  <div className="mt-4 text-sm text-[#1f3b5c] leading-relaxed space-y-4">
                    {/* DESCRIPTION */}
                    {program.description && (
                      <div
                        className="program-description"
                        dangerouslySetInnerHTML={{
                          __html: sanitizeHtml(program.description),
                        }}
                      />
                    )}
                    {/* Address */}
                    <div className="flex items-start gap-2">
                      <Landmark size={16} className="mt-0.5 text-[#0f6b3a]" />
                      <div>
                        <div className="font-semibold">முகவரி</div>
                        <div>{program.location?.address}</div>
                      </div>
                    </div>
                    {/* MAP */}
                    {program.location?.mapUrl && (
                      <div className="flex items-center gap-2">
                        <Map size={16} className="text-[#0f6b3a]" />
                        <a
                          href={program.location?.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#0f6b3a] underline underline-offset-2"
                        >
                          Google Map பார்க்க
                        </a>
                      </div>
                    )}
                    {/* CONTACTS */}
                    {program.contacts && program.contacts.length > 0 && (
                      <div className="flex flex-col gap-1 text-sm text-[#1F3B5C]">
                        {/* Label row */}
                        <div className="flex items-center gap-2 font-medium text-[#0f6b3a]">
                          <Phone size={16} className="text-[#0f6b3a]" />
                          <span>தொடர்புக்கு</span>
                        </div>

                        {/* Phone numbers */}
                        <ul className="ml-6 space-y-1">
                          {program.contacts.map((phone) => (
                            <li key={phone}>
                              <a
                                href={`tel:${phone}`}
                                className="hover:underline"
                              >
                                {phone}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}{" "}
                  </div>
                )}

                {/* DIVIDER */}
                <div className="my-4 h-px bg-[#e6d6a8] " />

                {/* COPY / SHARE — BOTTOM */}
                <div className="flex gap-6 text-xs text-[#555]">
                  <button
                    onClick={() => copyProgram(program)}
                    className=" cursor-pointer flex items-center gap-1 hover:text-[#000]"
                  >
                    <Copy size={16} strokeWidth={1.8} />
                    <span>நகலெடு</span>
                  </button>

                  <button
                    onClick={() => shareProgram(program)}
                    className=" cursor-pointer flex items-center gap-1 hover:text-[#000]"
                  >
                    <Share2 size={16} strokeWidth={1.8} />
                    <span>பகிர்</span>
                  </button>
                </div>
              </div>

              {program.cancelled && (
                <div className="mt-3 text-red-700 font-semibold">
                  ❌ ரத்து செய்யப்பட்டது
                </div>
              )}
            </div>
          </div>
        </div>
      }
    </div>
  );
}
