import { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import SiteFooter from "./SiteFooter";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
