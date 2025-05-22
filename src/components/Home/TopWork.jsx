import React, { useState } from 'react'
import CarouselHeader from '../Carousel/CarouselHeader';
import BigCarousel from '../Carousel/BigCarousel';
import CarouselIndicators from '../Carousel/CarouselIndicators';

function TopWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cards = [
    {
      id: 1,
      tags: ["3D", "INTERACTIVE"],
      title: "3D Product Demo",
      description: "Interactive 3D demo for new product rollouts",
      image: "/assets/lipstic.png",
    },
    {
      id: 2,
      tags: ["DESIGN", "UI/UX"],
      title: "8 Responsive UI Kit Updates",
      description: "UI Kit upgrades with mobile-first layouts.",
      image: "/assets/ui1.png",
    },
    {
      id: 3,
      tags: ["DESIGN", "UI/UX"],
      title: "Kayening Web App UI",
      description: "Streamlined interface for Kayening's online platform.",
      image: "/assets/ui2.png",
    },
    {
      id: 4,
      tags: ["DEVELOPMENT", "API"],
      title: "Payment Gateway API",
      description: "Secure payment processing integration",
      image: "/assets/lipstic.png",
    },
  ];
  const carouselTitle = [
    { color: "white", name: "TOP " },
    { color: "white", name: "WORK " },
    { color: "blue", name: "THIS " },
    { color: "blue", name: "MONTH " },
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
    <section className="px-6 py-10 text-white ">
      {/* Top title + arrows */}
      <CarouselHeader handlePrev={handlePrev} handleNext={handleNext} carouselTitle={carouselTitle} />

      {/* Cards Container */}
      <BigCarousel activeIndex={activeIndex} setActiveIndex={setActiveIndex} cards={cards} />

      {/* Indicators */}
      <CarouselIndicators activeIndex={activeIndex} setActiveIndex={setActiveIndex} cards={cards} />
    </section>
  )
}

export default TopWork