import Link from "next/link";
import { contact, profile } from "@/data/profile";

function Section({
  id,
  title,
  children
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-4 flex items-end justify-between gap-4">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-100">
          {title}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
      </div>
      {children}
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-sm text-zinc-200">
      {children}
    </span>
  );
}

function Card({
  title,
  subtitle,
  children
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
      <div className="mb-3">
        <div className="text-base font-semibold text-zinc-100">{title}</div>
        {subtitle ? (
          <div className="text-sm text-zinc-400">{subtitle}</div>
        ) : null}
      </div>
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-dvh">
      <header className="sticky top-0 z-40 border-b border-zinc-900/60 bg-zinc-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold text-zinc-100">
              {profile.name}
            </div>
            <div className="truncate text-xs text-zinc-400">{profile.role}</div>
          </div>

          <nav className="hidden items-center gap-5 text-sm text-zinc-300 md:flex">
            <a className="hover:text-white" href="#about">
              About
            </a>
            <a className="hover:text-white" href="#skills">
              Skills
            </a>
            <a className="hover:text-white" href="#projects">
              Projects
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1.5 text-xs font-semibold text-sky-200 hover:bg-sky-400/15"
              href={contact.whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </Link>
            <Link
              className="rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs font-semibold text-zinc-100 hover:bg-zinc-900"
              href={contact.telHref}
            >
              Call
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4">
        <section className="relative py-14">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
            <div className="absolute right-0 top-28 h-[320px] w-[320px] rounded-full bg-indigo-500/10 blur-3xl" />
          </div>

          <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-xs text-zinc-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
                Available for projects
              </div>

              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-4xl">
                {profile.name}
              </h1>
              <p className="mt-2 text-base text-zinc-300">
                {profile.role} • {profile.location}
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-300">
                {profile.summary}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                <Pill>Structural design</Pill>
                <Pill>Architectural drawings</Pill>
                <Pill>AutoCAD</Pill>
                <Pill>Prota</Pill>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                <Link
                  href="#contact"
                  className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
                >
                  Contact me
                </Link>
                <Link
                  href={contact.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm font-semibold text-zinc-100 hover:bg-zinc-900"
                >
                  Chat on WhatsApp
                </Link>
              </div>
            </div>

            <div className="grid gap-3">
              <Card title="Contact">
                <div className="space-y-2 text-sm text-zinc-300">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-zinc-400">Phone</span>
                    <span className="font-semibold text-zinc-100">
                      {profile.phoneE164}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-zinc-400">Email</span>
                    <span className="truncate font-semibold text-zinc-100">
                      {profile.email}
                    </span>
                  </div>
                  <div className="pt-2 flex flex-wrap gap-2">
                    <Link
                      href={contact.telHref}
                      className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs font-semibold text-zinc-100 hover:bg-zinc-900"
                    >
                      Call now
                    </Link>
                    <Link
                      href={contact.whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-200 hover:bg-emerald-400/15"
                    >
                      WhatsApp
                    </Link>
                    <Link
                      href={`mailto:${profile.email}`}
                      className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs font-semibold text-zinc-100 hover:bg-zinc-900"
                    >
                      Email
                    </Link>
                  </div>
                </div>
              </Card>

              <Card title="Education">
                <div className="space-y-3">
                  {profile.education.map((e) => (
                    <div key={e.title} className="text-sm">
                      <div className="font-semibold text-zinc-100">
                        {e.title}
                      </div>
                      <div className="text-zinc-400">{e.institution}</div>
                      <div className="text-zinc-500">{e.location}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        <div className="grid gap-12 pb-16">
          <Section id="about" title="About">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 text-sm leading-relaxed text-zinc-300">
              {profile.summary}
            </div>
          </Section>

          <Section id="skills" title="Skills">
            <div className="grid gap-4 md:grid-cols-2">
              <Card title="Technical skills">
                <div className="flex flex-wrap gap-2">
                  {profile.technicalSkills.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
              </Card>
              <Card title="Professional skills">
                <div className="flex flex-wrap gap-2">
                  {profile.professionalSkills.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
              </Card>
            </div>
          </Section>

          <Section id="projects" title="Project experience">
            <div className="grid gap-4">
              {profile.projects.map((p) => (
                <Card
                  key={p.title}
                  title={p.title}
                  subtitle={p.location ? p.location : undefined}
                >
                  <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-300">
                    {p.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </Section>

          <Section id="contact" title="Contact">
            <div className="grid gap-4 md:grid-cols-2">
              <Card title="Let's work together">
                <div className="text-sm text-zinc-300">
                  <p>
                    Call or message me on WhatsApp for structural drawings,
                    detailing, and planning support.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link
                      href={contact.telHref}
                      className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
                    >
                      Call {profile.phoneE164}
                    </Link>
                    <Link
                      href={contact.whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200 hover:bg-emerald-400/15"
                    >
                      WhatsApp
                    </Link>
                  </div>
                </div>
              </Card>

              <Card title="More details">
                <div className="space-y-3 text-sm text-zinc-300">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-zinc-400">Languages</span>
                    <span className="text-zinc-100">
                      {profile.languages.join(", ")}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-zinc-400">References</span>
                    <span className="text-zinc-100">{profile.references}</span>
                  </div>
                </div>
              </Card>
            </div>
          </Section>
        </div>
      </main>

      <footer className="border-t border-zinc-900/60">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} {profile.name}
          </div>
          <div className="flex gap-3">
            <Link className="hover:text-zinc-300" href={contact.telHref}>
              {profile.phoneE164}
            </Link>
            <Link
              className="hover:text-zinc-300"
              href={contact.whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

