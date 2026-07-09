import { Fade } from "react-awesome-reveal";
import type { INotSure, schoolData, workData } from "~/types";

type DetailRecord = Record<string, string>;

function SectionHeading({ label }: { label: string }) {
  return (
    <div className="relative mb-6">
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
          {label}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </div>
  );
}

export function ExperienceSection({ workXp }: { workXp: workData[] }) {
  return (
    <section id="experience" className="mb-16">
      <SectionHeading label="Experience" />
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-secondary/60 via-secondary/30 to-transparent md:-translate-x-1/2" />

        <div className="space-y-10">
          {workXp.map((item, idx) => {
            const isRight = idx % 2 === 1;
            return (
              <Fade
                key={`${item.role}-${idx}`}
                direction={isRight ? "right" : "left"}
                triggerOnce
                fraction={0.2}
              >
                <div
                  className={`relative flex ${
                    isRight ? "md:justify-end" : "md:justify-start"
                  }`}
                >
                  <span className="absolute left-4 md:left-1/2 top-1.5 -translate-x-1/2 flex h-3 w-3 z-10">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary ring-4 ring-surface"></span>
                  </span>

                  <div
                    className={`w-full pl-12 md:pl-0 md:w-[calc(50%-2rem)] ${
                      isRight ? "md:pl-8" : "md:pr-8"
                    }`}
                  >
                    <div className="group relative rounded bg-gradient-to-br from-surface via-surface-elev to-surface p-5 shadow shadow-accent/50 hover:shadow-lg transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative space-y-3">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              {item.icon ? (
                                <i
                                  className={`${item.icon} text-secondary text-base`}
                                />
                              ) : null}
                              <h4 className="text-sm font-bold">{item.role}</h4>
                            </div>
                            <span className="text-xs font-semibold text-primary mt-0.5">
                              {item.company}
                            </span>
                          </div>
                          <span className="text-xs font-medium text-muted whitespace-nowrap px-2 py-1 rounded-full bg-muted/10">
                            {item.date}
                          </span>
                        </div>
                        {item.stack && (
                          <div className="text-xs font-medium text-secondary/90">
                            <span className="font-semibold text-muted">
                              Stack:
                            </span>{" "}
                            {item.stack}
                          </div>
                        )}
                        {item.responsibilities &&
                          item.responsibilities.length > 0 && (
                            <ul className="list-disc pl-4 space-y-1.5 text-xs text-muted leading-relaxed">
                              {item.responsibilities.map(
                                (resp: string, rIdx: number) => (
                                  <li key={rIdx}>{resp}</li>
                                ),
                              )}
                            </ul>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SkillsSection({ skills, detail }: INotSure) {
  const detailRecord = (detail ?? {}) as DetailRecord;

  const detailsItems: Array<{ label: string; value?: string; href?: string }> =
    [
      {
        label: "Website",
        value: detailRecord.website,
        href: detailRecord.website,
      },
      {
        label: "Email",
        value: detailRecord.email,
        href: detailRecord.email ? `mailto:${detailRecord.email}` : undefined,
      },
      {
        label: "Degree",
        value: detailRecord.degree,
      },
      {
        label: "Phone",
        value: detailRecord.phone,
        href: detailRecord.phone ? `tel:${detailRecord.phone}` : undefined,
      },
      {
        label: "City",
        value: detailRecord.city,
      },
      {
        label: "Contract",
        value: detailRecord.contract,
      },
      {
        label: "Freelance",
        value: detailRecord.freelance,
      },
      {
        label: "Full-time",
        value: detailRecord.fulltime,
      },
    ].filter((x) => x.value);

  return (
    <section id="skills" className="mb-16">
      <SectionHeading label="Skills" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group relative rounded rounded-tl-xl bg-gradient-to-br from-surface via-surface-elev to-surface clamp-[p,2,6] shadow shadow-accent/50 hover:shadow-lg transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative">
            <h3 className="text-xl font-bold  mb-4">Details</h3>

            <dl className="space-y-4">
              {detailsItems.map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 items-start group/item"
                >
                  <dt className="w-32 shrink-0 text-sm font-semibold text-muted">
                    {item.label}
                  </dt>
                  <dd className="min-w-0 text-sm ">
                    {item.href ? (
                      <a
                        className="break-words text-primary hover:text-primary-600 underline-offset-2 hover:underline transition-colors"
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noreferrer"
                            : undefined
                        }
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="break-words">{item.value}</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6">
              <h3 className="text-sm font-semibold  mb-2">
                7 days Coding Activity (WakaTime)
              </h3>
              <object
                data="https://wakatime.com/share/@davebenard/e056372a-98c1-46b2-9395-2679d9143448.svg"
                type="image/svg+xml"
                className="w-full h-auto"
                aria-label="WakaTime coding activity chart"
              >
                <img
                  src="https://wakatime.com/share/@davebenard/e056372a-98c1-46b2-9395-2679d9143448.svg"
                  alt="WakaTime coding activity"
                  className="w-full h-auto"
                />
              </object>
            </div>
          </div>
        </div>

        <div className="group relative rounded rounded-tr-xl bg-gradient-to-br from-surface via-surface-elev to-surface clamp-[p,2,6] shadow shadow-accent/50 hover:shadow-lg transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative">
            <h3 className="text-xl font-bold mb-6">Skills</h3>

            <div className="space-y-6">
              {Object.entries(skills ?? {}).map(([category, items]) => (
                <div key={category} className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {(items as string[]).map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-2.5 py-1 rounded bg-primary/10 text-xs font-semibold text-primary border border-primary/20 hover:border-primary/40 hover:bg-primary/20 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold mb-2">
                Coding Activity for the Year (WakaTime)
              </h3>
              <object
                data="https://wakatime.com/share/@davebenard/1131a30c-1e80-43f1-8da4-22b4822a6c73.svg"
                type="image/svg+xml"
                className="w-full h-auto"
                aria-label="WakaTime coding activity chart"
              >
                <img
                  src="https://wakatime.com/share/@davebenard/1131a30c-1e80-43f1-8da4-22b4822a6c73.svg"
                  alt="WakaTime coding activity"
                  className="w-full h-auto"
                />
              </object>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EducationSection({ school }: { school: schoolData[] }) {
  const items = school as unknown as Array<
    schoolData & { link?: string; title: string }
  >;
  const degree = items.find((item) => item.title === "University");
  const certifications = items.filter((item) => item.title !== "University");

  return (
    <section id="education" className="mb-16">
      <SectionHeading label="Education" />

      <div className="space-y-6">
        {degree ? (
          <div className="group relative rounded bg-gradient-to-br from-surface via-surface-elev to-surface clamp-[p,2,6] shadow shadow-accent/50 hover:shadow-lg transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-primary/10 border border-primary/20">
                <i className="pi pi-graduation-cap text-primary text-xl" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <h3 className="text-lg font-bold">{degree.name}</h3>
                  <span className="text-xs font-medium text-muted whitespace-nowrap px-2 py-1 rounded-full bg-muted/10">
                    {degree.date}
                  </span>
                </div>
                <p className="text-sm text-muted mt-1">Bsc. Computer Science</p>
              </div>
            </div>
          </div>
        ) : null}

        {certifications.length > 0 ? (
          <div className="group relative rounded bg-gradient-to-br from-surface via-surface-elev to-surface clamp-[p,2,6] shadow shadow-accent/50 hover:shadow-lg transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted mb-4">
                Certifications
              </h3>
              <div className="flex flex-wrap gap-3">
                {certifications.map((item, idx) => (
                  <a
                    key={`${item.name}-${idx}`}
                    href={item.link || undefined}
                    target={item.link ? "_blank" : undefined}
                    rel={item.link ? "noreferrer" : undefined}
                    className={`inline-flex items-center gap-2 rounded border border-accent/70 bg-surface px-3 py-2 text-xs font-medium transition-all ${
                      item.link
                        ? "hover:border-primary hover:text-primary cursor-pointer"
                        : "cursor-default"
                    }`}
                  >
                    <i className="pi pi-verified text-primary text-sm" />
                    <span>{item.name}</span>
                    <span className="text-muted">· {item.date}</span>
                    {item.link ? (
                      <i className="pi pi-external-link text-[10px] text-muted" />
                    ) : null}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
