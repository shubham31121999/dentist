import React from "react";

const ContactForm = () => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Floating decorative circles */}
      

      <div className="container mx-auto px-6 md:px-0 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Contact Form */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-10 md:p-16 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-clr1 mb-10 font-primary">
              Let's Connect
            </h2>
            <p className="text-clr3 mb-8 text-lg">
              Have a question or want to schedule an appointment? Fill out the form below and we'll get back to you promptly.
            </p>
            <form className="space-y-6">
              {["Name", "Email", "Message"].map((label, idx) => (
                <div key={idx} className="relative">
                  {label !== "Message" ? (
                    <input
                      type={label === "Email" ? "email" : "text"}
                      placeholder={label}
                      className="w-full border border-white/30 bg-white/10 text-gray-900 placeholder-transparent rounded-xl px-5 py-4 focus:ring-2 focus:ring-clr1 focus:border-clr1 outline-none transition duration-300 peer shadow-sm"
                    />
                  ) : (
                    <textarea
                      rows="4"
                      placeholder={label}
                      className="w-full border border-white/30 bg-white/10 text-gray-900 placeholder-transparent rounded-xl px-5 py-4 focus:ring-2 focus:ring-clr1 focus:border-clr1 outline-none transition duration-300 peer shadow-sm"
                    ></textarea>
                  )}
                  <label className="absolute left-5 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-focus:top-[-0.7rem] peer-focus:text-clr1 peer-focus:text-sm font-medium">
                    {label}
                  </label>
                </div>
              ))}

              <button className="w-full bg-gradient-to-r from-clr1 to-clr2 text-white py-4 rounded-xl hover:scale-105 transition duration-300 shadow-lg font-semibold text-lg">
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column: Info Cards */}
          <div className="space-y-6 relative z-10">
            <h3 className="text-4xl font-bold text-clr1 font-primary mb-8">
              Contact Information
            </h3>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 gap-6">
              {/* Address */}
              <div className="flex items-start space-x-4 bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl hover:-translate-y-2 transition transform duration-300">
                <div className="bg-gradient-to-tr from-clr1 to-clr2 p-4 rounded-full text-white text-3xl flex items-center justify-center shadow-lg">
                  📍
                </div>
                <div>
                  <h4 className="text-clr1 font-semibold text-lg">Address</h4>
                  <p className="text-clr3">123 Dental Street, Smile City, USA</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-4 bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl hover:-translate-y-2 transition transform duration-300">
                <div className="bg-gradient-to-tr from-clr2 to-clr1 p-4 rounded-full text-white text-3xl flex items-center justify-center shadow-lg">
                  ⏰
                </div>
                <div>
                  <h4 className="text-clr1 font-semibold text-lg">Working Hours</h4>
                  <p className="text-clr3">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-clr3">Sat: 10:00 AM - 4:00 PM</p>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-center justify-between bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl hover:-translate-y-2 transition transform duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-tr from-clr1 to-clr2 p-4 rounded-full text-white text-3xl flex items-center justify-center shadow-lg">
                    📞
                  </div>
                  <div>
                    <h4 className="text-clr1 font-semibold text-lg">Call Us</h4>
                    <p className="text-clr3">+1 234 567 890</p>
                  </div>
                </div>
                <a
                  href="tel:+1234567890"
                  className="bg-gradient-to-r from-clr1 to-clr2 text-white px-6 py-2 rounded-xl hover:scale-105 transition shadow-md font-semibold"
                >
                  Call Now
                </a>
              </div>

              {/* Punchline */}
              <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl hover:-translate-y-2 transition transform duration-300">
                <p className="text-clr3 italic text-center text-lg border-l-4 border-clr1 pl-4">
                  "Your smile, our passion. Let's create beautiful smiles together!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
