import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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

const PAGE_PATH = "/blog/vasp-regulations-2026-kenya";
const META_TITLE =
  "VASP Regulations 2026: What Kenya's Draft Rules Mean for Your Business | AGA";
const META_DESC =
  "Kenya's draft VASP Regulations 2026 move from framework to enforcement detail. A practical breakdown of capital requirements, ownership rules, AML obligations, and licensing timelines for businesses entering the market.";
const CANONICAL_URL =
  "https://aga-licensing-kenya.lovable.app/blog/vasp-regulations-2026-kenya";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "VASP Regulations 2026: What Kenya's Draft Rules Mean for Your Business",
  description: META_DESC,
  author: { "@type": "Organization", name: "Africa Growth Advisors" },
  publisher: { "@type": "Organization", name: "Africa Growth Advisors" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://aga-licensing-kenya.lovable.app${PAGE_PATH}`,
  },
  datePublished: "2026-04-18",
  dateModified: "2026-04-18",
};

export default function VaspRegulations2026Kenya() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const articleUrl = `https://aga-licensing-kenya.lovable.app${PAGE_PATH}`;
  const articleTitle =
    "VASP Regulations 2026: What Kenya's Draft Rules Mean for Your Business";

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
            <Badge variant="secondary">Regulatory Update</Badge>
            <span className="text-sm text-muted-foreground">18 April 2026</span>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              ~4 min read
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            VASP Regulations 2026: What Kenya's Draft Rules Mean for Your
            Business
          </h1>
        </header>

        {/* Intro callout */}
        <div className="rounded-xl border-l-4 border-primary bg-secondary/40 p-5 md:p-6 mb-10">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <p className="text-sm md:text-base italic text-muted-foreground leading-relaxed">
              This article follows{" "}
              <Link
                to="/blog/vasp-act-kenya-2025"
                className="text-primary not-italic font-medium hover:underline"
              >
                our earlier piece on the VASP Act 2025
              </Link>
              . If you haven't read it yet, start there — it covers the legal
              framework, the four licence categories, and the November 2026
              compliance deadline.
            </p>
          </div>
        </div>

        <div className="prose-content space-y-6 text-base md:text-lg leading-relaxed text-foreground/90">
          <p>
            The Act told you that regulation was coming. The draft regulations,
            published 17 March 2026, tell you what it actually looks like.
          </p>
          <p>
            On that date, Kenya's National Treasury — working alongside the CBK
            and CMA through a Multi-Agency Task Force — released the Draft
            Virtual Asset Service Providers Regulations 2026 for public
            consultation. The comment period closed on 10 April 2026.
            Finalisation and gazettal are expected shortly after, at which
            point both regulators will begin processing licence applications.
          </p>
          <p>
            For businesses planning to enter Kenya's virtual asset market, this
            is the document that defines your compliance programme. Here is
            what matters.
          </p>
        </div>

        {/* Section: Dual-Regulator Model */}
        <section className="mt-12 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            The Dual-Regulator Model in Practice
          </h2>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-6">
            The VASP Act established that CBK and CMA would share oversight.
            The draft regulations define exactly who sits under which roof:
          </p>

          <div className="grid gap-5 md:grid-cols-2 mb-6">
            <div className="rounded-xl border-2 p-5">
              <h3 className="font-semibold text-base mb-3">
                CBK licenses and supervises:
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  Virtual Asset Wallet Providers
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  Virtual Asset Payment Processors
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  Stablecoin issuers and virtual-to-fiat conversion services
                </li>
              </ul>
            </div>
            <div className="rounded-xl border-2 p-5">
              <h3 className="font-semibold text-base mb-3">
                CMA licenses and supervises:
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  Virtual Asset Exchanges
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  Brokers and investment advisors
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  Tokenisation platforms and ICO facilitators
                </li>
              </ul>
            </div>
          </div>

          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            If your business spans both categories — say, an exchange that also
            processes payments — you will need separate licences from both
            regulators. Each licence is issued annually and may carry
            conditions specific to your operating model.
          </p>
        </section>

        {/* Section: Capital Requirements */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Capital Requirements: The Numbers That Matter
          </h2>
          <div className="space-y-5 text-base md:text-lg text-foreground/90 leading-relaxed">
            <p>
              The draft regulations prescribe minimum capitalisation
              thresholds that vary by licence category. The most contested:
              stablecoin issuers must hold paid-up capital of at least KES 500
              million — roughly $3.86 million. The Virtual Asset Association
              of Kenya (VAAK) has already raised concerns that thresholds at
              this level could effectively exclude local startups from the
              market.
            </p>
            <p>
              Where a firm holds more than one licence, it must maintain the
              requisite paid-up capital for each activity separately, and core
              capital must remain unencumbered at all times. This is not a
              consolidated group capital requirement — it applies per licence,
              per activity.
            </p>
            <p>
              For foreign entrants, this has a direct implication: capital
              planning cannot be done at a group level and allocated to Kenya.
              Kenyan-licensed entities need ring-fenced, locally held capital
              meeting each threshold independently.
            </p>
          </div>
        </section>

        {/* Section: Ownership and Governance */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Ownership and Governance
          </h2>
          <div className="space-y-5 text-base md:text-lg text-foreground/90 leading-relaxed">
            <p>
              The regulations set a ceiling of 33.3% on what any single person
              can own or control in a virtual asset exchange, stablecoin
              issuer, or wallet provider. This applies to shareholding, voting
              rights, and the ability to appoint board members — if you can
              influence any one of these beyond that threshold, you are over
              the limit.
            </p>
            <p>
              To put it plainly: if a business has three co-founders and one
              of them holds 50% of the shares, that structure will not pass
              regulatory scrutiny as written. The majority shareholder would
              need to reduce their stake below 33.3% before submitting a
              licence application. The same applies to a parent company or a
              single institutional investor holding a controlling position —
              unless that entity itself has a sufficiently broad and diverse
              ownership base at the level above.
            </p>
            <p>
              This is not an unusual requirement in regulated financial
              markets — Kenya's banking sector has similar restrictions — but
              it catches many early-stage businesses off guard. Concentrated
              ownership is the default in startups and founder-led businesses.
              Restructuring takes time: legal documentation, shareholder
              agreements, potentially new investors or a revised cap table.
              Starting that conversation now, before licences open, is the
              pragmatic move.
            </p>
            <p>
              One more practical point: once licensed, any subsequent change
              in ownership also requires prior regulatory approval and payment
              of a fee. You cannot quietly adjust the cap table after the
              fact. Regulatory approval is a prerequisite, not a notification.
            </p>
          </div>
        </section>

        {/* Section: AML/CFT */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            AML/CFT: What You Need at Application Stage
          </h2>
          <div className="space-y-5 text-base md:text-lg text-foreground/90 leading-relaxed">
            <p>
              The licence application requires documented AML/CFT policies
              submitted as part of the application pack — not live, running
              systems. Specifically, applicants must submit operational
              policies covering risk management, AML/CFT, cybersecurity, and
              complaints management, along with evidence of adequate human
              and technology resources.
            </p>
            <p>
              The distinction matters. What regulators want to see at
              application stage is that your framework is designed,
              documented, and board-approved — your policies are written, your
              Money Laundering Reporting Officer is appointed, your risk
              assessment is on paper. Many advisers recommend that prospective
              applicants begin preparing board-approved policies, compliance
              frameworks, and audited financials now, because regulators are
              likely to apply strict fit-and-proper tests in the first
              licensing wave.
            </p>
            <p>
              That said, do not treat "documents are enough" as a reason to
              defer the harder work. Transaction monitoring systems, KYC
              tooling, and blockchain analytics capability will need to be
              operational before you onboard your first client — and
              regulators will expect to see a credible plan for how and when
              those systems go live. Starting to develop or integrate
              transaction monitoring, reporting systems, and secure custody
              solutions early is advisable — waiting until licensing is
              imminent can delay approval and jeopardise operational
              readiness.
            </p>
            <p>
              The practical sequence: policies and governance first, to
              support the application; systems and infrastructure in
              parallel, to be ready the moment the licence is granted.
            </p>
          </div>
        </section>

        {/* Section: What is not yet finalised */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            What Is Not Yet Finalised
          </h2>
          <div className="space-y-5 text-base md:text-lg text-foreground/90 leading-relaxed">
            <p>
              The consultation period has closed but the regulations have not
              yet been gazetted. The draft is still subject to further
              amendments following public consultation, after which the
              Multi-Agency Task Force will revise the text in consultation
              with CBK and CMA before finalisation by the National Treasury
              and Cabinet Secretary.
            </p>
            <p>
              Several areas remain actively contested — capital thresholds in
              particular. The industry lobby has been vocal, and some
              softening of the more prohibitive figures is possible before
              gazettal. That said, the structural framework — dual
              regulation, annual licensing, ring-fenced capital, AML/CFT
              obligations — is settled policy and will not materially change.
            </p>
          </div>
        </section>

        {/* Section: Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
            The Timeline, Stated Plainly
          </h2>
          <div className="rounded-xl border overflow-hidden mb-6">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/60 hover:bg-secondary/60">
                  <TableHead className="font-semibold">Milestone</TableHead>
                  <TableHead className="font-semibold">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>VASP Act in force</TableCell>
                  <TableCell>4 November 2025</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Draft regulations published</TableCell>
                  <TableCell>17 March 2026</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Public consultation closed</TableCell>
                  <TableCell>10 April 2026</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Regulations finalised and gazetted</TableCell>
                  <TableCell>Expected Q2–Q3 2026</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Licensing opens</TableCell>
                  <TableCell>Upon gazettal</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Compliance deadline for existing operators
                  </TableCell>
                  <TableCell>4 November 2026</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            The window between gazettal and the compliance deadline is likely
            to be short — potentially as little as three to four months.
            Businesses that wait for the final regulations before beginning
            their compliance preparation will almost certainly miss the
            deadline.
          </p>
        </section>

        {/* Section: Where to focus now */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Where to Focus Now
          </h2>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-6">
            If you are planning market entry into Kenya's virtual asset
            sector, three things should be in progress before the regulations
            are gazetted:
          </p>
          <ol className="space-y-4">
            {[
              {
                title: "Determine your licence category.",
                body: "CBK or CMA — or both. The answer dictates your capital requirements, your regulatory relationship, and your compliance programme structure.",
              },
              {
                title: "Assess your ownership structure.",
                body: "If any single shareholder holds more than 33.3%, restructuring will be required. This takes time, particularly where offshore holding companies or complex beneficial ownership chains are involved.",
              },
              {
                title: "Build your AML/CFT framework.",
                body: "FRC registration, a designated Money Laundering Reporting Officer, transaction monitoring policies, and staff training are all prerequisites for a credible licence application. Start now.",
              },
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-4 rounded-lg border p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold mb-1">{item.title}</p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Closing */}
        <div className="rounded-xl border-l-4 border-primary bg-secondary/40 p-5 md:p-6 mb-10">
          <p className="text-sm md:text-base italic text-muted-foreground leading-relaxed">
            AGA advises businesses on regulatory strategy and licensing across
            Kenya's financial sector. If you are assessing VASP licensing
            requirements or planning market entry,{" "}
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
