import { useState } from "react";

const faqs = [
  {
    question: "What makes Dudehub Digital different from every other agency that promises results?",
    answer:
      "We focus on measurable growth, not vanity metrics. Our strategies are data-driven, customized, and transparent, ensuring real ROI for your business."
  },
  {
    question: "How quickly can we see results?",
    answer:
      "Initial insights appear within weeks, while sustainable growth typically builds over 2–3 months depending on the strategy."
  },
  {
    question: "Do you offer custom solutions or just another “package”?",
    answer:
      "Every solution is fully customized. We don’t believe in one-size-fits-all packages."
  },
  {
    question: "Can you help us grow in international markets?",
    answer:
      "Yes. We specialize in global SEO, paid ads, and localization strategies for international growth."
  },
  {
    question: "How do you prove your ROI claims?",
    answer:
      "Through transparent reporting, analytics dashboards, and clear KPIs tied directly to revenue and growth."
  },
  {
    question: "What kind of clients do you work with?",
    answer:
      "We work with startups, SMEs, and established brands across multiple industries."
  },
  {
    question: "What’s the minimum budget to work with you?",
    answer:
      "Budgets vary by project scope, but we focus on partnerships where we can deliver meaningful impact."
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-sm tracking-widest text-blue-600 font-semibold mb-2">
          FAQ
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Got other<span className="text-blue-600"> questions </span>? <br />
          Reach out to us.
        </h2>
      </div>

      {/* FAQ List */}
      <div className="border border-gray-300 rounded-md divide-y">
        {faqs.map((faq, index) => (
          <div key={index}>
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left px-6 py-5 font-medium text-gray-900 hover:bg-gray-50 transition"
            >
              <span>{index + 1}. {faq.question}</span>
              <span className="text-2xl font-bold">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* Answer */}
            {activeIndex === index && (
              <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
