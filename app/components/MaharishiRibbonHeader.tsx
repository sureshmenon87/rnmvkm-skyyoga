import Image from "next/image";

export default function MaharishiRibbonHeader() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Ribbon (background layer) */}
      <Image
        src="/ribbon.png"
        alt="Decorative ribbon"
        width={2000}
        height={300}
        className="
          absolute bottom-0 left-0 w-full
         h-[200px] md:h-[220px]
          object-cover
          opacity-[0.18] md:opacity-[0.22]
          pointer-events-none
        "
        priority
      />

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto px-6 pt-10 pb-20 md:pb-24">
        {/* Maharishi + Text */}
        <div className="grid grid-cols-[200px_1fr] gap-8 items-start">
          {/* Maharishi */}
          <div className="flex justify-center">
            <Image
              src="/maharishi.png"
              alt="Maharishi"
              width={210}
              height={260}
              className="object-contain md:scale-105"
              priority
            />
          </div>

          {/* Text */}
          <div>
            <h1 className="mb-5 text-xl md:text-2xl font-semibold text-[#7A1F12]">
              மனவளக்கலை யோகா பயிற்சிகள்
            </h1>

            <p className="mb-6 text-[#1F3B5C] leading-[1.9] max-w-3xl">
              பேரன்புடைய சகோதர சகோதரிகளே, <br />
              நோயில்லாமல் வாழ , கவலை இல்லாமல் மன அமைதியுடன் வாழ, தன்னம்பிக்கை
              வளர, ஞாபக சக்தி அதிகரிக்க உதவும் மனவளக்கலை யோகா பயிற்சிகள் கற்றுக்
              கொண்டு பயன்பெற அன்புடன் அழைக்கிறோம்.
            </p>

            <h2 className="mb-3 font-semibold text-[#7A1F12]">
              இந்த கற்றுத்தரும் பயிற்சிகளும் அதன் நன்மைகளும் :
            </h2>

            <ul className="list-disc list-inside space-y-1 text-[#1F3B5C]">
              <li>உடலுக்கு : எளியமுறை உடற்பயிற்சி</li>
              <li>உயிருக்கு : காய கல்ப பயிற்சி</li>
              <li>மனதுக்கு : தியானம் மற்றும் அகத்தாய்வு</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
