import ContactCard from "./components/ContactCard";
import Divider from "./components/Divider";

export default function Home() {
  const contactsCard1 = [
    {
      title: "உமையாள்புரம் அறிவுத் திருக்கோவில்",
      phone: " 9677232354, 9176902545",
    },
    {
      title: "M.G. நகர் தவமயம்",
      phone: "9791007520, 9444630594",
    },
    {
      title: "விஸ்வநாதன் தெரு தவமயம்",
      phone: "9962435097, 9841640623",
    },
    {
      title: "A.K. நகர் தவமயம்",
      phone: "9080897951, 9444898982",
    },
  ];
  const contactsCard2 = [
    {
      title: "வேதகிரி தெரு தவமயம்",
      phone: "9444754471, 6381708206",
    },
    {
      title: "ஸ்டேசன் ரோடு தவமயம்",
      phone: "9865377374",
    },
    {
      title: "தாம்பரம் மாநகர் அறிவுத் திருக்கோவில்",
      phone: "9884380823, 7397480619",
    },
    {
      title: "திருமுருகன் தெரு தவமயம்",
      phone: "9444261409, 8903853154",
    },
  ];
  const contactsCard3 = [
    {
      title: "தென்றல் நகர் தவமயம்",
      phone: "9840242267, 9962341133",
    },
    {
      title: "வ.உ.சி. தெரு தவமயம்",
      phone: "9444306556",
    },
    {
      title: "கண்டிகை தவமயம்",
      phone: "9080458416",
    },
    {
      title: "மூவரசம்பட்டு தவமயம்",
      phone: "7397265107, 8072226463",
    },
  ];

  const blessingQuote = `நீங்களும் உங்கள் அன்புக் குடும்பமும் அருட்பேராற்றல் கருணையினால் உடல் நலம், நீள் ஆயுள்,
நிறை செல்வம், உயர் புகழ், மெய்ஞ்ஞானம் ஓங்கி வாழ்க வளமுடன்`;
  return (
    <div className="bg-[#f4edc9] ">
      {/* Maharishi & Mandram */}
      <section className="relative h-[300px] md:h-[520px]  overflow-hidden">
        {/* Maharishi – anchored to section */}
        <img
          src="/maharishi.png"
          alt="Vethathiri Maharishi"
          className="absolute left-1/2 -translate-x-1/2 bottom-[70px] md:bottom-[220px] 
               w-64 md:w-96 z-10 animate-[divineGlow_4s_ease-in-out_infinite] filter
    drop-shadow-[0_6px_20px_rgba(0,0,0,0.18)"
        />

        {/* Mandram – anchored to ground */}
        <img
          src="/dome.png"
          alt="Radha Nagar SKY Mandram"
          className="absolute left-1/2 -translate-x-1/2 bottom-0 
               w-[70%] md:w-[50%] max-w-[900px] z-20  drop-shadow-[0_10px_25px_rgba(0,0,0,0.25)] rounded bg-[radial-gradient(circle_at_center,rgba(255,215,140,0.45),rgba(255,215,140,0.15),transparent_70%)] blur-1xl"
          style={{ aspectRatio: "896 / 525" }}
        />
      </section>

      <div className="bg-[#f4edc9] text-center px-6 pb-10  ">
        <p className="text-[#0f6b3a] text-xl md:text-2xl font-semibold tracking-wide">
          அருட்தந்தை வேதாத்திரி மகரிஷி
        </p>

        <p className="mt-4 text-[#7b1c0d] text-sm text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          {blessingQuote}
        </p>
      </div>

      {/* Decorative divider */}

      <div className="flex justify-center my-10">
        <img
          src="/divider.png"
          alt="decorative divider"
          className="
    w-[260px] md:w-[420px]
    brightness-125
    contrast-125
    saturate-150
    drop-shadow-[0_2px_6px_rgba(212,175,55,0.6)]
  "
        />
      </div>
      {/* Contact Cards */}
      <section className="mt-10 mb-12 md:mb-16 px-6">
        <div
          className="
      mx-auto
      max-w-[900px]       
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      gap-6 md:gap-8
      justify-items-center
    "
        >
          <ContactCard items={contactsCard1} />
          <ContactCard items={contactsCard2} />
          <ContactCard items={contactsCard3} />
        </div>
      </section>
    </div>
  );
}
