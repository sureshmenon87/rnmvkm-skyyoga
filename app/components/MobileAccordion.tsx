"use client";

import { useState } from "react";

type Item = {
  id: string;
  title: string;
  content: React.ReactNode;
};

export default function MobileAccordion({ items }: { items: Item[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    /* OUTER INSET — THIS IS KEY */
    <div className="space-y-4 px-3">
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className="
              
              rounded-2xl
              bg-[#FFFDF6]
              border border-[#EDD9AF]
              shadow-[0_1px_0_rgba(0,0,0,0.04)]
            "
          >
            {/* HEADER */}
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="
                w-full flex items-center justify-between
                px-4 py-3.5
                text-left
                text-[#891e0d] font-medium
                leading-snug
                transition-colors
                hover:bg-[#FFF6DF]
              "
            >
              <span className="pr-3 text-[15px]">{item.title}</span>

              {/* FLOATING PLUS */}
              <span
                className="
                  flex h-6 w-6 items-center justify-center
                  rounded-full
                  bg-[#FFF3D6]
                  text-[#891e0d]
                  text-lg leading-none
                  shrink-0
                "
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {/* CONTENT */}
            <div
              className={`
                overflow-hidden transition-all duration-300 ease-in-out
                ${isOpen ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"}
              `}
            >
              <div className="px-4 pb-5 pt-2 text-[#1f3b5c] leading-relaxed">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
