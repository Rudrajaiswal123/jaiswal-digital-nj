"use client";

import React from "react";
import Image from "next/image";
import "./homeComponent.scss";
import { trustedLogos, testimonials, skills } from "./homeData";
import ContactForm from "../contact-form/ContactForm";
import FAQ from "../faq/FAQ";
import TrustedSection from "../trusted-section/TrustedSection";
import ServicesSection from "../services-section/ServicesSection";
import { agencyServices } from "../services-section/serviceData";
import ServicePricingSection from "../service-pricing/ServicePricingSection";
import { servicePricing } from "../service-pricing/servicePricingData";

export default function HomeComponent() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section home-hero d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="hero-badge mb-4 d-inline-block">
                WELCOME TO Jaiswal Digital
              </span>
              <h1 className="hero-title">Powering Your Digital Growth</h1>
              <p className="hero-subtitle">
                Smart strategies and performance-driven solutions to grow your
                business online.
              </p>
              <p className="hero-form-note mb-0">Tell us about your business and we&apos;ll be in touch shortly.</p>
            </div>
            <div className="col-lg-5 ms-lg-auto">
              <ContactForm
                className="hero-lead-form"
                title="Get a free consultation"
                subtitle="Share your details and let&apos;s discuss your growth goals."
                showCompanyField={false}
                showCityField={true}
                showServiceField={true}
                showMessageField={true}
                messagePlaceholder="Tell us about your business and requirements..."
                requiredFields={["name", "city"]}
                emailServiceId="service_8i6vy19"
                emailTemplateId="template_0wppclq"
                emailPublicKey="S9FlpPUNmoshtqgjY"
                buttonText="GET STARTED"
                whatsappNumber="9353042456"
              />
            </div>
          </div>
        </div>
      </section>
      <TrustedSection logos={trustedLogos} />

      <ServicesSection services={agencyServices} />

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

      <ServicePricingSection services={servicePricing} />

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
                        className={`progress-bar ${skill.width}`}                        
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6 mt-lg-4">
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
