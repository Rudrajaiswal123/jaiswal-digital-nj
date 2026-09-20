import ServicesComponent from '@/components/services/ServicesComponent'
import { Metadata } from 'next'

export default function Service() {
  return (
    <ServicesComponent />
  )
}

// Meta Information
export const metadata: Metadata = {
  title: "Digital Marketing & Website Development Services in India",

  description:
    "Explore Jaiswal Digital's website development, SEO, local SEO, Google Ads, Meta Ads, social media management, graphic design and video editing services designed to help businesses grow online.",

  keywords: [
    "Digital Marketing Services India",
    "Website Development Services India",
    "SEO Services India",
    "Local SEO Services India",
    "Google Ads Management",
    "Meta Ads Management",
    "Social Media Marketing Services India",
    "Graphic Design Company India",
    "Video Marketing Services India"
  ],

  alternates: {
    canonical: "https://jaiswaldigital.com/services",
    languages: {
    "en-IN": "https://jaiswaldigital.com/services",
    "en": "https://jaiswaldigital.com/sservices",
  },
  },

  openGraph: {
    title: "Digital Marketing & Website Development Services in India | Jaiswal Digital",
    description:
      "Explore website development, SEO, local SEO, Google Ads, Meta Ads, social media management, graphic design and video editing services.",
    url: "https://jaiswaldigital.com/services",
  },

  twitter: {
    title: "Digital Marketing & Website Development Services in India",
    description:
      "Website development, SEO, local SEO, paid advertising, social media and creative services for businesses across India.",
  },
};
