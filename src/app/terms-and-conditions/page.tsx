import TermsComponent from "@/components/terms-and-condition/TermsComponent";
import { Metadata } from 'next'

export default function TermsCondition() {
  return (
    <TermsComponent/>
  )
}

export const metadata: Metadata = {
  title: "Terms & Condition",
  description:
    "Read the Terms and Condition of Jaiswal Digital.",
};


