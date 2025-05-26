import React, { act, useState } from 'react'
import CarouselHeader from '../Carousel/CarouselHeader';
import SmallCarousel from '../Carousel/SmallCarousel';
import useCarousel from '../../hooks/useCarousel';

function CaseStudies() {
  const cards = [
    {
      title: "Royal Enfield’s Scram 411 3D Guide0",
      description: "Immersive 3D tool for discovering bike features.",
      image: "/assets/RE1.png",
    },
    {
      title: "Royal Enfield’s Hunter 350 3D Guide1",
      description: "Immersive 3D tool for discovering bike features.",
      image: "/assets/re2.png",
    },
    {
      title: "Royal Enfield’s Scram 411 3D Guide2",
      description: "Immersive 3D tool for discovering bike features.",
      image: "/assets/RE1.png",
    },
    {
      title: "Royal Enfield’s Hunter 350 3D Guide3",
      description: "Immersive 3D tool for discovering bike features.",
      image: "/assets/re2.png",
    },
    {
      title: "Royal Enfield’s Bullet 3D Viewer4",
      description: "Detailed walkaround viewer with labeled hotspots.",
      image: "/assets/RE1.png",
    },
  ];
  const carouselTitle = [
    { color: "white", name: "CASE " },
    { color: "blue", name: "STUDIES " }
  ]

  const { activeIndex, setActiveIndex, handleNext, handlePrev } = useCarousel(cards.length, false, 4);

  return (
    <section className="px-6 py-6 text-white ">
      {/* Top title + arrows */}
      <CarouselHeader handlePrev={handlePrev} handleNext={handleNext} carouselTitle={carouselTitle} />

      {/* Cards Container */}
      <SmallCarousel activeIndex={activeIndex} cards={cards} />
    </section>
  )
}

export default CaseStudies