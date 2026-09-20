export interface MarketGapItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconSrc: string;
  suggestedPath: string;
}

export interface PlatformTimelineItem {
  year: string;
  title: string;
  description: string;
}

export const BRAND_CONFIG = {
  name: "I-denty",
  tagline: "Define your Identity. Elevate your presence",
  heroTitle: "The identity-led lifestyle ecosystem for women reinventing their next chapter.",
  heroSubtitle:
    "I-denty is a premium membership platform integrating identity development, curated commerce, and community — designed for women navigating life transitions and evolving into their next chapter with clarity and confidence.",
  logoUrl: "https://i-denty.com/wp-content/uploads/2026/09/I-denty_black-e1788333777782.png",
  logoWhiteUrl: "https://i-denty.com/wp-content/uploads/2026/09/I-denty_black-e1788333777782.png", // styled via CSS filter invert in dark modes
  faviconUrl: "https://i-denty.com/wp-content/uploads/2026/03/logo-2.png",
  heroVideoUrl: "https://i-denty.com/wp-content/themes/i-denty/assets/video/hero-section-video.mp4",
  shiftVideoUrl: "https://i-denty.com/wp-content/themes/i-denty/assets/video/updatebn.mp4",
  communityVideoUrl: "https://i-denty.com/wp-content/themes/i-denty/assets/video/join-community.mp4",
  socials: {
    instagram: "https://www.instagram.com/identy.eveliene/",
    linkedin: "https://www.linkedin.com/company/i-denty",
    facebook: "https://www.facebook.com/profile.php?id=61556572051053",
    tiktok: "https://www.tiktok.com/@i_denty?_r=1&_t=ZS-95NjYDY1GLv",
    youtube: "https://www.youtube.com/@I-denty",
  },
};

export const MARKET_GAP_ITEMS: MarketGapItem[] = [
  {
    id: "divorce",
    title: "Divorce & Relationship Shifts",
    subtitle: "Rebuilding personal sovereignty",
    description: "Untangling identity from past partnerships, redefining financial independence, and architecting an autonomous, fulfilling life standard.",
    iconSrc: "https://i-denty.com/wp-content/themes/i-denty/assets/images/divorce.png",
    suggestedPath: "/reinvention#recalibrate",
  },
  {
    id: "career-shifts",
    title: "Executive & Career Pivots",
    subtitle: "Aligning influence with inner purpose",
    description: "Stepping away from hollow prestige to build values-aligned ventures, strategic advisory roles, and presence that reflects your true authority.",
    iconSrc: "https://i-denty.com/wp-content/themes/i-denty/assets/images/career-shifts.png",
    suggestedPath: "/reinvention#redefine",
  },
  {
    id: "relocation",
    title: "Global Relocation & New Beginnings",
    subtitle: "Anchoring self in new geographies",
    description: "Re-establishing lifestyle rhythm, curated environments, and a high-caliber peer network across new cities and international hubs.",
    iconSrc: "https://i-denty.com/wp-content/themes/i-denty/assets/images/relocation.png",
    suggestedPath: "/reinvention#express",
  },
  {
    id: "personal-recalibration",
    title: "Personal Recalibration",
    subtitle: "Evolving beyond outdated identities",
    description: "When external success feels misaligned with internal truth — creating space to clarify standards, edit commitments, and expand authentically.",
    iconSrc: "https://i-denty.com/wp-content/themes/i-denty/assets/images/personal-recalibration.png",
    suggestedPath: "/reinvention#expand",
  },
];

export const FOUNDER_INFO = {
  name: "Eveliene",
  role: "Founder & Creative Director",
  headline: "Where corporate governance meets lived personal reinvention.",
  quote: "“Reinvention is not starting over. It is recalibrating intentionally from a position of experience.”",
  paragraphs: [
    "I-denty was founded by a globally recognized, multi-award-winning corporate leader and keynote speaker with over 20 years of experience building teams and infrastructure across regions.",
    "Recognized among Asia's Woman Leaders, Global Women Power Leaders, and Asia's Most Influential HR Leaders, she brings operational discipline and strategic clarity to identity-led transformation.",
    "After navigating divorce, career disruption, and rebuilding life abroad as an expat mother, she created the ecosystem she once needed — now structured for global scale.",
  ],
  awards: [
    "Asia's Woman Leaders Award",
    "Global Women Power Leaders",
    "Asia's Most Influential HR Leaders",
  ],
  imageMain: "https://i-denty.com/wp-content/themes/i-denty/assets/images/Rectangle%20773.png",
  imageAccent: "https://i-denty.com/wp-content/themes/i-denty/assets/images/Rectangle%20774.png",
};

export const PLATFORM_TIMELINE: PlatformTimelineItem[] = [
  {
    year: "2026",
    title: "Identity & Expression Foundation",
    description: "Launch of the proprietary Reinvention Framework, digital community salons, and curated seasonal edits.",
  },
  {
    year: "2026 - 2027",
    title: "Multi-Category Lifestyle Expansion",
    description: "Collaborations with luxury brand partners, verified wellness practitioners, and intimate executive retreats.",
  },
  {
    year: "Future Horizon",
    title: "Global International Footprint",
    description: "Physical member clubhouses, international summit experiences, and deeper algorithmic commerce integration.",
  },
];
