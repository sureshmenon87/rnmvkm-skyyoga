import { Program } from "../types/program";
export const TAMIL_DAYS = [
  "ஞாயிறு", // 0
  "திங்கள்", // 1
  "செவ்வாய்", // 2
  "புதன்", // 3
  "வியாழன்", // 4
  "வெள்ளி", // 5
  "சனி", // 6
];

export const mockPrograms: Program[] = [
  {
    id: "basic-yoga-01-01-2026",
    title: "யோக அடிப்படை பயிற்சி ",
    day: TAMIL_DAYS[0],
    description: "யோக அடிப்படை பயிற்சி ",
    date: "01-01-2026",
    time: "NA",
  },
  {
    id: "basic-yoga-02-01-2026",
    title: "யோக அடிப்படை பயிற்சி ",
    day: TAMIL_DAYS[1],
    description: "யோக அடிப்படை பயிற்சி ",
    date: "02-01-2026",
    time: "NA",
  },
  {
    id: "basic-yoga-03-01-2026",
    title: "யோக அடிப்படை பயிற்சி ",
    day: TAMIL_DAYS[2],
    description: "யோக அடிப்படை பயிற்சி ",
    date: "03-01-2026",
    time: "NA",
  },
  {
    id: "basic-yoga-04-01-2026",
    title: "யோக அடிப்படை பயிற்சி ",
    day: TAMIL_DAYS[3],
    description: "யோக அடிப்படை பயிற்சி ",
    date: "04-01-2026",
    time: "NA",
  },
  {
    id: "basic-yoga-05-01-2026",
    title: "யோக அடிப்படை பயிற்சி ",
    day: TAMIL_DAYS[4],
    description: "யோக அடிப்படை பயிற்சி ",
    date: "05-01-2026",
    time: "NA",
  },
  {
    id: "basic-yoga-06-01-2026",
    title: "யோக அடிப்படை பயிற்சி ",
    day: TAMIL_DAYS[5],
    description: "யோக அடிப்படை பயிற்சி ",
    date: "06-01-2026",
    time: "NA",
  },
  {
    id: "basic-yoga-07-01-2026",
    title: "யோக அடிப்படை பயிற்சி ",
    day: TAMIL_DAYS[6],
    description: "யோக அடிப்படை பயிற்சி ",
    date: "07-01-2026",
    time: "NA",
  },
  {
    id: "basic-yoga-08-01-2026",
    title: "யோக அடிப்படை பயிற்சி ",
    day: TAMIL_DAYS[6],
    description: "யோக அடிப்படை பயிற்சி ",
    date: "08-01-2026",
    time: "NA",
  },
  {
    id: "basic-yoga-09-01-2026",
    title: "யோக அடிப்படை பயிற்சி ",
    day: TAMIL_DAYS[0],
    description: "யோக அடிப்படை பயிற்சி ",
    date: "09-01-2026",
    time: "NA",
  },
  {
    id: "kaayakalpa-2026-01-04",

    title: "காயகல்ப பயிற்சி",
    day: TAMIL_DAYS[0],

    description:
      "நோய் எதிர்ப்பு சக்தியை அதிகரிக்க, இளமை காத்து நீண்டகாலம் வாழ உதவும் சித்தர்கள் கலை.",

    date: "2025-12-07",

    time: "காலை 9.45 முதல் மதியம் 1.00 மணி வரை",

    location: {
      name: `ராதா நகர் மனவளக்கலை மன்றம் அறக்கட்டளை`,
      address: `ராதா நகர் அறக்கட்டளை,  7, ஏழுமலை தெரு, ராதா நகர், குரோம்பேட்டை, சென்னை - 14`,
      mapUrl: "https://maps.app.goo.gl/79NXJfmpWS5KgV6YA",
    },
    instructors: ["முதுநிலை பேராசிரியர். ஆர். சேர்மா செல்வராஜ்"],

    contacts: ["9884374090", "9962206217"],

    cancelled: false,
  },
  {
    id: "kaayakalpa-2025-12-08",

    title: "காயகல்ப பயிற்சி",
    day: "ஞாயிறு",

    description: `நோய் எதிர்ப்பு சக்தியை அதிகரிக்க, இளமை காத்து நீண்டகாலம் வாழ உதவும் சித்தர்கள் கலை.நோய் எதிர்ப்பு சக்தியை அதிகரிக்க, இளமை காத்து நீண்டகாலம் வாழ உதவும் சித்தர்கள் கலை.`,

    date: "2025-12-07",

    time: "காலை 9.45 முதல் மதியம் 1.00 மணி வரை",

    location: {
      name: `ராதா நகர் மனவளக்கலை மன்றம் அறக்கட்டளை`,
      address: `ராதா நகர் அறக்கட்டளை,  7, ஏழுமலை தெரு, ராதா நகர், குரோம்பேட்டை, சென்னை - 14`,
      mapUrl: "https://maps.app.goo.gl/79NXJfmpWS5KgV6YA",
    },
    instructors: ["முதுநிலை பேராசிரியர். ஆர். சேர்மா செல்வராஜ்"],

    contacts: ["9884374090", "9962206217"],

    cancelled: false,
  },
];
