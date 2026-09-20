import Link from 'next/link';
import { type ServicePrice } from './servicePricingData';
import './servicePricingSection.scss';

function ServicePricingCard({ service }: { service: ServicePrice }) {
  return <article className="pricing-service-card">
    <div className="pricing-service-icon" aria-hidden="true"><i className={service.icon} /></div>
    <h3>{service.title}</h3>
    <span className="pricing-starting-label">Starting from</span>
    <p className="pricing-price">{service.price} {service.unit && <small>{service.unit}</small>}</p>
    <p className="pricing-description">{service.description}</p>
    <ul>{service.features.map((feature) => <li key={feature}><i className="bi bi-check2" aria-hidden="true" />{feature}</li>)}</ul>
    {service.note && <p className="pricing-note">{service.note}</p>}
    <Link href="/contact" className="pricing-card-link" aria-label={`${service.cta} for ${service.title}`}>{service.cta} <i className="bi bi-arrow-right" aria-hidden="true" /></Link>
  </article>;
}

export default function ServicePricingSection({ services }: { services: ServicePrice[] }) {
  return <section className="service-pricing-section" aria-labelledby="service-pricing-title"><div className="service-pricing-container">
    <header className="service-pricing-header"><span>OUR SERVICES &amp; PRICING</span><h2 id="service-pricing-title">Transparent Pricing for Every Digital Service</h2><p>Choose the service you need and get a clear starting price. Need a customized solution? Talk to our team.</p></header>
    <div className="pricing-service-grid">{services.map((service) => <ServicePricingCard key={service.title} service={service} />)}</div>
    <aside className="custom-pricing-banner"><div><h3>Need More Than One Service?</h3><p>Combine website development, SEO, advertising and social media into a customized digital growth solution for your business.</p><small>Flexible solutions <b>&bull;</b> Transparent pricing <b>&bull;</b> Customized strategy</small></div><Link href="/contact" className="custom-pricing-button">Get a Custom Quote <i className="bi bi-arrow-right" aria-hidden="true" /></Link></aside>
  </div></section>;
}
