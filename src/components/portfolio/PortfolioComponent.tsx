"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "../contact-form/ContactForm";
import "./portfolioComponent.scss";
const projects = [
  {
    name: "Social Media Campaign",
    category: "Social Media",
    src: "/assets/images/smm-ads.mp4",
    desc: "Creative social media campaign content developed for digital communication.",
    tags: ["Social Media", "Creative"],
    featured: true,
  },
  {
    name: "Digital Advertising Creative",
    category: "Digital Marketing",
    src: "/assets/images/jd-ads1.mp4",
    desc: "Performance-focused advertising creative for a digital campaign.",
    tags: ["Ads", "Creative"],
  },
  {
    name: "Mukesh Food Products Reel",
    category: "Video",
    src: "/assets/images/mukesh-masala.mp4",
    desc: "Brand reel created for food and FMCG marketing.",
    tags: ["Video", "Social Media"],
  },
  {
    name: "Festival Video",
    category: "Video",
    src: "/assets/images/cueen-reel-hny.mp4",
    desc: "Seasonal promotional content for business communication.",
    tags: ["Video", "Creative"],
  },
  {
    name: "Product Promotion",
    category: "E-commerce",
    src: "/assets/images/car-vacuum.mp4",
    desc: "Product video created for e-commerce marketing.",
    tags: ["E-commerce", "Video"],
  },
  {
    name: "Product Creative",
    category: "Social Media",
    src: "/assets/images/mukesh-masala-15-aug.mp4",
    desc: "Social-first product promotion content.",
    tags: ["Social Media", "Creative"],
  },
];
const filters = [
  "All",
  "Digital Marketing",
  "E-commerce",
  "Social Media",
  "Video",
];
export default function PortfolioComponent() {
  const [filter, setFilter] = useState("All");
  const visible =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const featured = projects[0];
  return (
    <main className="portfolio-new">
      <section className="portfolio-hero">
        <div className="portfolio-wrap">
          <nav aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Portfolio</span>
          </nav>
          <div className="portfolio-hero-grid">
            <div>
              <span>OUR PORTFOLIO</span>
              <h1>Digital Projects Built for Growing Businesses</h1>
              <p>
                Explore selected work across digital marketing, e-commerce and
                creative content. Each project is designed around business
                goals, audience and digital requirements.
              </p>
              <Link href="#enquiry" className="portfolio-primary">
                Start Your Project <i className="bi bi-arrow-right" />
              </Link>
              <Link href="/services" className="portfolio-secondary">
                Explore Services
              </Link>
            </div>
            <div className="portfolio-art"><Image src="/assets/images/jaiswal-digital-website-development-digital-marketing-portfolio.png" alt="Jaiswal Digital portfolio projects" width={700} height={500} priority className="page-hero-image" /></div>
          </div>
        </div>
      </section>
      <section className="project-section">
        <div className="portfolio-wrap">
          <header>
            <h2>Our Digital Work</h2>
            <p>
              Selected website, digital marketing, e-commerce and creative
              projects.
            </p>
          </header>
          <div className="filters" role="group" aria-label="Filter projects">
            {filters.map((x) => (
              <button
                key={x}
                onClick={() => setFilter(x)}
                className={filter === x ? "active" : ""}
              >
                {x}
              </button>
            ))}
          </div>
          <div className="project-grid">
            {visible.map((p) => (
              <article key={p.name}>
                <video src={p.src} controls preload="metadata" playsInline />
                <div>
                  <span>{p.category}</span>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <small>{p.tags}</small>
                  <Link href="#enquiry">
                    View Project <i className="bi bi-arrow-right" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="portfolio-process">
        <div className="portfolio-wrap">
          <h2>How We Turn Ideas Into Digital Experiences</h2>
          <ol>
            {[
              "Discover",
              "Plan",
              "Design",
              "Develop",
              "Optimize",
              "Launch",
            ].map((x, i) => (
              <li key={x}>
                <b>0{i + 1}</b>
                <h3>{x}</h3>
                <p>Build around business goals, audience and requirements.</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="portfolio-cta">
        <div className="portfolio-wrap">
          <h2>Have a Project in Mind?</h2>
          <p>
            Whether you need a new website, better search visibility,
            advertising or creative content, let&apos;s discuss what you&apos;re
            building.
          </p>
          <a href="#enquiry" className="portfolio-primary">
            Start Your Project <i className="bi bi-arrow-right" />
          </a>
        </div>
      </section>
      <section id="enquiry" className="portfolio-enquiry">
        <div className="portfolio-wrap">
          <ContactForm
            title="Tell Us About Your Project"
            subtitle="Share your requirements and let's start a conversation."
            showCompanyField
            showCityField
            showServiceField
            showMessageField
            requiredFields={["name", "city"]}
            emailServiceId="service_8i6vy19"
            emailTemplateId="template_0wppclq"
            emailPublicKey="S9FlpPUNmoshtqgjY"
            buttonText="START A CONVERSATION"
            whatsappNumber="9353042456"
          />
        </div>
      </section>
    </main>
  );
}
