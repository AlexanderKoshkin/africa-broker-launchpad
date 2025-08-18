
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { Phone, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/config";

export default function MobileCTA() {
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t shadow-lg">
      <div className="container py-3">
        <div className="flex gap-2">
          <Button asChild className="flex-1" size="sm">
            <Link to="/contact">
              <Phone className="h-4 w-4" />
              Get CMA License
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="flex-1">
            <a href={getWhatsAppLink("Hi AGA, I want to discuss CMA licensing.")} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
