import React, { useState } from 'react'
import CarouselHeader from '../Carousel/CarouselHeader';
import MediumCarousel from '../Carousel/MediumCarousel';
import CarouselIndicators from '../Carousel/CarouselIndicators';
import useCarousel from '../../hooks/useCarousel';

function UI_UX() {
  const cards = [
    {
      id: 1,
      tags: ["DESIGN", "UI/UX"],
      title: "Wireframes Kit for Startups",
      description: "Quick-start wireframe pack for new teams.",
      image: "/assets/wireframes.jpg",
    },
    {
      id: 2,
      tags: ["DESIGN", "UI/UX"],
      title: "Flow UI Blueprint",
      description: "Modular UI screens for prototyping",
      image: "/assets/blueprints.png",
    },
    {
      id: 3,
      tags: ["DESIGN", "UI/UX"],
      title: "Nova UX Patterns",
      description: "Modern design components for SaaS dashboard.",
      image: "/assets/Ux.png",
    },
    {
      id: 4,
      tags: ["DESIGN", "UI/UX"],
      title: "Payment Gateway API",
      description: "Secure payment processing integration",
      image: "/assets/lipstic.png",
    },
  ];

  const carouselTitle = [
    { color: "white", name: "UI/" },
    { color: "blue", name: "UX" }
  ]

  const { activeIndex, setActiveIndex, handleNext, handlePrev } = useCarousel(cards.length);

  return (
    <section className="px-6 py-6 text-white">
      {/* Top title + arrows */}
      <CarouselHeader handlePrev={handlePrev} handleNext={handleNext} carouselTitle={carouselTitle} />

      {/* Cards Container */}
      <MediumCarousel activeIndex={activeIndex} setActiveIndex={setActiveIndex} cards={cards} mainCardIndex={0} />

      {/* Indicators */}
      <CarouselIndicators activeIndex={activeIndex} setActiveIndex={setActiveIndex} cards={cards} />
    </section>
  )
}

export default UI_UX