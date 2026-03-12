
import ContactComponent from '@/components/contact/ContactComponent'
import { Metadata } from 'next'

export default function Contact() {
  return (
    <ContactComponent />
  )
}

// Meta Information
export const metadata: Metadata = {
  title: "Contact Jaiswal Digital - Digital Marketing Agency in India",

  description:
    "Contact Jaiswal Digital for Digital Marketing, Website Development, SEO Services and E-commerce Management solutions for your business.",

  keywords: [
    "Contact Digital Marketing Agency India",
    "Hire SEO Company India",
    "Website Development Company Contact",
    "E-commerce Account Management India",
    "Digital Marketing Consultation India"
  ],

  alternates: {
    canonical: "https://jaiswaldigital.com/contact",
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