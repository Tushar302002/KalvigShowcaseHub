import React, { useState } from 'react'
import CarouselHeader from '../Carousel/CarouselHeader';
import MediumCarousel from '../Carousel/MediumCarousel';
import CarouselIndicators from '../Carousel/CarouselIndicators';

function Three3Ddev() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cards = [
    {
      id: 1,
      tags: ["DEVELOPMENT", "3D"],
      title: "Wireframes Kit for Startups",
      description: "Quick-start wireframe pack for new teams.",
      image: "/assets/wireframes.jpg",
    },
    {
      id: 2,
      tags: ["DEVELOPMENT", "3D"],
      title: "Flow UI Blueprint",
      description: "Modular UI screens for prototyping",
      image: "/assets/blueprints.png",
    },
    {
      id: 3,
      tags: ["DEVELOPMENT", "3D"],
      title: "Nova UX Patterns",
      description: "Modern design components for SaaS dashboard.",
      image: "/assets/Ux.png",
    },
    {
      id: 4,
      tags: ["DEVELOPMENT", "3D"],
      title: "Payment Gateway API",
      description: "Secure payment processing integration",
      image: "/assets/lipstic.png",
    },
  ];

  const carouselTitle = [
    { color: "white", name: "3D " },
    { color: "blue", name: "DEVELOPMENT " }
  ]

  // Work section handlers
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
      <MediumCarousel activeIndex={activeIndex} setActiveIndex={setActiveIndex} cards={cards} mainCardIndex={0}/>

      {/* Indicators */}
      <CarouselIndicators activeIndex={activeIndex} setActiveIndex={setActiveIndex} cards={cards} />
    </section>
  )
}

export default Three3Ddev