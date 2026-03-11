"use client";

import Slider from "react-slick";
import Image from "next/image";
import "./testimonialComponent.scss";
import { testimonials } from "./testimonialData";

export default function Testimonial() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonialSection">
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="cardWrapper">
            <div className="card">
              <p className="message">{item.message}</p>
              <h4 className="name">{item.name}</h4>
              <span className="location">{item.location.toUpperCase()}</span>
              <Image
                src="/assets/images/quoteIcon-1.webp"
                alt="quote" 
                className="cardQuote"
                width={150}
                height={55}              
              />
              <Image
                src="/assets/images/pattern-1.webp"
                alt="pattern-1"
                className="cardPattern"
                width={150}
                height={55}               
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
