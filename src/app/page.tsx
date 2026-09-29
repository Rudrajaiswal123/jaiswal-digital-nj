import HomeComponent from '../components/home/HomeComponent';
import { Metadata } from 'next';

export default function Home() {
  return (
    <main>
      <HomeComponent />
    </main>
  );
}

export const metadata: Metadata = {
  title:
    "Digital Marketing Company in India | Website Development & SEO",

  description:
    "Jaiswal Digital is a digital marketing company in India providing website development, SEO, local SEO, paid advertising and e-commerce marketplace support for growing businesses.",

  keywords: [
    "Digital Marketing Agency in India",
    "Website Development Company in India",
    "SEO Company India",
    "E-commerce Account Management Services",
    "Amazon Flipkart Meesho Account Management",
    "Social Media Marketing Agency India",
    "Performance Marketing Company India",
  ],

  alternates: {
    canonical: "https://jaiswaldigital.com/",
    languages: {
    "en-IN": "https://jaiswaldigital.com/",
    "en": "https://jaiswaldigital.com/",
  },
  },

  openGraph: {
    title:
      "Digital Marketing Company in India | Website Development & SEO",
    description:
      "Grow your business with a digital marketing company in India offering website development, SEO, e-commerce management and performance marketing services.",
    url: "https://jaiswaldigital.com/",
  },

  twitter: {
    title:
      "Digital Marketing Company in India | Website Development & SEO",
    description:
      "Website development, SEO, social media marketing and e-commerce solutions from a digital marketing company in India.",
  },
};
