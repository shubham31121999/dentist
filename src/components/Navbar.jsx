import React from "react";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Navbar = () => {
  const openGoogleMaps = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=123+Dental+Street,+Mumbai",
      "_blank"
    );
  };

  const makeCall = () => {
    window.location.href = "tel:+919876543210";
  };

  return (
    <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 w-[95%] md:w-full max-w-6xl z-50 bg-white text-clr1 font-primary shadow-md flex justify-between items-center p-4 rounded-2xl mx-auto">
      {/* Logo */}
      <div className="text-2xl font-bold">MyDental</div>

      {/* Right Side */}
      <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-2 md:space-y-0">
        {/* Address with Map Pin */}
        <button
          onClick={openGoogleMaps}
          className="flex items-center space-x-2 text-sm hover:text-clr2 transition"
        >
          <FaMapMarkerAlt size={18} />
          <span>123 Dental Street, Mumbai</span>
        </button>

        {/* Call Button with Phone Icon */}
        <button
          onClick={makeCall}
          className="flex items-center space-x-2 bg-clr2 text-white px-4 py-2 rounded-lg shadow hover:bg-clr1 transition"
        >
          <FaPhone size={18} />
          <span>Call Now</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
