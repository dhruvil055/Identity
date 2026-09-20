export interface FrameworkStage {
  id: "recalibrate" | "redefine" | "express" | "expand";
  stepNumber: string;
  title: string;
  shortDescription: string;
  meaning: string;
  learningOutcomes: string[];
  practicalTools: string[];
  imageSrc: string;
  relevantArticleSlug: string;
  recommendedNextStep: {
    label: string;
    href: string;
  };
}

export const REINVENTION_STAGES: FrameworkStage[] = [
  {
    id: "recalibrate",
    stepNumber: "01",
    title: "Recalibrate",
    shortDescription: "Clarify who you are beyond outdated roles and historical expectations.",
    meaning: "The quiet pause before outward action. An intentional audit of past identities, unchosen obligations, and obsolete personal narratives.",
    learningOutcomes: [
      "Distinguish between authentic desires vs. socially conditioned roles.",
      "Conduct a comprehensive energy and boundary audit.",
      "Establish non-negotiable personal sovereignty standards.",
    ],
    practicalTools: [
      "The Identity Alignment Matrix",
      "Historical Role Release Worksheet",
      "Core Values Calibration Diagnostic",
    ],
    imageSrc: "https://i-denty.com/wp-content/uploads/2026/05/framework-1.webp",
    relevantArticleSlug: "the-anatomy-of-recalibration",
    recommendedNextStep: {
      label: "Proceed to Stage 02: Redefine",
      href: "#redefine",
    },
  },
  {
    id: "redefine",
    stepNumber: "02",
    title: "Redefine",
    shortDescription: "Align daily routines, lifestyle standards, and strategic priorities.",
    meaning: "Translating internal recalibration into operational lifestyle architecture. Reinventing time, relationships, financial flow, and health rituals.",
    learningOutcomes: [
      "Design daily rhythms that protect deep focus, vitality, and emotional peace.",
      "Re-engineer professional presence to match evolving ambition.",
      "Eliminate decision fatigue through intentional lifestyle structuring.",
    ],
    practicalTools: [
      "The Lifestyle Architecture Blueprint",
      "Priority Filtering System",
      "Rhythm & Habit Protocol",
    ],
    imageSrc: "https://i-denty.com/wp-content/themes/i-denty/assets/images/framework-2.png",
    relevantArticleSlug: "lifestyle-as-an-operating-system",
    recommendedNextStep: {
      label: "Proceed to Stage 03: Express",
      href: "#express",
    },
  },
  {
    id: "express",
    stepNumber: "03",
    title: "Express",
    shortDescription: "Curate wardrobe, aesthetic presence, and physical environments.",
    meaning: "Bringing the inner shift into the physical world. Your attire, physical living spaces, and vocal presence become an authentic mirror of your current power.",
    learningOutcomes: [
      "Curate a timeless, elevated capsule wardrobe that communicates ease and authority.",
      "Align physical living and working spaces with clarity, light, and sensory beauty.",
      "Master embodied presence and non-verbal executive grace.",
    ],
    practicalTools: [
      "Wardrobe Curation Framework",
      "Spatial Harmonization Guide",
      "Signature Presence Palette",
    ],
    imageSrc: "https://i-denty.com/wp-content/themes/i-denty/assets/images/framework-3.png",
    relevantArticleSlug: "wardrobe-as-identity-architecture",
    recommendedNextStep: {
      label: "Proceed to Stage 04: Expand",
      href: "#expand",
    },
  },
  {
    id: "expand",
    stepNumber: "04",
    title: "Expand",
    shortDescription: "Connect, collaborate, and evolve within a high-caliber community.",
    meaning: "Stepping fully into the world as your renewed self. Sustaining momentum through high-trust peer circles, founder mentorship, and collaborative opportunities.",
    learningOutcomes: [
      "Engage in reciprocal, high-leverage peer mastermind circles.",
      "Access curated commercial partnerships and board/advisory opportunities.",
      "Maintain evolutionary momentum through recurring monthly reinforcement.",
    ],
    practicalTools: [
      "The Monthly Reinvention Session™ Access",
      "Curated Brand Match System",
      "Peer Mastermind Directory",
    ],
    imageSrc: "https://i-denty.com/wp-content/themes/i-denty/assets/images/framework-4.png",
    relevantArticleSlug: "the-power-of-aligned-circles",
    recommendedNextStep: {
      label: "Explore Membership Access",
      href: "/memberships",
    },
  },
];

export const FRAMEWORK_PRICING = {
  launchPrice: 149,
  standardPrice: 190,
  creditPolicy: "If you enroll in the standalone framework and subsequently join an Annual Membership, 100% of your $149 framework fee is credited directly toward your membership dues.",
  exampleAnnual: 228,
  exampleDifference: 79,
};
