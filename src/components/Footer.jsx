import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-16">
      <div className="container mx-auto px-6 md:px-0 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <h2 className="text-3xl font-bold text-clr1 font-primary">
              MyDentalGroup
            </h2>
          </div>

          {/* Google Map iframe */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120562.30067206293!2d73.00101755!3d19.213891949999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8fcfe76fd59%3A0xcf367d85f7c50283!2sThane%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1755422137606!5m2!1sen!2sin" // replace with your location
              width="100%"
              height="200"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              title="Clinic Location"
            ></iframe>
          </div>

          {/* Call Button & Tagline */}
          <div className="flex flex-col justify-center items-center md:items-end space-y-4">
            <a
              href="tel:+1234567890"
              className="bg-gradient-to-r from-clr1 to-clr2 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
            >
              Call Now
            </a>
            <p className="text-clr3 text-center md:text-right italic">
              "Your smile, our passion. Let's create beautiful smiles together!"
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 text-center text-clr3 text-sm border-t border-gray-200 pt-4">
          &copy; {new Date().getFullYear()} MyDentalGroup. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
