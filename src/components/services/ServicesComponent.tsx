"use client";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "../contact-form/ContactForm";
import TrustedSection from "../trusted-section/TrustedSection";
import ServicePricingSection from "../service-pricing/ServicePricingSection";
import { trustedLogos } from "../home/homeData";
import { servicePricing } from "../service-pricing/servicePricingData";
import "./services.scss";
const items = [
  [
    "bi-globe",
    "Website Development",
    "Build a fast, responsive and SEO-friendly website that creates trust, delivers a great user experience and turns visitors into potential customers.",
  ],
  [
    "bi-search",
    "SEO",
    "Improve organic visibility with keyword research, on-page optimization, technical SEO and strategic link building for sustainable search growth.",
  ],
  [
    "bi-geo-alt",
    "Local SEO",
    "Get discovered by nearby customers through Google Business Profile optimization, local keywords, citations and local search strategies.",
  ],
  [
    "bi-google",
    "Google Ads",
    "Reach high-intent customers through targeted Google Ads campaigns designed to increase qualified traffic, enquiries and conversions.",
  ],
  [
    "bi-megaphone",
    "Meta Ads",
    "Grow with targeted Facebook and Instagram advertising campaigns focused on awareness, leads, remarketing and customer acquisition.",
  ],
  [
    "bi-share",
    "Social Media Management",
    "Build a consistent social presence through content planning, creative design, publishing, audience engagement and performance tracking.",
  ],
  [
    "bi-palette",
    "Graphic Designing",
    "Create professional visual content for social media, advertisements, branding, promotions and marketing campaigns.",
  ],
  [
    "bi-play-btn",
    "Video Editing",
    "Create engaging Reels, Shorts, advertisements and promotional videos designed to capture attention and increase audience engagement.",
  ],
] as const;
const details = [
  [
    "Website Development Services",
    "Your website is often the first interaction customers have with your business. We create modern, responsive and SEO-friendly websites designed for speed, usability and conversions.",
    "Business Website Development|WordPress Website Development|Next.js Website Development|Landing Page Development|E-commerce Website Development|Responsive Web Design|Website Speed Optimization|SEO-Friendly Development",
    "Build My Website",
  ],
  [
    "SEO Services to Improve Your Google Visibility",
    "Our SEO services combine keyword research, on-page optimization, technical improvements, content optimization and link-building strategies to improve organic visibility and attract relevant search traffic.",
    "SEO Audit|Keyword Research|Competitor Analysis|On-Page Optimization|Technical SEO|Content Optimization|Link Building|Performance Tracking",
    "Improve My SEO",
  ],
  [
    "Local SEO Services for Better Local Visibility",
    "Help local customers find and contact your business through stronger local search and Google Maps visibility.",
    "Google Business Profile Optimization|Local Keyword Research|NAP Optimization|Local Citations|Local Landing Pages|Review Strategy|Google Maps Visibility|Local Competitor Analysis",
    "Grow My Local Business",
  ],
  [
    "Google Ads Management for Qualified Leads",
    "Create targeted search, display and remarketing campaigns that connect your business with high-intent audiences. Advertising budget is separate from management fees.",
    "Search Ads|Display Ads|Remarketing|Keyword Research|Conversion Tracking|Landing Page Optimization|Campaign Optimization|Performance Reporting",
    "Start Google Ads",
  ],
  [
    "Facebook & Instagram Advertising",
    "Build performance-focused Meta Ads campaigns for brand awareness, leads, retargeting and customer acquisition.",
    "Lead Generation Campaigns|Awareness Campaigns|Traffic Campaigns|Retargeting|Audience Targeting|Creative Testing|Campaign Optimization|Conversion Tracking",
    "Start Meta Ads",
  ],
  [
    "Social Media Management Services",
    "Build a consistent and professional social media presence across platforms with strategic content, creative design and audience-focused campaigns.",
    "Content Planning|Social Media Strategy|Post Design|Reels Content|Caption Writing|Hashtag Strategy|Publishing|Performance Tracking",
    "Manage My Social Media",
  ],
  [
    "Professional Graphic Designing Services",
    "Create polished visual content that supports every digital campaign and strengthens your brand identity.",
    "Social Media Creatives|Advertisement Designs|Promotional Banners|Business Graphics|Marketing Creatives|Branding Materials|Festival Creatives",
    "Create My Design",
  ],
  [
    "Video Editing & Creative Content",
    "Create engaging short-form and promotional video content designed to capture attention and encourage engagement.",
    "Instagram Reels|YouTube Shorts|Promotional Videos|Product Videos|Advertisement Videos|Motion Graphics|Text Animation|Social Media Videos",
    "Create My Video",
  ],
] as const;
const detailImages = [
  "/assets/images/website-development-services-jaiswal-digital.png",
  "/assets/images/seo-services-jaiswal-digital.png",
  "/assets/images/local-seo-services-jaiswal-digital.png",
  "/assets/images/google-ads-management-jaiswal-digital.png",
  "/assets/images/meta-ads-facebook-instagram-advertising-jaiswal-digital.png",
  "/assets/images/social-media-management-services-jaiswal-digital.png",
  "/assets/images/graphic-designing-services-jaiswal-digital.png",
  "/assets/images/video-editing-creative-content-services-jaiswal-digital.png",
];

const serviceIconImages: Record<string, string> = {
  'Website Development': '/assets/icons/website-development.png',
  'SEO': '/assets/icons/seo-icon.png',
  'Local SEO': '/assets/icons/local-seo.png',
  'Google Ads': '/assets/icons/Google_Ads.webp',
  'Meta Ads': '/assets/icons/meta-icon.webp',
  'Social Media Management': '/assets/icons/smm-icon.png',
  'Graphic Designing': '/assets/icons/graphic-design.png',
  'Video Editing': '/assets/icons/video-editing.png',
};
const faq = [
  [
    "What digital marketing services does Jaiswal Digital provide?",
    "We provide website development, SEO, local SEO, Google Ads, Meta Ads, social media management, graphic design, video editing and e-commerce account management.",
  ],
  [
    "Do you provide website development services in India?",
    "Yes. We build responsive, SEO-friendly business and e-commerce websites for businesses across India.",
  ],
  [
    "How much does website development cost?",
    "A business website starts from \u20B915,000; the final quote depends on the pages, features and integrations required.",
  ],
  [
    "How long does SEO take to show results?",
    "SEO progress depends on competition, website condition and search demand. We focus on sustainable improvements and transparent reporting.",
  ],
  [
    "Do you provide Local SEO services?",
    "Yes. Local SEO support includes Google Business Profile optimization, local keywords, citations and Maps visibility.",
  ],
  [
    "Do you manage Google Ads campaigns?",
    "Yes. We manage campaign setup, targeting, conversion tracking, optimization and performance reporting. Ad spend is separate.",
  ],
  [
    "Can I choose individual services instead of a package?",
    "Yes. You can select individual services or request a tailored combination for your goals.",
  ],
  [
    "Do you provide customized digital marketing solutions?",
    "Yes. We combine website development, SEO, advertising, social media and creative work into a tailored strategy.",
  ],
];
export default function ServicesComponent() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="services-wrap">
          <div className="services-hero-grid">
            <div>
              <span className="services-kicker">OUR SERVICES</span>
              <h1>Digital Marketing &amp; Website Development Services</h1>
              <p>
                From high-performance websites and SEO to paid advertising,
                social media and creative content, Jaiswal Digital provides
                complete digital solutions designed to help businesses build
                visibility, generate leads and grow online.
              </p>
              <div className="services-actions">
                <Link href="#consultation" className="services-primary">
                  Get a Free Consultation <i className="bi bi-arrow-right" />
                </Link>
                <Link href="#pricing" className="services-secondary">
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="services-visual">
              <Image
                src="/assets/images/digital-marketing-website-development-services-jaiswal-digital.png"
                alt="Digital marketing and website development services"
                width={700}
                height={500}
                priority
                className="page-hero-image"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <TrustedSection logos={trustedLogos} />
      </section>
      <section className="services-overview">
        <div className="services-wrap">
          <header className="services-heading">
            <span className="services-kicker">WHAT WE OFFER</span>
            <h2>Complete Digital Solutions for Business Growth</h2>
            <p>
              Whether you are launching a new business, building your online
              presence or looking to generate more customers, our digital
              services support every stage of online growth.
            </p>
          </header>
          <div className="overview-grid">
            {items.map(([icon, title, text]) => (
              <article key={title}>
                <Image src={serviceIconImages[title]} alt="" width={48} height={48} className="service-brand-icon" />
                <h3>{title}</h3>
                <p>{text}</p>
                <Link href="#consultation">
                  Explore Service <i className="bi bi-arrow-right" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="detail-sections">
        {details.map(([title, text, features, cta], i) => (
          <article key={title}>
            <div className="services-wrap detail-grid">
              <div className="detail-copy">
                <span>0{i + 1}</span>
                <h2>{title}</h2>
                <p>{text}</p>
                <h3>What We Offer</h3>
                <ul>
                  {features.split("|").map((f) => (
                    <li key={f}>
                      <i className="bi bi-check2" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="#consultation" className="services-text-link">
                  {cta} <i className="bi bi-arrow-right" />
                </Link>
              </div>
              <div className="detail-visual">
                <Image
                  src={detailImages[i]}
                  alt={`${items[i][1]} by Jaiswal Digital`}
                  width={700}
                  height={500}
                  className="website-development-visual"
                />
              </div>
            </div>
          </article>
        ))}
      </section>
      <section className="why-section">
        <div className="services-wrap">
          <header className="services-heading">
            <span className="services-kicker">WHY JAISWAL DIGITAL</span>
            <h2>Why Businesses Choose Jaiswal Digital</h2>
          </header>
          <div className="why-grid">
            {[
              "Business-Focused Strategy|Strategies designed around business objectives rather than vanity metrics.",
              "Performance-Driven Execution|Focus on measurable visibility, traffic, engagement and lead-generation activities.",
              "Modern Technology|Modern web technologies and digital tools create scalable solutions.",
              "Transparent Communication|Clear communication, reporting and project updates.",
              "Integrated Digital Services|Website, SEO, advertising, social media and creative services under one roof.",
              "Customized Solutions|Solutions tailored to business requirements instead of one-size-fits-all packages.",
            ].map((x, i) => {
              let [t, p] = x.split("|");
              return (
                <article key={t}>
                  <b>0{i + 1}</b>
                  <h3>{t}</h3>
                  <p>{p}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="process-section">
        <div className="services-wrap">
          <header className="services-heading">
            <span className="services-kicker">OUR PROCESS</span>
            <h2>How We Work</h2>
          </header>
          <ol>
            {[
              "Discover|Understand your business, audience and goals.",
              "Plan|Create a strategy based on your objectives.",
              "Build|Develop websites, campaigns and creative assets.",
              "Launch|Deploy campaigns and digital solutions.",
              "Optimize|Analyze performance and continuously improve.",
              "Grow|Scale what works and build sustainable digital growth.",
            ].map((x, i) => {
              let [t, p] = x.split("|");
              return (
                <li key={t}>
                  <b>0{i + 1}</b>
                  <h3>{t}</h3>
                  <p>{p}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
      <div id="pricing">
        <ServicePricingSection services={servicePricing} />
      </div>
      <section className="faq-section">
        <div className="services-wrap">
          <header className="services-heading">
            <span className="services-kicker">FAQ</span>
            <h2>Frequently Asked Questions</h2>
          </header>
          {faq.map(([q, a]) => (
            <details key={q}>
              <summary>
                {q}
                <i className="bi bi-plus-lg" />
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
      <section id="consultation" className="consult-section">
        <div className="services-wrap consult-grid">
          <div>
            <span className="services-kicker">LET&apos;S GROW</span>
            <h2>Ready to Grow Your Business Online?</h2>
            <p>
              Whether you need a new website, better search visibility, paid
              advertising or a complete digital marketing strategy, let&apos;s
              create a solution around your business goals.
            </p>
            <a className="services-secondary" href="https://wa.me/919353042456">
              Talk to Our Team
            </a>
          </div>
          <ContactForm
            className="services-lead-form"
            title="Get a free consultation"
            subtitle="Tell us what you need and we'll be in touch."
            showCompanyField={false}
            showCityField
            showServiceField
            showMessageField
            requiredFields={["name", "city"]}
            emailServiceId="service_8i6vy19"
            emailTemplateId="template_0wppclq"
            emailPublicKey="S9FlpPUNmoshtqgjY"
            buttonText="GET STARTED"
            whatsappNumber="9353042456"
          />
        </div>
      </section>
    </main>
  );
}
