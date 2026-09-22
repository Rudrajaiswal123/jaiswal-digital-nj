import Link from "next/link";
import Image from "next/image";
import ContactForm from "../contact-form/ContactForm";
import TrustedSection from "../trusted-section/TrustedSection";
import { trustedLogos, teamMembers } from "./aboutData";
import { testimonials } from "../home/homeData";
import "./about.scss";

const services = [
  ["Website Development", "We plan and build responsive business websites that explain your offer clearly, load well on mobile and make it simple for prospects to enquire."],
  ["SEO", "We improve the pages customers need to find through keyword research, useful on-page content, technical checks and a sustainable visibility plan."],
  ["Local SEO", "We help location-based businesses strengthen their Google Business Profile, local service signals and Maps visibility for relevant nearby searches."],
  ["Google Ads", "We set up and refine search campaigns around high-intent queries, conversion tracking and the actions that matter to your business."],
  ["Meta Ads", "We create Facebook and Instagram campaigns that match the audience, creative format and lead or awareness objective of each campaign."],
  ["Social Media Management", "We turn brand priorities into a consistent content plan, with platform-ready creative, captions and performance review."],
  ["Graphic Designing", "We produce campaign and brand visuals that keep communication clear and recognisable across ads, social posts and marketing materials."],
  ["Video Editing", "We edit short-form and promotional video content that communicates the product, message and next step quickly."],
  ["E-commerce Management", "We support Amazon, Flipkart and Meesho sellers with marketplace operations and product-listing improvements."],
];
const icons = [
  "bi-globe",
  "bi-search",
  "bi-geo-alt",
  "bi-google",
  "bi-megaphone",
  "bi-share",
  "bi-palette",
  "bi-play-btn",
  "bi-cart",
];
const approach = [
  "Understand|We start by understanding your business, audience, competition and objectives.",
  "Strategize|We identify the right channels and create a practical strategy around your goals.",
  "Execute|We build, launch and manage the required digital assets and campaigns.",
  "Optimize|We analyze performance, identify opportunities and continuously improve the work.",
];
const faqs = [
  "What does Jaiswal Digital do?|We provide website development, digital marketing, creative and e-commerce support for businesses building their online presence.",
  "Do you provide website development services?|Yes. We build responsive, SEO-friendly business websites for clients across India.",
  "Do you provide SEO and Local SEO?|Yes. We support organic visibility, Google Business Profile optimization and local search strategy.",
  "Do you manage Google Ads and Meta Ads?|Yes. We manage campaign setup, targeting, optimization and reporting; ad spend remains separate.",
  "Can I hire individual services?|Yes. Services can be selected individually or combined into a tailored solution.",
  "How can I get started?|Share your needs through the consultation form and our team will get in touch.",
];
const reasonsToWorkWithUs = [
  ["Integrated Digital Services", "Website, search, paid campaigns and creative work can be planned together, so each channel supports the same customer journey."],
  ["Business-Focused Strategy", "We begin with your offer, audience and goals, then select the activities that are appropriate for the stage of your business."],
  ["Performance & Data", "We use available performance signals to identify what needs attention and where the next improvement can have the most value."],
  ["Transparent Communication", "You receive clear conversations about scope, priorities, deliverables and next steps throughout the work."],
  ["Flexible Solutions", "Choose a single specialist service or combine services when a broader website and marketing plan is more useful."],
  ["Modern Technology", "We use current web tools and practical marketing workflows to create maintainable digital assets for your business."],
];
const values = [
  ["Transparency", "We explain the work, the purpose behind it and the decisions that affect your project."],
  ["Performance", "We concentrate on useful indicators such as visibility, qualified traffic, enquiries and operational progress."],
  ["Creativity", "Creative work should make the message easier to understand and more memorable for the intended audience."],
  ["Innovation", "We evaluate new platforms and formats thoughtfully, using them when they fit the audience and business objective."],
  ["Long-Term Thinking", "We favour durable website, content and search improvements over short-lived tactics or unsupported promises."],
];

export default function AboutComponent() {
  return (
    <main className="about-new">
      <section className="about-hero">
        <div className="about-wrap">
          <div className="about-hero-grid">
            <div>
              <span className="about-kicker">ABOUT JAISWAL DIGITAL</span>
              <h1>Building Digital Experiences That Help Businesses Grow</h1>
              <p>
                Jaiswal Digital is a growth-focused digital marketing and
                website development agency helping businesses build their online
                presence, reach the right audience and create meaningful digital
                growth.
              </p>
              <div className="about-actions">
                <Link href="/services" className="about-primary">
                  Explore Our Services <i className="bi bi-arrow-right" />
                </Link>
                <Link href="/portfolio" className="about-secondary">
                  View Our Work
                </Link>
              </div>
            </div>
            <div className="about-visual">
              <Image
                src="/assets/images/about-jaiswal-digital-digital-marketing-agency.png"
                alt="Jaiswal Digital marketing agency"
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
      <section className="who-section">
        <div className="about-wrap split">
          <div className="who-visual">
            <Image
              src="/assets/images/who-visual.png"
              alt="Strategy, technology and creativity at Jaiswal Digital"
              width={700}
              height={500}
              className="who-visual-image"
            />
          </div>
          <div>
            <span className="about-kicker">WHO WE ARE</span>
            <h2>Strategy, Technology &amp; Creativity Working Together</h2>
            <p>
              Jaiswal Digital combines digital marketing, modern web development
              and creative services to help businesses strengthen their online
              presence.
            </p>
            <p>
              From responsive websites and search visibility to advertising
              campaigns and engaging content, we bring multiple digital
              capabilities together under one roof.
            </p>
            <div className="highlights">
              {["Strategy", "Technology", "Creativity", "Performance"].map(
                (item) => (
                  <b key={item}>{item}</b>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="story-section">
        <div className="about-wrap">
          <header className="about-heading">
            <span className="about-kicker">OUR STORY</span>
            <h2>Our Journey</h2>
            <p>
              From digital ideas to practical solutions for growing businesses.
            </p>
          </header>
          <ol>
            {[
              "Started With a Digital Vision|A purpose to make digital tools more practical for growing businesses.",
              "Expanding Digital Capabilities|Adding web development, SEO, e-commerce and marketing services.",
              "Building Integrated Solutions|Combining technology, marketing and creative services.",
              "Helping Businesses Grow Online|Supporting businesses as they improve their digital presence.",
            ].map((step, index) => {
              const [title, text] = step.split("|");
              return (
                <li key={title}>
                  <b>0{index + 1}</b>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
      <section className="what-section">
        <div className="about-wrap">
          <header className="about-heading">
            <span className="about-kicker">WHAT WE DO</span>
            <h2>Practical Digital Solutions</h2>
            <p>
              We provide practical digital solutions across technology,
              marketing and creative services.
            </p>
          </header>
          <div className="about-services">
            {services.map(([service, description], index) => (
              <article key={service}>
                <i className={`bi ${icons[index]}`} />
                <h3>{service}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className="center">
            <Link className="about-primary" href="/services">
              Explore All Services <i className="bi bi-arrow-right" />
            </Link>
          </div>
        </div>
      </section>
      <section className="approach-section">
        <div className="about-wrap">
          <header className="about-heading">
            <span className="about-kicker">OUR APPROACH</span>
            <h2>How We Approach Digital Growth</h2>
          </header>
          <div className="approach-grid">
            {approach.map((step, index) => {
              const [title, text] = step.split("|");
              return (
                <article key={title}>
                  <b>0{index + 1}</b>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="why-about">
        <div className="about-wrap">
          <header className="about-heading">
            <h2>Why Work With Jaiswal Digital?</h2>
          </header>
          <div className="why-about-grid">
            {reasonsToWorkWithUs.map(([title, description], index) => (
              <article key={title}>
                <b>0{index + 1}</b>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="values-section">
        <div className="about-wrap">
          <header className="about-heading">
            <h2>Driven by Results, Built on Trust</h2>
          </header>
          <div>
            {values.map(([title, description]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="mission-section">
        <div className="about-wrap mission-grid">
          <article>
            <span>MISSION</span>
            <h2>Delivering Practical Digital Solutions</h2>
            <p>
              Help businesses strengthen their online presence through effective
              marketing, modern websites, e-commerce support and creative
              solutions.
            </p>
          </article>
          <article>
            <span>VISION</span>
            <h2>Shaping Better Digital Growth</h2>
            <p>
              Help businesses navigate the digital landscape with practical
              strategies, technology and performance-focused execution.
            </p>
          </article>
        </div>
      </section>
      <section className="team-section">
        <div className="about-wrap">
          <header className="about-heading">
            <h2>Meet the Team Behind Jaiswal Digital</h2>
            <p>
              Strategy, creativity and execution come together through our team.
            </p>
          </header>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <article key={member.name}>
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role} at Jaiswal Digital`}
                  width={400}
                  height={450}
                />
                <div>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="expertise-section">
        <div className="about-wrap">
          <header className="about-heading">
            <h2>Technology &amp; Digital Expertise</h2>
          </header>
          <div className="pills">
            {[
              "React.js",
              "Next.js",
              "WordPress",
              "JavaScript",
              "Google Analytics",
              "Technical SEO",
              "Google Ads",
              "Meta Ads",
              "Amazon",
              "Flipkart",
              "Meesho",
              "Graphic Design",
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="locations-section">
        <div className="about-wrap split">
          <div className="india-art">
            <Image
              src="/assets/images/location-jaiswal-digital.png"
              alt="Jaiswal Digital locations in India"
              width={700}
              height={500}
              className="location-image"
            />
          </div>
          <div>
            <span className="about-kicker">LOCATIONS</span>
            <h2>Serving Businesses Across India</h2>
            <p>
              Working with businesses across India through digital-first
              collaboration.
            </p>
            <div className="location-card">
              <b>HEAD OFFICE</b>
              <p>Bengaluru, Karnataka</p>
              <b>BRANCH OFFICE</b>
              <p>Patna, Bihar</p>
            </div>
          </div>
        </div>
      </section>
      <section className="proof-section">
        <div className="about-wrap">
          <header className="about-heading">
            <h2>What Our Clients Say</h2>
          </header>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name}>
                <p>&ldquo;{testimonial.text}&rdquo;</p>
                <b>{testimonial.name}</b>
                <small>{testimonial.company}</small>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="about-faq">
        <div className="about-wrap">
          <header className="about-heading">
            <h2>Frequently Asked Questions</h2>
          </header>
          {faqs.map((item) => {
            const [question, answer] = item.split("|");
            return (
              <details key={question}>
                <summary>
                  {question}
                  <i className="bi bi-plus-lg" />
                </summary>
                <p>{answer}</p>
              </details>
            );
          })}
        </div>
      </section>
      <section className="about-cta">
        <div className="about-wrap about-heading">
          <h2>Let&apos;s Build Something That Moves Your Business Forward</h2>
          <p>
            Have a website, marketing or digital growth challenge? Tell us what
            you&apos;re working on and let&apos;s explore the right solution.
          </p>
          <div className="about-actions">
            <Link href="#about-contact" className="about-primary">
              Start a Conversation <i className="bi bi-arrow-right" />
            </Link>
            <Link href="/services" className="about-secondary">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
      <section className="about-contact" id="about-contact">
        <div className="about-wrap split">
          <div>
            <span className="about-kicker">GET STARTED</span>
            <h2>Start a Conversation</h2>
            <p>
              Tell us what you&apos;re working on and we&apos;ll help you
              identify a practical next step.
            </p>
          </div>
          <ContactForm
            className="about-lead-form"
            title="Get a free consultation"
            subtitle="Share your details and let's discuss your goals."
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
