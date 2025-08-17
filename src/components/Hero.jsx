import React from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-18">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-right"
        style={{ backgroundImage: "url('/images/dental-bg.webp')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10 max-w-6xl">
        {/* Left Content */}
        <div className="flex-1 space-y-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Affordable Dental Care in Albuquerque, NM
          </h1>
          <p className="text-lg text-clr2 font-semibold">
            At <span className="font-semibold">MyDentalGroup</span>, your smile
            is our priority. We offer comprehensive, gentle, and affordable
            dental care for patients of all ages.
          </p>

          <div className="bg-white text-clr3 p-4 rounded-xl shadow-md">
            <p className="font-semibold text-xl">
              New Patient Special – $99 Package
            </p>
            <p>
              Includes initial consultation, full x-rays, and complete oral
              health assessment.
            </p>
          </div>

          {/* Highlights */}
          <ul className="space-y-2">
            {[
              "Walk-ins Welcome",
              "In-House Payment Plans Available",
              "Insurance Accepted",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center space-x-2">
                <FaCheckCircle className="text-clr2 w-5 h-5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="#appointment-form"
            className="inline-flex items-center bg-clr2 text-white px-6 py-3 rounded-lg shadow hover:bg-clr1 transition"
          >
            Book Your Appointment Today
            <FaArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>

        {/* Right Form */}
        <div
          id="appointment-form"
          className="flex-1 bg-white text-clr3 p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">
            Book Appointment
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-clr2"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-clr2"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-clr2"
              required
            />
            <select
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-clr2"
              defaultValue=""
            >
              <option value="" disabled>
                What service are you interested in?
              </option>
              <option value="general">General Dentistry</option>
              <option value="cleaning">Teeth Cleaning</option>
              <option value="whitening">Teeth Whitening</option>
              <option value="implants">Dental Implants</option>
              <option value="braces">Braces / Invisalign</option>
              <option value="emergency">Emergency Dentistry</option>
            </select>

            <button
              type="submit"
              className="w-full bg-clr2 text-white px-6 py-3 rounded-lg shadow hover:bg-clr1 transition flex items-center justify-center"
            >
              Submit
              <FaArrowRight className="w-5 h-5 ml-2" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
