import type { INotSure, schoolData, stackData, workData } from "~/types";

type DetailRecord = Record<string, string>;

function About({ stack, workXp, school, detail }: INotSure) {
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
    <section id="about" className="mb-16">
      <div className="relative mb-6">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
            Experience & Skills
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="group relative rounded-2xl border border-accent/50 bg-gradient-to-br from-surface via-surface-elev to-surface p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative">
            <h3 className="text-xl font-bold text-text mb-4">Details</h3>

            <dl className="space-y-4">
              {detailsItems.map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 items-start group/item"
                >
                  <dt className="w-32 shrink-0 text-sm font-semibold text-muted">
                    {item.label}
                  </dt>
                  <dd className="min-w-0 text-sm text-text">
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
              <h3 className="text-sm font-semibold text-text mb-2">
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

        <div className="group relative rounded-2xl border border-accent/50 bg-gradient-to-br from-surface via-surface-elev to-surface p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative">
            <h3 className="text-xl font-bold text-text mb-4">Stack</h3>

            <div className="space-y-4">
              {(stack as stackData[]).map((el, i) => (
                <div key={`${el.name}-${i}`}>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="text-sm font-medium text-text">
                      {el.name}
                    </span>
                    <span className="text-xs font-semibold text-primary">
                      {el.progress}%
                    </span>
                  </div>
                  <div className="h-2.5 w-full bg-border/30 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${Math.max(0, Math.min(100, el.progress))}%`,
                      }}
                      aria-label={`${el.name} proficiency`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <img
                src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                alt="HTML5"
                className="h-7"
              />
              <img
                src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                alt="CSS3"
                className="h-7"
              />
              <img
                src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
                alt="JavaScript"
                className="h-7"
              />
              <img
                src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
                alt="TypeScript"
                className="h-7"
              />
              <img
                src="https://img.shields.io/badge/React-blue?style=for-the-badge&logo=react&logoColor=white"
                alt="React"
                className="h-7"
              />
              <img
                src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
                alt="Node.js"
                className="h-7"
              />
              <img
                src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white"
                alt="Python"
                className="h-7"
              />
              <img
                src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"
                alt="PostgreSQL"
                className="h-7"
              />
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-semibold text-text mb-2">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="group relative rounded-2xl border border-accent/50 bg-gradient-to-br from-surface via-surface-elev to-surface p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative">
            <h3 className="text-xl font-bold text-text mb-6">Education</h3>
            <ul className="border-l-2 border-primary/30 pl-6 space-y-6">
              {(school as schoolData[]).map((item, idx) => {
                const link = (item as unknown as { link?: string }).link;
                return (
                  <li key={`${item.title}-${idx}`} className="relative">
                    <span className="absolute -left-[1.6rem] top-1 flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary ring-4 ring-surface"></span>
                    </span>
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2">
                          {item.icon ? (
                            <i
                              className={`${item.icon} text-primary text-lg`}
                            />
                          ) : null}
                          <h4 className="text-sm font-semibold text-text">
                            {item.title}
                          </h4>
                        </div>
                        <span className="text-xs font-medium text-muted whitespace-nowrap px-2 py-1 rounded-full bg-muted/10">
                          {item.date}
                        </span>
                      </div>
                      <p className="text-sm text-muted">{item.name}</p>
                      {link ? (
                        <a
                          href={link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary-600 font-medium transition-colors"
                        >
                          Verify <i className="pi pi-external-link text-xs" />
                        </a>
                      ) : null}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="group relative rounded-2xl border border-accent/50 bg-gradient-to-br from-surface via-surface-elev to-surface p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative">
            <h3 className="text-xl font-bold text-text mb-6">Experience</h3>
            <ul className="border-l-2 border-secondary/30 pl-6 space-y-6">
              {(workXp as workData[]).map((item, idx) => (
                <li key={`${item.role}-${idx}`} className="relative">
                  <span className="absolute -left-[1.6rem] top-1 flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary ring-4 ring-surface"></span>
                  </span>
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2">
                        {item.icon ? (
                          <i
                            className={`${item.icon} text-secondary text-lg`}
                          />
                        ) : null}
                        <h4 className="text-sm font-semibold text-text">
                          {item.role}
                        </h4>
                      </div>
                      <span className="text-xs font-medium text-muted whitespace-nowrap px-2 py-1 rounded-full bg-muted/10">
                        {item.date}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
