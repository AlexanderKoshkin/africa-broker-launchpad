
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import OptimizedImage from "@/components/OptimizedImage";
import ServicePackage from "@/components/services/ServicePackage";
import CostComparison from "@/components/services/CostComparison";
import ProcessTimeline from "@/components/services/ProcessTimeline";

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "CMA Kenya Brokerage Licensing Services",
  "description": "Complete CMA Kenya licensing solution for FX and CFD brokers including regulatory compliance, legal documentation, and operational setup.",
  "provider": {
    "@type": "Organization",
    "name": "Africa Growth Advisors",
    "url": "https://www.africagrowthadvisors.com"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Kenya"
  },
  "serviceType": "Financial Regulatory Licensing",
  "offers": {
    "@type": "Offer",
    "price": "100000",
    "priceCurrency": "USD",
    "description": "Complete CMA Kenya license package - saves $50,000 compared to DIY approach"
  }
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a CMA Kenya license cost with AGA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AGA's complete CMA Kenya license package costs USD 100,000, which saves brokers approximately USD 50,000 compared to the DIY approach."
      }
    },
    {
      "@type": "Question",
      "name": "How long does the licensing process take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With AGA, the CMA licensing process typically takes 21–36 weeks, saving 6–8 months compared to handling it independently."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in the CMA licensing package?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The package includes regulatory compliance, legal documentation, capital guidance, operational setup, and direct liaison with the CMA."
      }
    }
  ]
};

export default function Services() {
  return (
    <>
      <SEO
        title="CMA Kenya Licensing Services | Africa Growth Advisors"
        description="Save $50K and months of time with AGA's complete CMA Kenya licensing solution for FX and CFD brokers."
        path="/services"
        jsonLd={[servicesJsonLd, faqJsonLd]}
      />
      <section className="container py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold">Our CMA Kenya Licensing Services</h1>
        
        <div className="mt-6 mb-10">
          <p className="text-lg text-muted-foreground max-w-3xl">
            Get your CMA Kenya brokerage licence with our proven end-to-end solution. We handle the complex regulatory process so you can focus on growing your business.
          </p>
        </div>

        <div className="mt-8 mb-12">
          <OptimizedImage 
            src="/lovable-uploads/e9108ca6-a202-459b-bd84-d099ffb0188c.png" 
            alt="Professional meeting between broker and legal consultant in Kenya"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
          />
        </div>

        <CostComparison />

        <ServicePackage />

        <ProcessTimeline />

        <section className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-6">Start Your CMA Licensing Process Today</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Request a Cost Comparison</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Get Started with Licensing</Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Learn more <Link to="/about" className="underline hover:no-underline">about us</Link> or <Link to="/contact" className="underline hover:no-underline">contact us</Link> for details.
          </p>
        </section>
      </section>
    </>
  );
}
