import React, { useState } from 'react'
import CarouselHeader from '../Carousel/CarouselHeader';
import MediumCarousel from '../Carousel/MediumCarousel';
import CarouselIndicators from '../Carousel/CarouselIndicators';
import useCarousel from '../../hooks/useCarousel';

function Three3danimation() {
  const cards = [
    {
      id: 1,
      tags: ["3D ANIMATIONS"],
      title: "Wireframes Kit for Startups",
      description: "Quick-start wireframe pack for new teams.",
      image: "/assets/wireframes.jpg",
    },
    {
      id: 2,
      tags: ["3D ANIMATIONS"],
      title: "Flow UI Blueprint",
      description: "Modular UI screens for prototyping",
      image: "/assets/blueprints.png",
    },
    {
      id: 3,
      tags: ["3D ANIMATIONS"],
      title: "Nova UX Patterns",
      description: "Modern design components for SaaS dashboards",
      image: "/assets/Ux.png",
    },
    {
      id: 4,
      tags: ["3D ANIMATIONS"],
      title: "Flow UI Blueprint",
      description: "Modular UI screens for prototyping",
      image: "/assets/blueprints.png",
    },
  ];

  const carouselTitle = [
    { color: "white", name: "3D " },
    { color: "blue", name: "ANIMATION " }
  ]


  const { activeIndex, setActiveIndex, handleNext, handlePrev } = useCarousel(cards.length);

  return (
    <section className="px-6 py-6 text-white">
      {/* Top title + arrows */}
      <CarouselHeader handlePrev={handlePrev} handleNext={handleNext} carouselTitle={carouselTitle} />

      {/* Cards Container */}
      <MediumCarousel activeIndex={activeIndex} setActiveIndex={setActiveIndex} cards={cards} mainCardIndex={2} />

      {/* Indicators */}
      <CarouselIndicators activeIndex={activeIndex} setActiveIndex={setActiveIndex} cards={cards} />
    </section>
  )
}

export default Three3danimation