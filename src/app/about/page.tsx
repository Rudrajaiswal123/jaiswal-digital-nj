

import AboutComponent from '@/components/about/AboutComponent'
import { Metadata } from 'next'


export default function About() {
  return (
    <AboutComponent/>
  )
}

// Meta Information
export const metadata: Metadata = {
  title: "About Us - Digital Marketing Company in India",

  description:
    "Learn about Jaiswal Digital, experts in Digital Marketing, Website Development, SEO Services and E-commerce Management helping businesses grow online.",

  keywords: [
    "About Jaiswal Digital",
    "Digital Marketing Company India",
    "Website Development Agency India",
    "SEO Experts India",
    "E-commerce Marketing Agency India"
  ],

  alternates: {
    canonical: "https://jaiswaldigital.com/about",
  },

  openGraph: {
    title: "About Jaiswal Digital | Digital Marketing Experts in India",
    description:
      "Discover how Jaiswal Digital helps businesses grow with website development, SEO, social media marketing and e-commerce account management services across India.",
    url: "https://jaiswaldigital.com/about",
  },

  twitter: {
    title: "About Jaiswal Digital",
    description:
      "Trusted digital marketing and website development company in India.",
  },
};