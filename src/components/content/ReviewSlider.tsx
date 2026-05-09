import React, { useState } from "react";

const reviews = [
  {
    title: "All I can say is wow",
    text: "The Cometeer experience is incredible. It feels like having a premium café right in my kitchen. Fast, smooth, and insanely good coffee every time.",
    author: "Michel F.",
  },
  {
    title: "Best coffee I’ve had at home",
    text: "I was skeptical at first, but this completely changed my morning routine. The quality and consistency are unmatched.",
    author: "Sarah L.",
  },
  {
    title: "Absolutely worth it",
    text: "From ordering to the final cup, everything feels thoughtfully crafted. This is specialty coffee done right.",
    author: "Daniel R.",
  },
  {
    title: "Coffee shop quality",
    text: "It’s like my favorite boutique coffee shop followed me home. Rich flavor, smooth finish, and zero effort.",
    author: "Emily W.",
  },
  {
    title: "A game changer",
    text: "I travel a lot and this is the only way I can get a truly great cup of coffee consistently at home.",
    author: "James K.",
  },
  {
    title: "Incredible flavor",
    text: "Every cup tastes fresh and balanced. You can really tell the beans and brewing process are top-tier.",
    author: "Olivia M.",
  },
  {
    title: "Perfect every time",
    text: "No bitterness, no guessing. Just clean, delicious coffee whenever I want it.",
    author: "Ethan P.",
  },
  {
    title: "My mornings upgraded",
    text: "This has completely replaced my daily café visits. Convenience without sacrificing quality.",
    author: "Hannah C.",
  },
  {
    title: "Luxury coffee at home",
    text: "It feels indulgent but practical. The flavors are complex and smooth, just like a high-end café.",
    author: "Lucas B.",
  },
  {
    title: "Couldn’t go back",
    text: "Once you try this, regular coffee just doesn’t compare. It’s that good.",
    author: "Natalie S.",
  },
  {
    title: "Exceeded expectations",
    text: "I didn’t expect this level of quality from something so easy to prepare. Truly impressive.",
    author: "Andrew T.",
  },
  {
    title: "Highly recommend",
    text: "If you care about good coffee but don’t want the hassle, this is absolutely the solution.",
    author: "Priya N.",
  },
];

const ITEMS_PER_SLIDE = 3;

const ReviewSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const totalSlides = Math.ceil(reviews.length / ITEMS_PER_SLIDE);

  return (
    <section className="bg-[#f7f7f4] py-8 px-6">
      <div className="max-w-7xl mx-auto">
        
       
        <h2 className="text-4xl font-semibold text-center mb-16">
          Thousands of 5 Star Reviews
        </h2>

     
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 min-w-full"
              >
                {reviews
                  .slice(
                    slideIndex * ITEMS_PER_SLIDE,
                    slideIndex * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE
                  )
                  .map((review, index) => (
                    <div
                      key={index}
                      className="border border-gray-300 bg-[#efefe9] p-6"
                    >
                  
                      <div className="flex mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className="text-black text-lg">
                            ★
                          </span>
                        ))}
                      </div>

                      <h4 className="font-medium mb-2">
                        {review.title}
                      </h4>

                      <p className="text-gray-700 mb-4">
                        {review.text}
                      </p>

                      <p className="font-medium">{review.author}</p>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

      
        <div className="flex justify-center gap-4 mt-10">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full border border-black transition ${
                current === index
                  ? "bg-black"
                  : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSlider;
