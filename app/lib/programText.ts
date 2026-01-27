import { Program } from "@/app/types/program";
import { htmlToPlainText } from "../util/util";
import { parseISO, format, isValid } from "date-fns";

export function buildProgramText(program: Program): string {
  const lines: string[] = [];

  // Title (always)
  lines.push(`${program.title}\n`);

  // Date
  const startDateObj = program.startDate ? parseISO(program.startDate) : null;
  const endDateObj = program.endDate ? parseISO(program.endDate) : null;

  if (
    startDateObj &&
    isValid(startDateObj) &&
    endDateObj &&
    isValid(endDateObj)
  ) {
    lines.push(
      `தேதி: ${format(startDateObj, "dd-MM-yyyy")} முதல் ${format(endDateObj, "dd-MM-yyyy")} வரை`,
    );
  } else if (startDateObj) {
    lines.push(`தேதி: ${format(startDateObj, "dd-MM-yyyy")}`);
  }

  // Time
  if (program.time) {
    lines.push(`நேரம்: ${program.time}\n`);
  }

  // Instructors
  if (program.instructors?.length) {
    lines.push(`வழங்குபவர்கள்: ${program.instructors.join(", ")}\n`);
  }

  // Description
  if (program.description) {
    lines.push(htmlToPlainText(program.description));
  }

  // Location
  if (program.location?.name) {
    lines.push(`\nஇடம்: ${program.location.name},`);
  }

  if (program.location?.address) {
    lines.push(`${program.location.address}\n`);
  }

  if (program?.location?.mapUrl) {
    lines.push(`Google Map: ${program.location.mapUrl}\n`);
  }

  // Contacts
  if (program.contacts?.length) {
    lines.push(`தொடர்பு: ${program.contacts.join(", ")}\n`);
  }

  // Cancelled
  if (program.cancelled) {
    lines.push("⚠️ குறிப்பு: இந்த நிகழ்ச்சி ரத்து செய்யப்பட்டுள்ளது");
  }

  return lines.join("\n");
}
