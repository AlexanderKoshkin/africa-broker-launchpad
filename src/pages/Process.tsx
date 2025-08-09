import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the CMA licensing steps in Kenya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The steps include corporate setup, documentation preparation, CMA submission, responding to queries, and final approval."
      }
    },
    {
      "@type": "Question",
      "name": "How long does each phase take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Foundation takes 4-6 weeks, processing 12-24 weeks, and launch 5-6 weeks."
      }
    }
  ]
};

const phases = [
  {
    title: "Phase 1 - Foundation",
    duration: "4-6 weeks",
    steps: [
      "Corporate structure setup and registration",
      "Initial capital preparation and verification", 
      "Core team recruitment and background checks",
      "Preliminary compliance framework development"
    ]
  },
  {
    title: "Phase 2 - Processing", 
    duration: "12-24 weeks",
    steps: [
      "Complete CMA application submission",
      "Detailed operational policies and procedures",
      "CMA review process and query responses", 
      "Final documentation and compliance verification"
    ]
  },
  {
    title: "Phase 3 - Launch",
    duration: "5-6 weeks", 
    steps: [
      "Banking relationships and payment integration",
      "Technology platform setup and testing",
      "Staff training and operational readiness",
      "Go-live and ongoing compliance monitoring"
    ]
  }
];

export default function Process() {
  return (
    <>
      <SEO
        title="CMA Kenya Broker Licence Application Steps | AGA"
        description="Step-by-step guide to obtaining your CMA Kenya brokerage licence, from application to final approval."
        path="/licensing-process"
        jsonLd={faqJsonLd}
      />
      <section className="container py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold">CMA Kenya Brokerage Licensing Process</h1>
        
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Simplifying CMA Licensing</h2>
          <p className="text-muted-foreground max-w-3xl">
            The CMA Kenya licensing process involves multiple phases, regulatory submissions, and operational requirements. 
            Our structured approach ensures nothing is missed and timelines are optimized for faster approval.
          </p>
        </section>

        <section className="mt-12">
          <div className="grid gap-8 lg:gap-12">
            {phases.map((phase, index) => (
              <div key={phase.title} className="rounded-lg border p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-xl font-semibold">{phase.title}</h3>
                  <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full mt-2 sm:mt-0">
                    {phase.duration}
                  </span>
                </div>
                <ul className="space-y-2">
                  {phase.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Begin Your CMA Licensing Journey?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Book a Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Get Your CMA Licence</Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Learn more about our <Link to="/services" className="underline hover:no-underline">services</Link> or <Link to="/contact" className="underline hover:no-underline">contact us</Link> directly.
          </p>
        </section>
      </section>
    </>
  );
}
