'use client'

import React, { useRef } from 'react';
import Image from 'next/image';
import './trustedSection.scss';

interface TrustedLogos {
  src: string;
  alt: string;
}

interface TrustedSectionProps {
  logos: TrustedLogos[];
  title?: string;
}

export default function TrustedSection({
  logos,
  title = 'Join hundreds of growing brands scaling their digital success',
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

  return (
    <section className="brand-marquee-section" aria-labelledby="trusted-brands-title">
      <div className="brand-marquee-container">
        <h2 id="trusted-brands-title" className="brand-marquee-title">{title}</h2>
        <div className="brand-carousel">
          <div className="brand-carousel-controls" aria-label="Client logo carousel controls">
            <button type="button" className="brand-carousel-button" onClick={() => moveCarousel('previous')} aria-label="Show previous client logos">
              <i className="bi bi-arrow-left" aria-hidden="true" />
            </button>
            <button type="button" className="brand-carousel-button" onClick={() => moveCarousel('next')} aria-label="Show next client logos">
              <i className="bi bi-arrow-right" aria-hidden="true" />
            </button>
          </div>
          <div className="brand-carousel-viewport" ref={viewportRef} tabIndex={0} aria-label="Client logos. Swipe or use arrow controls to browse.">
            {carouselLogos.map((logo, index) => (
              <div className="brand-logo-card" key={`${logo.src}-${index}`} aria-hidden={index >= logos.length}>
                <Image
                  src={logo.src}
                  alt={index < logos.length ? logo.alt : ''}
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

