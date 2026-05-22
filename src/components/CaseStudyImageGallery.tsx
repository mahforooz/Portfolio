"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export type GallerySlide = {
  src: string;
  alt: string;
  caption?: string;
  /** Defaults to video for .mp4 / .webm / .mov, otherwise image */
  kind?: "image" | "video";
};

type CaseStudyImageGalleryProps = {
  slides: GallerySlide[];
  className?: string;
  /** Accessible name for the gallery region */
  label?: string;
};

function slideKind(slide: GallerySlide): "image" | "video" {
  if (slide.kind) return slide.kind;
  return /\.(mp4|webm|mov)(\?|$)/i.test(slide.src) ? "video" : "image";
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      className={direction === "left" ? "rotate-180" : undefined}
    >
      <path
        d="M7.5 4.5 13 10l-5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CaseStudyImageGallery({
  slides,
  className = "",
  label = "Image gallery",
}: CaseStudyImageGalleryProps) {
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const total = slides.length;
  const slide = slides[index];
  const isVideo = slideKind(slide) === "video";

  const goTo = useCallback(
    (next: number) => {
      if (total === 0) return;
      setIndex((next + total) % total);
    },
    [total],
  );

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goPrev, goNext]);

  useEffect(() => {
    videoRef.current?.pause();
  }, [index]);

  if (total === 0) return null;

  return (
    <figure className={`mt-8 max-w-4xl ${className}`}>
      <div
        className="overflow-hidden rounded-lg border border-line bg-ink/[0.03]"
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
      >
        <div className="relative aspect-[16/10] w-full bg-black/90 sm:aspect-[1024/648]">
          {isVideo ? (
            <video
              key={slide.src}
              ref={videoRef}
              src={slide.src}
              controls
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-contain"
              aria-label={slide.alt}
            >
              Your browser does not support embedded video.
            </video>
          ) : (
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 896px"
              unoptimized
              priority={index === 0}
            />
          )}

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                className="focus-ring absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line/80 bg-white/90 text-ink shadow-sm transition hover:bg-white"
                aria-label="Previous slide"
              >
                <ChevronIcon direction="left" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="focus-ring absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line/80 bg-white/90 text-ink shadow-sm transition hover:bg-white"
                aria-label="Next slide"
              >
                <ChevronIcon direction="right" />
              </button>
            </>
          )}
        </div>

        {total > 1 && (
          <div className="flex items-center justify-between gap-4 border-t border-line bg-white px-4 py-3">
            <p className="text-xs font-medium tabular-nums text-muted-2">
              {index + 1} / {total}
            </p>
            <div className="flex gap-1.5" role="tablist" aria-label="Gallery pages">
              {slides.map((s, i) => (
                <button
                  key={s.src}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`View slide ${i + 1} of ${total}`}
                  onClick={() => setIndex(i)}
                  className={`focus-ring h-2 w-2 rounded-full transition ${
                    i === index ? "bg-accent" : "bg-line hover:bg-muted-2"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {slide.caption && (
        <figcaption className="mt-3 text-center text-xs text-muted">{slide.caption}</figcaption>
      )}
    </figure>
  );
}
