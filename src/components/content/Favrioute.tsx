import { useState } from "react";
import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";
import product4 from "../../assets/product4.png";

type Slide = {
  id: number;
  title: string;
  price: string;
  rating: number;
  image: string;
  region: string;
  producer: string;
  process: string;
};

const slides: Slide[] = [
  {
    id: 0,
    title: "Clifton Coffee Colombia",
    price: "£13.50",
    rating: 5,
    image: product1,
    region: "Ahuachapán",
    producer: "Ricardo Lima",
    process: "Natural",
  },
  {
    id: 1,
    title: "Clifton Coffee Peru",
    price: "£13.50",
    rating: 5,
    image: product2,
    region: "Cusco",
    producer: "Juan Carlos",
    process: "Washed",
  },
  {
    id: 2,
    title: "Clifton Coffee Kenya",
    price: "£13.50",
    rating: 5,
    image: product3,
    region: "Nyeri",
    producer: "Small Holders",
    process: "Washed",
  },
  {
    id: 3,
    title: "Clifton Coffee Panama",
    price: "£13.50",
    rating: 5,
    image: product4,
    region: "Boquete",
    producer: "Hacienda La Esmeralda",
    process: "Natural",
  },
  {
    id: 0,
    title: "Clifton Coffee Colombia",
    price: "£13.50",
    rating: 5,
    image: product1,
    region: "Ahuachapán",
    producer: "Ricardo Lima",
    process: "Natural",
  },
  {
    id: 1,
    title: "Clifton Coffee Peru",
    price: "£13.50",
    rating: 5,
    image: product2,
    region: "Cusco",
    producer: "Juan Carlos",
    process: "Washed",
  },
  {
    id: 2,
    title: "Clifton Coffee Kenya",
    price: "£13.50",
    rating: 5,
    image: product3,
    region: "Nyeri",
    producer: "Small Holders",
    process: "Washed",
  },
  {
    id: 3,
    title: "Clifton Coffee Panama",
    price: "£13.50",
    rating: 5,
    image: product4,
    region: "Boquete",
    producer: "Hacienda La Esmeralda",
    process: "Natural",
  },
];

const CARD_WIDTH = 260;
const GAP = 40;
const VISIBLE_CARDS = 3;

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center gap-3 text-[11px] text-gray-700">
    <span className="w-16 text-left">{label}</span>
    <span className="flex-1 h-px bg-gray-400/50" />
    <span className="font-medium">{value}</span>
  </div>
);

export default function FavoritesSlider() {
  const [index, setIndex] = useState(0);
  const maxIndex = slides.length - VISIBLE_CARDS;

  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-semibold text-center mb-14">
        Our Favorites
      </h2>

      <div className="relative">
        <button
          onClick={() => setIndex((i) => Math.max(i - 1, 0))}
          disabled={index === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black text-white disabled:opacity-30"
        >
          ‹
        </button>

        <button
          onClick={() => setIndex((i) => Math.min(i + 1, maxIndex))}
          disabled={index === maxIndex}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black text-white disabled:opacity-30"
        >
          ›
        </button>

        <div className="overflow-hidden px-16">
          <div
            className="flex gap-10 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${index * (CARD_WIDTH + GAP)}px)`,
            }}
          >
            {slides.map((item) => (
              <div key={item.id} className="group relative w-65 shrink-0">
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="
                        bg-[#f4f5ef]
                        rounded-3xl
                        w-[125%]
                        max-w-85
                        px-8 py-7
                        text-center
                        shadow-[0_30px_80px_rgba(0,0,0,0.35)]
                        border border-black/10
                        transform translate-y-6 scale-95
                        opacity-0
                        group-hover:opacity-100
                        group-hover:translate-y-0
                        group-hover:scale-100
                        transition-all duration-500 ease-out
                      "
                    >
                      <div className="space-y-3 mb-6">
                        <InfoRow label="Region" value={item.region} />
                        <InfoRow label="Producer" value={item.producer} />
                        <InfoRow label="Process" value={item.process} />
                      </div>

                      <h3 className="font-medium text-lg mb-1">{item.title}</h3>

                      <p className="text-sm text-gray-800 mb-3">{item.price}</p>

                      <div className="flex justify-center gap-1 text-yellow-600 mb-5">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>

                      <button className="w-full py-1.5 rounded-full bg-white text-black text-sm font-medium hover:bg-black hover:text-white transition mb-3">
                        Buy Now
                      </button>

                      <button className="text-xs underline text-gray-700 hover:text-black transition">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full ${
                index === i ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
