import React from "react";
import { FaCreditCard, FaDollarSign, FaCalendarAlt, FaClock } from "react-icons/fa";

const cards = [
  {
    icon: <FaCreditCard className="text-white text-4xl mb-4" />,
    title: "Payment Options",
    description: "We accept most insurance plans, cash, and credit cards.",
    bgColor: "bg-gradient-to-r from-clr1 to-clr2", // Tailwind brand colors
  },
  {
    icon: <FaDollarSign className="text-white text-4xl mb-4" />,
    title: "No Insurance? No Problem!",
    description: "Ask about our affordable in-house payment plans.",
    bgColor: "bg-gradient-to-r from-clr2 to-clr3", // accent → primary
  },
  {
    icon: <FaCalendarAlt className="text-white text-4xl mb-4" />,
    title: "$99 New Patient Dental Package",
    description: "Includes: Consultation, Full X-Rays & Oral Health Assessment.",
    bgColor: "bg-gradient-to-r from-clr3 to-clr1", // secondary → light
  },
  {
    icon: <FaClock className="text-white text-4xl mb-4" />,
    title: "In-House Payment Plans",
    description: "Affordable monthly options for uninsured patients.",
    bgColor: "bg-gradient-to-r from-clr1 to-clr2", // accent → black
  },
];

const PatientInfoAndSpecials = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-0 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Patient Information & Specials
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From the moment you step into our office, you'll be greeted with a warm smile and caring staff.
            We understand dental visits can be stressful — that's why we go the extra mile to make you feel comfortable.
          </p>
        </div>

        {/* All Cards Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`${card.bgColor} rounded-2xl p-8 shadow-xl transform hover:scale-105 transition duration-300 flex flex-col items-center text-center`}
            >
              {card.icon}
              <h4 className="text-xl font-bold text-white mb-2">{card.title}</h4>
              <p className="text-white">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientInfoAndSpecials;
