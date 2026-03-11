import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Landmark,
  TrendingUp,
  Clock,
  ExternalLink,
  AlertTriangle,
  ArrowLeftRight,
  Wallet,
  Send,
  Coins,
  Share2,
  Copy,
  Check,
  ChevronLeft,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PAGE_PATH = "/blog/vasp-act-kenya-2025";
const META_TITLE =
  "The VASP Act 2025: A New Era for Digital Assets in Kenya | AGA";
const META_DESC =
  "Kenya's Virtual Asset Service Providers Act 2025 formally regulates crypto. Learn about CBK & CMA responsibilities, four license categories, and the Nov 2026 compliance deadline.";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "The Virtual Asset Service Providers (VASP) Act, 2025: A New Era for Digital Assets in Kenya",
  description: META_DESC,
  author: { "@type": "Organization", name: "Africa Growth Advisors" },
  publisher: { "@type": "Organization", name: "Africa Growth Advisors" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://www.africagrowthadvisors.com${PAGE_PATH}`,
  },
  datePublished: "2026-03-11",
  dateModified: "2026-03-11",
};

const keyTakeaways = [
  "Kenya formally recognizes crypto via VASPA, effective Nov 4 2025",
  "CBK oversees payments & stablecoins, CMA oversees trading & securities",
  "Four license categories defined",
  "Deadline for existing operators: November 4, 2026",
];

const licenseCategories = [
  {
    num: 1,
    title: "Virtual Asset Exchange",
    desc: "For platforms allowing the trading of digital assets.",
    icon: ArrowLeftRight,
    accent: "from-blue-500/20 to-blue-600/10",
    border: "border-blue-500/30",
  },
  {
    num: 2,
    title: "Virtual Asset Wallet & Custody",
    desc: "For firms providing secure storage and administration of private keys.",
    icon: Wallet,
    accent: "from-emerald-500/20 to-emerald-600/10",
    border: "border-emerald-500/30",
  },
  {
    num: 3,
    title: "Transfer Services",
    desc: "For entities moving assets from one address or account to another.",
    icon: Send,
    accent: "from-violet-500/20 to-violet-600/10",
    border: "border-violet-500/30",
  },
  {
    num: 4,
    title: "Financial Services for Issuers",
    desc: "For firms facilitating Initial Coin Offerings (ICOs) or tokenized offerings.",
    icon: Coins,
    accent: "from-amber-500/20 to-amber-600/10",
    border: "border-amber-500/30",
  },
];

export default function VaspActKenya2025() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const articleUrl = `https://www.africagrowthadvisors.com${PAGE_PATH}`;
  const articleTitle =
    "The Virtual Asset Service Providers (VASP) Act, 2025: A New Era for Digital Assets in Kenya";

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
            <span className="text-sm text-muted-foreground">November 2025</span>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              ~3 min read
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            The Virtual Asset Service Providers (VASP) Act, 2025: A New Era for
            Digital Assets in Kenya
          </h1>
        </header>

        {/* Intro paragraph */}
        <p className="text-lg leading-relaxed text-muted-foreground mb-8">
          The enactment of the Virtual Assets Service Providers Act, 2025
          (VASPA), which came into force on November 4, 2025, represents the
          single most significant legal shift in Kenya's financial history.
          After years of cautious warnings from the Central Bank of Kenya (CBK)
          and the Capital Markets Authority (CMA), the government has formally
          recognized and regulated the crypto and blockchain sector. It's a
          joint notice from CBK and CMA that reflects the dual-regulation of
          crypto.
        </p>

        {/* Key Takeaways Callout */}
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

        {/* Source Links */}
        <div className="flex flex-wrap gap-3 mb-10">
          <a
            href="https://www.centralbank.go.ke/uploads/press_releases/665231223_Public%20Notice%20on%20the%20Virtual%20Assets%20Service%20Providers%20Act%202025.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="sm" className="gap-2">
              <ExternalLink className="h-4 w-4" />
              CBK/CMA Public Notice
            </Button>
          </a>
          <a
            href="https://parliament.go.ke/sites/default/files/2025-04/THE%20VIRTUAL%20ASSET%20SERVICE%20PROVIDERS%20BILL%2C%202025%20%282%29.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="sm" className="gap-2">
              <ExternalLink className="h-4 w-4" />
              Full Text of the Bill
            </Button>
          </a>
        </div>

        {/* CBK vs CMA Responsibilities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            How will CBK and CMA distribute responsibilities?
          </h2>
          <p className="text-muted-foreground mb-6">
            Crypto assets are very diverse and have a number of application
            cases. Kenyan authorities will deal with the digital assets the
            following way:
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            <Card className="border-2">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Landmark className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">
                    Central Bank of Kenya (CBK)
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Oversees entities that facilitate payments, stablecoin
                  issuance, and virtual-to-fiat conversions, ensuring the
                  stability of the national payment system.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">
                    Capital Markets Authority (CMA)
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Manages virtual asset trading platforms, custodial services,
                  and assets that function as securities.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Licensing Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight mb-3">
            Licensing Categories for New Entrants
          </h2>
          <p className="text-muted-foreground mb-6">
            New businesses cannot simply operate as a "crypto firm." They must
            seek specific licenses based on their activities, as outlined in the
            First Schedule of the Act:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {licenseCategories.map((cat) => (
              <Card
                key={cat.num}
                className={`relative overflow-hidden border-2 ${cat.border}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cat.accent} pointer-events-none`}
                />
                <CardContent className="relative pt-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-background border-2 font-bold text-sm">
                      {cat.num}
                    </span>
                    <div>
                      <h3 className="font-semibold text-base mb-1">
                        {cat.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cat.desc}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Compliance Deadline Banner */}
        <Alert className="mb-12 border-amber-500/50 bg-amber-50 dark:bg-amber-950/30">
          <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          <AlertTitle className="text-amber-800 dark:text-amber-300 font-bold">
            Compliance Deadline
          </AlertTitle>
          <AlertDescription className="text-amber-700 dark:text-amber-400">
            Existing operators have been granted a one-year grace period, with
            the final compliance and licensing deadline set for{" "}
            <strong>November 4, 2026</strong>.
          </AlertDescription>
        </Alert>

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
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
            {copied ? "Copied!" : "Copy link"}
          </Button>
        </footer>
      </article>
    </>
  );
}
