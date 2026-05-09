import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <section className="bg-[#e9e9e2] py-20 px-6 text-center">
        <h2 className="text-4xl font-medium mb-4">Newsletter</h2>
        <p className="text-gray-600 mb-8">
          The latest coffees, offers and news from the Clifton.
        </p>

        <div className="flex justify-center">
          <div className="flex items-center border border-black rounded-full overflow-hidden w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 bg-transparent outline-none"
            />
            <button className="bg-black text-white px-6 py-3 flex items-center justify-center">
              →
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">

        
          <div>
            <div className="border border-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
              B
            </div>
            <p className="text-sm">
              Certified <br /> Corporation
            </p>

            <div className="flex gap-4 mt-6 text-lg">
              <span className="cursor-pointer">f</span>
              <span className="cursor-pointer">📷</span>
              <span className="cursor-pointer">▶</span>
            </div>
          </div>

        
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Clifton Merchandise</li>
              <li>Brewing Equipment</li>
              <li>Clifton Hot Chocolate</li>
              <li>Clifton Tea</li>
              <li>Gift Card</li>
            </ul>
          </div>

       
          <div>
            <h4 className="font-semibold mb-4">Coffee</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>All Coffee</li>
              <li>House Coffees</li>
              <li>Single Origin</li>
              <li>Clifton Capsules</li>
              <li>Unparalleled Series</li>
            </ul>
          </div>

     
          <div>
            <h4 className="font-semibold mb-4">Our Ethos</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>About Us</li>
              <li>Resources</li>
              <li>Origin Films</li>
              <li>Careers</li>
              <li>HQ Virtual Tour</li>
            </ul>
          </div>

        
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>✉ sales@cliftoncoffee.co.uk</li>
              <li>☎ +44 (0)117 982 2022</li>
              <li>📍 Write address here…</li>
            </ul>
          </div>

        </div>

        
        <div className="text-center text-gray-400 text-xs mt-12">
          © 2025 Clifton Coffee Roasters | Privacy Policy
        </div>
      </footer>
    </>
  );
};

export default Footer;
