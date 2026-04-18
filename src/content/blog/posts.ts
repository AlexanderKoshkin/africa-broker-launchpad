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
    slug: "vasp-regulations-2026-kenya",
    path: "/blog/vasp-regulations-2026-kenya",
    title: "VASP Regulations 2026: What Kenya's Draft Rules Mean for Your Business",
    description:
      "Kenya's draft VASP Regulations 2026 move from framework to enforcement detail. A practical breakdown of capital requirements, ownership rules, AML obligations, and licensing timelines for businesses entering the market.",
    datePublished: "2026-04-18",
    image: "/placeholder.svg"
  },
  {
    slug: "cma-licensing-requirements-2025",
    path: "/blog/cma-licensing-requirements-2025",
    title: "Modernizing the CMA: The 2025 Licensing Requirements",
    description:
      "Kenya's CMA replaces legacy 2002 rules with the Capital Markets (Licensing Requirements) (General) Regulations, 2025. Learn about Robo-Advisory permits and the Fit and Proper test.",
    datePublished: "2026-03-18",
    image: "/placeholder.svg"
  },
  {
    slug: "vasp-act-kenya-2025",
    path: "/blog/vasp-act-kenya-2025",
    title: "The Virtual Asset Service Providers (VASP) Act, 2025: A New Era for Digital Assets in Kenya",
    description:
      "Kenya's Virtual Asset Service Providers Act 2025 formally regulates crypto. Learn about CBK & CMA responsibilities, four license categories, and the Nov 2026 compliance deadline.",
    datePublished: "2026-03-11",
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