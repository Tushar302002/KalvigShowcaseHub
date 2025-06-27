import React from "react";
import { Link, useLocation } from 'react-router-dom';

function BigCarousel({ activeIndex, setActiveIndex, cards }) {
  return (
    <div className="flex items-center justify-center gap-4 transition-all duration-500">
      {[0, 1, 2].map((offset) => {
        const isMain = offset === 0;
        const isHiddenOnMobile = offset !== 0; // Hide all except main card on <768px
        const isMdHidden = offset === 2; // Hide third card on medium screens

        const cardIndex = (activeIndex + offset) % cards.length;
        const card = cards[cardIndex];

        return (
          <div
            key={card.id}
            className={`overflow-hidden transition-all duration-300 border
              ${
                isMain
                  ? "rounded-[1.5625rem] w-full h-[22rem] sm:h-[22rem] sm:w-full  md:w-[60%] md:h-[284.3px]  lg:w-[50rem] xl:w-[58rem]"
                  : "rounded-[1.25rem] sm:w-[213px] sm:h-[284.3px] md:h-[284.3px]  md:w-[40%] lg:w-[25.6875rem] cursor-pointer hover:scale-105"
              }
              lg:h-[32rem] xl:h-[34.31rem] 
              ${isHiddenOnMobile ? "hidden sm:hidden md:block" : "block"}
              ${isMdHidden ? "md:hidden lg:block" : ""}`}
          >
            <Link to={`/description`} className="block h-full">
              <div
                className={`relative h-full ${
                  isMain ? "p-6 lg:rounded-[1.5625rem]" : "p-4"
                }`}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className={`absolute inset-0 w-full h-full object-cover opacity-50 
                    ${isMain ? "xl:rounded-[1.5625rem]" : ""}`}
                />
                <div className="relative z-10 flex flex-col justify-start h-full text-white">
                  <div
                    className={`flex gap-2 flex-wrap ${isMain ? "mb-4" : "mb-2"}`}
                  >
                    {card.tags?.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`font-bold bg-blue-600 text-white px-[0.5rem] py-[0.125rem] rounded-[1.25rem]
                          ${
                            isMain
                              ? " sm:text-[2rem] md:text-[1rem] lg:text-[1.8rem] xl:text-[2rem]"
                              : " md:text-[1rem] xl:text-[1.3rem]"
                          }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3
                    className={`font-bold ${
                      isMain
                        ? " text-[1.5rem] sm:text-[1.9rem]  md:text-[2rem] xl:text-[3rem] xl:w-[23.6875rem]"
                        : " md:text-[1.3rem] lg:text-[2rem] xl:text-[2.25rem] w-[90%]"
                    }`}
                  >
                    {card.title}
                  </h3>

                  <div className="flex-grow"></div>

                  <p
                    className={`text-gray-300 ${
                      isMain
                        ? "text-[1.5rem] w-[90%] sm:text-[1.7rem]  md:text-[2rem] sm:w-[23.6875rem] mt-4"
                        : "lg:text-[1.5rem] xl:text-[1.5rem] font-normal xl:w-[15.75rem] mt-4"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default BigCarousel;