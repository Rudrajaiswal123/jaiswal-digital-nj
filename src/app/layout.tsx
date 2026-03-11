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
        url: "https://jaiswaldigital.com/assets/images/jaiswal-digital-logo.png",
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
      "https://jaiswaldigital.com/assets/images/jaiswal-digital-logo.png",
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
      </head>
      <body className={openSans.className}>
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
