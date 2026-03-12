import ServicesComponent from '@/components/services/ServicesComponent'
import { Metadata } from 'next'

export default function Service() {
  return (
    <ServicesComponent />
  )
}

// Meta Information
export const metadata: Metadata = {
  title: "Digital Marketing & Web Development Services in India",

  description:
    "Explore Jaiswal Digital services including website development, SEO services, social media marketing, Amazon & Flipkart account management, graphic design and video creation across India.",

  keywords: [
    "Digital Marketing Services India",
    "Website Development Services India",
    "SEO Services India",
    "Amazon Seller Account Management",
    "Flipkart Account Management Services",
    "Social Media Marketing Services India",
    "Graphic Design Company India",
    "Video Marketing Services India"
  ],

  alternates: {
    canonical: "https://jaiswaldigital.com/services",
  },

  openGraph: {
    title: "Our Digital Marketing Services in India | Jaiswal Digital",
    description:
      "Explore our Digital Marketing services including Website Development, SEO Services, Social Media Marketing and E-commerce Management.",
    url: "https://jaiswaldigital.com/services",
  },

  twitter: {
    title: "Digital Marketing Services in India",
    description:
      "Website development, SEO, social media marketing and e-commerce management services.",
  },
};