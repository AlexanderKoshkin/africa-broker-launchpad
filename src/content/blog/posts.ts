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
    slug: "cma-licensing-kenya-2025-guide",
    path: "/blog/cma-licensing-kenya-2025-guide",
    title: "CMA Licensing in Kenya: The Complete 2025 Guide for FX & CFD Brokers",
    description:
      "Why Kenya’s CMA licensing is attracting FX & CFD brokers in 2025: market stats, regulation depth, and early-mover advantages.",
    datePublished: "2025-08-12",
    image: "/placeholder.svg"
  },
];

export const getAllPosts = (): BlogPost[] => {
  return [...posts].sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1));
};
