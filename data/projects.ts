export type Project = {
  slug: string;
  title: string;
  client: string;
  services: string[];
  tagline?: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  liveUrl?: string;
  images: { url: string }[];
};

export const projects: Project[] = [
  {
    slug: "tiata-investment-branding",
    title: "Tiata Investment Branding Project",
    client: "Tiata Investment",
    services: ["Website Development", "Branding"],
    description: "A branding and website project focused on trust, clarity, and long-term growth.",
    challenge: "Create a strong identity in a competitive financial space.",
    solution: "How Nexus Brands approached and solved it.",
    outcome: "The results and impact after delivery.",
    liveUrl: "https://example.com",
    images: [
      { url: "/work/1.jpg" },
      { url: "/work/1b.jpg" },
      { url: "/work/1c.jpg" },
    ],
  },

  {
    slug: "sample-project-2",
    title: "Sample Project Two",
    client: "Client Name Ltd",
    services: ["Branding"],
    tagline: "A brand identity built to stand out.",
    description: "A short overview of the project goes here.",
    challenge: "What the client was facing before the project.",
    solution: "How Nexus Brands approached and solved it.",
    outcome: "The results and impact after delivery.",
    images: [
      { url: "/work/2.jpg" },
    ],
  },

  {
    slug: "sample-project-3",
    title: "Sample Project Three",
    client: "Client Name Ltd",
    services: ["Social Media Marketing"],
    tagline: "A content engine that grew real engagement.",
    description: "A short overview of the project goes here.",
    challenge: "What the client was facing before the project.",
    solution: "How Nexus Brands approached and solved it.",
    outcome: "The results and impact after delivery.",
    images: [
      { url: "/work/3.jpg" },
    ],
  },
];