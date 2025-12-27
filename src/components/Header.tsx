import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ToggleMode from "./ToggleMode";
import AppImage from "./image";

const Header = () => {
  const [url, setUrl] = useState("");
  const currentUrl = useLocation();

  useEffect(() => {
    setUrl(currentUrl.hash || "");
  }, [currentUrl.hash]);

  const links = [
    { hash: "#about", label: "About" },
    { hash: "#portfolio", label: "Portfolio" },
    { hash: "#contact", label: "Contact" },
  ];

  return (
    <>
      <header className="w-full sticky top-0 z-50 backdrop-blur-sm supports-[backdrop-filter]:bg-surface/85 bg-surface/90 border-b border-accent/60 transition-colors shadow">
        <div className="container px-4 flex items-center mx-auto h-16">
          <a
            href="#home_page"
            className="flex items-center gap-2 font-semibold "
          >
            <AppImage
              src="./pwa-512x512.png"
              alt="logo"
              className="rounded-full clamp-[mt,1,2]"
              width={40}
              height={40}
            />
            <span className="hidden sm:inline">David Z. Benard</span>
          </a>

          <div className="ml-auto flex items-center gap-4">
            <nav className="md:flex items-center gap-6 text-sm">
              {links.map((link) => (
                <a
                  key={link.hash}
                  href={link.hash}
                  className={`hidden relative transition-colors hover:text-primary ${
                    url === link.hash
                      ? "text-primary font-semibold after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-primary"
                      : "text-muted"
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <ToggleMode />
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile bottom tab nav (rendered outside header so `fixed` anchors to viewport) */}
      <nav className="fixed bottom-0 left-0 right-0 md:hidden z-50 bg-surface/95 border-t border-accent backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {[
              {
                hash: "#about",
                label: "About",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5.121 17.804A9 9 0 1118.88 6.196 9 9 0 015.12 17.804z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ),
              },
              {
                hash: "#portfolio",
                label: "Work",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7h18M3 12h18M3 17h18"
                    />
                  </svg>
                ),
              },
              {
                hash: "#contact",
                label: "Contact",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 8V6a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2z"
                    />
                  </svg>
                ),
              },
            ].map((link) => (
              <a
                key={link.hash}
                href={link.hash}
                onClick={() => setUrl(link.hash)}
                className={`flex-1 flex flex-col items-center justify-center text-xs py-2 transition-colors ${
                  url === link.hash ? "text-primary" : "text-muted"
                }`}
              >
                {link.icon}
                <span className="mt-1">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
