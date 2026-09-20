export interface ExperienceItem {
  id: string;
  title: string;
  type: "Live Founder Session" | "Masterclass" | "Salon" | "Retreat Preview";
  format: "Live Digital" | "In-Person Event" | "On-Demand Access";
  dateFormatted: string;
  duration: string;
  host: string;
  shortDescription: string;
  whoItIsFor: string;
  outcomes: string[];
  prerequisites?: string;
  memberAccessLevel: "Open to All" | "Inner Circle & Private Member" | "Private Member Only";
  heroImage: string;
  relatedMembershipTier: "collective" | "inner-circle" | "private-member";
}

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: "monthly-session-april",
    title: "The Monthly Reinvention Session™: Designing Your Q2 Identity Roadmap",
    type: "Live Founder Session",
    format: "Live Digital",
    dateFormatted: "Thursday, April 16, 2026 • 6:00 PM CET / 12:00 PM EST",
    duration: "90 Minutes",
    host: "Eveliene, Founder",
    shortDescription: "Our signature monthly live strategic calibration. Real-time teaching on the Reinvention Framework, guided integration exercises, and live Q&A.",
    whoItIsFor: "Members navigating active transition who desire live founder access, strategic recalibration, and direct clarity on upcoming life moves.",
    outcomes: [
      "A structured 90-day transition milestone roadmap.",
      "Identification and release of current energy leaks and boundary compromises.",
      "Live strategic feedback on your personal reinvention challenges.",
    ],
    prerequisites: "Familiarity with Stage 01 (Recalibrate) is recommended.",
    memberAccessLevel: "Inner Circle & Private Member",
    heroImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
    relatedMembershipTier: "inner-circle",
  },
  {
    id: "presence-workshop",
    title: "Presence & Wardrobe Architecture: Curating Non-Verbal Authority",
    type: "Masterclass",
    format: "Live Digital",
    dateFormatted: "Wednesday, April 29, 2026 • 7:00 PM CET / 1:00 PM EST",
    duration: "75 Minutes",
    host: "I-denty Creative Team & Guest Stylist",
    shortDescription: "An intensive masterclass on translating internal transformation into visual and physical presence. Build a streamlined 18-piece capsule wardrobe that commands respect effortlessly.",
    whoItIsFor: "Women stepping into senior executive positions, board roles, public speaking, or redefining their visual signature after a personal chapter change.",
    outcomes: [
      "A personalized capsule wardrobe blueprint tailored to your lifestyle rhythm.",
      "Mastery of silhouette, fabric weight, and color palettes that enhance presence.",
      "Elimination of daily wardrobe friction and impulsive shopping patterns.",
    ],
    memberAccessLevel: "Open to All",
    heroImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
    relatedMembershipTier: "collective",
  },
  {
    id: "lifestyle-masterclass",
    title: "Spatial & Lifestyle Architecture: Designing the High-Capacity Sanctuary",
    type: "Masterclass",
    format: "Live Digital",
    dateFormatted: "Tuesday, May 12, 2026 • 6:30 PM CET / 12:30 PM EST",
    duration: "75 Minutes",
    host: "Eveliene & Interior Architectural Advisor",
    shortDescription: "How to audit, declutter, and re-anchor your physical home and work environments to support cognitive peace and continuous self-reinvention.",
    whoItIsFor: "Anyone who has recently relocated, moved through divorce or household restructuring, or feels their current space drains their vital energy.",
    outcomes: [
      "Step-by-step spatial recalibration checklist room by room.",
      "Sensory zoning strategies that separate restoration, creativity, and administrative work.",
      "Concrete techniques to anchor personal sovereignty in shared or newly acquired spaces.",
    ],
    memberAccessLevel: "Open to All",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    relatedMembershipTier: "collective",
  },
  {
    id: "private-salon-retreat",
    title: "Executive Sovereign Retreat: Intimate Lake Como Salon Preview",
    type: "Retreat Preview",
    format: "In-Person Event",
    dateFormatted: "September 18–22, 2026 • Lake Como, Italy",
    duration: "4 Days / 3 Nights",
    host: "Eveliene & Curated Guest Mentors",
    shortDescription: "An invitation-only, confidential gathering of 12 international women leaders for intensive strategic reinvention, restorative luxury, and deep peer resonance.",
    whoItIsFor: "Founders, C-suite leaders, and private members seeking immersive transformation in an extraordinary environment.",
    outcomes: [
      "Full 1-on-1 strategic reinvention roadmap with Founder Eveliene.",
      "Confidential mastermind dialogues on high-stakes life decisions.",
      "Lasting relationships with an intimate cohort of global peers.",
    ],
    memberAccessLevel: "Private Member Only",
    heroImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop",
    relatedMembershipTier: "private-member",
  },
];
