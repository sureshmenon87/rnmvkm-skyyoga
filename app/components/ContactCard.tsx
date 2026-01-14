import Divider from "@/app/components/Divider";

type ContactItem = {
  title: string;
  phone: string;
};

type ContactCardProps = {
  header?: string;
  items: ContactItem[];
};

export default function ContactCard({ header, items }: ContactCardProps) {
  return (
    <div
      className=" bg-[#7b1c0d]
    text-white
    rounded-2xl
    w-full
    max-w-[280px]
    md:max-w-[260px]
    min-h-[220px]
    py-6
    px-4
    shadow-xl
    transition
    duration-300
    hover:scale-[1.03]
    hover:shadow-2xl"
    >
      {header && (
        <p className="text-sm font-semibold mb-3 text-[#ffe9b3] tracking-wide">
          {header}
        </p>
      )}

      {items.map((item, index) => (
        <div key={item.title} className="text-center w-full">
          <p className="text-sm font-semibold">{item.title}</p>
          <p className="mt-2 text-sm">📞 {item.phone}</p>

          {index !== items.length - 1 && <Divider className="my-5 mx-auto" />}
        </div>
      ))}
    </div>
  );
}
