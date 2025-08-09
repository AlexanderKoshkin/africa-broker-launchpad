import SEO from "@/components/SEO";

export default function About() {
  return (
    <>
      <SEO
        title="About Africa Growth Advisors — CMA Expertise"
        description="AGA’s team combines legal, regulatory, and operational expertise to secure CMA Kenya brokerage licences."
        path="/about"
      />
      <section className="container py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold">About Us</h1>
        <p className="mt-6 text-muted-foreground max-w-3xl">
          Africa Growth Advisors (AGA) is a consultancy helping international FX and CFD brokers enter Kenya and operate under CMA regulation. We deliver fast, compliant market entry with end-to-end support.
        </p>
      </section>
    </>
  );
}
