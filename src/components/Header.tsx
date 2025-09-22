import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ToggleMode from "./ToggleMode";
import AppImage from "./image";

const Header = () => {
  const [url, setUrl] = useState("");
  const [open, setOpen] = useState(false);
  const currentUrl = useLocation();
  // const currentUrl = window.location.pathname
  useEffect(() => {
    {
      setUrl(currentUrl.hash);
    }
    return () => {
      // cleanup
    };
  }, [currentUrl.hash]);

  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
      <div className="container-default flex items-center h-16">
        <a
          href="#home_page"
          className="flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-100"
        >
          <AppImage
            src="./icon512_rounded.png"
            alt="logo"
            className="rounded-full"
            width={40}
            height={40}
            preview={false}
          />
          <span className="hidden sm:inline">David Z. Benard</span>
        </a>
        <nav className="ml-auto hidden md:flex items-center gap-6 text-sm">
          {[
            { hash: "#about", label: "About" },
            { hash: "#portfolio", label: "Portfolio" },
            { hash: "#contact", label: "Contact" },
          ].map((link) => (
            <a
              key={link.hash}
              href={link.hash}
              className={`relative transition-colors hover:text-primary ${
                url === link.hash
                  ? "text-primary font-semibold after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-primary"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              {link.label}
            </a>
          ))}
          <ToggleMode />
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden ml-auto inline-flex items-center justify-center rounded-md h-10 w-10 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* Mobile slide-over */}
        {open && (
          <div
            className="fixed inset-0 z-50 md:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <div className="absolute top-0 right-0 h-full w-72 bg-white dark:bg-gray-900 shadow-xl border-l border-gray-200 dark:border-gray-800 flex flex-col">
              <div className="flex items-center justify-between px-4 h-16 border-b border-gray-200 dark:border-gray-800">
                <span className="font-semibold text-gray-800 dark:text-gray-100">
                  Menu
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="h-9 w-9 inline-flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto p-4 space-y-2">
                {[
                  { hash: "#about", label: "About" },
                  { hash: "#portfolio", label: "Portfolio" },
                  { hash: "#contact", label: "Contact" },
                ].map((link) => (
                  <a
                    key={link.hash}
                    href={link.hash}
                    onClick={() => {
                      setUrl(link.hash);
                      setOpen(false);
                    }}
                    className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      url === link.hash
                        ? "bg-primary text-white"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="p-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
                <span className="text-xs text-gray-500">Theme</span>
                <ToggleMode />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
