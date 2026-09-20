export interface MembershipTier {
  id: "collective" | "inner-circle" | "private-member";
  name: string;
  tagline: string;
  badge?: string;
  isPopular?: boolean;
  priceMonthly: number;
  priceAnnual: number;
  priceAnnualPerMonth: number;
  idealFor: string;
  description: string;
  keyHighlights: string[];
  featuresList: string[];
  ctaText: string;
  ctaHref: string;
}

export interface ComparisonCategory {
  categoryName: string;
  features: {
    name: string;
    description?: string;
    collective: boolean | string;
    innerCircle: boolean | string;
    privateMember: boolean | string;
  }[];
}

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: "collective",
    name: "The Collective",
    tagline: "Foundational access & self-paced evolution",
    priceMonthly: 24,
    priceAnnual: 228,
    priceAnnualPerMonth: 19,
    idealFor: "Women establishing clarity, lifestyle alignment, and seeking the structured foundation.",
    description: "Full self-directed immersion in the Reinvention Framework, digital community, and editorial ecosystem.",
    keyHighlights: [
      "Complete Reinvention Framework™ included",
      "Full I-denty Journal archive & curated edits",
      "Replays of Monthly Reinvention Sessions",
      "Curated brand partner perks & marketplace access",
    ],
    featuresList: [
      "Access to full Reinvention Framework™",
      "Ability to revisit the framework anytime",
      "Curated lifestyle & fashion ecosystem",
      "Brand partner perks and member privileges",
      "Private digital community access",
      "Monthly Reinvention Session™ audio/video replays",
    ],
    ctaText: "Begin In The Collective",
    ctaHref: "/contact?tier=collective",
  },
  {
    id: "inner-circle",
    name: "The Inner Circle",
    tagline: "Guided expansion & live founder integration",
    badge: "Most Chosen",
    isPopular: true,
    priceMonthly: 59,
    priceAnnual: 588,
    priceAnnualPerMonth: 49,
    idealFor: "Women seeking direct monthly guidance, live group interaction, and elevated peer connection.",
    description: "Deepens your journey through real-time founder sessions, live strategic discussions, and priority access.",
    keyHighlights: [
      "Includes everything in The Collective",
      "LIVE access to The Monthly Reinvention Session™ with Founder",
      "Guided monthly reflection & interactive Q&A",
      "Smaller peer discussion breakouts",
      "Priority invitations to live experiences & retreats",
    ],
    featuresList: [
      "Everything in The Collective included",
      "Live Monthly Reinvention Sessions with Founder",
      "Live interactive Q&A & strategic coaching",
      "Curated guest expert conversations",
      "Priority RSVP for regional salons & workshops",
      "Structured quarterly recalibration milestones",
    ],
    ctaText: "Join The Inner Circle",
    ctaHref: "/contact?tier=inner-circle",
  },
  {
    id: "private-member",
    name: "Private Member",
    tagline: "High-touch transformation & executive intimacy",
    badge: "Limited Capacity",
    priceMonthly: 149,
    priceAnnual: 1548,
    priceAnnualPerMonth: 129,
    idealFor: "Senior executives, founders, and high-capacity leaders desiring high-touch access and tailored alignment.",
    description: "Intimate peer salons, exclusive brand capsule access, and eligibility for direct bespoke consultation.",
    keyHighlights: [
      "Includes everything in The Inner Circle",
      "Intimate, confidential executive salon cohorts",
      "Private roundtable advisory sessions",
      "Exclusive first-look brand capsule collaborations",
      "Eligibility for 1:1 strategic consultation advisory",
    ],
    featuresList: [
      "Everything in The Inner Circle included",
      "Intimate small-group executive cohorts (max 12)",
      "Invitation-only private retreats & dinners",
      "Dedicated concierge support",
      "Priority eligibility for 1:1 Founder Consultation",
      "Custom brand gifting & bespoke capsule access",
    ],
    ctaText: "Request Private Access",
    ctaHref: "/contact?tier=private-member",
  },
];

export const MEMBERSHIP_COMPARISON: ComparisonCategory[] = [
  {
    categoryName: "Core Platform & Media",
    features: [
      {
        name: "I-denty Editorial Journal",
        description: "Unlimited access to all deep-dive editorial essays, case studies, and guides.",
        collective: true,
        innerCircle: true,
        privateMember: true,
      },
      {
        name: "Curated Lifestyle & Fashion Edits",
        description: "Seasonal capsule wardrobes and aesthetic living recommendations.",
        collective: true,
        innerCircle: true,
        privateMember: true,
      },
      {
        name: "Brand Partner Perks & Curated Offers",
        description: "Exclusive member-only rates with aligned luxury and wellness partners.",
        collective: "Standard Perks",
        innerCircle: "Priority Perks",
        privateMember: "VIP Bespoke Access",
      },
    ],
  },
  {
    categoryName: "Reinvention Framework™",
    features: [
      {
        name: "Complete Framework Operating System",
        description: "All 4 pillars: Recalibrate, Redefine, Express, Expand.",
        collective: "Included ($190 value)",
        innerCircle: "Included ($190 value)",
        privateMember: "Included ($190 value)",
      },
      {
        name: "Unlimited Lifetime Re-Enrollment",
        description: "Return and repeat the framework as your life stages evolve.",
        collective: true,
        innerCircle: true,
        privateMember: true,
      },
      {
        name: "Digital Workbooks & Calibration Tools",
        description: "Interactive tools, exercises, and boundary audit sheets.",
        collective: true,
        innerCircle: true,
        privateMember: true,
      },
    ],
  },
  {
    categoryName: "Live Founder Guidance & Sessions",
    features: [
      {
        name: "The Monthly Reinvention Session™",
        description: "Founder-led 90-minute monthly strategic growth session.",
        collective: "On-demand Replays",
        innerCircle: "Live + Replays",
        privateMember: "Live + Replays",
      },
      {
        name: "Live Interactive Q&A with Founder",
        description: "Submit personal questions and receive live strategic counsel.",
        collective: false,
        innerCircle: true,
        privateMember: "Priority Direct Q&A",
      },
      {
        name: "Curated Expert Guest Masterclasses",
        description: "Visiting specialists in functional medicine, wealth architecture, and style.",
        collective: "Select Replays",
        innerCircle: "Live Access",
        privateMember: "Live Access + Recordings",
      },
    ],
  },
  {
    categoryName: "Community & Circles",
    features: [
      {
        name: "Private Digital Community Platform",
        description: "Ad-free, spam-free sanctuary for aligned discussion.",
        collective: true,
        innerCircle: true,
        privateMember: true,
      },
      {
        name: "Facilitated Peer Discussion Groups",
        description: "Small breakout circles organized by transition focus.",
        collective: false,
        innerCircle: true,
        privateMember: true,
      },
      {
        name: "Executive Confidential Salon Cohorts",
        description: "Capped at 12 members for high-level personal & professional peer counsel.",
        collective: false,
        innerCircle: false,
        privateMember: "Exclusive to Tier",
      },
    ],
  },
  {
    categoryName: "Events & Bespoke Advisory",
    features: [
      {
        name: "Priority Access to Regional Events & Salons",
        collective: "Standard Window",
        innerCircle: "48-Hour Priority",
        privateMember: "Guaranteed VIP Seat",
      },
      {
        name: "Annual In-Person International Retreats",
        collective: "Waitlist Only",
        innerCircle: "Priority Access",
        privateMember: "First Invitation",
      },
      {
        name: "Eligibility for 1:1 Strategic Advisory",
        description: "Direct hourly consultation with Founder Eveliene (from $500/hr).",
        collective: false,
        innerCircle: "Application based",
        privateMember: "Guaranteed Availability",
      },
    ],
  },
];

export const CONSULTATION_DETAILS = {
  title: "Private 1:1 Strategic Consultation",
  subtitle: "Standalone Advisory Option",
  rate: "From $500 per hour",
  availability: "Extremely limited capacity (maximum 4 client advisory slots per quarter).",
  scope: [
    "High-stakes career transition strategy and executive departure roadmaps.",
    "Comprehensive post-divorce identity, lifestyle, and lifestyle infrastructure design.",
    "Personal brand and executive presence realignment for international leaders.",
    "Bespoke wardrobe and environmental spatial curation.",
  ],
};
