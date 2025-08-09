import SEO from "@/components/SEO";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { getWhatsAppLink, WHATSAPP_NUMBER_INTL } from "@/config";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I contact AGA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact us via email, phone, WhatsApp, or our online contact form."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with brokers outside Kenya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We specialise in helping international FX and CFD brokers enter the Kenyan market."
      }
    }
  ]
};

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact AGA | CMA Kenya Licensing Support"
        description="Start your CMA Kenya licensing process today. Contact AGA for expert guidance and market entry solutions."
        path="/contact"
        jsonLd={faqJsonLd}
      />
      <section className="container py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold">Contact Africa Growth Advisors</h1>
        
        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div>
            <LeadCaptureForm />
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Direct Contact Information</h2>
              <div className="space-y-3 text-muted-foreground">
                <p><strong>Email:</strong> kmukami@hotmail.com</p>
                <p><strong>Phone:</strong> +255 769 925 645</p>
                <p><strong>WhatsApp:</strong> <a className="underline hover:no-underline text-primary" href={getWhatsAppLink("Hi AGA, I'd like to discuss CMA licensing in Kenya.")} target="_blank" rel="noopener noreferrer">{WHATSAPP_NUMBER_INTL}</a></p>
                <p><strong>Response Time:</strong> We typically respond within one business day</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Nairobi Office Location</h2>
              <div className="rounded-lg border p-6 bg-muted/50">
                <p className="text-muted-foreground">
                  <strong>Africa Growth Advisors</strong><br />
                  Nairobi Central Business District<br />
                  Nairobi, Kenya
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  We serve clients across Kenya and internationally, with our local presence ensuring deep market knowledge and regulatory expertise.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Next Steps</h2>
              <div className="space-y-3">
                <Button asChild className="w-full">
                  <a href={getWhatsAppLink("Hi AGA, I'd like to book a call to discuss CMA licensing.")} target="_blank" rel="noopener noreferrer">
                    Book a Call
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground">
                  Learn more about our <Link to="/services" className="underline hover:no-underline">services</Link> before getting in touch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}