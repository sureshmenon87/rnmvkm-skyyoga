type Row = {
  name: string;
  description: string;
};

export default function TrainingCardTable({
  title,
  rows,
}: {
  title: string;
  rows: Row[];
}) {
  return (
    <div className="bg-[#fdf6d5] rounded-2xl shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-[#7b1c0d] text-white text-center py-3 font-semibold">
        {title}
      </div>

      {/* Content */}
      <div className="divide-y divide-[#e8ddb5]">
        {rows.map((row, i) => (
          <div key={i} className="px-5 py-4 hover:bg-[#fffbe6] transition">
            <p className="font-semibold text-[#0f6b3a] mb-1">{row.name}</p>
            <p className="text-sm text-[#3a2a1a] leading-relaxed">
              {row.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
