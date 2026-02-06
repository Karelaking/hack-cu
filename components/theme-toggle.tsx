"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const handleToggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button variant="ghost" aria-label="Toggle theme" onClick={handleToggleTheme}>
      {isDark ? <Sun size={28} /> : <Moon size={28} />}
    </Button>
  );
};

export default ThemeToggle;
