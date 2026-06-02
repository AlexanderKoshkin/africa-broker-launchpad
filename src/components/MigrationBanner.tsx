import { useEffect, useState } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "migration-banner-dismissed-aga-licensing";

export default function MigrationBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY) !== "1") {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
    setVisible(false);
  };

  return (
    <div className="w-full bg-slate-900 text-slate-100 text-sm">
      <div className="container flex items-center justify-between gap-4 py-2">
        <p className="flex-1 text-center">
          We've moved. Visit our new site at{" "}
          <a
            href="https://aga-licensing.com"
            className="underline underline-offset-2 font-medium hover:text-white"
          >
            aga-licensing.com
          </a>{" "}
          for the latest content.
        </p>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss"
          className="shrink-0 rounded p-1 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}