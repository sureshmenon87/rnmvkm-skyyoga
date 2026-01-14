import Divider from "@/app/components/Divider";
import { Phone } from "lucide-react";

<Phone size={16} className="text-[#f5c542] drop-shadow-sm" />;

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
          <p className="mt-2 text-sm flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="#f5c542" // solid gold
              className="shrink-0"
            >
              <path
                d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1
      1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1
      1 0 011 1V21a1 1 0 01-1 1C10.07 22 2
      13.93 2 3a1 1 0 011-1h3.5a1 1 0
      011 1c0 1.25.2 2.46.57 3.59a1
      1 0 01-.25 1.01l-2.2 2.19z"
              />
            </svg>
            <span className="leading-none">&nbsp;{item.phone}</span>
          </p>

          {index !== items.length - 1 && <Divider className="my-5 mx-auto" />}
        </div>
      ))}
    </div>
  );
}
