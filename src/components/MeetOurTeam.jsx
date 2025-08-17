"use client";

import React from "react";
import { FaUserMd, FaRegSmile, FaTooth } from "react-icons/fa";
import { MdHearing } from "react-icons/md";

const MeetOurTeam = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-6 lg:px-6 text-center font-primary">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-clr1 mb-6">
          Meet Our Team
        </h2>

        {/* Subtitle with Icon */}
        <div className="flex justify-center items-center gap-2 mb-6">
          <FaUserMd className="text-clr2 text-3xl" />
          <h3 className="text-2xl md:text-3xl font-semibold text-clr3">
            Dr. Midthana & Team
          </h3>
        </div>

        {/* Description */}
        <p className="text-clr3 text-lg md:text-xl mb-10">
          Our skilled team focuses on preventive, cosmetic, and restorative
          dentistry while keeping patients at ease throughout every visit.
        </p>

        {/* Highlights Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Card 1 */}
          <div className="bg-white shadow-lg text-clr1 rounded-xl p-6 border-t-4 border-clr1 hover:shadow-xl hover:bg-clr1 hover:text-white transition duration-300">
            <div className="flex items-center gap-3 mb-3">
              <MdHearing className=" text-3xl" />
              <h4 className="text-xl font-semibold ">
                Listening Carefully
              </h4>
            </div>
            <p className="">
              We take time to understand your concerns and expectations for the
              best care.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg text-clr2 rounded-xl p-6 border-t-4 border-clr2 hover:shadow-xl hover:bg-clr2 hover:text-white transition duration-300">
            <div className="flex items-center gap-3 mb-3">
              <FaRegSmile className=" text-3xl" />
              <h4 className="text-xl font-semibold ">
                Patient Education
              </h4>
            </div>
            <p className="">
              Helping you maintain long-term oral health through personalized
              guidance.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg text-clr3 rounded-xl p-6 border-t-4 border-clr3 hover:shadow-xl hover:bg-clr3 hover:text-white transition duration-300">
            <div className="flex items-center gap-3 mb-3">
              <FaTooth className=" text-3xl" />
              <h4 className="text-xl font-semibold ">
                Advanced Procedures
              </h4>
            </div>
            <p className="">
              We provide modern dental care in a safe and comfortable
              environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
