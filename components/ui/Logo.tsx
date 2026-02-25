"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "orange" | "white";
}

const WIX_LOGO_URL =
  "https://static.wixstatic.com/media/f82adb_06d84ac65d43406ca062fdaf2558c6c2~mv2_d_11432_2937_s_4_2.png/v1/fill/w_166,h_43,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/One_Only%20(2).png";

export function OneAndOnlyLogo({ className, variant = "orange" }: LogoProps) {
  return (
    <div className={cn("relative flex items-center", className)}>
      {variant === "orange" ? (
        // Standard full-color logo
        <img
          src={WIX_LOGO_URL}
          alt="One and Only Furniture"
          className="h-full w-auto object-contain"
        />
      ) : (
        // White logo for dark backgrounds using CSS filters
        <img
          src={WIX_LOGO_URL}
          alt="One and Only Furniture"
          className="h-full w-auto object-contain brightness-0 invert opacity-90"
        />
      )}
    </div>
  );
}
