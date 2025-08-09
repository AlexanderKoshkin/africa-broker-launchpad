import SEO from "@/components/SEO";

const steps = [
  { title: "Discovery", desc: "Initial consultation to assess goals and requirements." },
  { title: "Preparation", desc: "Compile application, policies, and legal documentation." },
  { title: "Submission", desc: "Liaise with CMA and track application progress." },
  { title: "Setup", desc: "Operational setup, banking, payments, and providers." },
  { title: "Launch", desc: "Go live with compliant operations and ongoing support." },
];

export default function Process() {
  return (
    <>
      <SEO
        title="CMA Licensing Process Kenya — Step-by-Step"
        description="Clear roadmap to obtain a CMA Kenya brokerage licence, from consultation to launch."
        path="/process"
      />
      <section className="container py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold">Our Process</h1>
        <ol className="mt-6 grid gap-6 md:grid-cols-5">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-lg border p-4">
              <p className="text-sm text-muted-foreground">Step {i + 1}</p>
              <p className="font-semibold mt-1">{s.title}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
