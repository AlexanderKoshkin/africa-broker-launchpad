
export default function ProcessTimeline() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold mb-6">Process & Timeline</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border p-6 text-center">
          <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
          <h3 className="text-lg font-semibold mb-2">Foundation</h3>
          <p className="text-sm text-muted-foreground">Documentation & setup</p>
          <p className="text-xs text-muted-foreground mt-1">4-6 weeks</p>
        </div>
        <div className="rounded-lg border p-6 text-center">
          <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
          <h3 className="text-lg font-semibold mb-2">Processing</h3>
          <p className="text-sm text-muted-foreground">CMA review & approval</p>
          <p className="text-xs text-muted-foreground mt-1">12-24 weeks</p>
        </div>
        <div className="rounded-lg border p-6 text-center">
          <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
          <h3 className="text-lg font-semibold mb-2">Launch</h3>
          <p className="text-sm text-muted-foreground">Final setup & go-live</p>
          <p className="text-xs text-muted-foreground mt-1">5-6 weeks</p>
        </div>
      </div>
    </section>
  );
}
