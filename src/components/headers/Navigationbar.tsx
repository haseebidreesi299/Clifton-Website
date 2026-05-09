import { useEffect, useRef, useState } from "react";
import shopingimg from "../../assets/Shopping-Cart.png";
import customer from "../../assets/Customer.png";
import search from "../../assets/Search.png";
import chevron from "../../assets/Chevron-Down.png";
import vedio from "../../assets/bg-vedio.mp4.mp4";

import image1 from "../../assets/MiiRCups-scaled.png";
import image2 from "../../assets/MiiRCups-scaled (1).png";
import Coffee1 from "../../assets/Coffee1.png";
import Coffee2 from "../../assets/Coffee2.png";
import sub1 from "../../assets/subimg.png";
import sub2 from "../../assets/sub2.png";

const NAV_ITEMS: string[] = [
  "Shop Christmas",
  "Coffee",
  "Subscription",
  "Accessories",
];

const DROPDOWN_DATA: Record<
  string,
  {
    columns: { title: string; items: string[] }[];
    images: { src: string; heading: string; text: string }[];
  }
> = {
  "Shop Christmas": {
    columns: [
      {
        title: "Christmas Gifts",
        items: [
          "Gift Bundles",
          "Limited Editions",
          "Festive Drinkware",
          "Brewing Gifts",
        ],
      },
      {
        title: "Seasonal Coffee",
        items: ["Single Origin", "Signature Blends", "Decaf", "Best Sellers"],
      },
    ],
    images: [
      {
        src: image1,
        heading: "Festive Drinkware",
        text: "Perfect Christmas Gifts for Coffee Lovers",
      },
      {
        src: image2,
        heading: "Christmas Specials",
        text: "Festive Coffee Gifts for the Season",
      },
    ],
  },

  Coffee: {
    columns: [
      {
        title: "Shop Coffee",
        items: ["Single Origin", "Blends", "Decaf", "Best Sellers"],
      },
      {
        title: "Roast Type",
        items: ["Light Roast", "Medium Roast", "Dark Roast"],
      },
    ],
    images: [
      {
        src: sub1,
        heading: "Freshly Roasted Coffee",
        text: "Freshly Roasted Coffee for Every Moment",
      },
      {
        src: sub2,
        heading: "Ethically Sourced Beans",
        text: "Crafted Coffee from Ethical Sources",
      },
    ],
  },

  Subscription: {
    columns: [
      {
        title: "Coffee Subscriptions",
        items: ["Weekly", "Monthly", "Office Coffee"],
      },
      {
        title: "Why Subscribe",
        items: ["Freshly Roasted", "Free Delivery", "Flexible Plans"],
      },
    ],
    images: [
      {
        src: Coffee1,
        heading: "Flexible Plans",
        text: "Convenient Coffee, Delivered Monthly",
      },
      {
        src: Coffee2,
        heading: "Delivered Fresh",
        text: "Coffee You Love, On Repeat",
      },
    ],
  },

  Accessories: {
    columns: [
      {
        title: "Brew Equipment",
        items: ["Pour Over", "Cafetières", "Grinders", "Kettles"],
      },
      {
        title: "Drinkware",
        items: [
          "Cups & Mugs",
          "Travel Mugs",
          "Water Bottles",
          "Cups & Mugs",
          "Travel Mugs",
          "Water Bottles",
        ],
      },
    
    ],
    images: [
      {
        src: sub1,
        heading: "Barista Essentials",
        text: "Essential Everyday Accessories",
      },
      {
        src: sub2,
        heading: "Everyday Accessories",
        text: "Brew Better Accessories",
      },
    ],
  },
};

const Navigationbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const triggersRef = useRef<Record<string, HTMLLIElement | null>>({});
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!activeMenu) return;

      const dropdown = dropdownRef.current;
      const clickedTrigger = Object.values(triggersRef.current).some(
        (el) => el && el.contains(e.target as Node),
      );

      if (dropdown && !dropdown.contains(e.target as Node) && !clickedTrigger) {
        setActiveMenu(null);
      }
    };

    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [activeMenu]);

  const renderDropdown = (name: string) => {
    const data = DROPDOWN_DATA[name];
    if (!data) return null;

    return (
      <div
        ref={dropdownRef}
        className={`fixed left-1/2 top-28 md:top-36 -translate-x-1/2 w-screen
          bg-white text-black shadow-2xl rounded-2xl
          p-6 md:p-10 z-50
          max-h-screen md:max-h-[70vh] lg:max-h-none
          overflow-y-auto lg:overflow-visible
          transition-all duration-300 ${
            activeMenu === name
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <div className="flex flex-col lg:flex-row justify-between max-w-6xl mx-auto gap-10 lg:gap-16">
          <div className="flex flex-col sm:flex-row gap-10 lg:gap-16">
            {data.columns.map((col, idx) => (
              <div key={idx}>
                <h4 className="font-bold mb-4">{col.title}</h4>
                {col.items.map((item) => (
                  <p
                    key={item}
                    className="text-sm mb-2 cursor-pointer hover:underline"
                  >
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-8">
            {data.images.map((img, idx) => (
              <div key={idx} className="w-full">
                <img src={img.src} className="w-full h-70 rounded-lg" />
                <h5 className="mt-3 font-semibold text-lg">{img.heading}</h5>
                <p className="text-sm text-gray-600">{img.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0 -z-10">
        <video
          src={vedio}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 group">
        <div className="flex justify-center p-3 text-sm bg-black text-white">
          Order before 10am for same day dispatch
        </div>

        <ul
          className="
            flex flex-wrap lg:flex-nowrap
            justify-center items-center
            gap-4 md:gap-6 lg:gap-10
            p-3 md:p-5
            font-semibold text-white
            group-hover:text-black group-hover:bg-white
            transition-all
          "
        >
          {NAV_ITEMS.map((item) => (
            <li
              key={item}
              ref={(el) => {
                triggersRef.current[item] = el;
              }}
              className="relative flex items-center gap-2 cursor-pointer group/item"
              onMouseEnter={() => {
                hoverTimeout.current = setTimeout(() => {
                  setActiveMenu(item);
                }, 300);
              }}
              onMouseLeave={() => {
                if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
                setActiveMenu(null);
              }}
            >
              <span>{item}</span>

              <img
                src={chevron}
                className="
                  w-3
                  transition-transform duration-300
                  group-hover/item:rotate-180
                  invert brightness-0 group-hover:invert-0
                "
              />

              {renderDropdown(item)}
            </li>
          ))}

          <li className="text-center w-full lg:w-auto order-first lg:order-0">
            <span className="text-3xl md:text-4xl font-bold">CLIFTON</span>
            <p className="tracking-widest text-xs md:text-sm">
              Coffee Roasters
            </p>
          </li>

          <li>Wholesale</li>
          <li>Education</li>
          <li>Our Ethos</li>

          <li>
            <img
              src={shopingimg}
              className="invert brightness-0 group-hover:invert-0"
            />
          </li>
          <li>
            <img
              src={customer}
              className="invert brightness-0 group-hover:invert-0"
            />
          </li>
          <li>
            <img
              src={search}
              className="invert brightness-0 group-hover:invert-0"
            />
          </li>
        </ul>

        <hr className="mx-8 border-t-2 border-white group-hover:border-black transition" />
      </div>

      <div className="text-center flex flex-col gap-6 w-full items-center justify-center mt-40 md:mt-50">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white">
          BOLD COFFEE MOMENTS
        </h1>

        <button
          className="
            mt-4 px-6 md:px-8 py-2 md:py-3
            border-2 border-white
            text-white font-semibold
            rounded-full
            bg-transparent
            transition-all duration-300 ease-in-out
            hover:bg-black hover:text-white hover:border-black
            hover:shadow-lg
          "
        >
          See More
        </button>
      </div>
    </section>
  );
};

export default Navigationbar;
