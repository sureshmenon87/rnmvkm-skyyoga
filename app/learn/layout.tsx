import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "பயிற்சிகள்",
  description:
    "SKY யோகாவின் பயிற்சி முறைகள்: எளிய உடற்பயிற்சி, காய கல்பம், தியானம் மற்றும் ஆகாதாய்வு பயிற்சிகள்.",
};

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
