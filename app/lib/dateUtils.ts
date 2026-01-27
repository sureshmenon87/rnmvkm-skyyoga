import { format, parseISO, isValid } from "date-fns";
import { TAMIL_DAYS } from "./tamilDays";
import { TAMIL_MONTHS } from "./tamilMonths";

/**
 * Returns Tamil weekday from ISO date (YYYY-MM-DD)
 */
export function getTamilDayFromISODate(isoDate: string): string {
  if (!isoDate) return "";

  const date = parseISO(isoDate);

  if (!isValid(date)) return "";

  return TAMIL_DAYS[date.getDay()];
}

export function formatDateToDDMMYYYY(isoDate: string): string {
  if (!isoDate) return "";

  const date = parseISO(isoDate);

  if (!isValid(date)) return "";

  return format(date, "dd/MM/yyyy");
}

/**
 * Returns current Tamil month name
 */
export function getCurrentTamilMonth(): string {
  const now = new Date();
  return TAMIL_MONTHS[now.getMonth()];
}

export function getCurrentMonthKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`; // "2026-01"
}

// lib/dateUtils.ts
export function getTamilMonthFromDate(dateStr: string): string {
  const d = new Date(dateStr);
  return TAMIL_MONTHS[d.getMonth()];
}
