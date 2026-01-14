"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "முகப்பு", href: "/" },
  { label: "பயிற்சிகள்", href: "/training" },
  { label: "தியானம் செய்முறை", href: "/meditation" },
  { label: "நிகழ்வுகள்", href: "/events" },
];

export default function NavMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="relative">
      {/* ===== DESKTOP NAV ===== */}
      <div className="hidden md:flex justify-center gap-10 py-3 font-semibold text-[#1f3b6d]">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              className={`relative transition cursor-pointer
                ${active ? "text-[#7b1c0d]" : "hover:text-[#0f6b3a]"}`}
            >
              {item.label}
              {active && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#7b1c0d] rounded-full" />
              )}
            </a>
          );
        })}
      </div>

      {/* Decorative divider */}
      <div className="hidden md:flex justify-center pb-2">
        <img
          src="/divider.png"
          alt="divider"
          className="w-[220px] opacity-70"
        />
      </div>

      {/* ===== MOBILE NAV ===== */}
      <div className="md:hidden flex flex-col items-center">
        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="py-3 text-[#7b1c0d] font-semibold flex items-center gap-2"
        >
          ☰ <span>பாதைகள்</span>
        </button>

        {/* Dropdown */}
        {open && (
          <div className="w-full bg-[#f7f0c8] shadow-md rounded-b-xl">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block text-center py-3 font-semibold transition cursor-pointer
                    ${
                      active
                        ? "text-[#7b1c0d] bg-[#f1e7bd]"
                        : "text-[#1f3b6d] hover:bg-[#efe4b8]"
                    }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        )}

        {/* Divider */}
        <div className="flex justify-center py-3">
          <img
            src="/divider.png"
            alt="divider"
            className="w-[160px] opacity-60"
          />
        </div>
      </div>
    </nav>
  );
}
