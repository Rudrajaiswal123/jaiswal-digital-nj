'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './services.scss';
import { services, serviceList, skills } from './servicesData';

export default function ServicesComponent() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="hero-title">Services</h1>
              <p className="hero-subtitle">
                Our Expertise for your Digital Success<br />
                and E-Commerce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="services-cards-section">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-tag">WHAT WE OFFER</span>
            <h2 className="section-title">
              Digital Solutions Built to Scale Your Business
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
                  <Link href="#" className="btn-service">Learn More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Hero Section */}
      <section className="service-hero-section">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6">
              <div className="service-content">
                <h1>
                  All-in-One Digital Services for Growth
                </h1>
                <p className="service-desc">
                  We provide complete digital solutions to help businesses build, manage, and grow online through performance-driven strategies, creative execution, and scalable digital systems designed for long-term success.
                </p>
                <div className="row service-list">
                  <div className="col-md-6">
                    <ul>
                      {serviceList.slice(0, 3).map((item, index) => (
                        <li key={index}>
                          <i className="bi bi-check-circle-fill"></i> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul>
                      {serviceList.slice(3).map((item, index) => (
                        <li key={index}>
                          <i className="bi bi-check-circle-fill"></i> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-image-box">
                <Image 
                  src="/assets/images/about-pic2.webp" 
                  alt="Service Image"
                  width={500}
                  height={400}
                  style={{ width: '100%', height: 'auto' }}
                />
                <div className="image-arrow">
                  <i className="bi bi-arrow-up-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="container-fluid">
          <div className="row g-0 align-items-stretch">
            <div className="col-lg-6">
              <div className="skills-content">
                <span className="section-tag">OUR VALUE</span>
                <h2>
                  Let&apos;s Build Your Digital Success.
                </h2>
                <p className="skills-desc">
                  Ready to grow your business online? Connect with Jaiswal Digital and lets turn your ideas into powerful, results-driven digital solutions.
                </p>
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-label">
                      <span>{skill.name}</span>
                      <span>{skill.percentage}</span>
                    </div>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: skill.width }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="skills-image">
                <Image 
                  src="/assets/images/service-pic1.webp" 
                  alt="Team Working"
                  width={600}
                  height={500}
                />
              </div>
            </div>
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

