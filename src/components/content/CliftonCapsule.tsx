import React from "react";
import img from "../../assets/cliftonCapsule.png";

const CliftonCapsule: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center">

          {/* TEXT SECTION */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal">
              Clifton Capsule
            </h1>

            <p className="text-base sm:text-lg mt-4 max-w-md mx-auto lg:mx-0">
              The Clifton Capsule is a revolutionary product designed to enhance your daily experience with innovative features and sleek design.
            </p>

            <div className="mt-12 sm:mt-16 lg:mt-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-gray-400">
                Clifton Coffee
              </h2>

              <p className="text-base sm:text-xl text-gray-400 mt-4 max-w-md mx-auto lg:mx-0">
                The Clifton Capsule is a revolutionary product designed to enhance your daily experience with innovative features and sleek design.
              </p>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
            <img
              src={img}
              alt="Clifton Capsule"
              className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full h-auto"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default CliftonCapsule;
