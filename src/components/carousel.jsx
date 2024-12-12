
import  { useEffect, useState } from "react";
import Brokes from "../assets/images/HyTechPro-Brokerspotlight_1_1.png";
import eva from "../assets/images/HyTechPro-Eva_1_0.png";
import blouin from "../assets/images/HyTechPro-Blouinartinfo_1_1 (1).png";
import collect from "../assets/images/HyTechPro-CollectRx_1_0.png";
import dare from "../assets/images/HyTechPro-Daretoscare_1.png";
import fleetcar from "../assets/images/HyTechPro-Fleetcar_1_0.png";
import niit from "../assets/images/HyTechPro-Niit_1.png";
import stadia from "../assets/images/HyTechPro-Stadia.png";
import tata from "../assets/images/HyTechPro-Tata-communication_0.png";
import home from "../assets/images/HyTechPro-Homeconnection_0_0.png";
import airtel from"../assets/images/HyTechPro-airtel_1_0.png"
import blackbox from "../assets/images/HyTechPro-Blackbox_0.png"
import hfa from "../assets/images/HyTechPro-HFA.png"
// import cis from "../assets/images/CIO-Review.png"
import corporate from "../assets/images/HyTechPro-Corporate-Event-Online.png"
import zipcom from "../assets/images/HyTechPro-Zip-comps_0.png"
import mdagree from "../assets/images/HyTechPro-Mdagree_0.png"
import techmer from "../assets/images/HyTechPro-TechmerPM.png"

const images = [
  Brokes,
  eva,
  blouin,
  collect,
  dare,
  techmer,
  fleetcar,
  niit,
  stadia,
  tata,
  home,
  airtel,
  blackbox,
  mdagree,
  zipcom,
  hfa,
  corporate
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Image changes every 3 seconds

    return () => clearInterval(interval);
  }, []);

//   const getVisibleImages = () => {
//     const visibleCount = 5; // Number of images to show at a time
//     const visibleImages = [];
//     for (let i = 0; i < visibleCount; i++) {
//       visibleImages.push(images[(currentIndex + i) % images.length]);
//     }
//     return visibleImages;
//   };

  return (
    
    <div className="relative w-[80%] translate-x-36 shadow-inner h-20 pt-5 mt-5  border-[#484b4f] overflow-hidden bg-gray-100">
      <div
        className="flex items-center transition-transform duration-1000 gap-4"
        style={{ transform: `translateX(-${(currentIndex % images.length) * 100 / 5}%)` }}
      >
        {images.concat(images).map((image, index) => (
          <div
            className="min-w-[20%] flex justify-center items-center transition-all duration-1000"
            key={index}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-52 h-[50px] object-fill rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
