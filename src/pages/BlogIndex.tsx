import SEO from "@/components/SEO";
import PostCard from "@/components/blog/PostCard";
import { getAllPosts } from "@/content/blog/posts";

const META_TITLE = "Kenya FX/CFD Blog – CMA Licensing Insights | AGA";
const META_DESC = "Expert articles on CMA licensing, Kenya’s FX/CFD market, and growth strategies for brokers.";

export default function BlogIndex() {
  const posts = getAllPosts();

  const blogLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "AGA Blog – Kenya FX/CFD & CMA Licensing",
    url: "https://www.africagrowthadvisors.com/blog",
  };

  const listLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: posts.map((p, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `https://www.africagrowthadvisors.com${p.path}`,
      name: p.title,
      description: p.description,
    }))
  };

  return (
    <>
      <SEO title={META_TITLE} description={META_DESC} path="/blog" jsonLd={[blogLd, listLd]} />
      <main className="container py-10 md:py-14">
        <header className="mb-6 md:mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Blog: Kenya FX/CFD Market & CMA Licensing Insights</h1>
          <p className="mt-3 text-muted-foreground max-w-3xl">Actionable guidance for brokers entering Kenya — regulation, market opportunities, and go-to-market playbooks.</p>
        </header>
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </section>
      </main>
    </>
  );
}
