import { getDictionary, isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { experience } from "@/content/experience";
import { education } from "@/content/education";
import { skills } from "@/content/skills";
import { activities } from "@/content/activities";
import { aboutBio } from "@/content/about";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = await getDictionary(locale);

  return (
    <>
      <Container className="py-24 pb-8">
        <h1 className="mb-8 font-serif text-5xl font-medium tracking-tight sm:text-6xl">
          {dictionary.about.title}
        </h1>
        <div className="flex max-w-2xl flex-col gap-4">
          {aboutBio[locale].map((paragraph) => (
            <p key={paragraph} className="text-lg leading-7 text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>

      <Container className="border-t border-border py-16">
        <h2 className="mb-10 font-serif text-2xl font-medium">
          {dictionary.about.experience}
        </h2>
        <div className="flex flex-col gap-10">
          {experience.map((entry) => (
            <div
              key={`${entry.company}-${entry.dates}`}
              className="grid gap-6 sm:grid-cols-[160px_1fr]"
            >
              <p className="pt-1 text-[13px] text-muted">{entry.dates}</p>
              <div>
                <h3 className="mb-1 font-serif text-xl font-medium">
                  {entry.role[locale]}
                </h3>
                <p className="mb-2.5 text-sm font-semibold text-primary">
                  {entry.company}
                </p>
                <p className="mb-3 text-[15px] leading-6 text-muted">
                  {entry.description[locale]}
                </p>
                {entry.achievements[locale].length > 0 && (
                  <ul className="flex list-disc flex-col gap-1.5 pl-5">
                    {entry.achievements[locale].map((achievement) => (
                      <li
                        key={achievement}
                        className="text-sm leading-6 text-muted"
                      >
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Container className="border-t border-border py-16">
        <h2 className="mb-10 font-serif text-2xl font-medium">
          {dictionary.about.education}
        </h2>
        <div className="flex flex-col gap-9">
          {education.map((entry) => (
            <div
              key={entry.institution}
              className="grid gap-6 sm:grid-cols-[160px_1fr]"
            >
              <p className="pt-1 text-[13px] text-muted">{entry.dates}</p>
              <div>
                <h3 className="mb-1 font-serif text-xl font-medium">
                  {entry.institution}
                </h3>
                <p className="mb-2.5 text-sm font-semibold text-primary">
                  {entry.degree[locale]}
                </p>
                <p className="text-[15px] leading-6 text-muted">
                  {entry.description[locale]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Container className="border-t border-border py-16">
        <h2 className="mb-8 font-serif text-2xl font-medium">
          {dictionary.about.skills}
        </h2>
        <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill.list}>
              <p className="mb-2.5 text-xs font-semibold tracking-[0.04em] text-primary uppercase">
                {skill.name[locale]}
              </p>
              <p className="text-sm leading-6 text-muted">{skill.list}</p>
            </div>
          ))}
        </div>
      </Container>

      <Container className="border-t border-border py-16 pb-24">
        <h2 className="mb-8 font-serif text-2xl font-medium">
          {dictionary.about.activities}
        </h2>
        <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-4">
          {activities.map((activity) => (
            <div key={activity.name.en}>
              <p className="mb-2 font-serif text-lg">
                {activity.name[locale]}
              </p>
              <p className="text-sm leading-6 text-muted">
                {activity.description[locale]}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
