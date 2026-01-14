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
      <section className="relative h-[420px] md:h-[520px]  overflow-hidden">
        {/* Maharishi – anchored to section */}
        <img
          src="/maharishi.png"
          alt="Vethathiri Maharishi"
          className="absolute left-1/2 -translate-x-1/2 bottom-[180px] md:bottom-[220px] 
               w-64 md:w-96 z-10 animate-[divineGlow_4s_ease-in-out_infinite]"
        />

        {/* Mandram – anchored to ground */}
        <img
          src="/dome.png"
          alt="Radha Nagar SKY Mandram"
          className="absolute left-1/2 -translate-x-1/2 bottom-0 
               w-[70%] md:w-[50%] max-w-[900px] z-20"
          style={{ aspectRatio: "896 / 525" }}
        />
      </section>

      <div className="bg-[#f4edc9] text-center px-6 pb-10  ">
        <p className="text-[#0f6b3a] text-xl md:text-2xl font-semibold tracking-wide">
          அருட்தந்தை வேதாத்திரி மகரிஷி
        </p>

        <p className="mt-4 text-[#7b1c0d] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
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
      <section className="mt-10 mb-24 flex flex-col md:flex-row justify-center gap-20 px-6">
        {/* Card 1 */}

        <ContactCard items={contactsCard1} />

        {/* Card 2 */}
        <ContactCard items={contactsCard2} />
        {/* Card 3 */}
        <ContactCard items={contactsCard3} />
      </section>
    </div>
  );
}
