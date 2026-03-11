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
    "Digital Marketing & Website Development Company in India",

  description:
    "Looking for the best digital marketing agency in India? Jaiswal Digital offers website development, digital marketing, e-commerce account management to grow your business online.",

  keywords: [
    "Best Digital Marketing Agency in India",
    "Website Development Company in India",
    "SEO Company India",
    "E-commerce Account Management Services",
    "Amazon Flipkart Meesho Account Management",
    "Social Media Marketing Agency India",
    "Performance Marketing Company India",
  ],

  alternates: {
    canonical: "https://jaiswaldigital.com/",
  },

  openGraph: {
    title:
      "Best Digital Marketing & Web Development Company in India",
    description:
      "Grow your business across India with expert SEO, website development, e-commerce management and performance marketing services from Jaiswal Digital.",
    url: "https://jaiswaldigital.com/",
  },

  twitter: {
    title:
      "Digital Marketing & Website Development Company in India",
    description:
      "Professional SEO, social media marketing and e-commerce solutions across India by Jaiswal Digital.",
  },
};