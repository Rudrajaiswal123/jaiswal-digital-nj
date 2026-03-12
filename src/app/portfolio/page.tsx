

import PortfolioComponent from '@/components/portfolio/PortfolioComponent'
import { Metadata } from 'next'

export default function Contact() {
  return (
    <PortfolioComponent />
  )
}

export const metadata: Metadata = {
  title: "Our Portfolio | Digital Marketing & Website Projects India",

  description:
    "View our portfolio featuring Digital Marketing, Website Development, SEO Services and E-commerce Management projects delivered for clients.",

  keywords: [
    "Digital Marketing Portfolio India",
    "Website Development Projects",
    "SEO Case Studies India",
    "E-commerce Account Management Projects",
    "Social Media Marketing Portfolio",
    "Digital Agency Work India"
  ],

  alternates: {
    canonical: "https://jaiswaldigital.com/portfolio",
  },

  openGraph: {
    title: "Our Work & Case Studies | Jaiswal Digital Portfolio",
    description:
      "Discover successful digital marketing campaigns, website development projects and e-commerce growth case studies by Jaiswal Digital.",
    url: "https://jaiswaldigital.com/portfolio",
    type: "website",
  },

  twitter: {
    title: "Jaiswal Digital Portfolio",
    description:
      "Website development, SEO and e-commerce success stories across India.",
  },
};