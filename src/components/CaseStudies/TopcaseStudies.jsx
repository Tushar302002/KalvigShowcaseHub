import React, { useState } from 'react'
import CarouselHeader from '../Carousel/CarouselHeader';
import BigCarousel from '../Carousel/BigCarousel';
import CarouselIndicators from '../Carousel/CarouselIndicators';
import useCarousel from '../../hooks/useCarousel';

function TopcaseStudies() {
  const cards = [
    {
      id: 1,
      tags: ["CASE STUDY"],
      title: "Flow UI Blueprint",
      description: "Modular UI screens for prototyping",
      image: "/assets/blueprints.png",
    },
    {
      id: 2,
      tags: ["CASE STUDY"],
      title: "8 Responsive UI Kit Updates",
      description: "UI Kit upgrades with mobile-first layouts.",
      image: "/assets/ui1.png",
    },
    {
      id: 3,
      tags: ["CASE STUDY"],
      title: "Kayening Web App UI",
      description: "Streamlined interface for Kayening's online platform.",
      image: "/assets/ui2.png",
    },
  ];

  const carouselTitle = [
    { color: "white", name: "TOP " },
    { color: "blue", name: "CASE STIDIES THIS MONTH " },
  ]

  const { activeIndex, setActiveIndex, handleNext, handlePrev } = useCarousel(cards.length);

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

export default TopcaseStudies