import Image from "next/image";

export default function MaharishiHeader() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-10 pb-14">
      <div className="relative overflow-hidden rounded-2xl border border-blue-200 bg-white">
        {/* Ribbon background */}
        <div className="absolute inset-0">
          <svg
            viewBox="0 0 1440 320"
            className="absolute top-0 left-0 w-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#1e5fa3"
              d="M0,96L80,112C160,128,320,160,480,154.7C640,149,800,107,960,106.7C1120,107,1280,149,1360,170.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 grid grid-cols-[200px_1fr] gap-6 p-8">
          {/* Maharishi Image */}
          <div className="flex justify-center">
            <Image
              src="/maharishi.png"
              alt="Maharishi"
              width={180}
              height={220}
              className="object-contain"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="text-blue-900 leading-relaxed">
            <h1 className="mb-4 text-2xl font-semibold text-maroon-800">
              மனவளக்கலை யோகா பயிற்சிகள்
            </h1>

            <p className="mb-3">
              பேராசிரியர் யோகி வேதாத்திரி மகரிஷி அவர்களால் உருவாக்கப்பட்ட இந்த
              பயிற்சிகள், உடல், மனம் மற்றும் உயிர்சக்தியை ஒருங்கிணைக்க
              உதவுகின்றன.
            </p>

            <p className="mb-3">
              வாழ்வு, சிந்தனை, ஒழுக்கம் மற்றும் உடல் ஆரோக்கியம் அனைத்திலும்
              சமநிலையை ஏற்படுத்தும்.
            </p>

            <p className="font-medium text-maroon-700">
              இந்தக் கற்றலும் பயிற்சியும் அதன் நன்மைகளும் :
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
