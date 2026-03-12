
import BlogComponent from '@/components/blog/BlogComponent'
import type { Metadata } from "next";

export default function blog() {
  return (
    <BlogComponent/>
  )
}

export const metadata: Metadata = {
  title: "Digital Marketing Blog | SEO & Online Growth Tips India",

  description:
    "Read our blog for Digital Marketing tips, Website Development guides, SEO Services insights and E-commerce Management strategies.",

  keywords: [
    "Digital Marketing Blog India",
    "SEO Tips India",
    "Website Development Blog",
    "E-commerce Growth Strategies",
    "Social Media Marketing Tips",
    "Performance Marketing Guide India",
    "Online Business Growth Blog"
  ],

  alternates: {
    canonical: "https://jaiswaldigital.com/blog",
  },

  openGraph: {
    title: "Digital Marketing Blog | SEO & Business Growth Strategies",
    description:
      "Explore expert insights on SEO, website development, social media marketing and e-commerce strategies to grow your business online in India.",
    url: "https://jaiswaldigital.com/blog",
    type: "website",
  },

  twitter: {
    title: "Digital Marketing Blog India",
    description:
      "SEO tips, social media marketing strategies and online business growth insights.",
  },
};