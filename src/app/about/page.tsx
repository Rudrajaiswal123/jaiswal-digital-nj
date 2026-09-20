

import AboutComponent from '@/components/about/AboutComponent'
import { Metadata } from 'next'


export default function About() {
  return (
    <AboutComponent/>
  )
}

// Meta Information
export const metadata: Metadata = {
  title: "About Jaiswal Digital | Digital Marketing & Website Development Agency",

  description:
    "Learn about Jaiswal Digital, a digital marketing and website development agency helping businesses build their online presence through SEO, advertising, web development, social media and creative digital solutions.",

  keywords: [
    "About Jaiswal Digital",
    "Digital Marketing Agency in India",
    "Website Development Company",
    "SEO Company in India",
    "Local SEO Services",
    "Google Ads Management",
    "Meta Ads Management"
  ],

  alternates: {
    canonical: "https://jaiswaldigital.com/about",
    languages: {
    "en-IN": "https://jaiswaldigital.com/about",
    "en": "https://jaiswaldigital.com/about",
  },
  },

  openGraph: {
    title: "About Jaiswal Digital | Digital Marketing & Website Development Agency",
    description:
      "Learn how Jaiswal Digital helps businesses build their online presence through website development, SEO, advertising, social media and creative services.",
    url: "https://jaiswaldigital.com/about",
  },

  twitter: {
    title: "About Jaiswal Digital",
    description:
      "Trusted digital marketing and website development company in India.",
  },
};
