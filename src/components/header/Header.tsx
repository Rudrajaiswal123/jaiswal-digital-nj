'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from "next/navigation";
import './header.scss';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path: string) => pathname === path;

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Handle scroll event for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'sticky' : ''}`}>
      <nav className="navbar navbar-expand-lg py-0">
        <div className="container">

          {/* Logo */}
          <Link href="/" className="navbar-brand d-flex align-items-center">
            <Image
              src="/assets/images/jaiswal-digital-logo.png"
              alt="Jaiswal Digital Logo"
              width={150}
              height={50}
              className="logo rounded-1"
            />
          </Link>

          {/* Mobile Toggle */}
          <button
            className={`navbar-toggler ${menuOpen ? "open" : ""}`}
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Menu */}
          <div className={`custom-mobile-menu d-md-flex justify-content-md-evenly align-items-md-center ${menuOpen ? "active" : ""}`}>
            <ul className="navbar-nav gap-lg-4">

              <li className="nav-item">
                <Link
                  href="/"
                  onClick={handleLinkClick}
                  className={`nav-link ${isActive("/") ? "active" : ""}`}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/about"
                  onClick={handleLinkClick}
                  className={`nav-link ${isActive("/about") ? "active" : ""}`}
                >
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/services"
                  onClick={handleLinkClick}
                  className={`nav-link ${isActive("/services") ? "active" : ""}`}
                >
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/portfolio"
                  onClick={handleLinkClick}
                  className={`nav-link ${isActive("/portfolio") ? "active" : ""}`}
                >
                  Portfolio
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/contact"
                  onClick={handleLinkClick}
                  className={`nav-link ${isActive("/contact") ? "active" : ""}`}
                >
                  Contact
                </Link>
              </li>

            </ul>

            {/* <div className="mobile-btn text-md-center">
              <a
                href="https://calendly.com/jaiswaldigital15/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn gradient-btn"
              >
                Book Free Consultation
              </a>
            </div> */}
          </div>

        </div>
      </nav>
    </header>
  );
}