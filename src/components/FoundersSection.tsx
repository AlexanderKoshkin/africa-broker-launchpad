import { Linkedin } from "lucide-react";

interface FounderCardProps {
  name: string;
  role: string;
  initials: string;
  bio: string;
  closingLine: string;
  linkedIn: string;
  imageSrc?: string;
}

function FounderCard({ name, role, initials, bio, closingLine, linkedIn, imageSrc }: FounderCardProps) {
  return (
    <div className="rounded-lg border bg-card p-6 md:p-8 flex flex-col">
      <div className="flex items-center gap-5 mb-6">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={name}
            className="w-20 h-20 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <span className="text-xl font-semibold text-primary">{initials}</span>
          </div>
        )}
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{bio}</p>
      <p className="mt-4 text-sm italic text-muted-foreground/80">"{closingLine}"</p>
      <div className="mt-5">
        <a
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
          aria-label={`${name} LinkedIn Profile`}
        >
          <Linkedin className="h-4 w-4" />
          <span>LinkedIn Profile</span>
        </a>
      </div>
    </div>
  );
}

export default function FoundersSection() {
  return (
    <section className="border-t">
      <div className="container py-12 md:py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Meet the Founders</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto italic">
            The architecture of AGA is built on two disciplines that rarely share the same table — and that is precisely the point.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <FounderCard
            name="Keith Mukami"
            role="Legal Architect"
            initials="KM"
            imageSrc="/lovable-uploads/keith-mukami.jpeg"
            linkedIn="https://www.linkedin.com/in/keithmukami/"
            bio="Keith brings over two decades of senior-level experience across international financial law, regulatory frameworks, and cross-border commercial structures. His academic grounding — an LLB from the University of Reading and an LLM from the University of Cambridge — underpins a career practised at the highest levels of global finance. Admitted as a solicitor in England and Wales since 1997, he has held senior roles at Norton Rose Fulbright and CMS South Africa, led the Africa banking and regulatory practice, and worked in-house at Merrill Lynch in the City of London. As an admitted attorney in Tanzania, he has been instrumental in facilitating foreign direct investment and strengthening legal infrastructure across East Africa."
            closingLine="Legal certainty is not a constraint — it is the foundation on which sustainable financial ecosystems are built."
          />
          <FounderCard
            name="Alexander Koshkin"
            role="Digital Frontier Strategist"
            initials="AK"
            linkedIn="https://www.linkedin.com/in/alexanderkoshkin/"
            bio="Alexander has spent over 15 years at the intersection of product strategy, fintech, and emerging market growth. Since 2009, his focus has been singular: making complex financial services accessible, fast, and scalable. His career includes key roles at Qiwi and Alpari — where he served as Head of Affiliates for one of the world's largest FX brokers. At Brokstock, as Product Owner, he built a retail investment platform from the ground up, achieving a 9-second client verification time without compromising compliance standards, and drove an 80% increase in user activation through behavioural design alone."
            closingLine="Regulation and user experience are not in opposition. Executed well, one reinforces the other."
          />
        </div>

        <div className="mt-12 border-t pt-10 text-center max-w-3xl mx-auto">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">The AGA Advantage</h3>
          <p className="text-muted-foreground leading-relaxed">
            Together, Keith and Alexander represent something rarely found in the licensing advisory space — the combination of rigorous legal architecture and high-velocity digital execution. One ensures the foundation is unimpeachable. The other ensures it performs at speed. That is the structural advantage AGA brings to every client engagement.
          </p>
        </div>
      </div>
    </section>
  );
}
