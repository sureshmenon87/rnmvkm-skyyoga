"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { getVisitorTotal } from "@/app/lib/visitorRead";

export default function Footer() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    getVisitorTotal()
      .then(setCount)
      .catch(() => setCount(null));
  }, []);

  return (
    <footer className="bg-[#0b3b5c] text-white text-center py-3 px-2 text-[10px] md:text-xs leading-relaxed opacity-90">
      {/* Disclaimer */}
      <p>
        © 2026 ராதா நகர் SKY யோக மன்றம். இது அதிகாரப்பூர்வ இணையதளம் அல்ல. தகவல்
        சேவைக்காக மட்டுமே.
      </p>

      {/* Visitor count */}
      <div className="mt-1 flex items-center justify-center gap-1 text-white/90">
        <Eye size={14} strokeWidth={1.5} aria-hidden />
        <span>
          மொத்த வருகைகள் :
          <span className="ml-1 font-medium">
            {count !== null ? count.toLocaleString("ta-IN") : "—"}
          </span>
        </span>
      </div>
    </footer>
  );
}
