export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("ta-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

import { toast } from "react-hot-toast";
import { Program } from "../types/program";

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
