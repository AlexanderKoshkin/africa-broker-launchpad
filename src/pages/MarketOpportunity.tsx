import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How big is the FX market in Kenya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kenya has over 200,000 active retail traders, with daily FX/CFD trading volumes exceeding $50 million and a 25% annual growth rate."
      }
    },
    {
      "@type": "Question",
      "name": "Why is a CMA licence important in Kenya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A CMA licence allows you to legally operate in Kenya, build client trust, advertise on major platforms, and partner with top banks."
      }
    }
  ]
};

export default function MarketOpportunity() {
  return (
    <>
      <SEO
        title="Kenya FX & CFD Market Opportunity | CMA Licence Benefits"
        description="Discover Kenya's fast-growing FX & CFD market. Learn how a CMA licence can boost your brokerage's credibility and market access."
        path="/kenya-market-opportunity"
        jsonLd={faqJsonLd}
      />
      <section className="container py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold">Kenya's FX & CFD Market: Growth & Licensing Advantages</h1>
        
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Why Kenya?</h2>
          <p className="text-muted-foreground max-w-3xl">
            Kenya represents one of Africa's most promising markets for FX and CFD brokers, with exceptional digital adoption and a growing middle class hungry for investment opportunities.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Stats & Highlights</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6 bg-muted/50">
              <h3 className="text-lg font-semibold mb-2">Population</h3>
              <p className="text-2xl font-bold text-primary">55M+</p>
              <p className="text-sm text-muted-foreground">with strong digital adoption</p>
            </div>
            <div className="rounded-lg border p-6 bg-muted/50">
              <h3 className="text-lg font-semibold mb-2">Mobile Money Penetration</h3>
              <p className="text-2xl font-bold text-primary">96%</p>
              <p className="text-sm text-muted-foreground">M-Pesa ecosystem</p>
            </div>
            <div className="rounded-lg border p-6 bg-muted/50">
              <h3 className="text-lg font-semibold mb-2">Active Retail Traders</h3>
              <p className="text-2xl font-bold text-primary">200,000+</p>
              <p className="text-sm text-muted-foreground">$50M+ daily FX/CFD volume</p>
            </div>
            <div className="rounded-lg border p-6 bg-muted/50">
              <h3 className="text-lg font-semibold mb-2">Annual Growth Rate</h3>
              <p className="text-2xl font-bold text-primary">25%</p>
              <p className="text-sm text-muted-foreground">increase in participation</p>
            </div>
            <div className="rounded-lg border p-6 bg-muted/50">
              <h3 className="text-lg font-semibold mb-2">Youthful Middle Class</h3>
              <p className="text-sm text-muted-foreground">Growing appetite for investments and financial products</p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Why a CMA Kenya Licence Matters</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-3">Legal Market Access</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Legal access to the Kenyan financial market</li>
                <li>• Full regulatory compliance and protection</li>
                <li>• Ability to operate without regulatory risks</li>
              </ul>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-semibold mb-3">Marketing & Partnerships</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Ability to advertise on Google, Facebook, TikTok</li>
                <li>• Partnerships with top banks and payment providers</li>
                <li>• Increased client trust through regulatory compliance</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Competitive Landscape & Regulatory Enforcement</h2>
          <div className="rounded-lg border p-6 bg-muted/50">
            <p className="text-muted-foreground">
              The CMA actively enforces regulations, making unlicensed operation increasingly risky. Licensed brokers enjoy competitive advantages through legitimate marketing channels, banking partnerships, and client trust that unlicensed competitors cannot access.
            </p>
          </div>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Enter the Kenyan Market?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Start Your CMA Licence Application</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Book a Market Entry Call</Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Learn more about our <Link to="/services" className="underline hover:no-underline">services</Link> or our <Link to="/licensing-process" className="underline hover:no-underline">licensing process</Link>.
          </p>
        </section>
      </section>
    </>
  );
}