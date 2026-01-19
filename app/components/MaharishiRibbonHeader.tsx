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
          absolute right-0 top-1/2 -translate-y-1/2
             w-[600px] opacity-20 pointer-events-none       "
        priority
      />

      {/* Content container */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        {/* Maharishi + Text */}
        <div className="grid md:grid-cols-[220px_1fr] gap-6 items-startt">
          {/* Maharishi */}
          <div className="w-[200px] md:w-[220px] mx-auto md:mx-0">
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
            <h1
              className=" text-[#7a1f0e]
    font-bold
    text-xl md:text-3xl
  
    text-center md:text-left
    leading-snug
    mt-2 md:mt-6"
            >
              மனவளக்கலை யோகா பயிற்சிகள்
            </h1>

            <p className="mt-4 leading-relaxed text-[#1f3b5c] text-sm/6">
              பேரன்புடைய சகோதர சகோதரிகளே, <br />
              நோயில்லாமல் வாழ , கவலை இல்லாமல் மன அமைதியுடன் வாழ, தன்னம்பிக்கை
              வளர, ஞாபக சக்தி அதிகரிக்க உதவும் மனவளக்கலை யோகா பயிற்சிகள் கற்றுக்
              கொண்டு பயன்பெற அன்புடன் அழைக்கிறோம்.
            </p>

            <h2 className="mt-3 mb-3 font-semibold text-[#7A1F12]">
              இந்த கற்றுத்தரும் பயிற்சிகளும் அதன் நன்மைகளும் :
            </h2>

            <ul
              className="
  list-disc list-inside
  space-y-1
  text-[#1F3B5C]
  text-sm md:text-base
  leading-relaxed
"
            >
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
