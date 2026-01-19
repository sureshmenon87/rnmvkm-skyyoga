import { Program } from "@/app/types/program";
import { htmlToPlainText } from "../util/util";

export function buildProgramText(program: Program): string {
  const lines: string[] = [];

  // Title (always)
  lines.push(program.title);

  // Date
  if (program.startDate && program.endDate) {
    lines.push(`தேதி: ${program.startDate} முதல் ${program.endDate} வரை`);
  } else if (program.startDate) {
    lines.push(`தேதி: ${program.startDate}`);
  }

  // Time
  if (program.time) {
    lines.push(`நேரம்: ${program.time}`);
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
    lines.push(`\nஇடம்: ${program.location.name}`);
  }

  if (program.location?.address) {
    lines.push(program.location.address);
  }

  if (program?.location?.mapUrl) {
    lines.push(`Google Map: ${program.location.mapUrl}`);
  }

  // Contacts
  if (program.contacts?.length) {
    lines.push(`தொடர்பு: ${program.contacts.join(", ")}`);
  }

  // Cancelled
  if (program.cancelled) {
    lines.push("⚠️ குறிப்பு: இந்த நிகழ்ச்சி ரத்து செய்யப்பட்டுள்ளது");
  }

  return lines.join("\n");
}
