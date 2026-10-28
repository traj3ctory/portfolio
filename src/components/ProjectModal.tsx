import { Image } from "antd";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { portfolioData } from "~/types";

interface ProjectModalProps {
  project: portfolioData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [active, setActive] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  const gallery = useMemo<string[]>(() => {
    if (!project) return [];
    const all = [project.image, ...(project.other_img ?? [])].filter(Boolean);
    return Array.from(new Set(all));
  }, [project]);

  const tech = useMemo<string[]>(
    () =>
      (project?.tech ?? "")
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    [project],
  );

  const step = useCallback(
    ({ by }: { by: number }) => {
      if (gallery.length < 2) return;
      setActive((i) => (i + by + gallery.length) % gallery.length);
    },
    [gallery.length],
  );

  useEffect(() => {
    setActive(0);
  }, [project]);

  useEffect(() => {
    if (!project) return;

    const root = document.documentElement;
    const gutter = window.innerWidth - root.clientWidth;
    const prevOverflow = root.style.overflow;
    const prevPadding = document.body.style.paddingRight;
    const opener = document.activeElement as HTMLElement | null;

    root.style.overflow = "hidden";
    if (gutter > 0) document.body.style.paddingRight = `${gutter}px`;
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (previewOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") step({ by: 1 });
      if (e.key === "ArrowLeft") step({ by: -1 });
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      root.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPadding;
      opener?.focus?.();
    };
  }, [project, previewOpen, onClose, step]);

  if (!project) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[1000] flex items-end justify-center p-0 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="modal_enter relative flex max-h-[92dvh] w-full max-w-5xl flex-col overflow-hidden rounded-t-2xl border border-border bg-surface shadow-2xl sm:rounded-2xl">
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-3 top-3 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/80 backdrop-blur transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-primary"
        >
          <i className="pi pi-times text-sm" />
        </button>

        <div className="grid min-h-0 flex-1 grid-cols-1 overflow-y-auto overscroll-contain lg:grid-cols-5 lg:overflow-hidden">
          <div className="border-b border-border bg-surface-elev p-4 sm:p-6 lg:col-span-3 lg:overflow-y-auto lg:border-b-0 lg:border-r flex items-center">
            <div className="group relative overflow-hidden rounded-xl border border-border bg-black/30">
              <Image.PreviewGroup
                preview={{
                  visible: previewOpen,
                  current: active,
                  onVisibleChange: setPreviewOpen,
                  onChange: setActive,
                  zIndex: 2000,
                }}
                items={gallery}
              >
                <button
                  type="button"
                  onClick={() => setPreviewOpen(true)}
                  aria-label="Expand image"
                  className="block aspect-video w-full cursor-zoom-in"
                >
                  <img
                    src={gallery[active]}
                    alt={`${project.name} screenshot ${active + 1}`}
                    className="h-full w-full object-contain"
                  />
                </button>
              </Image.PreviewGroup>

              {gallery.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={() => step({ by: -1 })}
                    aria-label="Previous image"
                    className="absolute left-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
                  >
                    <i className="pi pi-chevron-left text-xs" />
                  </button>
                  <button
                    type="button"
                    onClick={() => step({ by: 1 })}
                    aria-label="Next image"
                    className="absolute right-2 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
                  >
                    <i className="pi pi-chevron-right text-xs" />
                  </button>
                  <span className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-semibold text-white">
                    {active + 1} / {gallery.length}
                  </span>
                </>
              ) : null}
            </div>

            {gallery.length > 1 ? (
              <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                {gallery.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Show image ${i + 1}`}
                    aria-current={i === active}
                    className={`h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                      i === active
                        ? "border-primary"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={src}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <div className="flex flex-col gap-6 p-5 sm:p-8 lg:col-span-2 lg:overflow-y-auto">
            <div className="space-y-3 pr-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                  {project.category}
                </span>
                {project.role ? (
                  <span className="text-xs font-medium text-muted">
                    {project.role}
                  </span>
                ) : null}
              </div>
              <h3 className="text-2xl font-bold tracking-tight">
                {project.name}
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-muted">
              {project.description}
            </p>

            {tech.length > 0 ? (
              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Built with
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            {project.link ? (
              <div className="mt-auto pt-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-secondary hover:shadow-lg hover:shadow-primary/30 sm:w-auto"
                >
                  Visit project
                  <i className="pi pi-external-link text-xs" />
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
