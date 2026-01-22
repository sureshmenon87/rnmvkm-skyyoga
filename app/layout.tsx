import type { Metadata } from "next";
import "./globals.css";
import NavMenu from "./components/NavMenu";
import { Toaster } from "react-hot-toast";
import { Phone, Mail } from "lucide-react";
import VisitorTracker from "./components/VisitorTracker";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "குரோம்பேட்டை ராதா நகர் மனவளக்கலை மன்றம் அறக்கட்டளை",
  description: "குரோம்பேட்டை ராதா நகர் மனவளக்கலை மன்றம் அறக்கட்டளை",
  icons: {
    icon: "/logo-skyyoga.png", // browser tab
    apple: "/logo-skyyoga.png", // iOS
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#f4edc9] text-gray-900">
        <header className="bg-[#f6efc8]  bg-[#f4edc9] px-4 md:px-8 shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
          {/* Top slogan row */}
          <div className="max-w-7xl mx-auto px-4 pt-3">
            <div className="flex justify-between text-xs md:text-sm font-semibold text-[#0f6b3a]">
              <span>வாழ்க வையகம்</span>
              <span>வாழ்க வளமுடன்</span>
            </div>
          </div>

          {/* Logo + Title block */}
          <div
            className="max-w-7xl mx-auto px-4 py-3 md:py-4
                  grid grid-cols-1 md:grid-cols-[auto_1fr_auto]
                  items-center gap-3 md:gap-4 text-center md:text-left"
          >
            {/* Left Logo */}
            <div className="flex justify-center md:justify-start">
              <img
                src="/logo-wcsc.png"
                alt="WCSC SKY"
                className="h-16 md:h-[90px] w-auto flex-shrink-0
                   drop-shadow-[0_4px_6px_rgba(0,0,0,0.25)]"
              />
            </div>

            {/* Center Text */}
            <div className="space-y-2 text-center">
              <h1 className="text-lg md:text-2xl font-bold text-[#0f6b3a]">
                குரு வேதாத்திரி மகரிஷி அவர்களின் அருளாசியுடன்
              </h1>

              <h2 className="text-[11px] md:text-lg font-semibold text-[#1f3b6d]">
                குரோம்பேட்டை ராதா நகர் மனவளக்கலை மன்றம் அறக்கட்டளை
              </h2>

              <p className="text-sm md:text-sm text-[#1f3b6d]">
                7, ஏழுமலை தெரு, ராதா நகர், குரோம்பேட்டை, சென்னை – 600 044.
              </p>

              <div
                className="
    text-xs md:text-sm text-[#1f3b6d]
    flex flex-col md:flex-row
    items-center
    gap-1 md:gap-6
    justify-center
  "
              >
                {/* Phone */}
                <div className="flex items-center gap-2">
                  <Phone size={14} strokeWidth={1.8} />
                  <span>9884374090, 9962206217</span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-2">
                  <Mail size={14} strokeWidth={1.8} />
                  <span>skychrompet@yahoo.com</span>
                </div>
              </div>
            </div>

            {/* Right Logo */}
            <div className="flex justify-center md:justify-end">
              <img
                src="/logo-skyyoga.png"
                alt="SKY Yoga"
                className="h-14 md:h-[80px] w-auto flex-shrink-0
                   drop-shadow-[0_4px_6px_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>
        </header>
        {/* Sticky nav ONLY */}
        <div className="sticky top-0 z-50 bg-[#f7f0c8]">
          <NavMenu />
        </div>

        <main className="flex-1 bg-gradient-to-b from-[#fffdf5] to-[#fcf8ee] border-t border-[#efe6c8]">
          {" "}
          <VisitorTracker />
          {children}
        </main>
        <Toaster
          position="bottom-center"
          toastOptions={{
            duration: 2500,
            style: {
              background: "#1f2937", // dark gray
              color: "#fff",
              fontSize: "14px",
            },
          }}
        />
        {/* Bottom vignette */}
        <div className="relative w-full h-56 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.22), rgba(0,0,0,0.08), transparent)",
            }}
          />
        </div>

        <Footer></Footer>
      </body>
    </html>
  );
}
