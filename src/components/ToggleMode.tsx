import { useEffect, useState } from "react";

const storageKey = "theme:selection";

const themes = ["dark", "light"] as const;
type ThemeName = (typeof themes)[number];

const ToggleMode = () => {
  const [theme, setTheme] = useState<ThemeName>(() => {
    if (typeof window === "undefined") return "dark";
    const saved = localStorage.getItem(storageKey) as ThemeName | null;
    if (saved && themes.includes(saved)) return saved;
    // default to dark as requested
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    // apply theme via data-theme for theme.css and Tailwind mapping
    root.setAttribute("data-theme", theme);
    // also add a theme class on root for backwards compatibility
    const themeClasses = Array.from(themes);
    root.classList.remove(...themeClasses);
    root.classList.add(theme);

    // keep Tailwind's `dark` class in sync (some Tailwind utilities rely on it)
    if (theme === "dark") {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
    }

    // persist exact theme name
    localStorage.setItem(storageKey, theme);
  }, [theme]);

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      aria-pressed={theme === "dark"}
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      className="inline-flex items-center justify-center rounded-md h-9 w-9 border border-accent bg-surface text-muted hover:bg-surface-elev transition-colors border-none cursor-pointer"
    >
      {theme === "dark" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M8.05 8.05L6.636 6.636m10.728 0l-1.414 1.414M8.05 15.95l-1.414 1.414M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      )}
    </button>
  );
};

export default ToggleMode;
