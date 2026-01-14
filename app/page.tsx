import Divider from "./components/Divider";

export default function Home() {
  const contactsCard1 = [
    {
      name: "உமையாள்புரம் அறிவுத் திருக்கோவில்",
      phone: " 9677232354, 9176902545",
    },
    {
      name: "M.G. நகர் தவமயம்",
      phone: "9791007520, 9444630594",
    },
    {
      name: "விஸ்வநாதன் தெரு தவமயம்",
      phone: "9962435097, 9841640623",
    },
    {
      name: "A.K. நகர் தவமயம்",
      phone: "9080897951, 9444898982",
    },
  ];
  const contactsCard2 = [
    {
      name: "வேதகிரி தெரு தவமயம்",
      phone: "9444754471, 6381708206",
    },
    {
      name: "ஸ்டேசன் ரோடு தவமயம்",
      phone: "9865377374",
    },
    {
      name: "தாம்பரம் மாநகர் அறிவுத் திருக்கோவில்",
      phone: "9884380823, 7397480619",
    },
    {
      name: "திருமுருகன் தெரு தவமயம்",
      phone: "9444261409, 8903853154",
    },
  ];
  const contactsCard3 = [
    {
      name: "தென்றல் நகர் தவமயம்",
      phone: "9840242267, 9962341133",
    },
    {
      name: "வ.உ.சி. தெரு தவமயம்",
      phone: "9444306556",
    },
    {
      name: "கண்டிகை தவமயம்",
      phone: "9080458416",
    },
    {
      name: "மூவரசம்பட்டு தவமயம்",
      phone: "7397265107, 8072226463",
    },
  ];
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
          நீங்களும் உங்கள் அன்புக் குடும்பமும் அருட்பொருளால் கருணையினால் உடல்
          நலம், நலன்வளம், உயர்பதவி, மென்மையான ஒங்கி வாழ்க வளமுடன்.
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
        <div className="bg-[#7b1c0d] text-white rounded-2xl w-full md:w-[260px] min-h-[220px] py-6 flex flex-col justify-start items-center shadow-xl">
          {contactsCard1.map((item, index) => (
            <div key={item.name} className="text-center">
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="mt-2 text-sm">📞 {item.phone}</p>

              {index !== contactsCard1.length - 1 && <Divider />}
            </div>
          ))}
        </div>

        {/* Card 2 */}
        <div className="bg-[#7b1c0d] text-white rounded-2xl w-full md:w-[260px] min-h-[220px] py-6 flex flex-col justify-start items-center shadow-xl">
          {contactsCard2.map((item, index) => (
            <div key={item.name} className="text-center">
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="mt-2 text-sm">📞 {item.phone}</p>

              {index !== contactsCard1.length - 1 && <Divider />}
            </div>
          ))}
        </div>
        {/* Card 3 */}
        <div className="bg-[#7b1c0d] text-white rounded-2xl w-full md:w-[260px] min-h-[220px] py-6 flex flex-col justify-start items-center shadow-xl">
          {contactsCard3.map((item, index) => (
            <div key={item.name} className="text-center">
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="mt-2 text-sm">📞 {item.phone}</p>

              {index !== contactsCard1.length - 1 && <Divider />}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
