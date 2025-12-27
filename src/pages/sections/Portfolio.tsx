import { Key, useMemo, useState } from "react";
import { AppImage } from "~/components";
import { portfolioData } from "~/types";

type PortfolioProps = {
  portfolio: portfolioData[];
};

const Portfolio: React.FC<PortfolioProps> = ({ portfolio }) => {
  const [visible, setVisible] = useState<portfolioData | null>(null);
  const [activeFilter, setActiveFilter] = useState<"all" | "web" | "hobby">(
    "all"
  );
  const [loadedBySrc, setLoadedBySrc] = useState<Record<string, boolean>>({});

  const filteredPortfolio = useMemo(() => {
    if (activeFilter === "all") return portfolio;
    return portfolio.filter((p) => p.category === activeFilter);
  }, [activeFilter, portfolio]);

  return (
    <section className="section mb-16" id="portfolio">
      {/* Tailwind modal (replaces PrimeReact Dialog) */}
      {visible ? (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={visible.name}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setVisible(null);
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="relative w-full max-w-5xl rounded-xl border border-accent/70 bg-surface-elev/95 text-text shadow-xl">
            <div className="flex items-center justify-between gap-3 border-b border-accent/70 px-5 py-4">
              <h3 className="text-base sm:text-lg font-semibold">
                {visible.name}
              </h3>
              <button
                type="button"
                onClick={() => setVisible(null)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-accent/70 bg-surface hover:bg-surface/70"
                aria-label="Close"
              >
                <span className="text-lg leading-none">×</span>
              </button>
            </div>

            <div className="p-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <AppImage
                    width={350}
                    src={visible.image}
                    alt={`${visible.name}`}
                    preview={{ zIndex: 2000 }}
                  />
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-muted">{visible.description}</p>
                  <div className="h-px bg-border/70" />
                  <p className="text-sm">
                    <span className="font-semibold">Role:</span> {visible.role}
                  </p>
                  <p className="text-sm text-muted">{visible.tech}</p>
                  <div className="h-px bg-border/70" />
                  {visible?.link ? (
                    <a
                      href={visible.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700"
                    >
                      <i className="pi pi-external-link text-xs" />
                      View Project
                    </a>
                  ) : null}
                </div>
              </div>

              {visible?.other_img && visible.other_img.length > 0 ? (
                <div className="grid mt-6 grid-cols-1 sm:grid-cols-2 gap-4">
                  {visible.other_img.map(
                    (el: string | undefined, i: Key | null | undefined) => (
                      <div
                        key={i}
                        className="rounded-lg border border-accent/70 bg-surface p-2"
                      >
                        <AppImage
                          src={el}
                          alt={`${visible.name}-${i}`}
                          className="img-fluid"
                          preview={{ zIndex: 2000 }}
                        />
                      </div>
                    )
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}

      <div className="relative mb-6">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted animate-fade-up">
            My Work
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent"></div>
        </div>
      </div>

      <div className="relative rounded bg-gradient-to-br from-surface via-surface-elev to-surface clamp-[p,2,6] shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300" />

        <div className="relative">
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-bold text-text mb-2 animate-fade-up">
              Portfolio
            </h3>
            <p
              className="text-muted animate-fade-up"
              style={{ animationDelay: "60ms" }}
            >
              A selection of projects I've built and shipped.
            </p>
          </div>

          <div id="filter" className="mb-8 flex flex-wrap gap-3 justify-center">
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
                    ? "rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-primary/25"
                    : "rounded-lg border-2 border-accent bg-surface px-4 py-2 text-sm font-medium text-text hover:border-primary hover:bg-primary/5 transition-all"
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
                className={`group relative overflow-hidden rounded-lg border-b border-accent bg-gradient-to-br from-surface to-surface-elev p-0 shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300 focus-visible:outline-none animate-zoom-in`}
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
                  {!loadedBySrc[item.image] ? (
                    <div className="h-48 w-full animate-pulse bg-gradient-to-br from-border/40 to-border/20" />
                  ) : null}

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
                    className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-4">
                  <h4 className="text-base font-semibold text-text group-hover:text-primary transition-colors">
                    {item.name}
                  </h4>
                  <p className="mt-1 text-xs font-medium text-muted uppercase tracking-wider">
                    {item.category}
                  </p>
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
