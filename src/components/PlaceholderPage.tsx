import Image from "next/image";

export default function PlaceholderPage({
  title,
  description,
  sections = [],
}: {
  title: string;
  description: string;
  sections?: { id?: string; heading: string; body: string }[];
}) {
  return (
    <div>
      <section className="relative overflow-hidden bg-navy py-16 text-white">
        <Image
          src="/images/page-header.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-50"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 max-w-2xl text-white/90">{description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-12 px-4 py-16 sm:px-6 lg:px-8">
        {sections.length > 0 ? (
          sections.map((s) => (
            <div key={s.heading} id={s.id}>
              <h2 className="mb-3 text-xl font-bold text-navy">{s.heading}</h2>
              <p className="text-neutral-600">{s.body}</p>
            </div>
          ))
        ) : (
          <p className="text-neutral-500">Content coming soon.</p>
        )}
      </section>
    </div>
  );
}
