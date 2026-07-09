import data from "~/data/data.json";

const SocialMedia = () => {
  const links = data?.name ?? {};
  const email = data?.detail?.email;

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
      key: "email",
      href: email ? `mailto:${email}` : undefined,
      label: "Email",
      node: <span className="pi pi-envelope" aria-hidden />,
    },
    {
      key: "whatsapp",
      href: links.whatsapp,
      label: "WhatsApp",
      node: <span className="pi pi-whatsapp" aria-hidden />,
    },
  ];

  return (
    <div className="mt-4">
      <span className="block text-sm text-muted mb-2">Find Me on</span>
      <ul className="flex gap-3 items-center">
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
