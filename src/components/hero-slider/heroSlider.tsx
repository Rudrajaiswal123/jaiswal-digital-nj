"use client";

import Slider from "react-slick";
import Image from "next/image";
import "./heroSlider.scss";
import { heroSlides } from "./heroSliderData";


export default function HeroSlider() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <section className="heroSection">
      <Slider {...settings}>
        {heroSlides.map((item, index) => (
          <div key={index} className="heroSlide">
            <div className="container">
              <div className="row align-items-center">
                {/* Left Content */}
                <div className="col-lg-6">
                  <h1 className="heroTitle">{item.title}</h1>
                  <p className="heroDesc">{item.desc}</p>
                  <a href="/contact" className="heroBtn">
                    CONTACT US
                  </a>
                </div>

                {/* Right Image */}
                <div className="col-lg-6 text-center">
                  <Image
                    src={item.img}
                    alt="Digital marketing illustration"
                    width={520}
                    height={420}
                    priority={index === 0}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
