export type ProgramType = "single" | "range";
export interface Program {
  id: string;
  title: string;

  startDate: string; // "16 January 2026"
  endDate?: string; // "16 January 2026"
  programType: ProgramType;

  day?: string; // "வெள்ளிக்கிழமை"
  days?: number[];

  time?: string; // "9.30 – 1.00"

  location?: {
    name?: string;
    address?: string;
    mapUrl?: string;
  };

  instructors?: string[]; // supports multiple instructors

  description?: string; // HTML allowed (basic)

  cancelled?: boolean;
  contacts?: string[];

  createdAt?: string; // firebase
}
