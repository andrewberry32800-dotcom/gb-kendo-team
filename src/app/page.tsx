import Image from "next/image";
import Link from "next/link";

const TEAMS = [
  {
    name: "Senior Men's Squad",
    blurb: "GB representatives at EKC & WKC level.",
    image: "/images/kon-silver.jpg",
    alt: "Two GB kendoka crossing shinai before a match",
  },
  {
    name: "Senior Women's Squad",
    blurb: "GB representatives at EKC & WKC level.",
    image: "/images/miyabi.jpeg",
    alt: "GB squad member holding a championship certificate",
  },
  {
    name: "Junior Squad",
    blurb: "Developing the next generation of GB kendoka.",
    image: "/images/junior-ekc.jpeg",
    alt: "Three GB junior squad members in kendo armour",
  },
];

const NEWS = [
  {
    title: "Squad announced for the next EKC qualifiers",
    date: "June 2026",
  },
  {
    title: "New training calendar published for the season",
    date: "May 2026",
  },
  {
    title: "GB Kendo Team documents & policies updated",
    date: "April 2026",
  },
];

const MEDAL_HIGHLIGHTS = [
  {
    image: "/images/jwke-wkc.jpeg",
    alt: "Two GB squad members with WKC certificates",
    caption: "WKC Fighting Spirit",
  },
  {
    image: "/images/kon-silver.jpg",
    alt: "GB kendoka before a championship final",
    caption: "EKC Silver",
  },
  {
    image: "/images/miyabi.jpeg",
    alt: "GB squad member with championship certificate",
    caption: "WKC Recognition",
  },
  {
    image: "/images/junior-ekc.jpeg",
    alt: "GB junior squad members at the European Championships",
    caption: "Junior EKC Squad",
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-navy text-white">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-red">
              Official Site
            </p>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl">
              GB Kendo Team
            </h1>
            <p className="mt-4 max-w-lg text-white/90">
              Representing Great Britain in kendo at European and World
              Championship level, under the British Kendo Association.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/teams"
                className="rounded-full bg-red px-6 py-3 text-sm font-bold uppercase tracking-wide hover:bg-red/90"
              >
                Meet The Teams
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/60 px-6 py-3 text-sm font-bold uppercase tracking-wide hover:border-white hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-black uppercase tracking-tight text-navy">
            The Teams
          </h2>
          <Link href="/teams" className="text-sm font-semibold text-red hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {TEAMS.map((team) => (
            <Link
              key={team.name}
              href="/teams"
              className="group overflow-hidden rounded-lg border border-neutral-200 transition-shadow hover:shadow-md"
            >
              <div className="relative h-56 w-full overflow-hidden bg-neutral-100">
                <Image
                  src={team.image}
                  alt={team.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-navy group-hover:text-red">
                  {team.name}
                </h3>
                <p className="mt-1 text-sm text-neutral-600">{team.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-2xl font-black uppercase tracking-tight text-navy">
              Latest News
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {NEWS.map((item) => (
              <article key={item.title} className="rounded-lg bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-red">
                  {item.date}
                </p>
                <h3 className="mt-2 font-bold text-navy">{item.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-black uppercase tracking-tight text-navy">
            EKC / WKC Medals
          </h2>
          <Link href="/medals" className="text-sm font-semibold text-red hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {MEDAL_HIGHLIGHTS.map((item) => (
            <Link
              key={item.caption}
              href="/medals"
              className="group overflow-hidden rounded-lg border border-neutral-200 transition-shadow hover:shadow-md"
            >
              <div className="relative h-48 w-full overflow-hidden bg-neutral-100 sm:h-56">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="p-4 text-center text-sm font-bold text-navy group-hover:text-red">
                {item.caption}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-navy py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left lg:px-8">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tight">
              Support the GB Kendo Team
            </h2>
            <p className="mt-2 max-w-xl text-white/80">
              The squad is self-funded — sponsorship and donations put Great
              Britain on the world stage.
            </p>
          </div>
          <Link
            href="/sponsorship"
            className="shrink-0 rounded-full bg-red px-6 py-3 text-sm font-bold uppercase tracking-wide hover:bg-[#a30d26]"
          >
            Become a Sponsor
          </Link>
        </div>
      </section>

      <section className="border-t border-neutral-200 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-center text-xs font-bold uppercase tracking-widest text-neutral-400">
            Affiliated With
          </p>
          <div className="flex justify-center">
            <Image
              src="/images/bka-logo.png"
              alt="British Kendo Association"
              width={102}
              height={65}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
