"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./homeComponent.scss";
import { services, trustedLogos, testimonials, skills } from "./homeData";
import ContactForm from "../contact-form/ContactForm";
import FAQ from "../faq/FAQ";

export default function HomeComponent() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section min-vh-40 d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <span className="hero-badge mb-4 d-inline-block">
                WELCOME TO Jaiswal Digital
              </span>
              <h1 className="hero-title">Powering Your Digital Growth.</h1>
              <p className="hero-subtitle">
                Smart strategies and performance-driven solutions to grow your
                business online.
              </p>
              <div className="hero-buttons mt-4">
                <div className="d-none d-lg-block">
                  <Link href="/about" className="btn gradient-btn">
                    Learn more
                  </Link>
                </div>
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
                  style={{ objectFit: "contain" }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
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
                  <Link href="/services" className="btn-service">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section" id="testimonialCarousel">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-tag">TESTIMONIAL</span>
            <h2 className="section-title">Client Feedback</h2>
          </div>
          <div className="row justify-content-center g-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-lg-3">
                <div className="testimonial-card">
                  <Image
                    src={testimonial.image}
                    className="avatar"
                    alt={testimonial.name}
                    width={60}
                    height={60}
                  />
                  <p>{testimonial.text}</p>
                  <h5>{testimonial.name}</h5>
                  <span>{testimonial.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Skills Section with Contact Form */}
      <section className="skills-section">
        <div className="container">
          <div className="row g-0 align-items-stretch">
            <div className="col-lg-6">
              <div className="skills-content">
                <span className="section-tag">OUR VALUE</span>
                <h2>Let&apos;s Build Your Digital Success</h2>
                <p className="skills-desc">
                  Ready to grow your business online? Connect with Jaiswal
                  Digital and lets turn your ideas into powerful, results-driven
                  digital solutions.
                </p>
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-label">
                      <span>{skill.name}</span>
                      <span>{skill.percentage}</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: skill.width }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <ContactForm
                title="Send us a message"
                subtitle="Please feel free to send us any questions."
                showCompanyField={true}
                showSubjectField={true}
                emailServiceId="service_8i6vy19"
                emailTemplateId="template_0wppclq"
                emailPublicKey="S9FlpPUNmoshtqgjY"
                buttonText="SEND MESSAGE"
              />
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
