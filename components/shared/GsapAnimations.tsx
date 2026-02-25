"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Register the plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export function GsapAnimations() {
  const pathname = usePathname();
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Reset loaded state on route change
    setImagesLoaded(false);

    // Initial pre-hide to prevent FOUC / flash before images load
    gsap.set(".hero-section, .product-card, .our-work, .footer", {
      opacity: 0,
    });

    const checkImages = () => {
      const images = Array.from(document.images);

      if (images.length === 0) {
        setImagesLoaded(true);
        return;
      }

      const incomplete = images.filter((img) => !img.complete);

      if (incomplete.length === 0) {
        setImagesLoaded(true);
      } else {
        let loadedCount = 0;
        const onLoad = () => {
          loadedCount++;
          if (loadedCount >= incomplete.length) {
            setImagesLoaded(true);
          }
        };

        incomplete.forEach((img) => {
          // If it load fails, we don't want to hang forever
          img.addEventListener("load", onLoad, { once: true });
          img.addEventListener("error", onLoad, { once: true });
        });
      }
    };

    // Small delay to ensure the DOM for this route is fully parsed into document.images
    const timer = setTimeout(checkImages, 50);
    return () => clearTimeout(timer);
  }, [pathname]);

  useGSAP(() => {
    if (!imagesLoaded) return;

    // Use fromTo because we set opacity: 0 initially to prevent flash
    const ctx = gsap.context(() => {
      // Keep duration/stagger identical to user request
      gsap.fromTo(
        ".hero-section",
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.6, clearProps: "all" },
      );

      gsap.fromTo(
        ".product-card",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, clearProps: "all" },
      );

      gsap.fromTo(
        ".our-work",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.3,
          clearProps: "all",
        },
      );

      gsap.fromTo(
        ".footer",
        { opacity: 0 },
        { opacity: 1, duration: 0.3, clearProps: "all" },
      );
    });

    return () => ctx.revert();
  }, [imagesLoaded, pathname]);

  return null;
}
