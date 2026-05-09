import { useEffect, useState } from "react";

import instaImage1 from "../../assets/instaImages1.png";
import instaImage2 from "../../assets/instaImages2.png";
import instaImage3 from "../../assets/instaImages3.png";
import instaImage4 from "../../assets/instaImages4.png";
import instaImage5 from "../../assets/instaImages5.png";

import instaIcon from "../../assets/HoverInstaBox.png";


const images = [
  instaImage1,
  instaImage2,
  instaImage3,
  instaImage4,
  instaImage5,
  instaImage1,
  instaImage2,
  instaImage3,
  instaImage4,
  instaImage5,
];

const InstaImages = () => {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(5);

  
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) {
        setVisible(1); 
      } else if (window.innerWidth < 1024) {
        setVisible(3); 
      } else {
        setVisible(5); 
      }
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = images.length - visible;

  return (
    <section className="bg-[#f7f7f4] py-14 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center">

       
        <h2 className="text-xl sm:text-2xl font-medium mb-2 underline">
          @cliftoncoffee
        </h2>

        <p className="text-gray-700 mb-8 sm:mb-10 md:mb-12 text-sm sm:text-base">
          Follow us on Instagram for the latest updates!
        </p>

      
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * (100 / visible)}%)`,
            }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="w-full sm:w-1/3 lg:w-1/5 shrink-0 px-2"
              >
                <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
                  <img
                    src={img}
                    alt="Instagram post"
                    className="w-full h-full object-cover transition duration-500 group-hover:opacity-50"
                  />

                
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500">
                    <img
                      src={instaIcon}
                      alt="Instagram"
                      className="w-full h-full scale-75 group-hover:scale-100 transition duration-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <div className="flex justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-black scale-125"
                  : "border border-black"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default InstaImages;
