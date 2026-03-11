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
    slug: "vasp-act-kenya-2025",
    path: "/blog/vasp-act-kenya-2025",
    title: "The Virtual Asset Service Providers (VASP) Act, 2025: A New Era for Digital Assets in Kenya",
    description:
      "Kenya's Virtual Asset Service Providers Act 2025 formally regulates crypto. Learn about CBK & CMA responsibilities, four license categories, and the Nov 2026 compliance deadline.",
    datePublished: "2025-11-15",
    image: "/placeholder.svg"
  },
  {
    slug: "mpesa-hidden-truth",
    path: "/blog/mpesa-hidden-truth",
    title: "M-Pesa: The Hidden Truth Behind Kenya's Financial Revolution",
    description:
      "Uncover the disputed origins of M-Pesa, Kenya's revolutionary mobile money system. From alleged theft of intellectual property to surveillance concerns and CBDC implications - the complete untold story.",
    datePublished: "2025-01-15",
    image: "/placeholder.svg"
  },
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