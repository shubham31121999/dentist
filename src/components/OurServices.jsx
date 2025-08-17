import React from "react";
import { FaTooth, FaSmile, FaUsers, FaRegSmile, FaGrin, FaHandHoldingHeart } from "react-icons/fa";

const services = [
  {
    icon: FaTooth,
    title: "Emergency Dentistry",
    description: "Quick, reliable care for urgent dental needs.",
    color: "clr1",
    hoverShadow: "shadow-red-400/50",
  },
  {
    icon: FaSmile,
    title: "Cosmetic Dentistry",
    description: "Teeth Whitening, Veneers, Smile Makeovers.",
    color: "clr2",
    hoverShadow: "shadow-green-400/50",
  },
  {
    icon: FaUsers,
    title: "General & Family Dentistry",
    description: "Comprehensive dental care for all ages.",
    color: "clr3",
    hoverShadow: "shadow-gray-400/50",
  },
  {
    icon: FaRegSmile,
    title: "Dental Implants",
    description: "Long-lasting tooth replacement solutions.",
    color: "clr1",
    hoverShadow: "shadow-red-400/50",
  },
  {
    icon: FaGrin,
    title: "Invisalign® Clear Aligners",
    description: "Straighten your teeth discreetly and comfortably.",
    color: "clr2",
    hoverShadow: "shadow-green-400/50",
  },
  {
    icon: FaHandHoldingHeart,
    title: "Dental Crowns & Bridges",
    description: "Restore damaged or missing teeth beautifully.",
    color: "clr3",
    hoverShadow: "shadow-gray-400/50",
  },
];

const OurServices = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-0 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We provide a wide range of dental treatments to meet your needs, including routine checkups and advanced care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, idx) => {
            const Icon = service.icon;

            // Map color names to Tailwind classes
            const bgHover = service.color === "clr1" ? "hover:bg-clr1" :
                            service.color === "clr2" ? "hover:bg-clr2" :
                            "hover:bg-clr3";

            const textHover = "group-hover:text-white";
            const shadowHover = service.hoverShadow;

            return (
              <div
                key={idx}
                className={`group bg-white rounded-2xl p-8 shadow-lg border border-transparent transition transform hover:-translate-y-2 ${bgHover} hover:${shadowHover} flex flex-col items-center text-center`}
              >
                <div className={`text-5xl mb-6 ${service.color} group-hover:text-white transition`}>
                  <Icon />
                </div>
                <h4 className={`text-2xl font-semibold mb-3 text-gray-900 ${textHover} transition`}>
                  {service.title}
                </h4>
                <p className={`text-gray-600 ${textHover} transition`}>{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
  <p className="text-xl font-medium text-gray-700 max-w-2xl mx-auto mb-8">
    ✨ Whether you need a routine checkup or advanced dental care, our expert team is here to provide exceptional service with a personalized approach.
  </p>

  <a
    href="/contact" // replace with your appointment link
    className="inline-block bg-clr1 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:bg-clr2 hover:shadow-xl transition transform hover:-translate-y-1"
  >
    Schedule a Visit
  </a>
</div>

      </div>
    </section>
  );
};

export default OurServices;
