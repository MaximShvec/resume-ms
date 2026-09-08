import { Reveal } from "@/components/motion/reveal";
import { ErrorBoundary } from "@/components/providers/error-boundary";
import { ContactForm } from "@/components/resume/contact-form";
import { GithubPresence } from "@/components/resume/github-presence";
import { Section } from "@/components/ui/section";
import { TextLink } from "@/components/ui/text-link";
import {
  about,
  award,
  contacts,
  experience,
  ndaNote,
  profile,
  projects,
  reasons,
  skills,
} from "@/lib/resume";
import type { GithubProfile } from "@/lib/types";

type ResumeViewProps = {
  githubProfile: GithubProfile | null;
};

export function ResumeView({ githubProfile }: ResumeViewProps) {
  return (
    <main className="mx-auto my-10 w-[min(1080px,calc(100%-2.5rem))] border border-line bg-paper px-6 py-8 sm:px-10 sm:py-12 md:my-14">
      <Reveal>
        <header className="mb-10 grid gap-x-14 border-b border-line pb-8 md:grid-cols-[17.5rem_minmax(0,1fr)]">
          <p className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.28em] md:col-start-2 md:text-right">
            {profile.role}
          </p>
          <h1 className="font-display text-[clamp(2.8rem,8vw,4.6rem)] font-medium uppercase leading-[0.95] tracking-[-0.03em] md:col-start-2">
            {profile.name[0]}
            <br />
            {profile.name[1]}
          </h1>
        </header>
      </Reveal>

      <div className="grid gap-x-14 md:grid-cols-[17.5rem_minmax(0,1fr)]">
        <aside className="md:border-b-0">
          <Reveal>
            <Section id="about" title="О себе">
              <div className="grid gap-3.5">
                {about.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </Section>
          </Reveal>

          <Reveal delay={0.06}>
            <Section id="contacts" title="Контакты">
              <ul className="grid gap-2">
                {contacts.map((contact) => (
                  <li key={contact.kind} className="grid grid-cols-[1.6rem_1fr] items-baseline gap-2">
                    <span className="text-[0.72rem] font-bold tracking-wider" aria-hidden>
                      {contact.label}
                    </span>
                    <TextLink
                      href={contact.href}
                      external={contact.kind === "telegram"}
                      className="break-all"
                    >
                      {contact.value}
                    </TextLink>
                  </li>
                ))}
              </ul>
              <ErrorBoundary>
                <GithubPresence initialProfile={githubProfile} />
              </ErrorBoundary>
            </Section>
          </Reveal>

          <Reveal delay={0.1}>
            <Section id="awards" title="Награды">
              <article>
                <h3 className="mb-1 text-[0.92rem] font-bold uppercase tracking-wide">
                  {award.title}
                </h3>
                <p className="mb-3 text-[0.86rem] text-muted">{award.meta}</p>
                <p>{award.text}</p>
              </article>
            </Section>
          </Reveal>

          <Reveal delay={0.14}>
            <Section
              id="skills"
              title="Навыки"
              className="mb-10 border-b border-line pb-10 md:mb-0 md:border-b-0 md:pb-0"
            >
              <dl className="grid gap-4">
                {skills.map((group) => (
                  <div key={group.title}>
                    <dt className="mb-1 text-[0.92rem] font-bold uppercase tracking-wide">
                      {group.title}
                    </dt>
                    <dd className="text-muted">{group.items}</dd>
                  </div>
                ))}
              </dl>
            </Section>
          </Reveal>
        </aside>

        <div>
          <Reveal>
            <Section id="experience" title="Опыт работы">
              <div className="grid">
                {experience.map((job, index) => (
                  <article
                    key={`${job.title}-${job.place}`}
                    className={index === 0 ? undefined : "mt-7 border-t border-line pt-7"}
                  >
                    <h3 className="mb-1 text-[0.92rem] font-bold uppercase tracking-wide">
                      {job.title}
                    </h3>
                    <p className="mb-3 text-[0.86rem] text-muted">{job.place}</p>
                    <p>{job.summary}</p>
                    <ul className="mt-3.5 grid gap-2">
                      {job.highlights.map((item) => (
                        <li key={item} className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-1.5 before:bg-ink">
                          {item.includes("specials.sports.ru") ? (
                            <>
                              Верстал промо-страницы и спецпроекты (
                              <TextLink href="https://specials.sports.ru/nachtostavish/" external>
                                specials.sports.ru/nachtostavish/
                              </TextLink>
                              )
                            </>
                          ) : (
                            item
                          )}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </Section>
          </Reveal>

          <Reveal>
            <Section id="projects" title="Проекты">
              <ul className="grid gap-4">
                {projects.map((project) => (
                  <li key={project.href} className="motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:translate-x-1">
                    <TextLink href={project.href} external className="font-semibold">
                      {project.host}
                    </TextLink>
                    <p className="mt-0.5 text-muted">{project.description}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[0.9rem] text-muted">{ndaNote}</p>
            </Section>
          </Reveal>

          <Reveal>
            <Section id="comfort" title="Почему со мной комфортно работать">
              <ul className="grid gap-2">
                {reasons.map((reason) => (
                  <li
                    key={reason.title}
                    className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-1.5 before:bg-ink"
                  >
                    <strong>{reason.title}</strong> — {reason.text}
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Готов обсудить ваш проект в Telegram или по телефону{" "}
                <TextLink href={`tel:${profile.phoneHref}`}>{profile.phoneDisplay}</TextLink>
              </p>
              <h3 className="mt-8 text-[0.92rem] font-bold uppercase tracking-wide">
                Написать
              </h3>
              <ContactForm />
            </Section>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
