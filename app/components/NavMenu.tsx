"use client";

import { usePathname } from "next/navigation";

const links = [
  { label: "முகப்பு", href: "/" },
  { label: "பயிற்சிகள்", href: "/trainings" },
  { label: "தியானம் செய்முறை", href: "/meditation" },
  { label: "நிகழ்வுகள்", href: "/events" },
];

export default function NavMenu() {
  const pathname = usePathname();

  return (
    <nav className="mt-2">
      <div
        className="
          flex justify-center gap-6 md:gap-10
          text-sm md:text-base
          font-semibold
        "
      >
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <a
              key={link.href}
              href={link.href}
              className={`
                cursor-pointer
                transition-all duration-200
                ${
                  isActive
                    ? "text-[#7b1c0d] font-bold"
                    : "text-[#1f3b6d] hover:text-[#7b1c0d]"
                }
              `}
            >
              {link.label}
            </a>
          );
        })}
      </div>

      {/* Decorative divider */}
      <div className="flex justify-center mt-2 mb-3">
        <img
          src="/divider.png"
          alt="divider"
          className="w-[160px] md:w-[240px] opacity-80"
        />
      </div>
    </nav>
  );
}
