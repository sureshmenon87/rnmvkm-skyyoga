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
    <main className="bg-gradient-to-b from-[#fffdf5] to-[#fcf8ee] font-tamil">
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
      <section className="hidden md:grid grid-cols-[260px_1fr] gap-8 max-w-7xl mx-auto px-6 pb-16 bg-[#FFFFEC]">
        {/* Left list */}
        <aside className="space-y-2">
          {payirchigal.map((item) => {
            const isActive = activeId === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`
          group relative w-full rounded-md px-4 py-3 pl-10 text-left
          border transition-colors duration-200 font-medium cursor-pointer
          ${
            isActive
              ? "bg-[#fff3d6] border-[#c97a2b] text-[#891e0d]"
              : "bg-transparent border-[#e0b97d] text-[#891e0d] hover:bg-[#fff8e8]"
          }
        `}
              >
                {/* Active dot */}
                <span
                  className={`
            absolute left-4 top-1/2 -translate-y-1/2
            h-2.5 w-2.5 rounded-full
            transition-opacity
            ${isActive ? "bg-[#c97a2b] opacity-100" : "opacity-0"}
          `}
                />

                {item.title}
              </button>
            );
          })}
        </aside>

        {/* Right content */}
        <div
          className="rounded-xl border border-[#e8c98a]/60 bg-[#fff9e6]
    px-8 py-7
    transition-opacity duration-300 ease-out
    animate-fadeIn"
        >
          {/* Section image */}
          <div className="flex justify-center mt-2 mb-2 md:mb-4">
            <Image
              src={active.image}
              alt={active.title}
              width={220}
              height={140}
              className="mx-auto mb-6 object-contain  h-[110px] sm:h-[120px] md:h-[160px]"
            />
          </div>

          {/* Table */}
          {active.type === "table" && active.tableData && (
            <div className="overflow-hidden rounded-lg border border-yellow-400/60">
              <div className="grid grid-cols-2 bg-[#fff1c7] font-semibold text-[#7a1f12]">
                <div className="p-3 text-[#891e0d]">பயிற்சிகள்</div>
                <div className="p-3 text-[#891e0d]">நன்மைகள்</div>
              </div>

              {active.tableData.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-2 border-t border-yellow-300/50"
                >
                  <div className="p-4 space-y-2 leading-relaxed font-medium text-[#1F3B5C]">
                    {row.name}
                  </div>
                  <div className="p-4 text-[#1f3b5c] space-y-1 leading-relaxed">
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
                <h3 className="mb-4 font-semibold text-[#7a1f12]">
                  {active.paragraph.heading}
                </h3>
              )}

              {active.paragraph.blocks.map((text, i) => (
                <p
                  key={i}
                  className="mx-auto max-w-prose text-[#1f3b5c] leading-[1.9]"
                >
                  {text}
                </p>
              ))}

              {active.paragraph.bullets && (
                <ul className="list-disc list-inside space-y-1 text-[#1F3B5C] leading-relaxed md:leading-loose">
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
