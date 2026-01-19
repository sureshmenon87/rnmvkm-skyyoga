export default function MandramDailySchedule() {
  return (
    <section className="mb-10">
      <div
        className="
          mx-auto max-w-5xl
          rounded-2xl
          border border-[#E6CFA8]
          bg-[#FFF8E8]
          px-6 py-8
        "
      >
        <h2 className="mb-8 text-center text-xl font-semibold text-[#7A1E12]">
          மன்றத்தின் தினசரி பயிற்சி நேரங்கள்
        </h2>

        <div className="grid gap-6 md:grid-cols-3 text-center text-[#1F3B5C]">
          {/* MORNING */}
          <div className="rounded-xl bg-[#FFFDF6] p-5 border border-[#F0DFC0]">
            <div className="mb-2 font-medium text-[#7A1E12]">காலை</div>
            <div className="text-lg font-semibold">5.45 – 7.15</div>
            <div className="mt-1 text-sm">(ஆண்கள்)</div>
            <div className="mt-1 text-sm">எல்லா நாட்களும்</div>
          </div>

          {/* AFTERNOON */}
          <div className="rounded-xl bg-[#FFFDF6] p-5 border border-[#F0DFC0]">
            <div className="mb-2 font-medium text-[#7A1E12]">பகல்</div>
            <div className="text-lg font-semibold">10.30 – 12.30</div>
            <div className="mt-1 text-sm">(பெண்கள்)</div>
            <div className="mt-1 text-sm">திங்கள் முதல் வெள்ளி வரை</div>
          </div>

          {/* EVENING */}
          <div className="rounded-xl bg-[#FFFDF6] p-5 border border-[#F0DFC0]">
            <div className="mb-2 font-medium text-[#7A1E12]">மாலை</div>
            <div className="text-lg font-semibold">6.00 – 7.30</div>
            <div className="mt-1 text-sm">(அனைவரும்)</div>
            <div className="mt-1 text-sm">திங்கள் முதல் சனி வரை</div>
          </div>
        </div>
      </div>
    </section>
  );
}
