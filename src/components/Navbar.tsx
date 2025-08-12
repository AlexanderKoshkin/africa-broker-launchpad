import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
      </nav>
    </header>
  );
}
