'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './about.scss';
import { trustedLogos, teamMembers } from './aboutData';

export default function AboutComponent() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="hero-title">About</h1>
              <p className="hero-subtitle">
                Learn more about our team and mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center g-0 g-md-5">
            <div className="col-lg-6">
              <div className="about-image-wrapper">
                <Image 
                  src="/assets/images/about-pic1.webp" 
                  alt="About Us" 
                  className="about-image"
                  width={500}
                  height={600}
                  style={{ width: '100%', height: 'auto' }}
                />
                <div className="premium-badge">
                  <span>Premium<br/>Services</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content pe-lg-5">
                <span className="section-tag">WHO WE ARE</span>
                <h2>
                  Driving Digital Growth Through Strategy &amp; Performance
                </h2>
                <p className="pe-lg-5">
                  Jaiswal Digital is a results-driven digital agency focused on helping businesses grow online. We specialize in digital marketing, e-commerce account management, and performance-led solutions that turn ideas into measurable results. From helping offline sellers go online to scaling established brands, we combine strategy, creativity, and data to build sustainable digital growth. Our goal is simple—deliver solutions that increase visibility, engagement, and conversions while creating long-term value for our clients.
                </p>
                <Link href="#" className="btn-discover">Discover More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Section */}
      <section className="trusted-section">
        <div className="container">
          <div className="trusted-box">
            <h2 className="trusted-title">
              Join hundreds of growing brands scaling their digital success.
            </h2>
            <div className="trusted-logos">
              {trustedLogos.map((logo, index) => (
                <Image 
                  key={index}
                  src={logo.src} 
                  alt={logo.alt}
                  width={120}
                  height={100}
                  style={{ objectFit: 'contain' }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Section */}
      <section className="vision-mission-section">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-6">
              <div className="vision-left h-100">
                <span className="tag">OUR VALUE</span>
                <h2>
                  Driven by Results, Built on Trust
                </h2>
                <p>
                  We believe in transparency, performance, and long-term partnerships. Our approach is rooted in data-driven strategies, clear communication, and consistent execution—ensuring every campaign delivers real value, measurable growth, and lasting impact for our clients.
                </p>
                <Link href="#" className="btn-learn">Learn More</Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-12">
                  <div className="info-card purple">
                    <span className="small-tag">OUR VISION</span>
                    <h3>Shaping Digital Growth for Tomorrow</h3>
                    <p>
                      Our vision is to help businesses grow in the digital world through strategic marketing, innovative solutions, and performance-driven execution. We focus on building scalable systems that deliver measurable results, long-term value, and sustainable online success for every brand we work with.
                    </p>
                    <span className="arrow-btn">
                      <i className="bi bi-arrow-up-right"></i>
                    </span>
                  </div>
                </div>
                <div className="col-12">
                  <div className="info-card pink">
                    <span className="small-tag">OUR MISSION</span>
                    <h3>Delivering Measurable Digital Results</h3>
                    <p>
                      Our mission is to help businesses grow through data-driven digital marketing, e-commerce management, and high-performing digital solutions. We focus on execution, optimization, and continuous improvement to maximize visibility, conversions, and ROI for our clients.
                    </p>
                    <span className="arrow-btn">
                      <i className="bi bi-arrow-up-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="row mb-5 align-items-center">
            <div className="col-lg-12 text-center">
              <h2 className="team-title">Our Expert Team</h2>
              <p className="team-subtitle">
                Together, we combine strategy, creativity, and performance to deliver impactful digital solutions
              </p>
            </div>
          </div>
          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="team-card">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    width={300}
                    height={350}
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <h4>{member.name}</h4>
                  <span>{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Float */}
      <a 
        href="https://wa.me/919353042456" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-float"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </>
  );
}

