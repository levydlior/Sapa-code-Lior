"use client"
import { faqData } from "@/utils/dataArrays";
import { useState } from "react";

// Ideally this would content would come from a CMS api call for easy updating by ops rather than by developers. Instead I have used mock data

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
<div className="max-w-4xl mx-auto px-4">      <h2 className="text-2xl font-bold mb-6">FAQs...</h2>
      {faqData.map((faq, index) => (
        <div key={index} className="border-b border-gray-200 pb-4">
          <button
            onClick={() => toggleIndex(index)}
            className="text-left w-full text-green-700"
          >
            {faq.question}
          </button>
          {openIndex === index && (
            <div className="mt-2 text-gray-600 text-sm transition-all duration-300 ease-in-out">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
