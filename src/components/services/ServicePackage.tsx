
export default function ServicePackage() {
  return (
    <>
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">Core Licensing Package</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-3">Regulatory & Legal</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• CMA application preparation and submission</li>
              <li>• Corporate structuring and legal documentation</li>
              <li>• Compliance policies and procedures</li>
              <li>• Capital requirements guidance</li>
              <li>• Direct CMA liaison and query management</li>
            </ul>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold mb-3">Operational Setup</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Risk management framework</li>
              <li>• AML/KYC policy development</li>
              <li>• Trading platform compliance review</li>
              <li>• Operational procedures manual</li>
              <li>• Staff training and certification</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Value-Added Services</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border p-6">
            <h3 className="text-lg font-semibold mb-3">Banking & Payments</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• M-Pesa integration</li>
              <li>• Airtel Money setup</li>
              <li>• Bank partnerships</li>
              <li>• Treasury management</li>
            </ul>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-lg font-semibold mb-3">Compliance & Tech</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• KYC/AML solutions</li>
              <li>• Reporting systems</li>
              <li>• Technology providers</li>
              <li>• Ongoing compliance</li>
            </ul>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-lg font-semibold mb-3">Marketing & Growth</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• Local marketing networks</li>
              <li>• Customer acquisition</li>
              <li>• Brand positioning</li>
              <li>• Market intelligence</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
