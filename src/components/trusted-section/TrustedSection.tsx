'use client'

import React, { useEffect, useRef } from 'react';
import './trustedSection.scss';

interface TrustedLogos {
  src: string;
  alt: string;
}

interface TrustedSectionProps {
  logos: TrustedLogos[];
  title?: string;
  showTitle?: boolean;
}

export default function TrustedSection({
  logos,
  title = 'Building Digital Success for Growing Businesses',
  showTitle = true,
}: TrustedSectionProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const carouselLogos = [...logos, ...logos];

  const moveCarousel = (direction: 'previous' | 'next') => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const firstCard = viewport.querySelector<HTMLElement>('.brand-logo-card');
    const gap = Number.parseFloat(getComputedStyle(viewport).gap) || 0;
    const distance = (firstCard?.offsetWidth || viewport.clientWidth) + gap;
    viewport.scrollBy({
      left: direction === 'next' ? distance : -distance,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const timer = window.setInterval(() => {
      const firstCard = viewport.querySelector<HTMLElement>('.brand-logo-card');
      const gap = Number.parseFloat(getComputedStyle(viewport).gap) || 0;
      const distance = (firstCard?.offsetWidth || viewport.clientWidth) + gap;
      if (viewport.scrollLeft + viewport.clientWidth >= viewport.scrollWidth - distance) {
        viewport.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        viewport.scrollBy({ left: distance, behavior: 'smooth' });
      }
    }, 2800);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="brand-marquee-section" aria-labelledby="trusted-brands-title">
      <div className="brand-marquee-container">
        {showTitle && <h2 id="trusted-brands-title" className="brand-marquee-title">{title}</h2>}
        <div className="brand-carousel">
          <div className="brand-carousel-viewport" ref={viewportRef} tabIndex={0} aria-label="Client logos. Swipe or use arrow controls to browse.">
            {carouselLogos.map((logo, index) => (
              <div className="brand-logo-card" key={`${logo.src}-${index}`} aria-hidden={index >= logos.length}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  width={180}
                  height={110}
                  sizes="(min-width: 1200px) 20vw, (min-width: 768px) 33vw, 50vw"
                  className="brand-logo-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
