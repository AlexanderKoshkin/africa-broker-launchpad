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
      "name": "Who is Keith Mukami?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Keith Mukami is the Senior Legal Counsel at Africa Growth Advisors with over two decades of experience in financial regulation and market entry strategies across Africa."
      }
    },
    {
      "@type": "Question",
      "name": "How can I contact AGA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact us via email, phone, WhatsApp, our online form, or by booking a call directly with our legal counsel."
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
        description="Start your CMA Kenya licensing process today. Contact AGA for expert guidance from our senior legal counsel Keith Mukami and team."
        path="/contact"
        jsonLd={faqJsonLd}
      />
      <section className="container py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold">Contact Africa Growth Advisors</h1>
        
        <div className="mt-6 mb-10">
          <p className="text-lg text-muted-foreground max-w-3xl">
            Ready to secure your CMA Kenya licence? Get in touch with our expert team for personalized guidance and support throughout your licensing journey.
          </p>
        </div>
        
        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send Us an Enquiry</h2>
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
          </div>
        </div>

        <section className="mt-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8 text-center">Meet Our Senior Legal Counsel</h2>
            <div className="rounded-lg border p-8 bg-muted/30">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="flex-shrink-0">
                  <img 
                    src="/lovable-uploads/477a8f07-ad5a-4a12-828d-af46b91c6ba6.png" 
                    alt="Keith Mukami – Senior Legal Counsel, Africa Growth Advisors"
                    className="w-48 h-60 object-cover object-top rounded-lg shadow-lg"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-2">Keith Mukami</h3>
                  <p className="text-lg text-primary font-medium mb-4">Senior Legal Counsel</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Keith Mukami is a highly experienced corporate lawyer with over 20 years in financial regulation and market entry strategy across Africa. He has advised numerous multinational brokers on licensing, compliance, and operational setup in Kenya and beyond.
                  </p>
                  <a 
                    href="https://za.linkedin.com/in/keithmukami" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline font-medium"
                  >
                    View Keith's LinkedIn Profile →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-6">Start Your CMA Licensing Journey Today</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href={getWhatsAppLink("Hi AGA, I'd like to submit an enquiry about CMA licensing.")} target="_blank" rel="noopener noreferrer">
                Submit Your Enquiry
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={getWhatsAppLink("Hi AGA, I'd like to book a call with Keith about CMA licensing.")} target="_blank" rel="noopener noreferrer">
                Book a Call with Keith
              </a>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Learn more about our <Link to="/services" className="underline hover:no-underline">services</Link> or <Link to="/about" className="underline hover:no-underline">about us</Link>.
          </p>
        </section>
      </section>
    </>
  );
}