import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does the CMA licensing package include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our CMA licensing package includes regulatory compliance, legal documentation, operational setup, and full liaison with the Capital Markets Authority."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help with M-Pesa integration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We assist with integrating M-Pesa, Airtel Money, and other payment providers as part of your Kenya market entry."
      }
    }
  ]
};

export default function Services() {
  return (
    <>
      <SEO
        title="CMA Kenya Broker Licensing Solutions | AGA"
        description="Full-service CMA Kenya broker licensing, market entry, payment integration & compliance support for FX & CFD brokers."
        path="/services"
        jsonLd={faqJsonLd}
      />
      <section className="container py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold">CMA Kenya Brokerage Licensing & Market Entry Services</h1>
        
        <div className="mt-8 mb-8">
          <img 
            src="/lovable-uploads/e9108ca6-a202-459b-bd84-d099ffb0188c.png" 
            alt="Professional meeting between broker and legal consultant in Kenya"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
          />
        </div>
        
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Why Work with AGA for CMA Licensing</h2>
          <p className="text-muted-foreground max-w-3xl">
            Securing a CMA Kenya brokerage licence requires deep regulatory knowledge, local connections, and meticulous attention to detail. 
            Africa Growth Advisors combines legal expertise with operational experience to fast-track your market entry.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Core Licensing Package</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-3">Regulatory & Legal</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• CMA application preparation and submission</li>
                <li>• Corporate structuring and legal documentation</li>
                <li>• Compliance policies and procedures</li>
                <li>• Capital requirements guidance</li>
                <li>• Direct CMA liaison and query management</li>
              </ul>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-3">Operational Setup</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Risk management framework</li>
                <li>• AML/KYC policy development</li>
                <li>• Trading platform compliance review</li>
                <li>• Operational procedures manual</li>
                <li>• Staff training and certification</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Value-Added Services</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-3">Banking & Payments</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• M-Pesa integration</li>
                <li>• Airtel Money setup</li>
                <li>• Bank partnerships</li>
                <li>• Treasury management</li>
              </ul>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-3">Compliance & Tech</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• KYC/AML solutions</li>
                <li>• Reporting systems</li>
                <li>• Technology providers</li>
                <li>• Ongoing compliance</li>
              </ul>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-3">Marketing & Growth</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Local marketing networks</li>
                <li>• Customer acquisition</li>
                <li>• Brand positioning</li>
                <li>• Market intelligence</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Cost Savings vs DIY</h2>
          <div className="rounded-lg border p-6 bg-muted/50">
            <p className="text-muted-foreground">
              Our turnkey solution typically saves 60-80% of the time and costs compared to handling CMA licensing independently. 
              We eliminate common delays, regulatory mistakes, and operational setup challenges that often derail DIY applications.
            </p>
          </div>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Start Your CMA Licensing Journey?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Get Your CMA Licence</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Book a Free Consultation</Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Learn more about the <Link to="/market-opportunity" className="underline hover:no-underline">market opportunity</Link> or our <Link to="/licensing-process" className="underline hover:no-underline">licensing process</Link>.
          </p>
        </section>
      </section>
    </>
  );
}
