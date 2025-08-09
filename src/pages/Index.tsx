import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getWhatsAppLink } from "@/config";
import { DollarSign, Globe, Trophy, Key, Handshake } from "lucide-react";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Africa Growth Advisors",
    url: "https://www.africagrowthadvisors.com",
    logo: "https://www.africagrowthadvisors.com/logo.png",
    areaServed: ["KE", "Africa"],
    sameAs: []
  };

  const faqsLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I get a CMA Kenya brokerage licence?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can obtain a CMA Kenya brokerage licence by preparing the required documentation, meeting capital requirements, and submitting an application to the Capital Markets Authority. Africa Growth Advisors can manage the entire process for you."
        }
      },
      {
        "@type": "Question",
        "name": "How long does CMA licensing in Kenya take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The CMA licensing process in Kenya typically takes 21-36 weeks, depending on application completeness and CMA review time."
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="CMA Kenya Brokerage Licence & Market Entry | AGA"
        description="Secure your CMA Kenya brokerage licence fast. Africa Growth Advisors delivers turnkey licensing & market entry solutions for FX & CFD brokers."
        path="/"
        image="/lovable-uploads/60c049ca-6d7e-460b-80c6-e25f6af18ce2.png"
        jsonLd={[jsonLd, faqsLd]}
      />
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))]" />
        <div className="container py-16 md:py-24 grid gap-10 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Your Gateway to the Kenyan Brokerage Market
            </h1>
            <p className="text-lg text-muted-foreground">
              We help FX and CFD brokers obtain a Capital Markets Authority (CMA) licence in Kenya and launch fast with full compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild variant="hero">
                <Link to="/contact">Get Your CMA Licence</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/contact">Book a Consultation</Link>
              </Button>
            </div>
            <img
              src="/lovable-uploads/60c049ca-6d7e-460b-80c6-e25f6af18ce2.png"
              alt="Nairobi skyline representing Kenyan financial market"
              loading="lazy"
              className="w-full rounded-xl border aspect-[16/9] object-cover"
            />
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
              <li>• CMA licensing process Kenya</li>
              <li>• Kenya forex broker licence</li>
              <li>• CMA regulated brokers Kenya</li>
              <li>• Broker registration Kenya</li>
            </ul>
          </div>
          <div>
            <div className="rounded-lg border bg-background p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">Contact our expert team for personalized guidance and support throughout your CMA licensing journey.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild>
                  <Link to="/contact">Start Your Application</Link>
                </Button>
                <div className="text-sm text-muted-foreground">
                  Or chat now: <a className="underline hover:no-underline" href={getWhatsAppLink("Hi AGA, I want to discuss CMA licensing.")} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t bg-muted/30">
        <div className="container py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold">Why Choose AGA for Your CMA License?</h2>
            <p className="text-muted-foreground mt-2">Professional, proven, and cost-effective solutions for broker market entry</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            <Link to="/services" className="group">
              <div className="rounded-lg border bg-background p-6 h-full transition-all hover:shadow-md hover:border-primary/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <DollarSign className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">Save up to USD 100K</h3>
                <p className="text-sm text-muted-foreground">Cut licensing costs by up to 33% compared to going solo.</p>
              </div>
            </Link>
            <Link to="/services" className="group">
              <div className="rounded-lg border bg-background p-6 h-full transition-all hover:shadow-md hover:border-primary/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Globe className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">Instant Local Expertise</h3>
                <p className="text-sm text-muted-foreground">Get direct access to Kenyan legal, compliance, and operational know-how.</p>
              </div>
            </Link>
            <Link to="/services" className="group">
              <div className="rounded-lg border bg-background p-6 h-full transition-all hover:shadow-md hover:border-primary/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Trophy className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">10+ CMA Licenses Secured</h3>
                <p className="text-sm text-muted-foreground">A proven track record with successful broker approvals.</p>
              </div>
            </Link>
            <Link to="/services" className="group">
              <div className="rounded-lg border bg-background p-6 h-full transition-all hover:shadow-md hover:border-primary/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Key className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">Key-Turn Licensing</h3>
                <p className="text-sm text-muted-foreground">From documentation to CMA approval — we handle it all.</p>
              </div>
            </Link>
            <Link to="/services" className="group">
              <div className="rounded-lg border bg-background p-6 h-full transition-all hover:shadow-md hover:border-primary/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Handshake className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">Ongoing Support</h3>
                <p className="text-sm text-muted-foreground">Compliance, payment integrations, and partnerships that last.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t">
        <div className="container py-12 grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-xl font-semibold">CMA Licensing Package</h2>
            <p className="text-muted-foreground mt-2">Application preparation, legal documentation, capital guidance, operational setup, and regulatory liaison.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Localisation & Partnerships</h2>
            <p className="text-muted-foreground mt-2">M-Pesa/Airtel Money integration, banking partners, KYC/AML, and marketing networks.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Ongoing Compliance</h2>
            <p className="text-muted-foreground mt-2">Regulatory filings, audits, and compliance tools tailored for CMA requirements.</p>
          </div>
        </div>
        <div className="container -mt-4 pb-10">
          <Button asChild>
            <Link to="/services">Explore Services</Link>
          </Button>
        </div>
      </section>

      <section className="border-t">
        <div className="container py-12 grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-semibold">Kenya Market Opportunity</h2>
            <p className="text-muted-foreground mt-2">Fast-growing, mobile-first market with strong digital payments and high trust in regulated brokers.</p>
            <div className="mt-4">
              <Button asChild variant="outline"><Link to="/market-opportunity">View Market Insights</Link></Button>
            </div>
          </div>
          <div className="rounded-lg border p-4 text-sm text-muted-foreground">
            Insights on growth, regulation benefits, and user adoption tailored for FX/CFD brokers.
          </div>
        </div>
      </section>

      <section className="border-t">
        <div className="container py-12 grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl font-semibold">Our Process</h2>
            <p className="text-muted-foreground mt-2">A clear, step-by-step roadmap from discovery to compliant launch.</p>
            <div className="mt-4">
              <Button asChild variant="outline"><Link to="/process">See the Process</Link></Button>
            </div>
          </div>
          <ol className="rounded-lg border p-4 text-sm grid gap-2 md:grid-cols-2">
            <li>1. Discovery</li>
            <li>2. Preparation</li>
            <li>3. Submission</li>
            <li>4. Setup</li>
            <li>5. Launch</li>
          </ol>
        </div>
      </section>

      <section className="border-t">
        <div className="container py-12 grid gap-6 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl font-semibold">About AGA</h2>
            <p className="text-muted-foreground mt-2">Africa Growth Advisors specialises in helping brokers enter Kenya with CMA compliance, local partnerships, and rapid go-to-market.</p>
            <div className="mt-4"><Button asChild variant="outline"><Link to="/about">About Us</Link></Button></div>
          </div>
          <div className="rounded-lg border p-4 text-sm text-muted-foreground">
            Trusted by international brokers for local expertise and execution speed.
          </div>
        </div>
      </section>

      <section className="border-t">
        <div className="container py-12 text-center space-y-4">
          <h2 className="text-2xl font-semibold">Ready to enter Kenya?</h2>
          <p className="text-muted-foreground">Book a consultation or start your CMA licence application today.</p>
          <div className="flex justify-center gap-3">
            <Button asChild variant="hero"><Link to="/contact">Get Your CMA Licence</Link></Button>
            <Button asChild variant="outline"><Link to="/contact">Contact Us</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
