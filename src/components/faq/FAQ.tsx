'use client';

import React, { useState } from 'react';
import { faqs } from '../home/homeData';
import './faq.scss';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-section">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-tag">FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>

        <div className="faq-wrapper">
          <div className="accordion" id="faqAccordion">
            {faqs.map((faq, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header">
                  <button 
                    className={`accordion-button ${openIndex === index ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-collapse-${index}`}
                  >
                    {faq.question}
                  </button>
                </h2>
                <div 
                  id={`faq-collapse-${index}`} 
                  className={`accordion-collapse collapse ${openIndex === index ? 'show' : ''}`}
                >
                  <div className="accordion-body">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

