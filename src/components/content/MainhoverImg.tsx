import React from 'react';
import virtualtour from "../../assets/virtualtour.png";
import virtualtourhover from "../../assets/virtualimagemain.png"

const MainhoverImg: React.FC = () => {
  return (
       <section className="bg-[#f7f7f4] p-2 mt-6">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
  
        <div>
          <h2 className="text-6xl font-semibold mb-6 text-center">Virtual Tours</h2>

          <p className="text-gray-600 leading-relaxed mb-8 max-w-xl text-center text-lg">
            Come and have a walk through our HQ, take a look at our roastery,
            training room, showrooms, cupping room and engineering bay!
            A little about Future Virtual Ltd We are a Brighton & Bristol
            based family business, covering the whole of the UK. We are leading
            the way in creating stunning, fully immersive & interactive 360
            virtual tours across all industries such as business.
          </p>
<div className='text-center'>

          <button className="border border-black px-8 py-3 rounded-full text-sm hover:bg-black hover:text-white transition text-center">
            Read More
          </button>
</div>
        </div>

        <div className="relative w-full h-105 rounded-xl overflow-hidden group">
          
    
          <img
            src={virtualtourhover}
            alt="Virtual Tour"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:opacity-0 group-hover:scale-105"
          />

          
          <img
            src={virtualtour}
            alt="Virtual Tour Hover"
            className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-100"
          />
        </div>
      </div>
    </section>
  )
}

export default MainhoverImg