import { Key, useEffect, useState } from "react";
import Main from "~/components/Main";
import data from "~/data/data.json";
import { dataType } from "~/types";
import { EducationSection, ExperienceSection, SkillsSection } from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

function Home() {
  const [value, setValue] = useState<dataType | undefined>();

  useEffect(() => {
    setValue(data);
  }, []);

  if (!value) return null;

  const {
    school,
    workXp,
    desc2,
    desc3,
    subtitle,
    title,
    skills,
    detail,
    portfolio,
  } = value;

  return (
    <div className="container content mx-auto">
      <Main />
      <main className="w-full mb-16">
        <div className="relative mb-6">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
              About Me
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
        </div>

        <section
          aria-label="About"
          className="group relative rounded bg-gradient-to-br from-surface via-surface-elev to-surface clamp-[p,2,6] shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative">
            <div className="mb-6">
              <h3 className="text-2xl font-bold  mb-3">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {subtitle?.map((el: string, i: Key) => (
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20"
                    key={i}
                  >
                    {el}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3 text-muted leading-relaxed">
              <p>{desc2}</p>
              <p>{desc3}</p>
            </div>
          </div>
        </section>
      </main>
      <ExperienceSection workXp={workXp} />
      <SkillsSection skills={skills} detail={detail} />
      <Portfolio portfolio={portfolio} />
      <EducationSection school={school} />
      <Contact />
    </div>
  );
}

export default Home;
