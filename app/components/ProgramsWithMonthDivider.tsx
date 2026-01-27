import { getTamilMonthFromDate } from "@/app/lib/dateUtils";

type Props<T> = {
  items: T[];
  getDate: (item: T) => string;
  renderItem: (item: T) => React.ReactNode;
  dividerClassName?: string;
};

export default function ProgramsWithMonthDivider<T>({
  items,
  getDate,
  renderItem,
  dividerClassName = "",
}: Props<T>) {
  return (
    <>
      {items.map((item, index) => {
        const currentMonth = getTamilMonthFromDate(getDate(item));
        const prevMonth =
          index > 0 ? getTamilMonthFromDate(getDate(items[index - 1])) : null;

        const showDivider = index === 0 || currentMonth !== prevMonth;

        return (
          <div key={(item as any).id}>
            {showDivider && (
              <div
                className={`mt-8 mb-3 text-center font-semibold text-[#7A1E12] ${dividerClassName}`}
              >
                {currentMonth}
              </div>
            )}

            {renderItem(item)}
          </div>
        );
      })}
    </>
  );
}
