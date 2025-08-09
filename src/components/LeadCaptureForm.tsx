import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { getWhatsAppLink, WHATSAPP_NUMBER_INTL } from "@/config";

const LeadSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  company: z.string().min(2, "Please enter your company name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string()
    .regex(/^\+\d{1,3}\s?\d{8,12}$/, "Phone must include country code (e.g., +254) and be 10-15 digits total"),
  message: z.string().min(10, "Tell us briefly about your needs"),
});

type LeadFormData = z.infer<typeof LeadSchema>;

export default function LeadCaptureForm({ compact = false }: { compact?: boolean }) {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<LeadFormData>({
    resolver: zodResolver(LeadSchema),
  });

  const onSubmit = async (data: LeadFormData) => {
    const subject = encodeURIComponent("AGA: CMA Licensing Consultation");
    const body = encodeURIComponent(
      `Name: ${data.name}\nCompany: ${data.company}\nEmail: ${data.email}\nPhone: ${data.phone}\n\nMessage:\n${data.message}`
    );

    // Basic conversion tracking hook
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event: "lead_form_submit", form: data });

    // Open email client as interim submission method
    window.open(`mailto:kmukami@hotmail.com?subject=${subject}&body=${body}`, "_blank");

    toast({ 
      title: "Thank you — our team will contact you within 24 hours.", 
      description: "We'll be in touch soon to discuss your CMA licensing needs." 
    });
    reset();
  };

  return (
    <Card className="shadow-sm">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="Enter your full name" {...register("name")} aria-invalid={!!errors.name} />
            {errors.name && (
              <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="your@email.com" {...register("email")} aria-invalid={!!errors.email} />
            {errors.email && (
              <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input 
              id="phone" 
              placeholder="+254 123 456 789" 
              {...register("phone")} 
              aria-invalid={!!errors.phone}
            />
            {errors.phone && (
              <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="company">Company Name</Label>
            <Input id="company" placeholder="Your company name" {...register("company")} aria-invalid={!!errors.company} />
            {errors.company && (
              <p className="text-sm text-destructive mt-1">{errors.company.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea 
              id="message" 
              rows={compact ? 3 : 5} 
              placeholder="Tell us about your CMA licensing needs..."
              {...register("message")} 
              aria-invalid={!!errors.message} 
            />
            {errors.message && (
              <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <Button type="submit" disabled={isSubmitting} className="sm:w-auto">Request My Consultation</Button>
            <a
              className="text-sm text-muted-foreground hover:text-foreground underline"
              href={getWhatsAppLink("Hello AGA, I'd like to discuss CMA licensing in Kenya.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Chat on WhatsApp ${WHATSAPP_NUMBER_INTL}`}
            >
              Or chat on WhatsApp
            </a>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}