"use client";

import { useState } from "react";

const FALLBACK = "/images/products/60x30-workstation-1.webp";

export function CategoryImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src || FALLBACK);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
      onError={() => setImgSrc(FALLBACK)}
    />
  );
}
