import React from 'react'

function CarouselIndicators({activeIndex,setActiveIndex,cards}) {
    return (
        <div className="flex justify-center gap-2 mt-6">
            {cards.map((_, index) => (
                <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${index === activeIndex ? "bg-blue-500" : "bg-gray-600"
                        }`}
                    onClick={() => setActiveIndex(index)}
                />
            ))}
        </div>
    )
}

export default CarouselIndicators