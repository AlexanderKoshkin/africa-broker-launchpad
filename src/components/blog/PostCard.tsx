import { Link } from "react-router-dom";
import type { BlogPost } from "@/content/blog/posts";

type PostCardProps = {
  post: BlogPost;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="rounded-lg border bg-card p-5 h-full flex flex-col" aria-labelledby={`post-${post.slug}`}> 
      <header>
        <h3 id={`post-${post.slug}`} className="text-lg font-semibold tracking-tight">
          <Link to={post.path} className="hover:underline">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{new Date(post.datePublished).toLocaleDateString()}</p>
      </header>
      <p className="mt-3 text-sm text-muted-foreground flex-1">{post.description}</p>
      <div className="mt-4">
        <Link to={post.path} className="text-sm underline underline-offset-4">Read article</Link>
      </div>
    </article>
  );
}
