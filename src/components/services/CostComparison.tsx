
export default function CostComparison() {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold text-center mb-6">Save Time & $50,000 Compared to Going Solo</h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border p-6 bg-red-50 dark:bg-red-950/20">
            <h3 className="text-xl font-semibold mb-4 text-red-800 dark:text-red-200">DIY Approach Costs</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Legal & Regulatory Fees</span>
                <span className="font-medium">$35,000</span>
              </div>
              <div className="flex justify-between">
                <span>Compliance Setup</span>
                <span className="font-medium">$25,000</span>
              </div>
              <div className="flex justify-between">
                <span>Local Partnerships</span>
                <span className="font-medium">$30,000</span>
              </div>
              <div className="flex justify-between">
                <span>Technology Integration</span>
                <span className="font-medium">$20,000</span>
              </div>
              <div className="flex justify-between">
                <span>Operational Setup</span>
                <span className="font-medium">$15,000</span>
              </div>
              <div className="flex justify-between">
                <span>Contingency & Delays</span>
                <span className="font-medium">$25,000</span>
              </div>
              <hr className="border-red-200 dark:border-red-800" />
              <div className="flex justify-between text-lg font-bold">
                <span>Total DIY Cost</span>
                <span>$150,000</span>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border p-6 bg-green-50 dark:bg-green-950/20">
            <h3 className="text-xl font-semibold mb-4 text-green-800 dark:text-green-200">AGA Solution</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Complete CMA License Package</span>
                <span className="font-medium">$100,000</span>
              </div>
              <div className="flex justify-between text-green-700 dark:text-green-300">
                <span>Savings vs DIY</span>
                <span className="font-bold">$50,000</span>
              </div>
              <div className="flex justify-between text-green-700 dark:text-green-300">
                <span>Time Savings</span>
                <span className="font-bold">6-8 months</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <p className="text-sm text-green-800 dark:text-green-200 font-medium">
                Our turnkey solution eliminates common delays, regulatory mistakes, and operational challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
