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
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import Disclaimer from "@/components/blog/Disclaimer";
import BookConsultationCTA from "@/components/blog/BookConsultationCTA";

const PAGE_PATH = "/blog/kenya-finance-bill-2026-digital-payments-tax-financial-firms";
const META_TITLE = "Kenya Finance Bill 2026: Digital Payments & Software Tax | AGA";
const META_DESC =
  "Kenya's Finance Bill 2026 proposes VAT on payment processing, withholding tax on card fees, and a 20% royalty tax on non-resident software vendors. Three provisions every financial services firm operating in Kenya needs to understand before the 25 May parliamentary deadline.";
const META_KEYWORDS =
  "Kenya financial services regulation, expand financial services business to Kenya, AML KYC requirements Kenya capital markets, Kenya forex broker license, CMA license Kenya, Capital Markets Authority Kenya licensing";
const CANONICAL_URL = `https://aga-licensing-kenya.lovable.app${PAGE_PATH}`;
const ARTICLE_TITLE =
  "Kenya's Finance Bill 2026: Three Tax Proposals Every Financial Services Firm Needs to Understand";

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
  datePublished: "2026-05-13",
  dateModified: "2026-05-13",
};

export default function KenyaFinanceBill2026() {
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
            <Badge variant="secondary">Regulation</Badge>
            <span className="text-sm text-muted-foreground">13 May 2026</span>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              ~5 min read
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Kenya's Finance Bill 2026: Three Tax Proposals Every Financial
            Services Firm Needs to Understand
          </h1>
        </header>

        {/* Intro */}
        <div className="prose-content space-y-6 text-base md:text-lg leading-relaxed text-foreground/90">
          <p>
            Kenya's Finance Bill 2026, released on 30 April 2026, proposes
            changes that will directly affect the cost of running a licensed
            financial services business in Kenya. Three provisions stand out.
            All three target the payment infrastructure and technology stack
            that foreign financial firms rely on. Parliament's Finance
            Committee is accepting public submissions until 25 May 2026. The
            Bill is expected to pass, with amendments, by 30 June.
          </p>
          <p>
            This is not background tax policy. These proposals affect payment
            processing costs, withholding obligations on card transaction
            fees, and — in a provision that has attracted less attention —
            the cost of commercial software sourced from non-resident
            vendors. If you are building out Kenya operations, or planning
            to, these numbers belong in your financial model.
          </p>
        </div>

        {/* Section: The Three Proposals */}
        <section className="mt-12 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
            The Three Proposals
          </h2>

          <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-3">
            1. VAT on payment processing services
          </h3>
          <div className="space-y-5 text-base md:text-lg text-foreground/90 leading-relaxed mb-8">
            <p>
              Kenya's VAT Act currently exempts payment processing,
              settlement, merchant acquiring, payment gateways, and
              aggregation services. Finance Bill 2026 removes those
              exemptions.
            </p>
            <p>
              If the Bill passes in its current form, firms using
              third-party payment infrastructure — including foreign brokers
              relying on local payment processors for client funding and
              withdrawals — will face VAT on those services from the date
              the Act commences, expected around 1 July 2026.
            </p>
            <p>
              For a forex broker or fund manager whose Kenya client base
              funds and withdraws via local payment infrastructure, this is
              a new cost that flows directly into operating margins or
              client pricing.
            </p>
          </div>

          <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-3">
            2. Withholding tax on card transaction fees
          </h3>
          <div className="space-y-5 text-base md:text-lg text-foreground/90 leading-relaxed mb-8">
            <p>
              The Bill expands the definition of "management or professional
              fee" in the Income Tax Act to include interchange fees and
              merchant service fees arising from card-based transactions.
            </p>
            <p>
              The effect: businesses processing card payments must deduct
              withholding tax at 5% on payments to resident acquiring banks.
            </p>
            <p>
              Pan-African law firm Bowmans has identified a significant
              structural problem. Under the proposed drafting, a business
              will deduct WHT on the full merchant service fee paid to the
              acquiring bank — which includes the interchange component.
              The acquiring bank will then separately deduct WHT on the
              interchange fee it passes to the issuing bank. The same fee
              is taxed twice. This double-deduction risk is unresolved in
              the current draft, and the compliance systems required to
              manage transaction-level WHT deduction and remittance are not
              simple to implement.
            </p>
          </div>

          <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-3">
            3. The royalty expansion: payment networks and software
          </h3>
          <div className="space-y-5 text-base md:text-lg text-foreground/90 leading-relaxed">
            <p>
              This is the provision attracting the most legal commentary —
              and it has the widest reach for firms with non-resident
              technology and payment vendors.
            </p>
            <p>
              The Bill expands the definition of "royalty" under the Income
              Tax Act to include payments for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Proprietary digital platforms, payment platforms, payment
                networks, payment card schemes, payment processing systems,
                switching systems, clearing systems, and settlement systems
              </li>
              <li>
                Software — whether proprietary or off-the-shelf — including
                licence, development, training, maintenance, and support
                fees
              </li>
            </ul>
            <p>
              The withholding tax rate: 20% for non-resident recipients, 5%
              for residents. The change reverses a Supreme Court ruling
              that had excluded certain payment-related fees from royalty
              treatment.
            </p>
            <p>
              For financial firms, this has two distinct consequences.
            </p>
            <p>
              First, international card networks: processing fees paid to
              Visa, Mastercard, and equivalent non-resident card schemes
              now fall within the expanded royalty definition. Banks and
              financial institutions routing transactions through these
              networks will be required to withhold and remit 20% on those
              fees.
            </p>
            <p>
              Second — and less widely discussed: any payment to a
              non-resident software vendor is potentially within scope. A
              licensed Kenyan broker or fund manager paying monthly or
              annual fees for a trading platform licence, compliance
              management software, risk management tools, CRM, or cloud
              infrastructure from a non-resident provider would be required
              to deduct and remit 20% WHT on each payment.
            </p>
            <p>
              For firms that have not yet reviewed their Kenya technology
              vendor base through a withholding tax lens, this requires
              immediate attention.
            </p>
          </div>
        </section>

        {/* Section: What This Means */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            What This Means for Firms Entering Kenya
          </h2>
          <div className="space-y-5 text-base md:text-lg text-foreground/90 leading-relaxed">
            <p>
              The combined effect is a materially higher compliance and
              cost environment for licensed financial services operations
              in Kenya from mid-2026.
            </p>
            <p>The most direct implications:</p>
          </div>

          <ul className="mt-6 space-y-4">
            {[
              "Payment infrastructure costs: the cost of third-party payment processing increases if the VAT exemption is removed. Firms building out Kenya payment infrastructure in Q3 2026 should not assume the current exemption framework persists.",
              "Technology vendor costs: any non-resident provider receiving fees for software, platform licences, cloud infrastructure, or data services from a Kenyan entity faces a 20% WHT on those payments. For an international broker sourcing its full technology stack from offshore vendors — the standard position — this is a material new operating cost that does not appear in most Kenya market-entry financial models.",
              "WHT compliance machinery: deducting, tracking, and remitting WHT on individual card transaction fees and vendor invoices requires systems. The obligation sits with the Kenyan licensed entity, not the payment processor or software vendor, unless contractually agreed otherwise. Confirm this in writing.",
              "Intercompany arrangements: the expanded royalty definition may apply to payments made by a Kenyan subsidiary to its offshore parent for technology access, intellectual property, or platform use — a common arrangement for international financial groups that should be reviewed against the proposed drafting.",
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
        </section>

        {/* Section: Compliance-First Context */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            The Compliance-First Context
          </h2>
          <div className="space-y-5 text-base md:text-lg text-foreground/90 leading-relaxed">
            <p>
              Finance Bill 2026 is not primarily a rate-increase budget.
              The National Treasury's stated approach is to close exemption
              gaps and enforce existing obligations more rigorously. This
              Bill is part of that strategy.
            </p>
            <p>
              For firms expanding financial services operations to Kenya,
              the practical implication is a higher-scrutiny environment
              across tax, regulatory, and AML/CFT compliance
              simultaneously. Costs that were once marginal — WHT
              administration, VAT on payment services — become substantive
              obligations under the proposed regime. Building compliance
              infrastructure from the outset, rather than retrofitting it,
              is the less costly path.
            </p>
          </div>
        </section>

        {/* Section: Key Dates */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Key Dates
          </h2>
          <div className="rounded-lg border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Event</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">30 April 2026</TableCell>
                  <TableCell>Finance Bill 2026 released by National Treasury</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">25 May 2026</TableCell>
                  <TableCell>Public submissions to Finance Committee close</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">~30 June 2026</TableCell>
                  <TableCell>Bill expected to be enacted (with amendments)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">~1 July 2026</TableCell>
                  <TableCell>New provisions take effect</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Section: Where to Focus Now */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Where to Focus Now
          </h2>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-6">
            Engage a Kenyan tax adviser immediately to assess your specific
            exposure — particularly the royalty expansion and its
            application to your vendor and intercompany payment flows. The
            parliamentary submission window closes 25 May, making this the
            critical week for any representations on specific provisions.
          </p>
          <ol className="space-y-4">
            {[
              "Map your non-resident vendor base. Identify every provider receiving fees from your Kenyan entity, the nature of those fees, and whether they fall within the expanded royalty definition. Trading platform providers, compliance software vendors, and cloud infrastructure providers are the first categories to assess.",
              "Clarify WHT responsibility with your payment processor. Confirm in writing whether your processor will handle deduction and remittance on interchange-related WHT obligations, or whether that liability sits with your licensed entity.",
              "Do not model Q3 2026 Kenya operations on current exemptions. The VAT exemption on payment processing is proposed to be removed. Build your financial model on the proposed position and revise downwards only if the Bill is amended before enactment.",
              "Consider engaging the Finance Committee before 25 May 2026. If specific provisions create disproportionate compliance burdens — the double-deduction on interchange fees is the most likely candidate — this is the window to put that on the parliamentary record.",
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
        </section>

        {/* Closing */}
        <div className="rounded-xl border-l-4 border-primary bg-secondary/40 p-5 md:p-6 mb-10">
          <p className="text-sm md:text-base italic text-muted-foreground leading-relaxed">
            AGA advises businesses on regulatory strategy and licensing
            across Kenya's financial sector. If you are assessing the tax
            and compliance implications of operating in Kenya or planning
            market entry,{" "}
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
            to="/blog/why-global-brokers-are-choosing-kenya-cma-licensing-wave"
            className="group block rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-colors p-5 md:p-6"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">
              Related Article
            </span>
            <span className="text-lg font-semibold group-hover:text-primary transition-colors flex items-center gap-2">
              Why the World's Top Brokers Are Choosing Kenya
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
