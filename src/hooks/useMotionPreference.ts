import { useEffect, useState } from "react";

// Start paused on the server and during hydration, then respect the visitor's setting.
export function useMotionPreference() {
  const [paused, setPaused] = useState(true);
  useEffect(() => {
    setPaused(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);
  return [paused, setPaused] as const;
}
