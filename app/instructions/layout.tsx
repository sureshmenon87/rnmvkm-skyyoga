import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "வழிமுறைகள்",
  description:
    "மனவளக்கலைப் பயிற்சியாளர்கள் பின்பற்ற வேண்டிய தவமுறை வழிமுறைகள், நிபந்தனைகள், தவத் தொடக்கம் மற்றும் முடிவு முறைகள்.",
};

export default function InstructionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
