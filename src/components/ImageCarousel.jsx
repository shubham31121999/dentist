import React, { useState } from "react";

const transformations = [
  {
    image: "/images/before1.webp",
    title: "Patient 1",
  },
  {
    image: "/images/before2.webp",
    title: "Patient 2",
  },
  {
    image: "/images/before1.webp",
    title: "Patient 3",
  },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + transformations.length) % transformations.length
    );

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-0 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Patient Transformations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See the amazing results our patients have achieved.
          </p>
        </div>

        {/* Desktop: show images side by side */}
        <div className="hidden md:flex gap-6 justify-center">
          {transformations.map((item, idx) => (
            <div
              key={idx}
              className="relative w-1/3 h-[300px] rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain"
              />
              
            </div>
          ))}
        </div>

        {/* Mobile: show carousel */}
        <div className="md:hidden relative flex justify-center items-center">
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
            <img
              src={transformations[currentIndex].image}
              alt={transformations[currentIndex].title}
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
              {transformations[currentIndex].title}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow hover:bg-opacity-100 transition"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow hover:bg-opacity-100 transition"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
