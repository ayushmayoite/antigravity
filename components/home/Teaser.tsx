"use client";

import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

interface TeaserProps {
  title: string;
  subtitle?: string;
  description?: string;
  linkText?: string;
  linkUrl?: string;
  imageSrc?: string;
  videoSrc?: string;
  imageAlt?: string;
  reversed?: boolean;
  lightMode?: boolean;
}

export function Teaser({
  title,
  subtitle,
  description,
  linkText = "Read more",
  linkUrl = "#",
  imageSrc,
  videoSrc,
  imageAlt = "Teaser image",
  reversed = false,
  lightMode = false,
  className,
}: TeaserProps & { className?: string }) {
  return (
    <section
      className={cn(
        "w-full py-24 md:py-32",
        lightMode ? "bg-white text-neutral-900" : "bg-neutral-900 text-white",
        className,
      )}
    >
      <div className="container px-6 2xl:px-0">
        <div
          className={cn(
            "flex flex-col gap-16 items-center",
            reversed ? "md:flex-row-reverse" : "md:flex-row",
          )}
        >
          {/* Content */}
          <div className="w-full md:w-1/2 space-y-8">
            {subtitle && (
              <Reveal>
                <div className="flex items-center gap-4 mb-4">
                  <span
                    className={cn(
                      "text-xs font-semibold tracking-[0.2em] uppercase",
                      lightMode ? "text-neutral-500" : "text-white/80",
                    )}
                  >
                    {subtitle}
                  </span>
                </div>
              </Reveal>
            )}

            <Reveal delay={0.1}>
              <h2 className="text-[44px] md:text-[56px] lg:text-[72px] font-medium leading-[1.05] tracking-tighter">
                {title}
              </h2>
            </Reveal>

            {description && (
              <Reveal delay={0.2}>
                <p
                  className={cn(
                    "text-[17px] leading-relaxed max-w-xl font-light",
                    lightMode ? "text-neutral-500" : "text-neutral-300",
                  )}
                >
                  {description}
                </p>
              </Reveal>
            )}

            <Reveal delay={0.3}>
              <Link
                href={linkUrl}
                className={cn(
                  "group inline-flex items-center gap-4 mt-8 pb-2 border-b transition-colors",
                  lightMode
                    ? "text-neutral-900 border-neutral-900 hover:text-primary hover:border-primary-hover"
                    : "text-white border-white hover:text-primary hover:border-primary-hover",
                )}
              >
                <span className="text-[13px] font-semibold uppercase tracking-[0.2em]">
                  {linkText}
                </span>
                <span className="text-lg transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          </div>

          {/* Visual */}
          <div className="w-full md:w-1/2">
            <Reveal delay={0.2} width="100%">
              <div className="aspect-4/3 rounded-sm overflow-hidden relative group">
                {videoSrc ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                  >
                    <source src={videoSrc} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={imageSrc || ""}
                    alt={imageAlt}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-1000"
                  />
                )}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
