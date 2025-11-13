import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What services does Coders-Wings offer?",
    answer:
      "We specialize in Shopify and Wix customization, as well as full-stack web development using the MERN stack. From design to deployment, we handle it all.",
  },
  {
    question: "Do you provide website maintenance or updates?",
    answer:
      "Yes! We offer ongoing support and maintenance packages to keep your website secure, updated, and optimized for performance.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project duration depends on complexity. Small websites usually take 1–2 weeks, while larger full-stack projects can take 4–6 weeks on average.",
  },
  {
    question: "Can you help with SEO and performance optimization?",
    answer:
      "Absolutely. Every project we build is optimized for SEO and fast load times. We use best practices in both frontend and backend performance.",
  },
  {
    question: "How can I get a quote for my project?",
    answer:
      "You can contact us directly through the Contact section. We’ll review your requirements and provide a detailed proposal within 24 hours.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-gray-950 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Frequently{" "}
          <span className="bg-gradient-to-r from-sky-400 to-pink-500 bg-clip-text text-transparent">
            Asked Questions
          </span>
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto">
          Here are some of the most common questions our clients ask about our
          services and process.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-pink-500 mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:bg-white/10"
            onClick={() => toggleFaq(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <ChevronDown
                className={`w-5 h-5 text-sky-400 transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            <div
              className={`mt-3 text-white/80 text-sm leading-relaxed transition-all duration-300 overflow-hidden ${
                activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
