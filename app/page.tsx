export default function Home() {
  return (
    <div className="bg-[#f4edc9] min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12">
        {/* Wave background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-700 to-blue-400"></div>
          <div className="absolute top-40 left-0 w-full h-32 bg-white rounded-t-[100%]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* Maharishi Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/maharishi.png"
              alt="Vethathiri Maharishi"
              className="w-64 md:w-80 drop-shadow-xl"
            />
          </div>

          {/* Mandram text */}
          <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
              ராதாநகர் மனவளக் கலை மன்றம்
            </h1>
            <p className="mt-2 text-lg text-blue-700">
              எளிய குண்டலினி யோக முறை
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
