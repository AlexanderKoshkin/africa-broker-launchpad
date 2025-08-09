import SEO from "@/components/SEO";

export default function Services() {
  return (
    <>
      <SEO
        title="CMA Licensing Services Kenya — Africa Growth Advisors"
        description="Turnkey CMA Kenya brokerage licence package: application, legal docs, capital guidance, setup, and regulatory liaison."
        path="/services"
      />
      <section className="container py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold">Services</h1>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <article>
            <h2 className="text-xl font-semibold">CMA Licensing Package</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Application preparation and documentation</li>
              <li>Legal structuring and compliance advisory</li>
              <li>Capital requirements guidance</li>
              <li>Operational setup and policies</li>
              <li>Direct liaison with the Capital Markets Authority (CMA)</li>
            </ul>
          </article>
          <article>
            <h2 className="text-xl font-semibold">Value-Added Services</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Payment integration: M-Pesa, Airtel Money</li>
              <li>Bank partnerships and treasury setup</li>
              <li>KYC/AML solutions and providers</li>
              <li>Marketing networks and local acquisition</li>
              <li>Ongoing compliance and reporting</li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
