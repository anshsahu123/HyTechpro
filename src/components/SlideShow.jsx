import Slides1 from "../assets/images/HTP-Innovative-Zone-Banner_1.png";
import Slides2 from "../assets/images/top-10-best-companies-new_0.png";
import Slides3 from "../assets/images/Home_Page__SalesforceManaged_Pac.png";
import Slides4 from "../assets/images/HTP-Website-Banner_0.png";
import Slides5 from "../assets/images/HytechProfessionals_NonProfit.png";
import Slides6 from "../assets/images/Salesforce_Ecosystrem_HytechProf.png";
import { useEffect, useState } from "react";

const Slideshow = () => {
  const images = [Slides1, Slides2, Slides3, Slides4, Slides5, Slides6];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Move to the next slide
  const handleNext = () => {
    if (currentIndex === images.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    } else {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // Move to the previous slide
  const handlePrev = () => {
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(images.length - 1);
    } else {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative w-screen h-screen top-14 overflow-hidden bg-gray-100">
      {/* Slides Container */}
      <div
        className={`flex ${
          isTransitioning ? "transition-transform duration-1000 ease-in-out" : ""
        }`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.concat(images[0]).map((image, index) => (
          <div key={index} className="flex-shrink-0 w-screen h-screen">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Read More Button */}
      <button
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all"
        onClick={() => alert(`Read More about Slide ${currentIndex + 1}`)}
      >
        Read More
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index
                ? "bg-blue-500 scale-150"
                : "bg-gray-300"
            } transition-all duration-300`}
          ></div>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 bg-white/70 hover:bg-white/90 p-3 rounded-full focus:outline-none"
      >
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 bg-white/70 hover:bg-white/90 p-3 rounded-full focus:outline-none"
      >
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    </div>
  );
};

export default Slideshow;
