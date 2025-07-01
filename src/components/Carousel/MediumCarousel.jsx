import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useLocation } from 'react-router-dom';

function MediumCarousel({ activeIndex, setActiveIndex, cards, mainCardIndex }) {
  const isMediumScreen = useMediaQuery({ maxWidth: 1024 }); // md and below
  const isSmallScreen = useMediaQuery({ maxWidth: 767 }); // sm and below

  // Show 3 cards on small screens, otherwise follow the medium screen logic
  const visibleOffsets = isMediumScreen ? [0, 1] : [0, 1, 2];

  return (
    <div className="flex items-center justify-center gap-4">
      {visibleOffsets.map((offset, idx) => {
        const cardIndex = (activeIndex + offset) % cards.length;
        const card = cards[cardIndex];

        // On medium screens (but not small), make the second card (index 1) the main card
        // On small screens, no main card - all cards are equal
        const isMain = isMediumScreen ? idx === 1 : offset === mainCardIndex;

        return (
          <div
            key={card.id}
            onClick={() => !isMain && setActiveIndex(cardIndex)}
            className={`overflow-hidden transition-all duration-300 border-[0.0625rem] 
              ${
                isMain
                  ? "rounded-[1.5625rem] w-1/2 h-[15rem] sm:w-[70%] sm:h-[284.3px] md:w-[60%] lg:w-[38rem] xl:w-[40.625rem]"
                  : "rounded-[1.25rem] w-1/2 h-[15rem] sm:w-[30%] sm:h-[284.3px] md:w-[40%] lg:w-[28rem] xl:w-[31.25rem] cursor-pointer hover:scale-105"
              }
              lg:h-[20rem] xl:h-[25.125rem]`}
          >
            <Link to={`/description`} className="block h-full">
            <div
              className={`relative h-full ${
                isMain ? "p-6 rounded-[1.5625rem]" : "p-6"
              }`}
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full opacity-50 object-cover"
              />
              <div className="relative z-10 flex flex-col justify-start h-full text-white">
                <div
                  className={`flex gap-2 flex-wrap ${isMain ? "mb-4" : "mb-4"}`}
                >
                  {card.tags?.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`font-bold bg-blue-600 text-white px-[0.5rem] py-[0.125rem] rounded-[1.25rem]
                        ${
                          isMain
                            ? " text-[10px] xs:text-[16px] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.4rem] xl:text-[2rem]"
                            : " text-[10px] xs:text-[16px]  sm:text-[0.8rem] md:text-[1.2rem] lg:text-[1rem] xl:text-[1.5rem]"
                        }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3
                  className={`font-bold ${
                    isMain
                      ? " text-[10px] xs:text-[14px] sm:text-[1.7rem] md:text-[2rem] lg:text-[1.8rem] xl:text-[3rem] w-[23.6875rem]"
                      : " text-[10px] xs:text-[14px] sm:text-[1.2rem] md:text-[1.5rem] lg:text-[1.6rem] xl:text-[2.25rem] w-[90%]"
                  }`}
                >
                  {card.title}
                </h3>

                <div className="flex-grow"></div>

                <p
                  className={`text-gray-300 mt-4 ${
                    isMain
                      ? " sm:text-[1.5rem] md:text-[1.4rem] lg:text-[1.5rem] xl:text-[2rem] w-[98%]"
                      : "text-[10px] xsplus:text-[1rem] sm:text-[1rem] md:text-[1.4rem] lg:text-[1.4rem] xl:text-[1.5rem] w-[99%] font-normal"
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

export default MediumCarousel;
