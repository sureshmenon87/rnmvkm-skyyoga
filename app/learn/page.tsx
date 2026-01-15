"use client";

import { useState } from "react";
import Image from "next/image";
import MaharishiHeader from "@/app/components/MaharishiHeader";
import { payirchigal } from "@/app/data/payirchigal";
import MaharishiRibbonHeader from "../components/MaharishiRibbonHeader";

export default function LearnPage() {
  const [activeId, setActiveId] = useState(payirchigal[0].id);
  const active = payirchigal.find((p) => p.id === activeId)!;

  return (
    <main className="bg-[#FFFFED]">
      {/* Maharishi intro */}
      <MaharishiRibbonHeader />

      {/* Training content */}
      <section className="hidden md:grid grid-cols-[260px_1fr] gap-8 max-w-7xl mx-auto px-6 pb-16 bg-[#FFFFEC]">
        {/* Left list */}
        <aside className="space-y-3">
          {payirchigal.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`w-full rounded-md px-4 py-3 text-left border transition text-[#891e0d]
                ${
                  activeId === item.id
                    ? "bg-maroon-700 text-maroon-900 border-maroon-700"
                    : "bg-maroon-100 text-maroon-900 border-maroon-300 hover:bg-maroon-200"
                }`}
            >
              {item.title}
            </button>
          ))}
        </aside>

        {/* Right content */}
        <div className="rounded-xl border border-yellow-400/60 bg-[#fffbe8] p-6">
          {/* Section image */}
          <div className="flex justify-center mb-6">
            <Image
              src={active.image}
              alt={active.title}
              width={220}
              height={140}
              className="object-contain"
            />
          </div>

          {/* Table */}
          {active.type === "table" && active.tableData && (
            <div className="overflow-hidden rounded-lg border border-yellow-400/60">
              <div className="grid grid-cols-2 bg-yellow-100/70 font-semibold text-maroon-800">
                <div className="p-3 text-[#891e0d]">பயிற்சிகள்</div>
                <div className="p-3 text-[#891e0d]">நன்மைகள்</div>
              </div>

              {active.tableData.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-2 border-t border-yellow-300/50"
                >
                  <div className="p-3 text-blue-900">{row.name}</div>
                  <div className="p-3 space-y-1 leading-relaxed text-blue-900">
                    {row.benefits.map((b, j) => (
                      <p key={j}>{b}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Paragraph */}
          {active.type === "paragraph" && active.paragraph && (
            <div className="mx-auto max-w-prose text-blue-900 leading-relaxed">
              {active.paragraph.heading && (
                <h3 className="mb-3 font-semibold text-[#891e0d]">
                  {active.paragraph.heading}
                </h3>
              )}

              {active.paragraph.blocks.map((text, i) => (
                <p key={i} className="mb-4 ">
                  {text}
                </p>
              ))}

              {active.paragraph.bullets && (
                <ul className="list-disc list-inside space-y-1">
                  {active.paragraph.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
