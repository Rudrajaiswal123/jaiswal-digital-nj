'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import DefaultTemplate from './DefaultTemplate';
import ServicesTemplate from './ServicesTemplate';

export default function RootTemplate(props: any) {
  const currentRoute = usePathname(); //For getting the current pageName

  const defaultTemplateRoutes: any = [
    '/',
    '/about-us',
    '/about',
    '/services',
    '/contact-us',
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
      <script src='scripts/wow.min.js'></script>
      <script>new WOW().init();</script>
    </>
  );
}
