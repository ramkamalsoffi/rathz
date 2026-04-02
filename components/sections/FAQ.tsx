import React from 'react';
import FAQWithSpiral from "@/components/ui/faq-section";

const FAQ = () => {
  return (
    <section id="faq" className="relative py-10 bg-transparent">
      {/* The FAQWithSpiral component already has its own internal layout and background */}
      <FAQWithSpiral />
    </section>
  );
};

export default FAQ;
