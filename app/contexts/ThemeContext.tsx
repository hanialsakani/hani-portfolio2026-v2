"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

export type Theme = "space" | "executive";

const ThemeContext = createContext<{ theme: Theme; setTheme: (t: Theme) => void }>({
  theme: "space",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("space");
  const mounted = useRef(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolio-theme") as Theme | null;
      if (saved === "executive") setTheme("executive");
    } catch {}
  }, []);

  useEffect(() => {
    const html = document.documentElement;

    if (mounted.current) {
      html.classList.add("theme-switching");
      setTimeout(() => html.classList.remove("theme-switching"), 600);
    }
    mounted.current = true;

    html.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {}
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
