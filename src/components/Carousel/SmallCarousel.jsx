import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link, useLocation } from 'react-router-dom';

function SmallCarousel({ activeIndex, cards }) {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // mobile screens
  const isSmallScreen = useMediaQuery({ maxWidth: 1024 }); // sm and md

  // Show 2 cards on mobile, 3 on small screens, 4 on large screens
  const visibleCount = isMobile ? 2 : (isSmallScreen ? 3 : 4);
  const visibleCards = cards.slice(activeIndex, activeIndex + visibleCount);

  return (
    <div className="flex gap-4 justify-between overflow-hidden transition-all duration-300">
      {visibleCards.map((card, index) => (
        <div
          key={index}
          className={`
            ${isMobile ? 'w-[54%] h-[250px]' : 'sm:w-1/2 md:w-1/3 md:h-[15rem] lg:w-1/3 xl:w-1/4'}
            sm:h-[170.02px] lg:h-[15rem] xl:h-[20.0625rem] 
            rounded-[1.25rem] overflow-hidden relative bg-black border-[1px]
          `}
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover opacity-50"
          />
          <Link to={`/description`} className="block h-full">
          <div className="absolute inset-0 p-4 flex flex-col justify-start text-white">
            <div className="flex flex-col gap-3">
              <span className="bg-blue-600 text-white text-[10px] sm:text-[12.71px] lg:text-[1rem] xl:text-[1.25rem] font-bold px-[0.75rem] py-[0.25rem] rounded-full w-fit">
                CASE STUDY
              </span>
              <h3 className=" text-[13px] sm:text-[15.36px] lg:text-[1rem] xl:text-[1.5rem] font-bold w-[99%]">
                {card.title}
              </h3>
            </div>

            <div className="flex-grow" />

            <p className="text-gray-200 text-[10px] sm:text-[10.61px] lg:text-[1rem] xl:text-[1.125rem] leading-snug w-[100%]">
              {card.description}
            </p>
          </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default SmallCarousel;