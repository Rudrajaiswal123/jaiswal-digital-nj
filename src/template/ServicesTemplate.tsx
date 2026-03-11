import ServicesHeader from '@/components/header/servicesHeader';
import Footer from '@/components/footer/Footer';
import React from 'react';

export default function ServicesTemplate(props: any) {
  return (
    <>
    <ServicesHeader />
      {props.children}
      <Footer />
    </>
  );
}
