"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "The Teams",
    href: "/teams",
    children: [
      { label: "Squad Profiles", href: "/teams#profiles" },
      { label: "Management & Coaching Staff", href: "/teams#staff" },
    ],
  },
  { label: "Medals", href: "/medals" },
  { label: "Video", href: "/video" },
  { label: "Documents", href: "/documents" },
  { label: "Calendar", href: "/calendar" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-navy text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/gb-kendo-logo.png"
            alt="GB Kendo Squad"
            width={138}
            height={64}
            priority
            className="h-12 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
              onFocus={() => setOpenDropdown(item.label)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                  setOpenDropdown(null);
                }
              }}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 whitespace-nowrap px-3 py-2 text-sm font-semibold uppercase tracking-wide hover:text-red focus-visible:text-red"
              >
                {item.label}
                {item.children && (
                  <span aria-hidden className="text-[10px]">
                    ▾
                  </span>
                )}
              </Link>
              {item.children && openDropdown === item.label && (
                <div className="absolute left-0 top-full min-w-56 rounded-b-md bg-white py-2 text-navy shadow-lg">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block whitespace-nowrap px-4 py-2 text-sm font-medium hover:bg-neutral-100 hover:text-red focus-visible:bg-neutral-100 focus-visible:text-red"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-full bg-red px-5 py-2 text-sm font-bold uppercase tracking-wide hover:bg-red/90"
          >
            Join the Squad
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/30 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span aria-hidden>{mobileOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-navy lg:hidden">
          <nav className="flex flex-col px-4 py-2">
            {NAV.map((item) => (
              <div key={item.label} className="border-b border-white/10 py-2">
                <Link
                  href={item.href}
                  className="block py-1 text-sm font-semibold uppercase tracking-wide"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="mt-1 flex flex-col pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="py-1.5 text-sm text-white/70"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="my-3 rounded-full bg-red px-5 py-2.5 text-center text-sm font-bold uppercase tracking-wide"
              onClick={() => setMobileOpen(false)}
            >
              Join the Squad
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
