import React from 'react'

function SmallCarousel({activeIndex,cards}) {
  return (
    <div className="flex gap-4 overflow-hidden transition-all duration-300 ">
    {cards
      .slice(activeIndex, activeIndex + 4)
      .map((card, index) => (
        <div
          key={index}
          className="min-w-[300px] h-[321px] rounded-[20px] overflow-hidden relative bg-black  border-[1px]"
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 p-4 flex flex-col justify-between">
            <div className="mt-3">
              <span className="bg-blue-600 text-white text-[24px] font-bold px-3 py-1 rounded-full">
                CASE STUDY
              </span>
              <h3 className="text-xl font-bold mt-4 w-[261px]">
                {card.title}
              </h3>
            </div>
            <p className="text-gray-200 text-[20px]">
              {card.description}
            </p>
          </div>
        </div>
      ))}
  </div>
  )
}

export default SmallCarousel