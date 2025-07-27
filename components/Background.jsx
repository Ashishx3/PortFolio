import React from "react";
import { cn } from "@/lib/utils";

export function Dotbgc({ children }) {
  return (
    <div className="font-sans items-center justify-items-center bg-black min-h-screen w-full">
      <div className="relative h-[50rem] w-full bg-black">
        {/* Dot grid background */}
        <div
          className={cn(
            "absolute inset-0 z-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#444_1px,transparent_1px)]"
          )}
        />

        {/* Radial fade overlay — BELOW content */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

        {/* Foreground content */}
        <div className="relative z-20 h-full w-full items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
