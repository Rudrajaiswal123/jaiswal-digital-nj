'use client'

import React from 'react';
import Image from 'next/image';
import './trustedSection.scss';

interface TrustedLogos {
  src: string;
  alt: string;
}

interface TrustedSectionProps {
  logos: TrustedLogos[];
}

export default function TrustedSection({ logos }: TrustedSectionProps) {
  return (
    <section className="trusted-section">
      <div className="container">
        <div className="trusted-box">
          <h2 className="trusted-title">
            Join hundreds of growing brands scaling their digital success.
          </h2>
          <div className="trusted-logos">
            {logos.map((logo, index) => (
              <Image 
                key={index}
                src={logo.src} 
                alt={logo.alt}
                width={120}
                height={60}
                className="logo-img"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

