import { differenceInCalendarDays, parse, parseISO, isValid } from "date-fns";
import { Program } from "../types/program";
import { format } from "date-fns";
import { ta } from "date-fns/locale";
export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("ta-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

import { toast } from "react-hot-toast";

export function copyProgram(program: Program) {
  const text = `
${program.title}
நேரம்: ${program.time}
${program.location?.address ?? ""}
  `;
  navigator.clipboard.writeText(text);
  toast.success("நிகழ்ச்சி விவரம் நகலெடுக்கப்பட்டது");
}
export function shareProgram(program: Program) {
  if (!navigator.share) {
    toast.error("Share ஆதரவு இல்லை");
    return;
  }

  navigator.share({
    title: program.title,
    text: program.time,
    url: program.location?.mapUrl,
  });
}

/**
 * Returns program duration in days (inclusive)
 * Works with ISO dates: YYYY-MM-DD
 */
export function programDuration(program: Program): number {
  if (!program.endDate) return 1;

  const startDate = parseISO(program.startDate);
  const endDate = parseISO(program.endDate);

  if (!isValid(startDate) || !isValid(endDate)) return 1;

  return differenceInCalendarDays(endDate, startDate) + 1;
}

/**
 * Converts a date string (DD/MM/YYYY) to its day name in Tamil.
 * @param dateStr Format: "01/01/2026"
 * @returns "வியாழன்"
 */
export const getTamilDayWithDateFns = (dateStr: string): string => {
  // 1. Parse the DD/MM/YYYY string into a Date object
  // The third argument is a base date (required by parse)
  const parsedDate = parse(dateStr, "dd/MM/yyyy", new Date());

  // 2. Format using 'EEEE' for full weekday name in the Tamil locale
  return format(parsedDate, "EEEE", { locale: ta });
};
