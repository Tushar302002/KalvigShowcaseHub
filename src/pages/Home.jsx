import React, { useState } from "react";
import Navbar from "../components/Navbar";

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      id: 1,
      tags: ["3D", "INTERACTIVE"],
      title: "3D Product Demo",
      description: "Interactive 3D demo for new product rollouts",
      image: "/assets/3D DEMO.jpg",
    },
    {
      id: 2,
      tags: ["DESIGN", "UI/UX"],
      title: "8 Responsive UI Kit Updates",
      description: "UI Kit upgrades with mobile-first layouts.",
      image: "/assets/UI1.svg",
    },
    {
      id: 3,
      tags: ["DESIGN", "UI/UX"],
      title: "Kayening Web App UI",
      description: "Streamlined interface for Kayening's online platform.",
      image: "/assets/UI2.svg",
    },
    {
      id: 4,
      tags: ["DEVELOPMENT", "API"],
      title: "Payment Gateway API",
      description: "Secure payment processing integration",
      image: "/assets/3DDEMO.svg",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  // Get the 3 cards to display (active, next, previous)
  const getVisibleCards = () => {
    const prevIndex = activeIndex === 0 ? cards.length - 1 : activeIndex - 1;
    const nextIndex = activeIndex === cards.length - 1 ? 0 : activeIndex + 1;

    return [cards[prevIndex], cards[activeIndex], cards[nextIndex]];
  };

  const visibleCards = getVisibleCards();

  return (
    <div>
      <Navbar />
      <hr />
      <section className="h-[700px] px-6 py-10  text-white">
        {/* Top title + arrows */}
        <div className="flex justify-between items-center mb-6 ">
          <p className="text-[36px] font-semibold">
            TOP WORK <span className="text-blue-700">THIS MONTH</span>
          </p>
          <div className="flex gap-2 text-white">
            <button
              className="w-[70px] h-[70px] bg-neutral-50 hover:bg-gray-600 border  rounded-full flex items-center justify-center "
              onClick={handlePrev}
            >
              <img src="/assets/leftarrow.svg" alt="Left Arrow" />
            </button>
            <button
              className="w-[70px] h-[70px] bg-neutral-50 hover:bg-gray-600 border  rounded-full flex items-center justify-center"
              onClick={handleNext}
            >
              <img src="/assets/rightarrow.svg" alt="Right Arrow" />
            </button>
          </div>
        </div>

        {/* Cards Container */}
        <div className="flex items-center justify-center gap-2  ">
          {/* Active Card (large) */}
          <div className="w-[923px] h-[549px] rounded-[25px]  overflow-hidden transition-all duration-300 shadow-lg">
            <div className="relative h-full p-6">
              <img
                src={visibleCards[1].image}
                alt={visibleCards[1].title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative z-10 flex flex-col justify-end">
                <div className="flex gap-2 mb-4 ">
                  {visibleCards[1].tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[32px] font-bold bg-blue-600 text-white px-2 py-0.5 rounded-[20px] "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-[48px] font-bold  w-[379px]">
                  {visibleCards[1].title}
                </h3>
                <p className="text-gray-300 text-[32px] w-[379px] mt-[130px]">{visibleCards[1].description}</p>
              </div>
            </div>
          </div>

          {/* Next Card (small) */}
          <div
            className="w-[411px] h-[549px]  rounded-[20px] border border-gray-800 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden transition-all duration-300 cursor-pointer hover:scale-105"
            onClick={handleNext}
          >
            <div className="relative h-full p-4">
              <img
                src={visibleCards[2].image}
                alt={visibleCards[2].title}
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="relative z-10  flex flex-col justify-end">
                <div className="flex gap-2 mb-2 ">
                  {visibleCards[2].tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[24px]  bg-blue-600 text-white px-2 py-0.5 rounded-[20px] font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className=" font-bold text-[36px] w-[300px] mt-8">{visibleCards[2].title}</h3>
              </div>
            </div>
          </div>
          {/* Previous Card (small) */}
          <div
            className="w-[411px] h-[549px]  rounded-[25px] border border-gray-800 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden transition-all duration-300 cursor-pointer hover:scale-105"
            onClick={handlePrev}
          >
            <div className="relative h-full p-4">
              <img
                src={visibleCards[0].image}
                alt={visibleCards[0].title}
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="relative z-10 flex flex-col justify-end">
                <div className="flex gap-2 mb-2">
                  {visibleCards[0].tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[24px] bg-blue-600 text-white px-2 py-0.5 rounded-[20px] font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-bold text-[36px] w-[300px] mt-8">{visibleCards[0].title}</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {cards.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === activeIndex ? "bg-blue-500" : "bg-gray-600"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </section>
      <section>

      </section>
    </div>
  );
}

export default Home;
