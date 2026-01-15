export default function MaharishiRibbonHeader() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#FFFFED" }}
    >
      {/* Maharishi on LEFT */}
      <div className="relative z-10 flex justify-start px-6 md:px-12 pt-8">
        <img
          src="/maharishi.png"
          alt="Maharishi"
          className="h-[140px] md:h-[180px] object-contain"
        />
      </div>

      {/* Ribbon beneath Maharishi */}
      <div className="absolute bottom-0 left-0 w-full">
        <img
          src="/ribbon.png"
          alt="Decorative ribbon"
          className="w-full object-cover"
        />
      </div>

      {/* Spacer to make room for ribbon */}
      <div className="h-[120px] md:h-[5px]" />
    </section>
  );
}
