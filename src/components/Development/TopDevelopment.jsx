import React, { useState } from 'react'
import CarouselHeader from '../Carousel/CarouselHeader';
import BigCarousel from '../Carousel/BigCarousel';
import CarouselIndicators from '../Carousel/CarouselIndicators';

function TopDevelopment() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cards = [
    {
      id: 1,
      tags: ["DEVELOPMENT", "WEB"],
      title: "Flow UI Blueprint",
      description: "Modular UI screens for prototyping",
      image: "/assets/blueprints.png",
    },
    {
      id: 2,
      tags: ["DEVELOPMENT", "APP"],
      title: "8 Responsive UI Kit Updates",
      description: "UI Kit upgrades with mobile-first layouts.",
      image: "/assets/ui1.png",
    },
    {
      id: 3,
      tags: ["DEVELOPMENT", "APP"],
      title: "Kayening Web App UI",
      description: "Streamlined interface for Kayening's online platform.",
      image: "/assets/ui2.png",
    },
  ];

  const carouselTitle = [
    { color: "white", name: "TOP " },
    { color: "blue", name: "DEVLOPMENT " },
    { color: "white", name: "WORK " },
    { color: "blue", name: "THIS " },
    { color: "blue", name: "MONTH " },
  ]

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === cards.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? cards.length - 1 : prev - 1
    );
  };
  return (
    <section className="px-6 py-6 text-white">
      {/* Top title + arrows */}
      <CarouselHeader handlePrev={handlePrev} handleNext={handleNext} carouselTitle={carouselTitle} />

      {/* Cards Container */}
      <BigCarousel activeIndex={activeIndex} setActiveIndex={setActiveIndex} cards={cards} />

      {/* Indicators */}
      <CarouselIndicators activeIndex={activeIndex} setActiveIndex={setActiveIndex} cards={cards} />
    </section>
  )
}

export default TopDevelopment