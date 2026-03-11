'use client'

import React from 'react';
import Link from 'next/link';
import './servicesCards.scss';

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface ServicesCardsProps {
  services: Service[];
  link?: string;
}

export default function ServicesCards({ services, link = '/contact' }: ServicesCardsProps) {
  return (
    <section className="services-cards-section">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-tag">OUR SERVICES</span>
          <h2 className="section-title">
            Digital Solutions Built to Scale Your Business.
          </h2>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <Link href={link} className="btn-service">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

