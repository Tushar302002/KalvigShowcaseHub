import React from 'react'

function MediumCarousel({ activeIndex, setActiveIndex, cards , mainCardIndex }) {
    return (
        <div className="flex items-center justify-center gap-2">
            {[0, 1, 2].map((offset) => {
                const cardIndex = (activeIndex + offset) % cards.length;
                const card = cards[cardIndex];
                const isMain = offset === mainCardIndex;

                return (
                    <div
                        key={card.id}
                        onClick={() => !isMain && setActiveIndex(cardIndex)}
                        className={` h-[402px]  overflow-hidden transition-all duration-300 border-[1px] ${isMain ? "w-[650px] rounded-[25px]" : "w-[500px] rounded-[20px] cursor-pointer hover:scale-105"}`}
                    >
                        <div className={`relative h-full ${isMain ? "p-6 rounded-[25px]" : "p-4"}`}>
                            <img
                                src={card.image}
                                className={`absolute inset-0 w-full h-full opacity-50 ${isMain ? "object-center" : "object-cover"}`} />
                            <div className="relative z-10 flex flex-col justify-end">
                                <div className={`flex gap-2 ${isMain ? "mb-4" : "mb-2"}`}>
                                    {card.tags?.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className={`font-bold bg-blue-600 text-white px-2 py-0.5 rounded-[20px] ${isMain ? "text-[32px]" : "text-[24px]"}`}>{tag}</span>
                                    ))}
                                </div>
                                <h3 className={`font-bold ${isMain ? "text-[48px] w-[379px]" : "text-[36px] w-[300px] mt-8"}`}>{card.title}</h3>
                                <p className={`text-gray-300 text-[32px] ${isMain ? "w-[400px] mt-[37px]" : "w-[379px] mt-[70px]"}`}>{card.description}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default MediumCarousel