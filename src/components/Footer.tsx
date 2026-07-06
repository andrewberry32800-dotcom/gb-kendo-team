import Link from "next/link";

const USEFUL_LINKS = [
  { label: "Contact Us", href: "/contact" },
  { label: "About Us", href: "/about" },
  { label: "The Teams", href: "/teams" },
  { label: "Documents & Policies", href: "/documents" },
  { label: "Calendar & Location", href: "/calendar" },
];

const RESOURCES = [
  { label: "EKC / WKC Medals", href: "/medals" },
  { label: "Video", href: "/video" },
  { label: "FAQs", href: "/faqs" },
  { label: "British Kendo Association", href: "https://www.kendo.org.uk" },
];

const SOCIALS = ["Facebook", "X", "Instagram", "Pinterest"];

const LEGAL = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Safeguarding", href: "/safeguarding" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white/60">
              Useful Links
            </h3>
            <ul className="space-y-2">
              {USEFUL_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm hover:text-red">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white/60">
              Additional Resources
            </h3>
            <ul className="space-y-2">
              {RESOURCES.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm hover:text-red">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white/60">
              Follow The Team
            </h3>
            <ul className="space-y-2">
              {SOCIALS.map((s) => (
                <li key={s}>
                  <Link href="#" className="text-sm hover:text-red">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white/60">
              Affiliated With
            </h3>
            <div className="flex h-16 w-32 items-center justify-center rounded bg-white/10 text-xs font-semibold text-white/70">
              BKA Logo
            </div>
            <p className="mt-3 text-xs text-white/60">
              BKA squad attendance is at the discretion of the management.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/60">
            Copyright {new Date().getFullYear()} GB Kendo Team
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-xs text-white/60 hover:text-red">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
