import React from "react";
import { FaLightbulb, FaRegHeart, FaRegUser } from "react-icons/fa";
import { UserGroupIcon } from "@heroicons/react/24/outline"; // outline hollow user group

const AboutUs = () => {
  const highlights = [
    {
      icon: <FaRegHeart className="text-clr1 text-3xl" />,
      title: "Patient-Centered Care",
      description: "Listening carefully to patient concerns",
    },
    {
      icon: <FaRegUser className="text-clr2 text-3xl" />,
      title: "Education First",
      description: "Educating patients for long-term oral health",
    },
    {
      icon: <UserGroupIcon className="text-green-500 w-12 h-12 mx-auto" />,
      title: "Advanced Procedures",
      description: "Offering advanced dental procedures in a comfortable setting",
    },
  ];

  return (
    <section className="py-16 bg-white text-black">
      <div className="container mx-auto px-6 md:px-0 flex flex-col md:flex-row items-center gap-12 max-w-6xl">
        {/* Left Image */}
        <div className="flex-1">
          <img
            src="/images/about-us.png"
            alt="About MyDentalGroup"
            className="rounded-xl shadow-lg w-full h-full"
          />
        </div>

        {/* Right Text */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-clr1">About Us</h2>
          <p className="text-lg">
            At <span className="font-semibold text-clr2">MyDentalGroup</span>, we believe dental care should be comfortable, affordable, and personalized. Our mission is to provide stress-free dental visits where your oral health comes first.
          </p>
          <p className="text-lg">
            Our dentists and friendly staff take the time to understand your concerns, explain treatments, and ensure you feel confident about your care.
          </p>

          <div className="flex items-start space-x-3 bg-white text-clr3 p-4 rounded-xl shadow-md">
            <FaLightbulb className="text-clr2 text-3xl" />
            <p className="text-lg">
              We combine the latest technology with a compassionate approach to give you and your family the best dental experience in Albuquerque.
            </p>
          </div>
        </div>
      </div>

      {/* Highlight Cards */}
      <div className="container mx-auto px-6 md:px-0 mt-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-xl p-6 text-center border border-gray-200 hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold text-clr3 mb-2">{item.title}</h4>
              <p className="text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
