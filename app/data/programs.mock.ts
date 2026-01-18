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
    programType: "range",

    startDate: "2026-01-01",
    endDate: "2026-01-12",
    description: `<h3>வகுப்பில் என்னென்ன தெரிந்து கொள்ளலாம்?</h3>
   <ol>
      <li>காய கற்ப பயிற்சி</li>
      <li>எளியமுறை உடற்பயிற்சிகள்</li>
      <li>ஆசனங்கள்</li>
      <li>தவங்கள்</li>
      <li>யோக தத்துவங்கள்</li>
    </ol>
  `,
  },
  {
    id: "new-year-01-01-2026",
    title: "உலக அமைதி தினம்",
    programType: "single",
    time: "காலை 4.00 முதல் 7.30 மணி வரை",

    startDate: "2026-01-01",
    description: `<h3>உலக அமைதி தினம்</h3>
   <ol>
      <li>சர்வ வசிய தன ஹர்சன சங்கல்பம்</li>
      <li>உலகநல வேள்வி</li>
      
    </ol>
  `,
  },
  {
    id: "மௌனம்-01-01-2026",
    title: "மௌனம் ",
    programType: "single",
    time: "காலை 10.30 முதல் மதியம் 4.00 மணி வரை",

    startDate: "2026-01-01",
  },
  {
    id: "மௌனம்-03-01-2026",
    title: "பௌர்ணமி மௌனம் ",
    programType: "single",
    time: "காலை 10.30 முதல் மதியம் 4.00 மணி வரை",

    startDate: "2026-01-03",
  },
  {
    id: "kaayakalpa-2026-01-11",
    programType: "single",
    title: "ஆசிரியர் திறன் மேம்பாட்டு பயிற்சி ",
    startDate: "2026-01-11",

    time: "காலை 10.00 முதல் மதியம் 4.00 மணி வரை",

    instructors: ["முதுநிலை பேராசிரியர். ஆர். சேர்மா செல்வராஜ்"],

    cancelled: false,
  },
  {
    id: "அமாவாசை-18-01-2026",
    title: "அமாவாசை  மௌனம் ",
    programType: "single",
    time: "காலை 10.30 முதல் மதியம் 4.00 மணி வரை",

    startDate: "2026-01-18",
  },
  {
    id: "அகத்தாய்வு-22-01-2026",
    title: "அகத்தாய்வு 3",
    programType: "range",

    startDate: "2026-01-22",
    endDate: "2026-01-23",
  },
];
