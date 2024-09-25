"use client";

// base
import { Sun, Moon } from "lucide-react";

// comonents
import { Button } from "./ui/button";

// utils
import { useTheme } from "next-themes";

const ThemeButton = () => {
  // theme destructure
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Button onClick={() => setTheme(isDark ? "light" : "dark")} size="icon">
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
};

export default ThemeButton;
