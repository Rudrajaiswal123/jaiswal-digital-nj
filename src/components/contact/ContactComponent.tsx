import Link from "next/link";
import Image from "next/image";
import ContactForm from "../contact-form/ContactForm";
import "./contact.scss";
const contactCards = [
  [
    "bi-geo-alt",
    "HEAD OFFICE",
    "Bengaluru, Karnataka",
    "19th Cross Rd, Kaggadasapura, Bengaluru, Karnataka 560093",
    "Get Directions",
    "https://maps.google.com/?q=Jaiswal+Digital+Bengaluru",
  ],
  [
    "bi-geo-alt",
    "BRANCH OFFICE",
    "Patna, Bihar",
    "Patna Sahib Railway Station Road, Patna City, Patna, Bihar 800009",
    "View Location",
    "https://maps.google.com/?q=Patna+Sahib+Railway+Station",
  ],
//   [
//     "bi-envelope",
//     "EMAIL",
//     "rudra@jaiswaldigital.com",
//     "For project and service enquiries",
//     "Send Email",
//     "mailto:rudra@jaiswaldigital.com",
//   ],
  [
    "bi-telephone",
    "PHONE",
    "+91 93530 42456",
    "Call or WhatsApp our team",
    "Call Us",
    "tel:+919353042456",
  ],
  [
    "bi-whatsapp",
    "WHATSAPP",
    "+91 93530 42456",
    "Chat directly about your requirements",
    "Chat on WhatsApp",
    "https://wa.me/919353042456",
  ],
];
const chips = [
  "Website Development",
  "SEO",
  "Local SEO",
  "Google Ads",
  "Meta Ads",
  "Social Media",
  "Graphic Design",
  "Video Editing",
  "E-commerce",
];
export default function ContactComponent() {
  return (
    <main className="contact-new">
      <section className="contact-hero">
        <div className="contact-wrap">
          <div className="contact-hero-grid">
            <div>
              <span className="contact-kicker">GET IN TOUCH</span>
              <h1>Let&apos;s Talk About Your Digital Growth</h1>
              <p>
                Have a project in mind, need a new website, or looking to
                improve online visibility? Tell us about your goals and our team
                will help explore the right digital solution.
              </p>
              <a href="#contact-form" className="contact-primary">
                Start a Conversation <i className="bi bi-arrow-down" />
              </a>
            </div>
            <div className="contact-visual">
              <Image
                src="/assets/images/contact-jaiswal-digital-digital-marketing-agency.png"
                alt="Contact Jaiswal Digital"
                width={700}
                height={500}
                priority
                className="page-hero-image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="contact-intro">
        <div className="contact-wrap">
          <header>
            <h2>Let&apos;s Build Something That Moves Your Business Forward</h2>
            <p>
              Whether you need a high-performance website, better search
              visibility, paid advertising, social media support or a complete
              digital marketing strategy, Jaiswal Digital can help plan and
              execute the right solution.
            </p>
          </header>
          <div>
            {[
              "Quick Response",
              "Customized Solutions",
              "Transparent Communication",
            ].map((x) => (
              <b key={x}>{x}</b>
            ))}
          </div>
        </div>
      </section>
      <section className="contact-main" id="contact-form">
        <div className="contact-wrap contact-columns">
          <aside>
            <span className="contact-kicker">CONTACT JAISWAL DIGITAL</span>
            <h2>Tell Us What You&apos;re Working On</h2>
            {contactCards.map(([icon, label, title, text, cta, url]) => (
              <article key={label}>
                <i className={`bi ${icon}`} />
                <div>
                  <small>{label}</small>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <a
                    href={url}
                    target={url.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                  >
                    {cta} <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </article>
            ))}
          </aside>
          <div>
            <h2>Send Us a Message</h2>
            <p>
              Share a few details about your project and we&apos;ll get back to
              you.
            </p>
            <div className="contact-chips">
              <h3>What can we help you with?</h3>
              {chips.map((x) => (
                <button type="button" key={x}>
                  {x}
                </button>
              ))}
            </div>
            <ContactForm
              className="contact-lead-form"
              title=""
              subtitle=""
              showCompanyField
              showCityField
              showServiceField
              showMessageField
              requiredFields={["name", "city"]}
              messagePlaceholder="Tell us about your business, project requirements and goals..."
              emailServiceId="service_8i6vy19"
              emailTemplateId="template_0wppclq"
              emailPublicKey="S9FlpPUNmoshtqgjY"
              buttonText="GET A FREE CONSULTATION"
              whatsappNumber="9353042456"
            />
            <small className="privacy-note">
              No spam. Your information is used only to respond to your enquiry.
            </small>
          </div>
        </div>
      </section>
      <section className="contact-steps">
        <div className="contact-wrap">
          <h2>What Happens Next?</h2>
          <ol>
            {[
              "Send Your Enquiry|Tell us about your business and requirements.",
              "Discuss|We review your requirements and discuss the project.",
              "Plan|Define the appropriate solution, scope and next steps.",
              "Get Started|Move forward with the agreed digital solution.",
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
      <section className="contact-locations">
        <div className="contact-wrap">
          <h2>Connect With Jaiswal Digital</h2>
          <p>
            Based in Bengaluru and Patna, we work with businesses through
            digital-first collaboration.
          </p>
          <iframe
            loading="lazy"
            title="Jaiswal Digital Bengaluru location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.837734098915!2d77.67360077401511!3d12.982228314647317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11a700e07a0b%3A0xd7e67fbc266fb0a4!2sJaiswal%20Digital!5e0!3m2!1sen!2sin!4v1769403800613!5m2!1sen!2sin"
          />
        </div>
      </section>
      <section className="contact-cta">
        <div className="contact-wrap">
          <h2>Ready to Start Your Digital Growth Journey?</h2>
          <p>
            Tell us what you&apos;re building, what you want to improve and
            where you want to go. Let&apos;s explore the right digital solution.
          </p>
          <a href="#contact-form" className="contact-primary">
            Send an Enquiry <i className="bi bi-arrow-right" />
          </a>
          <Link href="/services" className="contact-secondary">
            Explore Our Services
          </Link>
        </div>
      </section>
    </main>
  );
}
