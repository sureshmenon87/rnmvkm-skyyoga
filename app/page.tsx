export default function Home() {
  return (
    <div className="bg-[#f4edc9] ">
      {/* Maharishi & Mandram */}
      {/* Changed items-end to items-center to move content higher in the section */}
      <section className="relative h-[500px] md:h-[600px] flex justify-center items-center overflow-hidden">
        {/* Maharishi */}
        {/* Adjusted bottom position to a lower value to reduce gap with the dome */}
        <img
          src="/maharishi.png"
          alt="Vethathiri Maharishi"
          className="absolute bottom-[140px] md:bottom-[300px] w-64 md:w-96 z-10 "
        />

        {/* Mandram */}
        <img
          src="/dome.png"
          alt="Radha Nagar SKY Mandram"
          className="relative w-[80%] md:w-[40%] z-20 "
        />
      </section>
    </div>
  );
}
