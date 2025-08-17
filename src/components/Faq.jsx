import React, { useState } from "react";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We provide a wide range of dental services including teeth whitening, veneers, implants, orthodontics, and routine checkups.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Yes, we accept most major insurance plans. We also offer in-house payment plans for patients without insurance.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "You can book an appointment online through our website, or call our front desk to schedule a visit at your convenience.",
  },
  {
    question: "What should I expect during my first visit?",
    answer:
      "During your first visit, our team will perform a comprehensive examination, take necessary X-rays, and discuss your treatment options in detail.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-clr3/10">
      <div className="container mx-auto px-6 md:px-0 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-clr1 mb-4 font-primary">Frequently Asked Questions</h2>
          <p className="text-clr3 max-w-2xl mx-auto">
            Answers to some of the most common questions our patients ask.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-clr3 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 bg-white hover:bg-clr2/10 transition"
              >
                <span className="text-clr1 font-medium">{faq.question}</span>
                <span className="text-clr3 text-xl">{activeIndex === index ? "-" : "+"}</span>
              </button>
              {activeIndex === index && (
                <div className="p-4 bg-clr3/5 text-clr3">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
