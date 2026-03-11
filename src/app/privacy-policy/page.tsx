import PrivacyComponent from "@/components/privacy-and-terms/PrivacyComponent";
import { Metadata } from 'next'

export default function PrivacyPolicy() {
  return (
    <PrivacyComponent/>
  )
}

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Privacy Policy of Jaiswal Digital to understand how we collect, use and protect your data.",
};

