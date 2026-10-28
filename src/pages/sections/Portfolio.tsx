import { useMemo, useState } from "react";
import ProjectModal from "~/components/ProjectModal";
import SectionHeading from "~/components/SectionHeading";
import { portfolioData } from "~/types";

type PortfolioProps = {
  portfolio: portfolioData[];
};

const Portfolio: React.FC<PortfolioProps> = ({ portfolio }) => {
  const [visible, setVisible] = useState<portfolioData | null>(null);
  const [activeFilter, setActiveFilter] = useState<"all" | "web" | "hobby">(
    "all",
  );
  const [loadedBySrc, setLoadedBySrc] = useState<Record<string, boolean>>({});

  const filteredPortfolio = useMemo(() => {
    if (activeFilter === "all") return portfolio;
    return portfolio.filter((p) => p.category === activeFilter);
  }, [activeFilter, portfolio]);

  return (
    <section className="section mb-16" id="portfolio">
      <ProjectModal project={visible} onClose={() => setVisible(null)} />

      <SectionHeading eyebrow="Selected work" label="Projects" />

      <div className="relative rounded-xl border border-border bg-gradient-to-br from-surface via-surface-elev to-surface clamp-[p,2,6] shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300" />

        <div className="relative">
          <p className="mb-8 text-center text-muted">
            A selection of projects I've built and shipped. Click any card for details.
          </p>

          <div
            id="filter"
            className="mb-8 flex flex-wrap gap-3 justify-center hidden"
          >
            {[
              { label: "All", value: "all" },
              { label: "Web-Apps", value: "web" },
              { label: "Personal", value: "hobby" },
            ].map((btn) => (
              <button
                key={btn.value}
                type="button"
                aria-pressed={activeFilter === btn.value}
                className={
                  activeFilter === btn.value
                    ? "rounded bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-primary/25"
                    : "rounded border-2 border-accent bg-surface px-4 py-2 text-sm font-medium  hover:border-primary hover:bg-primary/5 transition-all"
                }
                onClick={() =>
                  setActiveFilter(btn.value as "all" | "web" | "hobby")
                }
              >
                {btn.label}
              </button>
            ))}
          </div>
          <div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            id="portfolioItem"
            style={{ cursor: "pointer" }}
          >
            {filteredPortfolio.map((item: portfolioData, i: number) => (
              <div
                key={i}
                role="button"
                tabIndex={0}
                className="group relative overflow-hidden rounded-xl border border-border bg-surface-elev p-0 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-primary animate-zoom-in"
                style={{ animationDelay: `${i * 80}ms` }}
                onClick={() => setVisible(item)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setVisible(item);
                  }
                }}
              >
                <div className="relative overflow-hidden">
                  {loadedBySrc[item.image] ? null : (
                    <div className="h-40 w-full animate-pulse bg-gradient-to-br from-border/40 to-border/20" />
                  )}

                  <img
                    src={item.image}
                    alt={`${item.name}`}
                    onLoad={() =>
                      setLoadedBySrc((prev) => ({
                        ...prev,
                        [item.image]: true,
                      }))
                    }
                    style={{
                      display: loadedBySrc[item.image] ? "block" : "none",
                    }}
                    className="h-40 w-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <span className="absolute top-3 right-3 rounded-full bg-black/60 backdrop-blur px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                    {item.category}
                  </span>
                </div>

                <div className="p-4 text-left space-y-2">
                  <h4 className="text-base font-semibold group-hover:text-primary transition-colors">
                    {item.name}
                  </h4>
                  {item.role ? (
                    <p className="text-xs font-medium text-primary">
                      {item.role}
                    </p>
                  ) : null}
                  {item.description ? (
                    <p className="text-xs text-muted leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  ) : null}
                  {item.tech ? (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.tech
                        .split(",")
                        .slice(0, 3)
                        .map((t: string) => (
                          <span
                            key={t}
                            className="inline-flex items-center px-2 py-0.5 rounded bg-primary/10 text-[10px] font-medium text-primary border border-primary/20"
                          >
                            {t.trim()}
                          </span>
                        ))}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
