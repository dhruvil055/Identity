export interface JournalArticle {
  slug: string;
  title: string;
  category: "Identity" | "Expansion" | "Lifestyle" | "Style" | "Structure";
  readTime: string;
  publishDate: string;
  excerpt: string;
  heroImage: string;
  author: string;
  content: string[];
  keyQuote?: string;
  relatedFrameworkStage: "recalibrate" | "redefine" | "express" | "expand";
  relatedExperienceId: string;
  tags: string[];
}

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    slug: "the-anatomy-of-recalibration",
    title: "The Anatomy of Recalibration: Why True Transformation Begins in Silence",
    category: "Identity",
    readTime: "6 min read",
    publishDate: "March 18, 2026",
    excerpt: "Most conversations about reinvention glorify the dramatic reveal. But durable personal sovereignty is forged during the unobserved pause.",
    heroImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    author: "Eveliene, Founder",
    keyQuote: "“Reinvention is not a performance of busyness; it is the quiet uncoupling from standards that were never yours to carry.”",
    relatedFrameworkStage: "recalibrate",
    relatedExperienceId: "monthly-session-april",
    tags: ["Recalibration", "Self-Sovereignty", "Life Transitions"],
    content: [
      "We live in a culture obsessed with momentum. When an executive steps down, when a long-standing marriage dissolves, or when a geographic relocation uproots our familiar landscape, the immediate reflex is to fill the vacuum with rapid replacement.",
      "New titles. New commitments. New physical targets. Yet across two decades of observing high-performing women in inflection points, a consistent truth emerges: speed during transition is usually a defense mechanism against grief and genuine self-inquiry.",
      "Recalibration is distinct from stagnation. Stagnation is paralysis born of fear; recalibration is strategic stillness. It requires you to sit in the space between who you were and who you are becoming, resisting the impulse to prematurely define the outcome.",
      "Inside the I-denty Reinvention Framework, the Recalibrate phase asks three piercing questions: What standards am I currently maintaining that drain my vital energy? Whose expectations dictated my last decade of choices? And what would I choose if no audience were watching?",
      "Only when the residual noise of outdated roles clears can intentional design begin.",
    ],
  },
  {
    slug: "lifestyle-as-an-operating-system",
    title: "Lifestyle as an Operating System: How High-Capacity Women Prevent Friction",
    category: "Structure",
    readTime: "8 min read",
    publishDate: "March 10, 2026",
    excerpt: "Discipline without architecture leads to burnout. Structuring your calendar, boundaries, and energy reserves as a cohesive lifestyle OS.",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    author: "Eveliene, Founder",
    keyQuote: "“When your environment and daily rhythms are misaligned with your aspirations, every day requires ten times the willpower.”",
    relatedFrameworkStage: "redefine",
    relatedExperienceId: "lifestyle-masterclass",
    tags: ["Structure", "Routines", "Energy Management"],
    content: [
      "High-capacity women rarely fail due to a lack of capability. They fail due to structural friction — a chronic mismatch between the demands of their schedule and the biological realities of their nervous system.",
      "When we look at elite organizations, infrastructure precedes execution. Yet in our personal lives, we often expect supreme creativity, emotional warmth, and strategic sharpness while living inside chaotic, ad-hoc schedules.",
      "Redefining your lifestyle operating system begins with energy zoning. Not all hours are equal. A single morning hour of undisturbed contemplation yields more strategic clarity than an entire afternoon spent reacting to notifications.",
      "By establishing structural non-negotiables — such as quiet mornings, protected thinking afternoons, and evening restoration rituals — you insulate your reinvention from the entropy of everyday demands.",
    ],
  },
  {
    slug: "wardrobe-as-identity-architecture",
    title: "Wardrobe as Identity Architecture: Dressing for the Next Chapter",
    category: "Style",
    readTime: "5 min read",
    publishDate: "March 02, 2026",
    excerpt: "Your clothing is not superficial ornamentation; it is the non-verbal declaration of your current self-respect, standards, and authority.",
    heroImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
    author: "I-denty Style Editorial",
    keyQuote: "“What you wear either anchors you to who you used to be, or creates permission for who you are stepping into.”",
    relatedFrameworkStage: "express",
    relatedExperienceId: "presence-workshop",
    tags: ["Style", "Presence", "Capsule Wardrobe"],
    content: [
      "Open your closet. What do you see? For many women undergoing major transitions, the wardrobe is a museum of past identities. Corporate suits from a career path that has concluded; evening wear selected to please a former partner; garments purchased for an imaginary life that never materialized.",
      "Clothing acts as embodied cognition. When you put on fabric cut with precision, in materials that breathe and move with natural weight, your posture shifts. Your cadence slows. Your vocal tone drops half an octave.",
      "Expression is the third pillar of the I-denty journey because outer curation accelerates inner alignment. Rather than accumulating trendy pieces, we advocate for radical curation: 15 to 20 exceptional garments that interact effortlessly.",
      "When getting dressed takes less than three minutes and every piece communicates calm authority, mental bandwidth is liberated for what truly matters.",
    ],
  },
  {
    slug: "the-power-of-aligned-circles",
    title: "The Power of Aligned Circles: Escaping the Loneliness of Growth",
    category: "Expansion",
    readTime: "7 min read",
    publishDate: "February 24, 2026",
    excerpt: "Why personal reinvention often threatens existing friendships, and how finding an elevated peer community preserves momentum.",
    heroImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
    author: "Eveliene, Founder",
    keyQuote: "“You cannot ask people who are invested in your old identity to validate your new one.”",
    relatedFrameworkStage: "expand",
    relatedExperienceId: "monthly-session-april",
    tags: ["Community", "Expansion", "Peer Networks"],
    content: [
      "One of the least discussed aspects of intentional reinvention is the relational friction it creates. When you begin to establish firm boundaries, decline hollow social invitations, or redefine your ambitions, people around you may feel subtly indicted.",
      "This is not malicious; human beings naturally seek equilibrium. Your old habits and predictable patterns were comforting to those who knew your previous version.",
      "Attempting to reinvent in isolation is punishing. Without mirrors reflecting your new standards, the gravitational pull of your past will inevitably draw you back.",
      "This is why the I-denty community was established not as a casual social network, but as a deliberate sanctuary. When you are surrounded by women who normalize courage, high standards, and continuous expansion, forward progress feels natural rather than heroic.",
    ],
  },
  {
    slug: "curating-your-physical-environment",
    title: "Spatial Alignment: How Physical Spaces Shape Identity Evolution",
    category: "Lifestyle",
    readTime: "6 min read",
    publishDate: "February 15, 2026",
    excerpt: "Decluttering is not about minimalism; it is about creating sensory harmony that elevates your cognitive and emotional bandwidth.",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    author: "I-denty Design Team",
    keyQuote: "“Your home should be a physical manifestation of your current peace, not a storage locker for past obligations.”",
    relatedFrameworkStage: "express",
    relatedExperienceId: "lifestyle-masterclass",
    tags: ["Environment", "Home Curation", "Lifestyle"],
    content: [
      "Our neurological system constantly scans our physical surroundings for cues regarding safety, order, and self-worth. Visual clutter and misaligned spaces transmit subtle, continuous micro-stress signals.",
      "Following significant life changes such as relocation or divorce, the physical environment must be consciously re-anchored. This does not mean replacing every piece of furniture; it means intentional editing.",
      "Examine each room with the lens of identity: Does this object reflect who I am today? Does this lighting foster calm? Does this workspace invite focused, dignified creation?",
      "When your private sanctuary aligns with your internal standards, returning home becomes an act of restoration rather than emotional exhaustion.",
    ],
  },
];
