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
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className="w-full text-left px-4 py-4
             rounded-lg border border-[#e6c27a]
             hover:bg-[#fff3d8]
             transition"
          >
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between px-4 py-3 text-left font-medium text-[#891e0d] active:bg-[#fff3d6]
  transition-colors"
            >
              <span>{item.title}</span>
              <span className="text-lg">{isOpen ? "−" : "+"}</span>
            </button>

            <div
              className={`
                overflow-hidden transition-all duration-300 ease-in-out
                ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}
              `}
            >
              <div className="px-4 pb-5 pt-3 text-[#1f3b5c] leading-relaxed">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
