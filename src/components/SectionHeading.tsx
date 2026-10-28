interface SectionHeadingProps {
  eyebrow?: string;
  label: string;
}

export default function SectionHeading({ eyebrow, label }: SectionHeadingProps) {
  return (
    <div className="mb-10 text-center">
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight">{label}</h2>
      <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-primary/70" />
    </div>
  );
}
