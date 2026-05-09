// import { useEffect, useState } from "react";

// import sliderImage1 from "../../assets/sliderImage1.png";
// import sliderImage2 from "../../assets/sliderImage2.png";
// import sliderImage3 from "../../assets/sliderImage3.png";
// import collectionhoverone from "../../assets/collectionhoverone.png";
// import collectionhovertwo from "../../assets/collectionhovertwo.png";
// import collectionhoverthree from "../../assets/collectionhoverthree.png";

// const slides = [
//   {
//     image: sliderImage1,
//     hoverImage: collectionhoverone,
//     title: "Freshly Coffee",
//     subtitle: "Shop Now",
//   },
//   {
//     image: sliderImage2,
//     hoverImage: collectionhovertwo,
//     title: "Coffee Beans",
//     subtitle: "Shop Now",
//   },
//   {
//     image: sliderImage3,
//     hoverImage: collectionhoverthree,
//     title: "All Tea",
//     subtitle: "Shop Now",
//   },
//   {
//     image: sliderImage1,
//     hoverImage: collectionhoverone,
//     title: "Cold Brew",
//     subtitle: "Shop Now",
//   },
//   {
//     image: sliderImage2,
//     hoverImage: collectionhovertwo,
//     title: "Espresso",
//     subtitle: "Shop Now",
//   },
//   {
//     image: sliderImage3,
//     hoverImage: collectionhoverthree,
//     title: "Herbal Tea",
//     subtitle: "Shop Now",
//   },
// ];

// const OurCollection = () => {
//   const [current, setCurrent] = useState(0);
//   const [hovered, setHovered] = useState(null);
//   const [visibleSlides, setVisibleSlides] = useState(3);

  
//   useEffect(() => {
//     const updateVisibleSlides = () => {
//       if (window.innerWidth < 640) {
//         setVisibleSlides(1); 
//       } else if (window.innerWidth < 1024) {
//         setVisibleSlides(2); 
//       } else {
//         setVisibleSlides(3); 
//       }
//     };

//     updateVisibleSlides();
//     window.addEventListener("resize", updateVisibleSlides);
//     return () =>
//       window.removeEventListener("resize", updateVisibleSlides);
//   }, []);

//   const maxIndex = slides.length - visibleSlides;

//   const prevSlide = () => {
//     setCurrent((prev) => (prev === 0 ? maxIndex : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrent((prev) => (prev === maxIndex ? 0 : prev + 1));
//   };

//   return (
//     <section className="bg-gray-100 py-12 sm:py-16 md:py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="text-center font-semibold text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-10 lg:mb-12 tracking-tight">
//           Our Collections
//         </h1>

//         <div className="relative w-full">
       
//           <button
//             onClick={prevSlide}
//             className="flex items-center justify-center absolute top-1/2 -translate-y-1/2 
//               left-2 sm:left-4 md:left-6 lg:-left-10 xl:-left-7
//               w-6 h-6 sm:w-8 sm:h-8 
//               bg-black/60 text-white rounded-full 
//               hover:bg-black transition-all duration-300 z-20 shadow-lg
//               sm:hover:scale-110"
//           >
//             ❮
//           </button>

         
//           <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
//             <div
//               className="flex transition-transform duration-700 ease-in-out"
//               style={{
//                 transform: `translateX(-${
//                   current * (100 / visibleSlides)
//                 }%)`,
//               }}
//             >
//               {slides.map((slide, index) => (
//                 <div
//                   key={index}
//                   className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-1 sm:px-2"
//                 >
//                   <div
//                     className="relative h-64 sm:h-80 md:h-96 lg:h-104 xl:h-120 w-full rounded-2xl overflow-hidden group cursor-pointer
//                       shadow-lg hover:shadow-2xl transition-all duration-300"
//                     onMouseEnter={() =>
//                       window.innerWidth >= 1024 && setHovered(index)
//                     }
//                     onMouseLeave={() => setHovered(null)}
//                   >
                   
//                     <img
//                       src={slide.image}
//                       alt={slide.title}
//                       className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
//                     />

                    
//                     <img
//                       src={slide.hoverImage}
//                       alt="hover"
//                       className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
//                         hovered === index
//                           ? "opacity-100 scale-105"
//                           : "opacity-0"
//                       }`}
//                     />

                
//                     <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-6 md:p-8">
//                       <h3 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-medium">
//                         {slide.title}
//                       </h3>
//                       <p className="text-white/90 text-center text-xs sm:text-sm md:text-base mt-1 hover:underline">
//                         {slide.subtitle}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

         
//           <button
//             onClick={nextSlide}
//             className="flex items-center justify-center absolute top-1/2 -translate-y-1/2 
//               right-2 sm:right-4 md:right-6 lg:-right-10 xl:-right-9
//               w-6 h-6 sm:w-8 sm:h-8 
//               bg-black/60 text-white rounded-full 
//               hover:bg-black transition-all duration-300 z-20 shadow-lg
//               sm:hover:scale-110"
//           >
//             ❯
//           </button>
//         </div>

     
//         <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
//           {Array.from({ length: maxIndex + 1 }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrent(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300
//                 ${
//                   current === index
//                     ? "bg-gray-700 scale-125"
//                     : "bg-gray-300 hover:bg-gray-400"
//                 }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurCollection;


import { useEffect, useState } from "react";

import sliderImage1 from "../../assets/sliderImage1.png";
import sliderImage2 from "../../assets/sliderImage2.png";
import sliderImage3 from "../../assets/sliderImage3.png";
import collectionhoverone from "../../assets/collectionhoverone.png";
import collectionhovertwo from "../../assets/collectionhovertwo.png";
import collectionhoverthree from "../../assets/collectionhoverthree.png";

const slides = [
  {
    image: sliderImage1,
    hoverImage: collectionhoverone,
    title: "Freshly Coffee",
    subtitle: "Shop Now",
  },
  {
    image: sliderImage2,
    hoverImage: collectionhovertwo,
    title: "Coffee Beans",
    subtitle: "Shop Now",
  },
  {
    image: sliderImage3,
    hoverImage: collectionhoverthree,
    title: "All Tea",
    subtitle: "Shop Now",
  },
  {
    image: sliderImage1,
    hoverImage: collectionhoverone,
    title: "Cold Brew",
    subtitle: "Shop Now",
  },
  {
    image: sliderImage2,
    hoverImage: collectionhovertwo,
    title: "Espresso",
    subtitle: "Shop Now",
  },
  {
    image: sliderImage3,
    hoverImage: collectionhoverthree,
    title: "Herbal Tea",
    subtitle: "Shop Now",
  },
];

const OurCollection = () => {
  const [current, setCurrent] = useState(0);
  // FIX: Explicitly defined type to allow numbers and null
  const [hovered, setHovered] = useState<number | null>(null);
  const [visibleSlides, setVisibleSlides] = useState(3);

  useEffect(() => {
    const updateVisibleSlides = () => {
      if (window.innerWidth < 640) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(3);
      }
    };

    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);
    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, []);

  const maxIndex = slides.length - visibleSlides;

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="bg-gray-100 py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center font-semibold text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-10 lg:mb-12 tracking-tight">
          Our Collections
        </h1>

        <div className="relative w-full">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="flex items-center justify-center absolute top-1/2 -translate-y-1/2 
              left-2 sm:left-4 md:left-6 lg:-left-10 xl:-left-7
              w-6 h-6 sm:w-8 sm:h-8 
              bg-black/60 text-white rounded-full 
              hover:bg-black transition-all duration-300 z-20 shadow-lg
              sm:hover:scale-110"
          >
            ❮
          </button>

          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${current * (100 / visibleSlides)}%)`,
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-1 sm:px-2"
                >
                  <div
                    className="relative h-64 sm:h-80 md:h-96 lg:h-104 xl:h-120 w-full rounded-2xl overflow-hidden group cursor-pointer
                      shadow-lg hover:shadow-2xl transition-all duration-300"
                    onMouseEnter={() =>
                      window.innerWidth >= 1024 && setHovered(index)
                    }
                    onMouseLeave={() => setHovered(null)}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                    />

                    <img
                      src={slide.hoverImage}
                      alt={`${slide.title} hover view`}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                        hovered === index ? "opacity-100 scale-105" : "opacity-0"
                      }`}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-6 md:p-8">
                      <h3 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-medium">
                        {slide.title}
                      </h3>
                      <p className="text-white/90 text-center text-xs sm:text-sm md:text-base mt-1 hover:underline">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="flex items-center justify-center absolute top-1/2 -translate-y-1/2 
              right-2 sm:right-4 md:right-6 lg:-right-10 xl:-right-9
              w-6 h-6 sm:w-8 sm:h-8 
              bg-black/60 text-white rounded-full 
              hover:bg-black transition-all duration-300 z-20 shadow-lg
              sm:hover:scale-110"
          >
            ❯
          </button>
        </div>

        <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300
                ${
                  current === index
                    ? "bg-gray-700 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCollection;
