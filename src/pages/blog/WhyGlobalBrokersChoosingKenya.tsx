import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Clock,
  Share2,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  Info,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Disclaimer from "@/components/blog/Disclaimer";
import BookConsultationCTA from "@/components/blog/BookConsultationCTA";

const PAGE_PATH = "/blog/why-global-brokers-are-choosing-kenya-cma-licensing-wave";
const META_TITLE = "Why Global Brokers Are Choosing Kenya | CMA Licensing | AGA";
const META_DESC =
  "IC Markets, XM, Capital.com and seven other global brokers have obtained CMA licences in Kenya. Here is what they saw in the market — and what firms still assessing entry need to know about the 2025 licensing framework.";
const META_KEYWORDS =
  "Kenya forex broker license, CMA license Kenya, expand financial services business to Kenya, foreign broker entering Kenya market, CFD broker license East Africa, Kenya financial services regulation, Capital Markets Authority Kenya licensing";
const CANONICAL_URL = `https://aga-licensing-kenya.lovable.app${PAGE_PATH}`;
const ARTICLE_TITLE =
  "Why the World's Top Brokers Are Choosing Kenya — and What It Means for Firms Still on the Fence";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: ARTICLE_TITLE,
  description: META_DESC,
  keywords: META_KEYWORDS,
  author: { "@type": "Organization", name: "Africa Growth Advisors" },
  publisher: { "@type": "Organization", name: "Africa Growth Advisors" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL_URL,
  },
  datePublished: "2026-04-29",
  dateModified: "2026-04-29",
};

export default function WhyGlobalBrokersChoosingKenya() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const articleUrl = CANONICAL_URL;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(articleUrl);
    setCopied(true);
    toast({ title: "Link copied to clipboard" });
    setTimeout(() => setCopied(false), 2000);
  };

  const shareTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(ARTICLE_TITLE)}&url=${encodeURIComponent(articleUrl)}`,
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
        canonicalUrl={CANONICAL_URL}
        jsonLd={articleJsonLd}
      />

      <article className="container max-w-4xl py-8 md:py-14">
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
            <Badge variant="secondary">Market Insight</Badge>
            <span className="text-sm text-muted-foreground">29 April 2026</span>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              ~5 min read
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Why the World's Top Brokers Are Choosing Kenya — and What It Means
            for Firms Still on the Fence
          </h1>
        </header>

        {/* Intro */}
        <div className="prose-content space-y-6 text-base md:text-lg leading-relaxed text-foreground/90">
          <p>
            The question used to be whether Kenya was a viable market for
            international financial services firms. That question has been
            answered.
          </p>
          <p>
            IC Markets, XM, Capital.com, Admirals, Exinity (operating as
            FXPesa), FP Markets, Pepperstone, INGOT Brokers, and Scope Markets
            have all obtained CMA licences and are operating in Kenya today.
            These are not speculative entrants hedging a small position in a
            frontier market. They are established, well-capitalised global
            brands with sophisticated market assessment processes. When firms of
            this calibre commit capital, hire local teams, and go through a full
            regulatory licensing process, it is because the commercial case is
            sound.
          </p>
          <p>
            This article sets out what they saw — and what firms still assessing
            Kenya entry should understand about coming in now.
          </p>
        </div>

        {/* Section: The Market They Found */}
        <section className="mt-12 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            The Market They Found
          </h2>
          <div className="space-y-5 text-base md:text-lg text-foreground/90 leading-relaxed">
            <p>
              Kenya's retail financial services market has structural
              characteristics that most emerging markets cannot offer.
            </p>
            <p>
              <strong>Scale and demographics.</strong> Kenya has over 54 million
              people, an urbanising middle class, and one of Africa's highest
              smartphone penetration rates. The working-age population is young,
              growing, and increasingly connected.
            </p>
            <p>
              <strong>Financial activity.</strong> Kenya is consistently ranked
              among Africa's most active retail forex markets. According to
              Chainalysis data, Kenya received $19 billion in cryptocurrency
              inflows in the 12 months to June 2025 — 21st on the Global Crypto
              Adoption Index, ahead of most European countries and every other
              East African economy. This is not a market that needs educating
              about financial products.
            </p>
            <p>
              <strong>Mobile infrastructure.</strong> M-Pesa and Kenya's broader
              mobile money ecosystem give licensed brokers and fund managers
              frictionless client funding and withdrawal capabilities at scale.
              No other sub-Saharan African market combines the same
              penetration, regulatory recognition, and transactional
              reliability.
            </p>
            <p>
              <strong>Regulatory credibility as a commercial asset.</strong> In
              a market where unregulated offshore platforms have caused real
              client harm, a Kenya forex broker licence from the CMA is a
              commercial differentiator, not merely a compliance obligation.
              XM's Country Manager described the market plainly in a recent
              interview: Kenya "combines strong digital literacy with a clear
              desire for professional investment tools." Clients are actively
              seeking regulated alternatives.
            </p>
          </div>
        </section>

        {/* Section: How They Entered */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            How They Entered
          </h2>
          <div className="space-y-5 text-base md:text-lg text-foreground/90 leading-relaxed">
            <p>
              Every major international broker that has obtained a CMA licence
              in Kenya over the past three years did so through the same
              structure: a locally incorporated subsidiary, licensed as a
              Non-Dealing Online Foreign Exchange Broker or Dealing Online
              Foreign Exchange Broker.
            </p>
            <p>
              No international firm of note has entered via a branch. The
              pattern is consistent enough to be instructive. A local subsidiary
              limits parent company exposure, simplifies the CMA's
              fit-and-proper assessment of directors and shareholders, and
              produces a clean, Kenya-specific regulatory relationship. It is
              also operationally cleaner: the subsidiary holds its own capital,
              maintains its own bank accounts, and runs its own compliance
              function.
            </p>
            <p>
              All of these firms absorbed a multi-month licensing timeline as a
              cost of entry. None treated it as a reason not to proceed.
            </p>
          </div>
        </section>

        {/* Section: What the Framework Looks Like */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            What the Framework Looks Like for the Next Wave
          </h2>
          <div className="space-y-5 text-base md:text-lg text-foreground/90 leading-relaxed">
            <p>
              Firms entering Kenya today are doing so under materially different
              rules. The Capital Markets (Licensing Requirements)(General)
              Regulations, 2025 took effect on 11 December 2025 and repeal the
              2002 framework in its entirety. Anyone building a market-entry
              plan based on pre-2026 sources is reading the wrong rules.
            </p>
            <p>The key changes relevant to a new entrant:</p>
          </div>

          <ul className="mt-6 space-y-4">
            {[
              "Licence categories have been restructured. A new broker-dealer licence combines stockbroking, dealing, and underwriting. A new Intermediary Service Platform Provider (ISPP) category brings digital platforms and algorithm-driven advisory services into the regulated perimeter for the first time.",
              "Capital requirements have increased across most categories. The applicable threshold depends on the target licence and should be confirmed against the gazetted 2025 Regulations.",
              "Approval-in-Principle (AIP) is now a formal stage. AIP is valid for six months and allows the applicant to establish local infrastructure — office, staff, banking — before commencing regulated activities. For a foreign firm building its Kenyan presence from scratch, AIP provides a structured window to do so without regulatory limbo.",
              "Monthly reporting is a new ongoing obligation. Licensed intermediaries must file risk-based capital adequacy reports and management accounts within 15 days of each month-end from day one of operation. This needs to be built into operational planning from the outset.",
            ].map((body, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-lg border p-4"
              >
                <span className="text-primary mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                  {body}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-6 space-y-5 text-base md:text-lg text-foreground/90 leading-relaxed">
            <p>
              The transition deadline for firms already licensed under the prior
              framework is 11 December 2026. For new entrants, the 2025
              Regulations are the operative rules from the moment they apply.
            </p>
            <p>
              The market is more competitive than it was in 2022 or 2023. Early
              movers entered a less crowded landscape. That window has not
              closed, but it is narrowing in segments where several
              well-resourced international brands are already established.
            </p>
          </div>
        </section>

        {/* Section: What This Means */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            What This Means for Firms Still Assessing
          </h2>
          <div className="space-y-5 text-base md:text-lg text-foreground/90 leading-relaxed">
            <p>
              The commercial case for expanding financial services business to
              Kenya has been validated — not by consultants' projections, but by
              firms that deployed real capital and built real operations. The
              analysis has been done. The brokers listed above ran the same
              market assessment any new entrant would commission. They reached
              the same conclusion.
            </p>
            <p>
              What remains is an execution question. The regulatory path through
              Kenya's financial services licensing framework is navigable —
              every firm above completed it. The costs are known. The structure
              is understood.
            </p>
            <p>
              The relevant question is no longer whether Kenya is a viable
              destination. It is what it costs to arrive in 2027 rather than
              2026.
            </p>
          </div>
        </section>

        {/* Section: Where to Focus Now */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Where to Focus Now
          </h2>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-6">
            If you are assessing Kenya as a market for forex, CFD, fund
            management, or investment advisory services:
          </p>
          <ol className="space-y-4">
            {[
              "Confirm which licence category applies to your intended business under the 2025 Regulations — the prior framework no longer governs new applications.",
              "Start incorporation planning early. The subsidiary structure is standard; the company registration and CMA pre-application process takes time that cannot easily be compressed later.",
              "Establish a local banking relationship before you need it. Kenyan commercial banks apply enhanced due diligence to financial services firms, and account opening takes longer than most entrants expect.",
              "Map your AML/CFT and KYC infrastructure against Kenya's POCAMLA requirements before the application stage. Compliance architecture cannot be retrofitted after licensing.",
              "Build a realistic timeline. Nine to twelve months from incorporation to full CMA licence is a reasonable expectation under the current framework.",
            ].map((body, i) => (
              <li
                key={i}
                className="flex items-start gap-4 rounded-lg border p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  {i + 1}
                </span>
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                  {body}
                </p>
              </li>
            ))}
          </ol>

          <p className="mt-6 text-base md:text-lg text-foreground/90 leading-relaxed">
            The firms already operating in Kenya treated these steps as the
            entry cost to a market worth being in. The evidence suggests they
            were right.
          </p>
        </section>

        {/* Closing */}
        <div className="rounded-xl border-l-4 border-primary bg-secondary/40 p-5 md:p-6 mb-10">
          <p className="text-sm md:text-base italic text-muted-foreground leading-relaxed">
            AGA advises businesses on regulatory strategy and licensing across
            Kenya's financial sector. If you are assessing market entry or
            planning a CMA licensing application,{" "}
            <Link
              to="/contact"
              className="text-primary not-italic font-medium hover:underline"
            >
              get in touch
            </Link>
            .
          </p>
        </div>

        {/* Related Article */}
        <section className="mb-10">
          <Link
            to="/blog/cma-licensing-requirements-2025"
            className="group block rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-colors p-5 md:p-6"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">
              Related Article
            </span>
            <span className="text-lg font-semibold group-hover:text-primary transition-colors flex items-center gap-2">
              Modernizing the CMA: The 2025 Licensing Requirements
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

        <BookConsultationCTA />
        <Disclaimer />
      </article>
    </>
  );
}
