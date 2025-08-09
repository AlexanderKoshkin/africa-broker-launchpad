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

  return (
    <>
      <SEO
        title="Africa Growth Advisors — CMA Kenya Brokerage Licence"
        description="Your gateway to the Kenyan brokerage market. CMA licensing, market entry, compliance. Generate B2B leads for FX/CFD brokers."
        path="/"
        jsonLd={jsonLd}
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
                <a href={getWhatsAppLink("Hi AGA, I want to discuss CMA licensing.")} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              </Button>
            </div>
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
          </div>
        </div>
      </section>
      <section>
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
      </section>
    </>
  );
};

export default Index;
