import React from 'react'

function CarouselHeader({handlePrev,handleNext,carouselTitle}) {
  return (
    <div className="flex justify-between items-center mb-4">
    <p className="text-[36px] font-semibold">
      {carouselTitle.map((word,index)=>(
        <span key={index} className={`${word.color=="blue"?"text-blue-700":""}`}>{word.name}</span>
      ))}
    </p>
    <div className="flex gap-2 text-white">
      <button
        className="w-[70px] h-[70px] bg-neutral-50 hover:bg-gray-600 border rounded-full flex items-center justify-center"
        onClick={handlePrev}
      >
        <img src="/assets/leftarrow.svg" alt="Left Arrow" />
      </button>
      <button
        className="w-[70px] h-[70px] bg-neutral-50 hover:bg-gray-600 border rounded-full flex items-center justify-center"
        onClick={handleNext}
      >
        <img src="/assets/rightarrow.svg" alt="Right Arrow" />
      </button>
    </div>
  </div>
  )
}

export default CarouselHeader