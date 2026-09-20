
import ContactComponent from '@/components/contact/ContactComponent'
import { Metadata } from 'next'

export default function Contact() {
  return (
    <ContactComponent />
  )
}

// Meta Information
export const metadata: Metadata = {
  title: "Contact Jaiswal Digital | Digital Marketing & Website Development Agency",

  description:
    "Contact Jaiswal Digital for website development, SEO, local SEO, Google Ads, Meta Ads, social media management and digital marketing services in India.",

  keywords: [
    "Contact Digital Marketing Agency India",
    "Hire SEO Company India",
    "Website Development Company Contact",
    "E-commerce Account Management India",
    "Digital Marketing Consultation India"
  ],

  alternates: {
    canonical: "https://jaiswaldigital.com/contact",
    languages: {
    "en-IN": "https://jaiswaldigital.com/contact",
    "en": "https://jaiswaldigital.com/contact",
  },
  },

  openGraph: {
    title: "Contact Jaiswal Digital | Let’s Grow Your Business Online",
    description:
      "Need expert digital marketing or website development services? Contact Jaiswal Digital today.",
    url: "https://jaiswaldigital.com/contact",
  },

  twitter: {
    title: "Contact Jaiswal Digital",
    description:
      "Connect with our digital marketing experts in India today.",
  },
};
