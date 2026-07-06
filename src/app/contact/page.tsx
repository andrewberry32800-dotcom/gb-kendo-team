import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <div>
      <section className="bg-navy py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-3 max-w-2xl text-white/80">
            Get in touch with the GB Kendo Team.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="mb-4 text-xl font-bold text-navy">Details</h2>
          <dl className="space-y-3 text-neutral-700">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                Email
              </dt>
              <dd>
                <a
                  href="mailto:info@gbkendoteam.uk"
                  className="text-navy underline hover:text-red"
                >
                  info@gbkendoteam.uk
                </a>
              </dd>
            </div>
          </dl>
          <p className="mt-6 text-sm text-neutral-500">
            The form below is a preview and does not send messages yet — please
            email us directly for now.
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-neutral-700" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-navy focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-neutral-700" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-navy focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-neutral-700" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-navy focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-red px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-red/90"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
