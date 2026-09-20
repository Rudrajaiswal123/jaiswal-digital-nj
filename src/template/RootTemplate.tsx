'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import DefaultTemplate from './DefaultTemplate';
import ServicesTemplate from './ServicesTemplate';

export default function RootTemplate(props: any) {
  const currentRoute = usePathname(); //For getting the current pageName

  const defaultTemplateRoutes: any = [
    '/',
    '/about',
    '/services',
    '/contact',
    '/blog',
    '/portfolio',
    '/terms-and-conditions',
    '/privacy-policy',
    '/cookie-policy',
  ]; // Default Layout Pages List

  const serviceTemplateRoutes = [
    '/services/web-app-development',
    '/services/ui-ux-design',
    '/services/mobile-app-development',
    '/services/devops',
    '/services/digital-marketing',
    "/services/software-testing"
  ]; // Services page list

  const RenderUI = () => {
    let currentTemplate;

    switch (true) {
      case defaultTemplateRoutes.includes(currentRoute):
        return (currentTemplate = (
          <DefaultTemplate children={props.children} />
        ));
      case serviceTemplateRoutes.includes(currentRoute):
        return (currentTemplate = (
          <ServicesTemplate children={props.children} />
        ));

      default:
        return (currentTemplate = (
          <DefaultTemplate children={props.children} />
        ));
    }
  };

  return (
    <>
      {RenderUI()}
      <a
        href="https://wa.me/919353042456"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat with Jaiswal Digital on WhatsApp"
      >
        <i className="bi bi-whatsapp" aria-hidden="true" />
      </a>
      <script src='scripts/wow.min.js'></script>
      <script>new WOW().init();</script>
    </>
  );
}
