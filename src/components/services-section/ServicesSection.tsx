import Link from 'next/link';
import './servicesSection.scss';

export interface Service { icon: string; iconImage?: string; title: string; description: string; href?: string; }
interface ServicesSectionProps { services: Service[]; }

export default function ServicesSection({ services }: ServicesSectionProps) {
  return <section className="premium-services-section" aria-labelledby="services-title">
    <div className="premium-services-container">
      <header className="premium-services-header">
        <span className="premium-services-eyebrow">DIGITAL MARKETING AGENCY</span>
        <h2 id="services-title">Our Services</h2>
        <p>Powerful digital solutions designed to build your online presence, attract customers and grow your business.</p>
      </header>
      <div className="premium-services-grid">
        {services.map((service) => <article className="premium-service-card" key={service.title}>
          <div className="premium-service-icon" aria-hidden="true">
            {service.iconImage ? <img src={service.iconImage} alt={`${service.title} service icon`} /> : <i className={service.icon} />}
          </div>
          <h3>{service.title}</h3><p>{service.description}</p>
          <Link href={service.href ?? '/services'} className="premium-service-link">Learn more about {service.title} <i className="bi bi-arrow-up-right" aria-hidden="true" /></Link>
        </article>)}
      </div>
      <div className="premium-services-cta"><Link href="/services" className="premium-services-button">Explore Our Services <i className="bi bi-arrow-right" aria-hidden="true" /></Link></div>
    </div>
  </section>;
}
