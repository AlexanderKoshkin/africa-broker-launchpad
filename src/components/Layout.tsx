
import { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import SiteFooter from "./SiteFooter";
import MobileCTA from "./MobileCTA";
import MigrationBanner from "./MigrationBanner";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <MigrationBanner />
      <Navbar />
      <main className="flex-1 pb-20 md:pb-0">
        {children}
      </main>
      <SiteFooter />
      <MobileCTA />
    </div>
  );
}
