type DividerProps = {
  className?: string;
};

export default function Divider({ className = "" }: DividerProps) {
  return (
    <img
      src="/divider.png"
      alt="decorative divider"
      className={`
        mt-4 w-48 py-2
        brightness-125 contrast-125 saturate-150
        drop-shadow-[0_2px_6px_rgba(212,175,55,0.6)]
        ${className}
      `}
    />
  );
}
