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
  { label: "Sponsorship", href: "/sponsorship" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black text-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center" aria-label="GB Kendo Team home">
          <Image
            src="/images/gb-kendo-logo.png"
            alt="GB Kendo Squad"
            width={138}
            height={64}
            priority
            className="h-14 w-auto"
          />
        </Link>

        <nav className="hidden h-full items-stretch xl:flex" aria-label="Main">
          {NAV.map((item) => (
            <div
              key={item.label}
              className="relative flex items-stretch"
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
                className={`relative flex items-center gap-1.5 whitespace-nowrap px-4 text-[13px] font-bold uppercase tracking-widest transition-colors hover:text-white ${
                  openDropdown === item.label ? "text-white" : "text-white/70"
                }`}
              >
                {item.label}
                {item.children && (
                  <svg
                    aria-hidden
                    viewBox="0 0 10 6"
                    className={`h-1.5 w-2.5 fill-none stroke-current stroke-2 transition-transform ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M1 1l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                <span
                  className={`absolute inset-x-4 bottom-0 h-0.5 rounded-full bg-red transition-opacity ${
                    openDropdown === item.label ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
              {item.children && openDropdown === item.label && (
                <div className="absolute left-0 top-full min-w-64 border-t-2 border-red bg-white py-2 text-neutral-900 shadow-xl">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block whitespace-nowrap px-5 py-2.5 text-sm font-semibold hover:bg-neutral-100 hover:text-red focus-visible:bg-neutral-100 focus-visible:text-red"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden shrink-0 xl:block">
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-full bg-red px-6 py-2.5 text-[13px] font-bold uppercase tracking-widest transition-colors hover:bg-[#a30d26]"
          >
            Join the Squad
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md text-white/90 hover:bg-white/10 xl:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-2">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-black xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6" aria-label="Main">
            {NAV.map((item) => (
              <div key={item.label} className="border-b border-white/10">
                <Link
                  href={item.href}
                  className="block py-3.5 text-sm font-bold uppercase tracking-widest text-white/90"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="flex flex-col pb-3 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="py-2 text-sm font-medium text-white/60"
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
              className="my-4 rounded-full bg-red px-6 py-3 text-center text-sm font-bold uppercase tracking-widest"
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
