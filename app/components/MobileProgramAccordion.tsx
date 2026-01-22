"use client";

import { useState } from "react";
import { Program } from "../types/program";
import { sanitizeHtml } from "@/app/lib/sanitizeHtml";
import {
  copyProgram,
  isWebViewApp,
  programDuration,
  shareProgram,
} from "../util/util";
import { formatDateToDDMMYYYY, getTamilDayFromISODate } from "../lib/dateUtils";
import { Copy, MapPin, Share2, Map, Phone, Landmark } from "lucide-react";

export default function MobileProgramAccordion({
  program,
}: {
  program: Program;
}) {
  const [open, setOpen] = useState(false);
  const cancelled = program.cancelled;

  const hasExpandableContent =
    !!program.description ||
    !!program.location?.name ||
    !!program.location?.address ||
    !!program.location?.mapUrl ||
    (program.contacts && program.contacts.length > 0);

  return (
    <div
      className={`rounded-xl border p-4
        border-[#E6D8B5] bg-[#fff3d6]
        shadow-[0_4px_12px_rgba(0,0,0,0.06)]
        transition-all duration-300`}
    >
      <div className="relative pl-4">
        {/* TIMELINE LINE */}
        <div
          className="
      absolute left-1 top-3 bottom-4
      w-px
      bg-gradient-to-b
      from-transparent
      via-[#d6b27c]
      to-transparent
    "
        />
        {/* DATE HEADER */}
        <div className="mb-2 text-sm text-[#7a3e1d]/90 text-[#7A1C1C] font-medium">
          {program.programType === "range" ? (
            <div>
              <div>
                {formatDateToDDMMYYYY(program.startDate)} முதல்{" "}
                {formatDateToDDMMYYYY(program.endDate!)} வரை
              </div>
              <div className="text-xs text-[#9A3A3A] mt-0.5">
                {programDuration(program)} நாட்கள்
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span>{formatDateToDDMMYYYY(program.startDate)}</span>
              <span className="text-[#9A3A3A]">
                · {getTamilDayFromISODate(program.startDate)}
              </span>
            </div>
          )}
        </div>

        {/* CARD CONTENT GOES HERE */}
        {cancelled && (
          <div className="mb-2 text-xs text-[#B00020]">
            ❌ நிகழ்ச்சி ரத்து செய்யப்பட்டது
          </div>
        )}

        <div className="mb-3">
          <h4
            className={`font-medium text-[#0F3A5F] ${
              cancelled ? "line-through" : ""
            }`}
          >
            {program.title}
          </h4>
        </div>
        {/* BASIC INFO */}
        {program.time && (
          <p className="mt-2 text-sm text-[#1F3B5C]">
            <span className="font-semibold text-[#0f6b3a]">நேரம்:</span>
            <br />
            <span className="ml-1 text-[#1F3B5C]/90">{program.time}</span>
          </p>
        )}

        {program.instructors && program.instructors.length > 0 && (
          <div className="mt-2">
            <p className="text-sm font-medium text-[#0f6b3a] mb-1">
              வழங்குபவர்கள்:
            </p>
            <ul className="text-xs space-y-1 text-[#1F3B5C]/90">
              {program.instructors.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        )}
        {/* TOGGLE BUTTON */}
        {hasExpandableContent && !cancelled && (
          <button
            onClick={() => setOpen(!open)}
            className="mt-3 text-xs font-medium text-[#8b0000] hover:underline"
          >
            {open ? "சுருக்கமாகப் படிக்க" : "மேலும் விவரங்களுக்கு"}
          </button>
        )}

        {/* EXPANDED CONTENT */}
        {open && (
          <div className="mt-4 space-y-4 text-sm text-[#1f3b5c]/90">
            {/* DESCRIPTION */}
            {program.description && (
              <div
                className="program-description"
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(program.description),
                }}
              />
            )}

            {/* LOCATION */}
            {program.location?.name && (
              <div className="flex items-start gap-2 text-sm text-[#1F3B5C]">
                <MapPin className="mt-0.5 text-[#0f6b3a]" size={32} />
                <span className="mt-1 text-[#1f3b5c]/90">
                  {program.location.name}
                </span>
              </div>
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
                      <a href={`tel:${phone}`} className="hover:underline">
                        {phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        {/* DIVIDER */}
        <div className="my-4 h-px bg-[#e6d6a8] " />
        {/* ACTIONS */}
        <div className="mt-2 flex items-center gap-6 text-xs">
          <button
            onClick={() => copyProgram(program)}
            className=" cursor-pointer text-[#8B1C1C] hover:underline"
          >
            <Copy className="text-[#0f6b3a]" size={16} strokeWidth={1.8} />
            <span>நகலெடு</span>
          </button>

          {!isWebViewApp() && (
            <button
              onClick={() => shareProgram(program)}
              className=" cursor-pointer text-[#8B1C1C] hover:underline"
            >
              <Share2 className="text-[#0f6b3a]" size={16} strokeWidth={1.8} />
              <span>பகிர்</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
