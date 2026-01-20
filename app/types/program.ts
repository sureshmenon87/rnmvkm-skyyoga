export type ProgramType = "single" | "range";

export interface Program {
  id: string; // Firestore doc id
  title: string;

  programType: ProgramType;

  // Dates (ISO format ONLY)
  startDate: string; // "2026-01-16"
  endDate?: string; // "2026-01-28"

  time?: string; // "காலை 10.00 முதல் மதியம் 4.00 மணி வரை"

  location?: {
    name?: string;
    address?: string;
    mapUrl?: string;
  };

  instructors?: string[];

  description?: string; // HTML (basic tags only)

  contacts?: string[];

  cancelled?: boolean;

  createdAt?: any; // Firebase Timestamp
}
