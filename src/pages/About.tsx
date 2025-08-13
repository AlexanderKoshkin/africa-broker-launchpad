import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import OptimizedImage from "@/components/OptimizedImage";

export default function About() {
  return (
    <>
      <SEO
        title="About AGA | CMA Kenya Licensing Experts"
        description="Africa Growth Advisors helps FX & CFD brokers secure CMA Kenya licences with cost savings, speed, and local expertise."
        path="/about"
      />
      <section className="container py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold">About Africa Growth Advisors (AGA)</h1>
        
        <div className="mt-8">
          <OptimizedImage 
            src="/lovable-uploads/14128ee9-943d-45ae-8399-07ea9bef59f3.png" 
            alt="Nairobi city skyline - Africa Growth Advisors' market presence"
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
        
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission & Values</h2>
          <p className="text-muted-foreground max-w-3xl">
            Africa Growth Advisors exists to bridge the gap between international financial services companies and African markets. 
            We believe in transparent, efficient regulatory processes that benefit both brokers and local communities. Our values center 
            on integrity, expertise, and long-term partnership success.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Team Experience</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-3">Regulatory Expertise</h3>
              <p className="text-muted-foreground text-sm">
                Our team includes former CMA officials, financial services lawyers, and compliance specialists with deep knowledge 
                of Kenya's regulatory landscape and licensing requirements.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-3">Operational Excellence</h3>
              <p className="text-muted-foreground text-sm">
                We combine regulatory knowledge with practical operational experience, having worked with major FX and CFD brokers 
                across multiple jurisdictions including Cyprus, UK, and South Africa.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Track Record Highlights</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center rounded-lg border p-6">
              <div className="text-2xl font-bold text-primary">100%</div>
              <p className="text-sm text-muted-foreground mt-1">CMA application success rate</p>
            </div>
            <div className="text-center rounded-lg border p-6">
              <div className="text-2xl font-bold text-primary">21-36</div>
              <p className="text-sm text-muted-foreground mt-1">Weeks average licensing time</p>
            </div>
            <div className="text-center rounded-lg border p-6">
              <div className="text-2xl font-bold text-primary">10+</div>
              <p className="text-sm text-muted-foreground mt-1">Successful market entries</p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Competitive Advantages</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold">Local Regulatory Relationships</h3>
                <p className="text-muted-foreground text-sm">Direct contacts within CMA and deep understanding of regulatory expectations and processes.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold">End-to-End Service Delivery</h3>
                <p className="text-muted-foreground text-sm">From initial consultation to operational launch, we handle every aspect of your Kenya market entry.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold">Cost & Time Efficiency</h3>
                <p className="text-muted-foreground text-sm">Our streamlined processes typically save 60-80% of time and costs compared to independent applications.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold">Ongoing Partnership</h3>
                <p className="text-muted-foreground text-sm">We provide continuous compliance support, regulatory updates, and business development assistance.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Work with Our Team?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Meet with Our Team</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Book a Consultation</Link>
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