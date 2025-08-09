import SEO from "@/components/SEO";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getWhatsAppLink } from "@/config";

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
                <Link to="#lead">Get Your CMA Licence</Link>
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
          <div id="lead" className="relative">
            <div className="absolute -inset-4 rounded-2xl blur-xl opacity-40 bg-[radial-gradient(circle_at_top_left,hsl(var(--brand-glow)/0.35),transparent_60%)]" aria-hidden />
            <LeadCaptureForm />
            <div className="mt-3 text-sm text-muted-foreground">
              Or chat now: <a className="underline" href={getWhatsAppLink("Hi AGA, I want to discuss CMA licensing.")} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t">
        <div className="container py-10">
          <h2 className="text-xl font-semibold">Quick Stats & Benefits</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border p-4"><p className="text-3xl font-bold">21–36w</p><p className="text-sm text-muted-foreground">Typical licensing timeline</p></div>
            <div className="rounded-lg border p-4"><p className="text-3xl font-bold">100%</p><p className="text-sm text-muted-foreground">Local payments (M-Pesa/Airtel)</p></div>
            <div className="rounded-lg border p-4"><p className="text-3xl font-bold">Trusted</p><p className="text-sm text-muted-foreground">Regulated market presence</p></div>
            <div className="rounded-lg border p-4"><p className="text-3xl font-bold">End‑to‑end</p><p className="text-sm text-muted-foreground">From application to launch</p></div>
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
            <Button asChild variant="hero"><Link to="#lead">Get Your CMA Licence</Link></Button>
            <Button asChild variant="outline"><Link to="/contact">Contact Us</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
