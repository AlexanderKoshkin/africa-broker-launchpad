import { Link } from "react-router-dom";
import { getAllPosts } from "@/content/blog/posts";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="border-t">
      <div className="container py-12 md:py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-semibold">Latest Insights</h2>
            <p className="text-muted-foreground mt-2">Expert analysis on Kenya's regulatory landscape and market entry strategies.</p>
          </div>
          <Button asChild variant="ghost" className="hidden md:inline-flex">
            <Link to="/blog">View All Articles <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-lg border bg-card p-5 flex flex-col transition-all hover:shadow-md hover:border-primary/20"
            >
              <p className="text-xs text-muted-foreground">{new Date(post.datePublished).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight leading-snug">
                <Link to={post.path} className="hover:underline">{post.title}</Link>
              </h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3 flex-1">{post.description}</p>
              <div className="mt-4">
                <Link to={post.path} className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
                  Read More <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Button asChild variant="outline">
            <Link to="/blog">View All Articles <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
