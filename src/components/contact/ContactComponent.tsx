'use client';

import React from 'react';
import Image from 'next/image';
import ContactForm from '../contact-form/ContactForm';
import './contact.scss';
import { contactInfo, socialLinks } from './contactData';

export default function ContactComponent() {
  return (
    <>
      <section className="hero-section d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="hero-title">Contact</h1>
              <p className="hero-subtitle">
                Reach out for Digital Marketing &amp;<br />
                Ecommerce Solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container py-5">
          <div className="row align-items-start g-5">
            <div className="col-lg-6 text-light">
              <span className="small-title">GET IN TOUCH</span>
              <h2 className="main-title">
                Let&apos;s Start Your Digital Growth Journey
              </h2>
              <p className="description">
                Have a project in mind or need expert support to grow online? Connect with Jaiswal Digital and let&apos;s discuss solutions that drive real results for your business.
              </p>
              <div className="info-box">
                {contactInfo.map((info, index) => (
                  <div key={index} className="info-item">
                    <div className="icon pink">
                      <i className={info.icon}></i>
                    </div>
                    <div>
                      <h6>{info.title}</h6>
                      <p style={{ whiteSpace: 'pre-line' }}>{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              <h6 className="social-title">Follow our social media</h6>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <i className={social.icon}></i>
                  </a>
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

      <section className="container my-4">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.837734098915!2d77.67360077401511!3d12.982228314647317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11a700e07a0b%3A0xd7e67fbc266fb0a4!2sJaiswal%20Digital!5e0!3m2!1sen!2sin!4v1769403800613!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                height="300"
                style={{ width: '100%', border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
                title="Jaiswal Digital Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

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

