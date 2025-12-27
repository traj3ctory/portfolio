import data from "~/data/data.json";

const WakaIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-hidden="true"
    focusable="false"
  >
    <title>WakaTime</title>
    <path
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 5.5h2v6.75l5.25 3.15-1 1.7L12 15V7.5z"
      fill="currentColor"
    />
  </svg>
);

const SocialMedia = () => {
  const links = data?.name ?? {};

  const socialItems: Array<{
    key: string;
    href?: string;
    label: string;
    node: React.ReactNode;
  }> = [
    {
      key: "linkedin",
      href: links.linkedin,
      label: "LinkedIn",
      node: <span className="pi pi-linkedin" aria-hidden />,
    },
    {
      key: "github",
      href: "https://github.com/traj3ctory",
      label: "GitHub",
      node: <span className="pi pi-github" aria-hidden />,
    },
    {
      key: "whatsapp",
      href: links.whatsapp,
      label: "WhatsApp",
      node: <span className="pi pi-whatsapp" aria-hidden />,
    },
    {
      key: "wakatime",
      href: links.wakatime,
      label: "WakaTime",
      node: <WakaIcon className="w-5 h-5 text-current" />,
    },
  ];

  return (
    <div className="mt-4">
      <span className="block text-sm text-muted mb-2">Find Me on</span>
      <ul className="flex gap-3 items-center justify-end bg-accent/25">
        {socialItems.map((s) => (
          <li key={s.key}>
            <a
              href={s.href ?? "#"}
              rel="noreferrer"
              target="_blank"
              aria-label={s.label}
              className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-surface/5 hover:bg-surface/10 "
            >
              {s.node}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
