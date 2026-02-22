"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "orange" | "white";
}

export function OneAndOnlyLogo({ className, variant = "orange" }: LogoProps) {
  return (
    <div className={cn("relative w-auto", className)}>
      {variant === "orange" ? (
        // Blue logo for scrolled state
        <Image
          src="/logo-final.png"
          alt="One and Only Furniture"
          width={240}
          height={80}
          className="h-full w-auto object-contain"
          priority
        />
      ) : (
        // White logo for dark hero
        <Image
          src="/logo-final.png"
          alt="One and Only Furniture"
          width={240}
          height={80}
          className="h-full w-auto object-contain grayscale brightness-0 invert-[0.9] opacity-90"
          priority
          key="white-logo"
        />
      )}
    </div>
  );
}
