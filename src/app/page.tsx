import Link from "next/link";

const TEAMS = [
  { name: "Senior Men's Squad", blurb: "GB representatives at EKC & WKC level." },
  { name: "Senior Women's Squad", blurb: "GB representatives at EKC & WKC level." },
  { name: "Junior Squad", blurb: "Developing the next generation of GB kendoka." },
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

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-red">
              Official Site
            </p>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl">
              GB Kendo Team
            </h1>
            <p className="mt-4 max-w-lg text-white/80">
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
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-bold uppercase tracking-wide hover:border-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex h-64 w-full max-w-md items-center justify-center rounded-lg bg-white/10 text-sm font-medium text-white/60 sm:h-80">
              Banner Photo Placeholder
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
            <div key={team.name} className="rounded-lg border border-neutral-200 p-6">
              <div className="mb-4 h-32 w-full rounded bg-neutral-100" />
              <h3 className="font-bold text-navy">{team.name}</h3>
              <p className="mt-1 text-sm text-neutral-600">{team.blurb}</p>
            </div>
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
        <h2 className="mb-8 text-2xl font-black uppercase tracking-tight text-navy">
          EKC / WKC Medals
        </h2>
        <div className="grid gap-6 sm:grid-cols-4">
          {["Gold", "Silver", "Bronze", "Team"].map((label) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center rounded-lg border border-neutral-200 p-8 text-center"
            >
              <div className="mb-3 h-16 w-16 rounded-full bg-neutral-100" />
              <p className="font-bold text-navy">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-neutral-200 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-center text-xs font-bold uppercase tracking-widest text-neutral-400">
            Affiliated With
          </p>
          <div className="flex justify-center">
            <div className="flex h-20 w-40 items-center justify-center rounded bg-neutral-100 text-sm font-semibold text-neutral-500">
              BKA Logo
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
