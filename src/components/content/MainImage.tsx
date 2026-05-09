import React from "react";
import subimg1 from "../../assets/subimg1.png";
import subimg2 from "../../assets/subimg2.png";
import subimg3 from "../../assets/subimg3.png";
import subimg4 from "../../assets/subimg4.png";

type CardProps = {
  title: string;
  subtitle?: string;
  image: string;
  hoverImage: string;
};

const ImageCard: React.FC<CardProps> = ({
  title,
  subtitle,
  image,
  hoverImage,
}) => {
  return (
    <div className="group relative h-105 w-full overflow-hidden rounded-2xl cursor-pointer">
     
      <div
        className="absolute inset-0 bg-cover bg-center
        transition-all duration-1200 ease-in-out
        opacity-100 scale-100
        group-hover:opacity-0 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />

  
      <div
        className="absolute inset-0 bg-cover bg-center
        transition-all duration-1200 ease-in-out
        opacity-0 scale-105
        group-hover:opacity-100 group-hover:scale-100"
        style={{ backgroundImage: `url(${hoverImage})` }}
      />

   
      <div className="absolute inset-0 bg-black/40 transition-all duration-1200 ease-in-out group-hover:bg-black/55" />

    
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-4xl font-semibold">{title}</h1>

        {subtitle && (
          <p className="mt-2 text-sm opacity-90">{subtitle}</p>
        )}

        <button className="mt-6 rounded-full border border-white px-6 py-2 text-sm transition-all duration-300 group-hover:bg-white group-hover:text-black">
          Read More
        </button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className=" p-4 bg-[#f6f4ef] ">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        <ImageCard
          title="Subscriptions"
          subtitle="Ethically sourced and direct to your door"
          image={subimg3}
          hoverImage={subimg1}
        />

        <ImageCard
          title="Brazil Trip 2024"
          subtitle="Blogs"
          image={subimg2}
          hoverImage={subimg4}
        />
      </div>
    </div>
  );
}
