import React from 'react'

function CarouselHeader({handlePrev,handleNext,carouselTitle}) {
  return (
    <div className="flex justify-between items-center  mb-4">
    <p className=" sm:text-[18.83px] md:text-[1.3rem] lg:text-[36px] font-semibold">
      {carouselTitle.map((word,index)=>(
        <span key={index} className={`${word.color=="blue"?"text-[#2098E3] ":""}`}>{word.name}</span>
      ))}
    </p>
    <div className="flex gap-2 text-white">
      <button
        className="w-[26.88px] h-[26.88px] md:w-[36.25px] md:h-[36.25px]  lg:w-[70px] lg:h-[70px] bg-neutral-50 hover:bg-gray-600 border rounded-full flex items-center justify-center"
        onClick={handlePrev}
      >
        <img src="/assets/leftarrow.svg" alt="Left Arrow" />
      </button>
      <button
        className= "w-[26.88px] h-[26.88px] md:w-[36.25px] md:h-[36.25px]  lg:w-[70px] lg:h-[70px] bg-neutral-50 hover:bg-gray-600 border rounded-full flex items-center justify-center"
        onClick={handleNext}
      >
        <img src="/assets/rightarrow.svg" alt="Right Arrow" />
      </button>
    </div>
  </div>
  )
}

export default CarouselHeader