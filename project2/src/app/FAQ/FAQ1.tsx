"use client";
import { useState } from "react";
import { faqs } from "./faqs";
import { ChevronUp , ChevronDown } from 'lucide-react';
export default function FAQ1() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleFAQ = (index:number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };
  return (
    <div className="w-full min-h-screen flex flex-col items-center  px-4 py-16">

      <h1 className="text-4xl font-bold mb-10">
        Frequently Asked Questions
      </h1>

      <div className="w-full max-w-3xl space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;

          return (
            <div
              key={faq.id}
              className="rounded-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left text-lg font-medium hover:bg-gray-100 transition"
              >
                {faq.question}
                <span className="text-2xl font-light">
                  {isOpen ? <ChevronDown size={20}/> : <ChevronUp size={20}/>}
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-gray-700">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}