import '../styles/globals.scss';
import type { Metadata } from "next";
import Script from 'next/script';
import { Poppins, Open_Sans } from "next/font/google";
import RootTemplate from '@/template/RootTemplate';
import { Toaster } from 'react-hot-toast';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jaiswaldigital.com"),

  title: {
    default: "Jaiswal Digital | Digital Marketing Company in India",
    template: "%s | Jaiswal Digital",
  },

  description:
    "Jaiswal Digital is a professional digital marketing and website development company in India helping businesses grow online with SEO, social media marketing and e-commerce solutions.",

  keywords: [
    "Digital Marketing Agency in India",
    "Website Development Company in India",
    "SEO Services for Small Businesses",
    "Amazon Seller Account Management",
    "Digital Marketing Company",
    "SEO Services",
    "Social Media Marketing",
    "E-commerce Solutions",
    "Website Development",
    "Amazon Seller Services",
    "Online Marketing Agency",
    "Best Digital Marketing Company India"
  ],

  applicationName: "Jaiswal Digital",
  authors: [{ name: "Jaiswal Digital" }],
  creator: "Jaiswal Digital",
  publisher: "Jaiswal Digital",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    siteName: "Jaiswal Digital",
    type: "website",
    locale: "en_IN",
    url: "https://jaiswaldigital.com",
    images: [
      {
        url: "https://jaiswaldigital.com/assets/images/jaiswal-digital-logo.webp",
        width: 1200,
        height: 630,
        alt: "Jaiswal Digital - Digital Marketing Agency in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    creator: "@jaiswaldigital", // change if you have twitter handle
    images: [
      "https://jaiswaldigital.com/assets/images/jaiswal-digital-logo.webp",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
      <head>
        <link rel='icon' href='/favicon.ico' />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YYXRB3TNRF"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YYXRB3TNRF');
          `}
        </script>
        {/* Bootstrap JS Bundle */}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        
        {/* Organization Schema Markup */}
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Jaiswal Digital",
              "url": "https://jaiswaldigital.com",
              "logo": "https://jaiswaldigital.com/assets/images/jaiswal-digital-logo.webp",
              "description": "Jaiswal Digital is a professional digital marketing and website development company in India helping businesses grow online with SEO, social media marketing and e-commerce solutions.",
              "sameAs": [
                "https://www.facebook.com/jaiswaldigital",
                "https://www.instagram.com/jaiswaldigital",
                "https://www.linkedin.com/company/jaiswaldigital",
                "https://twitter.com/jaiswaldigital"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+919353042456",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": "English"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressRegion": "karnataka"
              }
            })
          }}
        />

        {/* LocalBusiness Schema Markup */}
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Jaiswal Digital",
              "image": "https://jaiswaldigital.com/assets/images/jaiswal-digital-logo.webp",
              "url": "https://jaiswaldigital.com",
              "telephone": "+919353042456",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressRegion": "Karnataka"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "28.6139",
                "longitude": "77.2090"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "20:00"
              },
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "serviceType": ["Digital Marketing", "SEO", "Social Media Marketing", "Website Development", "E-commerce Solutions"]
            })
          }}
        />

        {/* WebSite Schema Markup */}
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Jaiswal Digital",
              "url": "https://jaiswaldigital.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://jaiswaldigital.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Service Schema Markup */}
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "Service",
                  "name": "Digital Marketing Agency in India",
                  "description": "Comprehensive digital marketing services including SEO, SEM, social media marketing, and content marketing to grow your business online.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Jaiswal Digital",
                    "url": "https://jaiswaldigital.com"
                  }
                },
                {
                  "@type": "Service",
                  "name": "Website Development Company in India",
                  "description": "Professional website development services including responsive design, e-commerce solutions, and custom web applications.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Jaiswal Digital",
                    "url": "https://jaiswaldigital.com"
                  }
                },
                {
                  "@type": "Service",
                  "name": "SEO Services for Small Businesses",
                  "description": "Search engine optimization services to improve your website ranking and drive organic traffic for small businesses.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Jaiswal Digital",
                    "url": "https://jaiswaldigital.com"
                  }
                },
                {
                  "@type": "Service",
                  "name": "Amazon Seller Account Management",
                  "description": "Expert Amazon seller account management services including product listing, optimization, inventory management, and advertising campaigns.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Jaiswal Digital",
                    "url": "https://jaiswaldigital.com"
                  }
                },
                {
                  "@type": "Service",
                  "name": "Social Media Marketing",
                  "description": "Social media marketing services to build brand awareness and engage with your target audience on platforms like Facebook, Instagram, and LinkedIn.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Jaiswal Digital",
                    "url": "https://jaiswaldigital.com"
                  }
                },
                {
                  "@type": "Service",
                  "name": "E-commerce Solutions",
                  "description": "End-to-end e-commerce solutions including store setup, product management, and payment integration.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Jaiswal Digital",
                    "url": "https://jaiswaldigital.com"
                  }
                }
              ]
            })
          }}
        />

        {/* FAQ Schema Markup */}
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What services does Jaiswal Digital provide?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Jaiswal Digital is a leading digital marketing agency in India providing comprehensive online marketing solutions including website development using Next.js and WordPress, search engine optimization (SEO) services, social media marketing, e-commerce account management for Amazon, Flipkart and Meesho, graphic designing, and video creation services. We help businesses grow their online presence and generate more leads."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide digital marketing services across India?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide digital marketing services across India. Our team works with clients pan-India and delivers result-driven solutions remotely. We have experience serving businesses in Delhi NCR, Mumbai, Bangalore, Chennai, Kolkata, Hyderabad, Pune, and all major Indian cities. Our digital marketing company helps small and medium businesses grow their online presence."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why choose Jaiswal Digital as your SEO company in India?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Jaiswal Digital is a trusted SEO company in India offering result-driven SEO services for small businesses. Our SEO experts use white-hat techniques including keyword research, on-page optimization, technical SEO, and quality link building to improve your website's Google rankings. We focus on driving organic traffic and generating qualified leads that convert into customers. Our SEO packages are affordable and tailored to meet your business goals."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer Amazon seller account management services?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide complete Amazon seller account management services in India. Our e-commerce experts handle everything from account setup, product listing optimization, inventory management, Amazon advertising campaigns (PPC), and sales analytics. We help sellers increase their product visibility, improve rankings on Amazon search results, and boost sales. Our Amazon account management services are available for sellers across India looking to grow their online business."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does website development cost in India?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The cost of website development in India varies based on your requirements. Jaiswal Digital offers affordable website development services starting from ₹15,000 for basic business websites. Our website development company provides custom Next.js websites, WordPress websites, e-commerce stores, and web applications. We deliver SEO-friendly, mobile-responsive websites with fast loading speeds. Contact us for a free quote based on your specific website needs."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body>
        <RootTemplate>{children}</RootTemplate>
        <Toaster 
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#16bdc4',
                secondary: '#fff',
              },
            },
            error: {
              duration: 4000,
              iconTheme: {
                primary: '#ff6b6b',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
