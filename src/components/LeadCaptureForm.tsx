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
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(6, "Enter a valid phone number"),
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
    window.open(`mailto:info@africagrowthadvisors.com?subject=${subject}&body=${body}`, "_blank");

    toast({ title: "Thank you!", description: "We’ll get back to you shortly." });
    reset();
  };

  return (
    <Card className="shadow-sm">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" {...register("name")} aria-invalid={!!errors.name} />
              {errors.name && (
                <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="company">Company</Label>
              <Input id="company" {...register("company")} aria-invalid={!!errors.company} />
              {errors.company && (
                <p className="text-sm text-destructive mt-1">{errors.company.message}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email")} aria-invalid={!!errors.email} />
              {errors.email && (
                <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" {...register("phone")} aria-invalid={!!errors.phone} />
              {errors.phone && (
                <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
              )}
            </div>
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" rows={compact ? 3 : 5} {...register("message")} aria-invalid={!!errors.message} />
            {errors.message && (
              <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <Button type="submit" disabled={isSubmitting} className="sm:w-auto">Get Your CMA Licence</Button>
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
