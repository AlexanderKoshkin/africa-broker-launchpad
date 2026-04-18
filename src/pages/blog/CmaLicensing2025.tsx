import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Clock,
  ExternalLink,
  Bot,
  Coins,
  Share2,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Disclaimer from "@/components/blog/Disclaimer";

const PAGE_PATH = "/blog/cma-licensing-requirements-2025";
const META_TITLE =
  "CMA Licensing Requirements 2025: What You Need to Know | AGA";
const META_DESC =
  "A practical guide to CMA licensing requirements in Kenya for 2025. Understand the process, documentation, and timelines for capital markets authorisation.";
const CANONICAL_URL =
  "https://aga-licensing-kenya.lovable.app/blog/cma-licensing-requirements-2025";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Modernizing the CMA: The 2025 Licensing Requirements",
  description: META_DESC,
  author: { "@type": "Organization", name: "Africa Growth Advisors" },
  publisher: { "@type": "Organization", name: "Africa Growth Advisors" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://www.africagrowthadvisors.com${PAGE_PATH}`,
  },
  datePublished: "2026-03-18",
  dateModified: "2026-03-18",
};

const keyTakeaways = [
  "Legacy 2002 rules replaced by the Capital Markets (Licensing Requirements) (General) Regulations, 2025",
  "New dedicated permit for Robo-Advisors and Online Investment Apps introduced March 2026",
  'All directors and senior management must pass a "Fit and Proper" assessment',
];

export default function CmaLicensing2025() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const articleUrl = `https://www.africagrowthadvisors.com${PAGE_PATH}`;
  const articleTitle = "Modernizing the CMA: The 2025 Licensing Requirements";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(articleUrl);
    setCopied(true);
    toast({ title: "Link copied to clipboard" });
    setTimeout(() => setCopied(false), 2000);
  };

  const shareTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(articleTitle)}&url=${encodeURIComponent(articleUrl)}`,
      "_blank"
    );
  };

  const shareLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`,
      "_blank"
    );
  };

  return (
    <>
      <SEO
        title={META_TITLE}
        description={META_DESC}
        path={PAGE_PATH}
        jsonLd={articleJsonLd}
      />

      <article className="container max-w-4xl py-8 md:py-14">
        {/* Back link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        {/* Hero Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="secondary">Regulation</Badge>
            <span className="text-sm text-muted-foreground">March 2026</span>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              ~2 min read
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Modernizing the CMA: The 2025 Licensing Requirements
          </h1>
        </header>

        {/* Intro paragraph */}
        <p className="text-lg leading-relaxed text-muted-foreground mb-8">
          While digital assets are in the spotlight, the broader securities
          market has also seen a radical overhaul. The Capital Markets (Licensing
          Requirements) (General) Regulations, 2025, have replaced the legacy
          2002 rules to accommodate technology-driven financial models.
        </p>

        {/* Key Takeaways */}
        <div className="rounded-xl border bg-secondary/50 p-6 md:p-8 mb-10">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
              ✓
            </span>
            Key Takeaways
          </h2>
          <ul className="space-y-3">
            {keyTakeaways.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm md:text-base">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Robo-Advisory Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight mb-3">
            Robo-Advisory and Online Investment Apps
          </h2>
          <p className="text-muted-foreground mb-6">
            In March 2026, the CMA introduced a dedicated permit category for
            Robo-Advisors and Online Investment Apps. This formalizes a sector
            that previously operated in a regulatory "grey zone" or within
            sandboxes.
          </p>

          <div className="grid gap-4 md:grid-cols-2 mb-4">
            <Card className="border-2 border-blue-500/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/5 pointer-events-none" />
              <CardContent className="relative pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
                    <Bot className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">
                      Algorithmic Trading
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      New firms can now offer automated, AI-driven investment
                      advice under clear regulatory standards.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-500/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 pointer-events-none" />
              <CardContent className="relative pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
                    <Coins className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1">
                      Micro-Investing
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      The framework encourages apps that offer fractionalized
                      shares, targeting the 4.25 million Kenyans who already
                      engage with digital investments.{" "}
                      <span className="inline-flex">(Source:{" "}
                        <a
                          href="https://www.financemagnates.com/fintech/kenyas-cma-widens-regulatory-net-with-robo-advisory-permits/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-primary hover:underline font-medium ml-1"
                        >
                          Finance Magnates
                          <ExternalLink className="h-3 w-3" />
                        </a>)
                      </span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Fit and Proper Test — highlighted callout */}
        <section className="mb-12">
          <div className="rounded-xl border-2 border-sky-500/40 bg-sky-50/50 dark:bg-sky-950/20 p-6 md:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-500/15">
                <ShieldCheck className="h-5 w-5 text-sky-600 dark:text-sky-400" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">
                The "Fit and Proper" Test
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Governance has become a central pillar of the 2026 regime. All
              directors and senior management of licensed firms must undergo a
              "fit and proper" assessment, which examines their professional
              integrity, financial standing, and technical competence.
            </p>
          </div>
        </section>

        {/* Related Article */}
        <section className="mb-10">
          <Link
            to="/blog/vasp-act-kenya-2025"
            className="group block rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-colors p-5 md:p-6"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">
              Related Article
            </span>
            <span className="text-lg font-semibold group-hover:text-primary transition-colors flex items-center gap-2">
              The Virtual Asset Service Providers (VASP) Act, 2025: A New Era
              for Digital Assets in Kenya
              <ChevronRight className="h-4 w-4 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </span>
          </Link>
        </section>

        {/* Share Buttons */}
        <footer className="border-t pt-8 flex flex-wrap items-center gap-3">
          <span className="text-sm font-medium text-muted-foreground flex items-center gap-1.5">
            <Share2 className="h-4 w-4" /> Share this article
          </span>
          <Button variant="outline" size="sm" onClick={shareTwitter} className="gap-2">
            𝕏 Twitter
          </Button>
          <Button variant="outline" size="sm" onClick={shareLinkedIn} className="gap-2">
            LinkedIn
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopyLink}
            className="gap-2"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? "Copied!" : "Copy link"}
          </Button>
        </footer>

        <Disclaimer />
      </article>
    </>
  );
}
