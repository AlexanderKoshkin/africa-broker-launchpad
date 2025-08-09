import SEO from "@/components/SEO";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { getWhatsAppLink, WHATSAPP_NUMBER_INTL } from "@/config";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact AGA — CMA Licence Application Kenya"
        description="Contact Africa Growth Advisors for CMA Kenya licensing: lead form, WhatsApp, phone, and email."
        path="/contact"
      />
      <section className="container py-12 md:py-16 grid gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 text-muted-foreground">We typically respond within one business day.</p>
          <div className="mt-6 space-y-2 text-sm">
            <p>Email: info@africagrowthadvisors.com</p>
            <p>WhatsApp: <a className="underline hover:no-underline" href={getWhatsAppLink("Hi AGA, I’d like to discuss CMA licensing in Kenya.")} target="_blank" rel="noopener noreferrer">{WHATSAPP_NUMBER_INTL}</a></p>
          </div>
        </div>
        <div>
          <LeadCaptureForm compact />
        </div>
      </section>
    </>
  );
}
