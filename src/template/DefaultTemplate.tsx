import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import React from 'react'

export default function DefaultTemplate(props:any) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}
