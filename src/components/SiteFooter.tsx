
import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container py-10 grid gap-6 md:grid-cols-3">
        <div>
          <p className="font-semibold">Africa Growth Advisors (AGA)</p>
          <p className="text-sm text-muted-foreground mt-2">
            Your gateway to the Kenyan brokerage market. CMA licensing, market entry, and ongoing compliance.
          </p>
        </div>
        <div>
          <p className="font-semibold">Quick Links</p>
          <ul className="mt-2 space-y-2 text-sm">
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            <li><Link to="/process" className="hover:underline">Process</Link></li>
            <li><Link to="/case-studies" className="hover:underline">Case Studies</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Contact</p>
          <p className="text-sm text-muted-foreground mt-2">
            Email: kmukami@hotmail.com
          </p>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Africa Growth Advisors</p>
          <p>Regulatory: Capital Markets Authority (CMA) Kenya expertise</p>
        </div>
      </div>
    </footer>
  );
}
