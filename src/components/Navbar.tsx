import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const navItems = [
  { to: "/services", label: "Services" },
  { to: "/market-opportunity", label: "Market" },
  { to: "/licensing-process", label: "Process" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const isMobile = useIsMobile();
  return (
    <header className="w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight">
          Africa Growth Advisors
        </Link>
        {!isMobile && (
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm transition-colors ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button asChild>
              <Link to="/contact">Book a Consultation</Link>
            </Button>
          </div>
        )}
        {isMobile && (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="mt-6 flex flex-col gap-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `text-sm transition-colors ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <Button asChild className="mt-2">
                  <Link to="/contact">Book a Consultation</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        )}
      </nav>
    </header>
  );
}
