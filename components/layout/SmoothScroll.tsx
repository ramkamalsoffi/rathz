"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    // Optional: Log scroll event to confirm it's working
    lenis.on("scroll", (e: any) => {
      // console.log(e);
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
