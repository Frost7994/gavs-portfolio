"use client";

// state
import { useState, useEffect } from "react";

// providers
import { ThemeProvider } from "next-themes";

export const Providers = ({ children }) => {
  // state
  const [mounted, setMounted] = useState(false);

  // effects
  useEffect(() => setMounted(true), []);

  // render
  if (!mounted) return null;

  return (
    <ThemeProvider
      attribute="class"
      enableSystem
      defaultTheme="light"
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};
