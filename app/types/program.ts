export interface Program {
  id: string;
  title: string;

  date: string; // "16 January 2026"
  day?: string; // "வெள்ளிக்கிழமை"

  time: string; // "9.30 – 1.00"

  location?: {
    name?: string;
    address?: string;
    mapUrl?: string;
  };

  instructors?: string[]; // supports multiple instructors

  description?: string; // HTML allowed (basic)

  cancelled?: boolean;

  createdAt?: string; // firebase
}
