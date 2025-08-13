export type BlogPost = {
  slug: string;
  path: string;
  title: string;
  description: string;
  datePublished: string; // ISO date
  image?: string;
};

export const posts: BlogPost[] = [
  {
    slug: "kenya-hotspot-regulated-forex-cfd",
    path: "/blog/kenya-hotspot-regulated-forex-cfd",
    title: "Why Kenya Is Africa's Next Hotspot for Regulated Forex & CFD Trading",
    description:
      "Kenya's CMA has tightened oversight, while a booming digital economy creates real demand. See why licensed brokers are eyeing Kenya—and how to enter compliantly.",
    datePublished: "2025-08-13",
    image: "/placeholder.svg"
  },
  {
    slug: "cma-licensing-kenya-2025-guide",
    path: "/blog/cma-licensing-kenya-2025-guide",
    title: "CMA Licensing in Kenya: The Complete 2025 Guide for FX & CFD Brokers",
    description:
      "Why Kenya's CMA licensing is attracting FX & CFD brokers in 2025: market stats, regulation depth, and early-mover advantages.",
    datePublished: "2025-08-12",
    image: "/placeholder.svg"
  },
];

export const getAllPosts = (): BlogPost[] => {
  return [...posts].sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1));
};