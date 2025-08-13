import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import OptimizedImage from "@/components/OptimizedImage";

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
        jsonLd={faqJsonLd}
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

        <section className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-6">Save Time & $50,000 Compared to Going Solo</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border p-6 bg-red-50 dark:bg-red-950/20">
                <h3 className="text-xl font-semibold mb-4 text-red-800 dark:text-red-200">DIY Approach Costs</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Legal & Regulatory Fees</span>
                    <span className="font-medium">$35,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Compliance Setup</span>
                    <span className="font-medium">$25,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Local Partnerships</span>
                    <span className="font-medium">$30,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Technology Integration</span>
                    <span className="font-medium">$20,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Operational Setup</span>
                    <span className="font-medium">$15,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contingency & Delays</span>
                    <span className="font-medium">$25,000</span>
                  </div>
                  <hr className="border-red-200 dark:border-red-800" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total DIY Cost</span>
                    <span>$150,000</span>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg border p-6 bg-green-50 dark:bg-green-950/20">
                <h3 className="text-xl font-semibold mb-4 text-green-800 dark:text-green-200">AGA Solution</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Complete CMA License Package</span>
                    <span className="font-medium">$100,000</span>
                  </div>
                  <div className="flex justify-between text-green-700 dark:text-green-300">
                    <span>Savings vs DIY</span>
                    <span className="font-bold">$50,000</span>
                  </div>
                  <div className="flex justify-between text-green-700 dark:text-green-300">
                    <span>Time Savings</span>
                    <span className="font-bold">6-8 months</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <p className="text-sm text-green-800 dark:text-green-200 font-medium">
                    Our turnkey solution eliminates common delays, regulatory mistakes, and operational challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
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

        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Process & Timeline</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border p-6 text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold mb-2">Foundation</h3>
              <p className="text-sm text-muted-foreground">Documentation & setup</p>
              <p className="text-xs text-muted-foreground mt-1">4-6 weeks</p>
            </div>
            <div className="rounded-lg border p-6 text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold mb-2">Processing</h3>
              <p className="text-sm text-muted-foreground">CMA review & approval</p>
              <p className="text-xs text-muted-foreground mt-1">12-24 weeks</p>
            </div>
            <div className="rounded-lg border p-6 text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold mb-2">Launch</h3>
              <p className="text-sm text-muted-foreground">Final setup & go-live</p>
              <p className="text-xs text-muted-foreground mt-1">5-6 weeks</p>
            </div>
          </div>
        </section>

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
