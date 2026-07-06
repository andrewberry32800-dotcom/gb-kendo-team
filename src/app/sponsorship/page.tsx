import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Sponsorship & Fundraising" };

const STATS = [
  { value: "XX", label: "Squad members across three teams" },
  { value: "XX", label: "Countries competed in" },
  { value: "X,XXX", label: "Social media followers" },
  { value: "XX", label: "EKC / WKC medals won" },
];

const TIERS = [
  {
    name: "Bronze Partner",
    price: "From £XXX / season",
    featured: false,
    benefits: [
      "Logo on the website partners page",
      "Thank-you post on team social media",
      "Sponsor certificate",
    ],
  },
  {
    name: "Gold Partner",
    price: "From £X,XXX / season",
    featured: true,
    benefits: [
      "Logo on team kit and banners at events",
      "Logo on website homepage and partners page",
      "Dedicated social media features each season",
      "Named sponsor of a squad or competition",
      "Invitations to squad events and championships",
    ],
  },
  {
    name: "Silver Partner",
    price: "From £XXX / season",
    featured: false,
    benefits: [
      "Logo on website homepage and partners page",
      "Regular social media mentions",
      "Logo on event programmes",
      "Invitation to an annual squad event",
    ],
  },
];

const OTHER_WAYS = [
  {
    title: "One-off Donations",
    body: "Individual contributions towards squad travel, entry fees, and equipment. Every donation goes directly to the athletes.",
  },
  {
    title: "Kit & Travel Sponsorship",
    body: "Cover a specific cost — a set of team zekken, flights to a championship, or training venue hire — and be credited for it.",
  },
  {
    title: "Fundraising Events",
    body: "Charity taikai, sponsored gradings, and open seminars run by the squad. Attend, take part, or help us host one.",
  },
  {
    title: "Dojo & Club Support",
    body: "Clubs can support the national squad through affiliation, hosting squad training, or collections at local events.",
  },
];

export default function SponsorshipPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-navy py-20 text-white">
        <Image
          src="/images/page-header.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-50"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-red">
            Support the Team
          </p>
          <h1 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
            Sponsorship & Fundraising
          </h1>
          <p className="mt-4 max-w-2xl text-white/90">
            The GB Kendo Team is self-funded. Athletes cover their own
            training, travel, and competition costs. Your support puts Great
            Britain on the world stage.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#packages"
              className="rounded-full bg-red px-6 py-3 text-sm font-bold uppercase tracking-wide hover:bg-[#a30d26]"
            >
              View Packages
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/60 px-6 py-3 text-sm font-bold uppercase tracking-wide hover:border-white hover:bg-white/10"
            >
              Get the Sponsor Pack
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-black uppercase tracking-tight text-navy">
          The Opportunity
        </h2>
        <p className="mt-3 max-w-3xl text-neutral-600">
          Kendo is a growing sport in the UK with a dedicated national and
          international community. Partnering with the GB Kendo Team puts your
          brand in front of that audience at every squad session, championship,
          and broadcast.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-lg border border-neutral-200 p-6 text-center"
            >
              <p className="text-4xl font-black text-red">{s.value}</p>
              <p className="mt-2 text-sm text-neutral-600">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-neutral-400">
          Placeholder figures — to be replaced with real squad and audience
          numbers.
        </p>
      </section>

      <section id="packages" className="scroll-mt-24 bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black uppercase tracking-tight text-navy">
            Sponsorship Packages
          </h2>
          <p className="mt-3 max-w-3xl text-neutral-600">
            Three partnership levels, each running for a full season. Packages
            can be tailored — talk to us about what matters to your brand.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`flex flex-col rounded-lg bg-white p-8 ${
                  tier.featured
                    ? "order-first border-2 border-red shadow-lg lg:order-none lg:-my-2"
                    : "border border-neutral-200"
                }`}
              >
                {tier.featured && (
                  <p className="mb-3 self-start rounded-full bg-red px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    Headline Tier
                  </p>
                )}
                <h3 className="text-xl font-black uppercase tracking-tight text-navy">
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-red">{tier.price}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.benefits.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-neutral-600">
                      <span aria-hidden className="mt-0.5 font-bold text-red">
                        ✓
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 rounded-full px-6 py-2.5 text-center text-sm font-bold uppercase tracking-wide ${
                    tier.featured
                      ? "bg-red text-white hover:bg-[#a30d26]"
                      : "border border-navy text-navy hover:bg-navy hover:text-white"
                  }`}
                >
                  Enquire
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-black uppercase tracking-tight text-navy">
          Other Ways to Support
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {OTHER_WAYS.map((w) => (
            <div key={w.title} className="rounded-lg border border-neutral-200 p-6">
              <h3 className="font-bold text-navy">{w.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black uppercase tracking-tight text-navy">
            Our Partners
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            <div className="flex h-28 items-center justify-center rounded-lg border border-neutral-200 bg-white p-4">
              <Image
                src="/images/bka-logo.png"
                alt="British Kendo Association"
                width={102}
                height={65}
                className="max-h-full w-auto object-contain"
              />
            </div>
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="flex h-28 items-center justify-center rounded-lg border border-dashed border-neutral-300 bg-white p-4"
              >
                <p className="text-center text-xs font-semibold uppercase tracking-wide text-neutral-400">
                  Your logo here
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-navy py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black uppercase tracking-tight">
            Become a Partner
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">
            Request the full sponsorship pack — packages, audience figures, and
            what your support makes possible — or talk to us about a tailored
            partnership.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info@gbkendoteam.uk?subject=Sponsorship%20enquiry"
              className="rounded-full bg-red px-6 py-3 text-sm font-bold uppercase tracking-wide hover:bg-[#a30d26]"
            >
              Email the Team
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-white/60 px-6 py-3 text-sm font-bold uppercase tracking-wide hover:border-white hover:bg-white/10"
            >
              Contact Form
            </Link>
          </div>
          <p className="mt-6 text-xs text-white/50">
            Downloadable sponsor pack (PDF) will be linked here.
          </p>
        </div>
      </section>
    </div>
  );
}
