"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./portfolioComponent.scss";

const portfolioItems = [
  {
    type: "video",
    src: "/assets/images/smm-ads.mp4",
    category: "Social Media Marketing",
  },
  {
    type: "video",
    src: "/assets/images/jd-ads1.mp4",
    category: "Social Media Marketing",
  },
  {
    type: "video",
    src: "/assets/images/mukesh-masala.mp4",
    title: "Brand Reel",
    category: "Social Media Marketing",
  },
  {
    type: "video",
    src: "/assets/images/cueen-reel-hny.mp4",
    title: "Festival Video",
    category: "Website Promotion",
  },
  {
    type: "video",
    src: "/assets/images/car-vacuum.mp4",
    title: "Product Promo Video",
    category: "E-commerce Marketing",
  },
];

const testimonials = [
  {
    image: "/assets/images/mukesh-logo-w.webp",
    name: "Mukesh Suri",
    company: "Mukesh Food Products",
    text: "Maine Jaiswal Digital ki digital marketing services li hain. Unke product video ads creative aur engaging the, jisse brand reach aur customer interest dono improve hua. Social media marketing ke liye ek reliable aur professional team hai.",
  },
  {
    image: "/assets/images/dns-valuation.webp",
    name: "Ujjwal Kumar",
    company: "DNS Valuation",
    text: "Jaiswal Digital ne humare business ke liye ek custom application develop kiya, jisse property details form fill karna pe PDF file download ho jata hai. Ab paper par details likhne ki koi zarurat nahi padti—sab kuch digital ho gaya hai. Is solution ne humara kaam fast, organized aur efficient bana diya.",
  },
  {
    image: "/assets/images/male-team2.webp",
    name: "Abhishek vaish",
    company: "Gift Corner Owner",
    text: "Mera offline shop mein sales kaafi kam ho gayi thi aur mujhe online business ka experience nahi tha. Jaiswal Digital ke support se mera Meesho aur Amazon account setup hua aur poora e-commerce business manage kiya gaya. Ab main online products sell kar raha hoon aur sales grow ho rahi hain.",
  },
  {
    image: "/assets/images/rakesh-logo-w.webp",
    name: "Amit Kesari",
    company: "Shree Ram Rakesh",
    text: "Jaiswal Digital ne humare masala products ke liye social media marketing aur product video ads ka excellent kaam kiya. Videos attractive the aur product clearly showcase hua, jisse reach aur engagement dono better mile. Brand promotion ke liye ek trusted aur result-oriented team.",
  },
];

export default function PortfolioComponent() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section min-vh-40 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="hero-title">Portfolio</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="client portfolio">
        <div className="container">
          {/* Section Heading */}
          <div className="text-center mb-5">
            <span className="section-tag">OUR WORK</span>
            <h2 className="section-title">Creative Portfolio</h2>
          </div>

          <div className="row justify-content-center g-4 mb-5">
            {portfolioItems.slice(0, 2).map((item, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="portfolio-card">
                  <div className="portfolio-media">
                    <video
                      src={item.src}
                      controls
                      preload="metadata"
                      playsInline
                    ></video>
                  </div>
                  <div className="portfolio-content">
                    <span>{item.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row justify-content-center g-4">
            {portfolioItems.slice(2).map((item, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="portfolio-card">
                  <div className="portfolio-media">
                    <video
                      src={item.src}
                      controls
                      preload="metadata"
                      playsInline
                    ></video>
                  </div>
                  <div className="portfolio-content">
                    {item.title && <h5>{item.title}</h5>}
                    <span>{item.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section" id="testimonialCarousel">
        <div className="container">
          {/* Heading */}
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
    </>
  );
}

