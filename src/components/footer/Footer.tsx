"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row gy-4">
          
          {/* Brand Column */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-brand">
              <div className="d-flex align-items-center mb-3">
                <Image
                  src="/assets/images/jaiswal-digital-logo.png"
                  alt="Jaiswal Digital"
                  width={240}
                  height={80}
                  className="footer-logo"
                />
              </div>

              <p className="footer-text pe-lg-5">
                Jaiswal Digital is a growth-focused digital agency helping businesses scale online through strategic
                marketing, e-commerce management, and high-performance digital solutions.
              </p>

              <div className="footer-social">
                <a
                  href="https://www.facebook.com/profile.php?id=61586092373448"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-facebook"></i>
                </a>

                <a
                  href="https://www.instagram.com/jaiswaldigital15/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-instagram"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/jaiswal-digital/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </a>

                <a
                  href="https://www.youtube.com/@JaiswalDigital15"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">Our Services</h5>
            <ul className="footer-links">
              <li><Link href="/services">Website Development</Link></li>
              <li><Link href="/services">E-commerce Account Management</Link></li>
              <li><Link href="/services">Digital Marketing</Link></li>
              <li><Link href="/services">Graphic Designing</Link></li>
              <li><Link href="/services">Video Creation</Link></li>
              <li><Link href="/services">Social Media Marketing</Link></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-title">Useful Links</h5>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Address */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">Address</h5>

            <h6 className="text-light">Head Office</h6>
            <p className="footer-text">
              19th Cross Rd, Kaggadasapura,<br />
              Bengaluru, Karnataka 560093
            </p>

            <h6 className="text-light mt-4">Branch Office</h6>
            <p className="footer-text">
              Patna Sahib Railway Station Rd <br />
              Patna City, Patna, <br />
              Bihar 800009
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>
            Copyright © {new Date().getFullYear()} Jaiswal Digital. All rights reserved.
          </p>

          <div className="footer-policy">
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
