import SEO from "@/components/SEO";

export default function MarketOpportunity() {
  return (
    <>
      <SEO
        title="Kenya Market Opportunity — CMA Regulated Brokers"
        description="Kenya’s fast-growing financial market: benefits of CMA regulation, growth rates, and broker opportunities."
        path="/market-opportunity"
      />
      <section className="container py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold">Market Opportunity</h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none mt-6">
          <p>
            Kenya is a regional financial hub with a growing demand for regulated trading services. A CMA licence unlocks access to a trusted, compliant market with strong digital payments infrastructure.
          </p>
          <ul>
            <li>CMA licensed forex brokers Kenya see higher trust and conversion.</li>
            <li>Integrated payments (M-Pesa, Airtel Money) enable seamless funding.</li>
            <li>Favorable demographics and digital adoption support rapid growth.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
