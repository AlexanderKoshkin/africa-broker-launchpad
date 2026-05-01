import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WA_LINK =
  "https://wa.me/27791811805?text=Hi%20AGA%2C%20I%27d%20like%20to%20submit%20an%20enquiry%20about%20CMA%20licensing.";

export default function BookConsultationCTA() {
  return (
    <section className="mt-12 rounded-xl border bg-secondary/40 p-6 md:p-8 text-center">
      <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
        Ready to move forward?
      </h3>
      <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
        AGA advises on regulatory strategy and licensing across Kenya's
        financial sector. Speak to us directly on WhatsApp.
      </p>
      <div className="mt-5 flex justify-center">
        <Button asChild size="lg">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" />
            Book a consultation
          </a>
        </Button>
      </div>
    </section>
  );
}