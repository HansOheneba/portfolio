"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

type HeroSlide = {
  id: string;
  imageSrc: string;
  alt?: string;
};

type HeroCarouselProps = {
  title?: string;
  subline?: React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  slides?: HeroSlide[];
  className?: string;
  loop?: boolean;
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function HeroCarousel({
  className,
  title = "Hey, I am Hans.",
  subline = (
    <>
      A software artisan based in{" "}
      <span className="text-yellow-400 font-bold">Ghana</span> with a background
      in cybersecurity, now focused on crafting secure and performant
      experiences.
    </>
  ),
  ctaLabel = "View work",
  ctaHref = "/projects",
  secondaryCtaLabel = "View CV",
  secondaryCtaHref = "https://docs.google.com/document/d/1SkR03pjMKOKuxSXT2qC__iFoGoVD5mwR/edit?usp=sharing&ouid=107804991562370370216&rtpof=true&sd=true",
  slides = [
    { id: "s1", imageSrc: "/projects/proj1.png", alt: "Hero slide 1" },
    { id: "s2", imageSrc: "/projects/proj2.png", alt: "Hero slide 2" },
    { id: "s3", imageSrc: "/projects/proj3.png", alt: "Hero slide 3" },
  ],
  loop = true,
}: HeroCarouselProps) {
  const autoplay = React.useRef(
    Autoplay({
      delay: 4500,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop, align: "start" }, [
    autoplay.current,
  ]);

  const [canPrev, setCanPrev] = React.useState(false);
  const [canNext, setCanNext] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const goToPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const goToNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    emblaApi.plugins().autoplay?.play();

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className={cn("w-full", className)}>
      <div className="mx-auto w-full py-5 max-w-6xl px-4 sm:px-6">
        {/* Title block ABOVE carousel */}
        <div className="py-10 sm:py-14">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              {title}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
              {subline}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href={ctaHref}
                className={cn(
                  "inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2",
                  "text-sm font-medium text-black transition hover:bg-white/90",
                )}
              >
                {ctaLabel}
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="h-3.5 w-3.5"
                />
              </Link>

              <Link
                href={secondaryCtaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 rounded-xl",
                  "border border-white/10 bg-white/5 px-4 py-2",
                  "text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white",
                )}
              >
                {secondaryCtaLabel}
              </Link>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 shadow-xl backdrop-blur-xl">
          <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container flex">
                {slides.map((s) => (
                  <div
                    key={s.id}
                    className={cn(
                      "embla__slide relative min-w-0 flex-[0_0_100%]",
                      "h-[240px] sm:h-[320px] md:h-[420px]",
                    )}
                  >
                    <Image
                      src={s.imageSrc}
                      alt={s.alt ?? ""}
                      fill
                      priority={s.id === slides[0]?.id}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Arrows */}
            <div className="pointer-events-none absolute inset-x-0 top-1/2 z-20 flex -translate-y-1/2 items-center justify-between px-3 sm:px-4">
              <button
                type="button"
                onClick={goToPrev}
                disabled={!canPrev}
                aria-label="Previous slide"
                className={cn(
                  "pointer-events-auto inline-flex items-center justify-center rounded-2xl p-2",
                  "border border-white/10 bg-black/40 text-white/80 backdrop-blur-md transition",
                  "hover:bg-black/55 hover:text-white disabled:opacity-40",
                )}
              >
                <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={goToNext}
                disabled={!canNext}
                aria-label="Next slide"
                className={cn(
                  "pointer-events-auto inline-flex items-center justify-center rounded-2xl p-2",
                  "border border-white/10 bg-black/40 text-white/80 backdrop-blur-md transition",
                  "hover:bg-black/55 hover:text-white disabled:opacity-40",
                )}
              >
                <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
              </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-0 right-0 z-20">
              <div className="flex items-center justify-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => emblaApi?.scrollTo(i)}
                    className={cn(
                      "h-1.5 w-6 rounded-full transition",
                      i === selectedIndex
                        ? "bg-white/80"
                        : "bg-white/25 hover:bg-white/40",
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="mt-3 text-center text-xs text-white/45">
          Swipe on mobile, or use the arrows.
        </p>
      </div>
    </section>
  );
}
