// hooks/useCarousel.js
import { useState } from "react";

function useCarousel(totalItems, loop = true, visibleItems = 1) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) =>
      loop
        ? (prev + 1) % totalItems
        : Math.min(prev + 1, totalItems - visibleItems)
    );
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      loop
        ? (prev - 1 + totalItems) % totalItems
        : Math.max(prev - 1, 0)
    );
  };

  return {
    activeIndex,
    setActiveIndex,
    handleNext,
    handlePrev,
  };
}

export default useCarousel;
