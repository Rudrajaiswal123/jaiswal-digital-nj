import CookieComponent from "@/components/privacy-and-terms/CookieComponent";
import { Metadata } from 'next'

export default function CookiePolicy() {
  return (
    <CookieComponent/>
  )
}

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Read the Cookie Policy of Jaiswal Digital to understand how we use cookies.",
};

