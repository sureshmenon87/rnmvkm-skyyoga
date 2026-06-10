"use client";

import { useState } from "react";
import Image from "next/image";
import { payirchigal } from "@/app/data/payirchigal";
import MaharishiRibbonHeader from "../components/MaharishiRibbonHeader";
import MobileAccordion from "../components/MobileAccordion";

export default function LearnPage() {
  const [activeId, setActiveId] = useState(payirchigal[0].id);
  const active = payirchigal.find((p) => p.id === activeId)!;

  const accordionItems = payirchigal.map((item) => ({
    id: item.id,
    title: item.title,

    content: (
      <div className="space-y-3 text-[#1f3b5c] leading-relaxed">
        {/* Image shown ONLY when expanded */}
        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            className="mx-auto h-[90px] object-contain opacity-90"
          />
        )}
        {/* PARAGRAPH TYPE */}
        {item.type === "paragraph" && item.paragraph && (
          <>
            {item.paragraph.heading && (
              <p className="font-medium text-[#891e0d]">
                {item.paragraph.heading}
              </p>
            )}

            {item.paragraph.blocks?.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}

            {item.paragraph?.bullets?.length ? (
              <ul className="list-disc pl-5 space-y-1 ">
                {item.paragraph.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            ) : null}
          </>
        )}

        {/* TABLE TYPE */}
        {item.type === "table" && item.tableData && (
          <div className="space-y-4 payirchigal-benefits">
            {item.tableData.map((row, idx) => (
              <div key={idx}>
                <p className="font-medium text-[#891e0d] mb-1">{row.name}</p>
                <ul className="list-disc pl-5 space-y-1 text-sm/6">
                  {row.benefits.map((benefit, bIdx) => (
                    <li key={bIdx}>{benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    ),
  }));

  return (
    <div className="bg-gradient-to-b from-[#fffdf5] to-[#fcf8ee] font-tamil">
      {/* Maharishi intro */}
      <MaharishiRibbonHeader />
      {/* Subtle divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="my-10 h-px bg-[#e6d6a8]/60" />
      </div>

      {/* Mobile */}
      <div className="block md:hidden mt-6 mb-4">
        <MobileAccordion items={accordionItems} />
      </div>
      {/* Training content */}
      <section className="hidden md:grid grid-cols-[240px_1fr] gap-6 max-w-7xl mx-auto px-6 pb-16 items-start">
        {/* Left sidebar — sticky nav */}
        <aside className="sticky top-20 self-start space-y-1.5">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#a07840] mb-3 px-1">
            பயிற்சிகள் வகைகள்
          </p>
          {payirchigal.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`
                  relative w-full rounded-lg px-4 py-3 pl-9 text-left text-sm
                  border transition-all duration-200 font-medium cursor-pointer
                  ${isActive
                    ? "bg-[#fff3d6] border-[#c97a2b] text-[#891e0d] shadow-sm"
                    : "bg-white/50 border-[#e8d4a8] text-[#5a3a1a] hover:bg-[#fff8e8] hover:border-[#c97a2b]/50"
                  }
                `}
              >
                <span className={`
                  absolute left-3 top-1/2 -translate-y-1/2
                  h-2 w-2 rounded-full transition-all duration-200
                  ${isActive ? "bg-[#c97a2b] scale-100" : "scale-0"}
                `} />
                {item.title}
              </button>
            );
          })}
        </aside>

        {/* Right content panel */}
        <div
          key={activeId}
          className="rounded-2xl border border-[#d6b27c]/70 bg-white/80
            shadow-[0_4px_24px_rgba(180,130,60,0.12)]
            px-8 py-8
            animate-fadeIn"
        >
          {/* Section title */}
          <h2 className="text-xl font-bold text-[#0B3A6E] pb-3 mb-5 border-b border-[#e6d4a8]">
            {active.title}
          </h2>

          {/* Section image */}
          <div className="flex justify-center mb-6">
            <Image
              src={active.image}
              alt={active.title}
              width={220}
              height={160}
              className="object-contain h-[140px]"
            />
          </div>

          {/* Table */}
          {active.type === "table" && active.tableData && (
            <div className="overflow-hidden rounded-xl border border-[#e6c97a]/60">
              <div className="grid grid-cols-2 bg-[#fff1c7] font-semibold text-[#891e0d] text-sm">
                <div className="p-3 border-r border-[#e6c97a]/60">பயிற்சிகள்</div>
                <div className="p-3">நன்மைகள்</div>
              </div>
              {active.tableData.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 border-t border-[#e6c97a]/40 ${i % 2 === 0 ? "bg-white" : "bg-[#fffdf5]"}`}
                >
                  <div className="p-4 font-medium text-[#1F3B5C] border-r border-[#e6c97a]/40 text-sm leading-relaxed">
                    {row.name}
                  </div>
                  <div className="p-4 text-[#1f3b5c] text-sm leading-relaxed space-y-1">
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
            <div className="max-w-prose text-[#1f3b5c] leading-[1.9]">
              {active.paragraph.blocks.map((text, i) =>
                text.trim() ? <p key={i} className="mb-3">{text}</p> : null
              )}
              {active.paragraph.bullets && active.paragraph.bullets.length > 0 && (
                <ul className="mt-4 pt-4 border-t border-[#e6d4a8] space-y-2">
                  {active.paragraph.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#c97a2b] shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
