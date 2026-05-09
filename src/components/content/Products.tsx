import { useState } from "react";
import img5 from "../../assets/5.png";
import img3 from "../../assets/3.png";
import img1 from "../../assets/1.png";
import img6 from "../../assets/6.png";

import productOne from "../../assets/product-one.png";
import productTwo from "../../assets/product-two.png";
import replaceOne from "../../assets/replaceOne.png";
import replaceTwo from "../../assets/replaceTwo.png";

import ShopCoffe from "../../assets/ShopCoffe.png";

type FilterType = "coffee" | "capsule" | "all";

const leftImages = [img5, img3, img6, img1];

const aiImage = img6;

const sliderData = {
  coffee: [
    { image: productOne, price: "£13.50" },
    { image: productTwo, price: "£13.50" },
  ],
  capsule: [
    { image: replaceOne, price: "£11.00" },
    { image: replaceTwo, price: "£11.00" },
  ],
  all: [
    { image: productOne, price: "£13.50" },
    { image: productTwo, price: "£13.50" },
  ],
};

const CoffeeShowcase = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [hoveredLeft, setHoveredLeft] = useState<number | null>(null);
  const [hoveredSlide, setHoveredSlide] = useState<number | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);

  const slides = sliderData[activeFilter];

  const toggleImages = () => {
    setActiveFilter((prev) => (prev === "capsule" ? "all" : "capsule"));
    setSlideIndex(0);
    setFadeKey((prev) => prev + 1);
  };

  const changeFilter = (filter: FilterType) => {
    setActiveFilter(filter);
    setSlideIndex(0);
    setFadeKey((prev) => prev + 1);
  };

  return (
    <section className="bg-[#f7f7f2] p-2">
      <h1 className="text-center text-6xl font-normal mb-10">Our Products</h1>

      <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-2 gap-14">
        <div>
          {activeFilter === "capsule" ? (
            <div
              key={fadeKey}
              className="w-full h-full overflow-hidden  relative"
            >
              <img
                src={aiImage}
                className="w-full h-full object-cover  transition-all duration-1000 ease-in-out transform scale-100 opacity-0 animate-fadeIn"
              />
            </div>
          ) : (
            <div className="grid grid-cols-2 ">
              {leftImages.map((img, index) => (
                <div
                  key={`${img}-${fadeKey}`}
                  className="relative cursor-pointer overflow-hidden "
                  onMouseEnter={() => setHoveredLeft(index)}
                  onMouseLeave={() => setHoveredLeft(null)}
                >
                  <img
                    src={img}
                    className={`w-full h-full object-cover transition-all duration-1000 ease-in-out transform ${
                      hoveredLeft === index
                        ? "opacity-60 scale-105"
                        : "opacity-100 scale-100"
                    }`}
                  />
                  {hoveredLeft === index && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-lg underline underline-offset-4">
                        View More
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="relative">
          <div className="flex gap-3 mb-6">
            {(["coffee", "capsule", "all"] as FilterType[]).map((item) => (
              <button
                key={item}
                onClick={() => changeFilter(item)}
                className={`px-5 py-2 rounded-full border transition ${
                  activeFilter === item
                    ? "bg-black text-white"
                    : "border-black text-black hover:bg-black hover:text-white"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          <div className="relative flex items-center">
            <button
              onClick={toggleImages}
              className="absolute -left-10 sm:-left-9 top-1/2 -translate-y-1/2
                w-6 h-6 sm:w-8 sm:h-8
                rounded-full bg-black text-white
                flex items-center justify-center
                hover:scale-110 transition z-20"
            >
              ❮
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full overflow-hidden rounded-3xl">
              {[0, 1].map((offset) => {
                const slide = slides[(slideIndex + offset) % slides.length];
                return (
                  <div
                    key={`${offset}-${fadeKey}`}
                    className="relative overflow-hidden rounded-lg"
                    onMouseEnter={() => setHoveredSlide(offset)}
                    onMouseLeave={() => setHoveredSlide(null)}
                  >
                    <img
                      src={slide.image}
                      className="w-full h-90 object-cover transition-all duration-1000 ease-in-out transform opacity-0 animate-fadeIn"
                    />

                    <button
                      className={`absolute inset-x-0 bottom-6 mx-auto w-56 py-2 bg-black text-white rounded-full transition-all duration-300 ${
                        hoveredSlide === offset
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      Buy
                    </button>

                    <div className="bg-[#dfe4e1] h-20" />
                  </div>
                );
              })}
            </div>

            <button
              onClick={toggleImages}
              className="absolute -right-10 sm:-right-9 top-1/2 -translate-y-1/2
                w-6 h-6 sm:w-8 sm:h-8
                rounded-full bg-black text-white
                flex items-center justify-center
                hover:scale-110 transition z-20"
            >
              ❯
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out forwards;
        }
      `}</style>

      <section className="relative h-[90vh] w-full overflow-hidden mt-20 sm:mt-24 md:mt-28 lg:mt-32 rounded-2xl">
        <img
          src={ShopCoffe}
          alt="Pouring coffee"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-6">
            <p className="mb-2 text-sm text-gray-200">
              Clifton Coffee — Speciality Coffee
            </p>

            <h1 className="mb-4 text-4xl font-normal text-white md:text-6xl">
              Shop coffee
            </h1>

            <p className="max-w-xl text-base text-gray-200 md:text-lg">
              Discover your perfect cup of coffee—crafted to match your taste
              and style. Wake up to perfection every day!
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CoffeeShowcase;
