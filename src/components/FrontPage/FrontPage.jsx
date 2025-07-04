import React, { useEffect, useRef, useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import Home from "../../pages/Home";
import gsap from "gsap";
import Navbar from "../Navbar/Navbar";
import { useFrontPageReveal } from "../../context/FrontPageContext";

function FrontPage() {
  const [coords, setCoords] = useState({ x: -9999, y: -9999 });
  const [disableHoverMask, setDisableHoverMask] = useState(false);
  const [isExploreButtonClicked, setisExploreButtonClicked] = useState(false);
  const [clickCoords, setClickCoords] = useState({ x: 0, y: 0 });
  const maskRef = useRef(null);
  const containerRef = useRef(null);
  const { onFrontPage, setOnFrontPage } = useFrontPageReveal();

  // Hover mask movement
  useEffect(() => {
    const updateMask = (e) => {
      if (!isExploreButtonClicked) {
        setCoords({ x: e.clientX, y: e.clientY });
      }
    };
    window.addEventListener("mousemove", updateMask);
    return () => window.removeEventListener("mousemove", updateMask);
  }, [isExploreButtonClicked]);

  // Animate circular reveal
  useEffect(() => {
    if (isExploreButtonClicked && maskRef.current) {
      gsap.to(maskRef.current, {
        "--mask-radius": `${window.innerWidth * 1.5}px`,
        duration: 1,
        ease: "power2.out",
      });
      setTimeout(() => {
        maskRef.current.style.display = "none";
        setOnFrontPage(false);
      }, 300);
    }
  }, [isExploreButtonClicked]);

  const handleExploreClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = rect.left + rect.width / 2;
    const clickY = rect.top + rect.height / 2;
    setClickCoords({ x: clickX, y: clickY });
    setisExploreButtonClicked(true);
  };

  // Mask style
  const maskStyle = isExploreButtonClicked
    ? {
        "--mask-x": `${clickCoords.x}px`,
        "--mask-y": `${clickCoords.y}px`,
        "--mask-radius": "80px", // initial radius, animated via GSAP
      }
    : !disableHoverMask
    ? {
        "--mask-x": `${coords.x}px`,
        "--mask-y": `${coords.y}px`,
        "--mask-radius": "80px",
      }
    : {};

  const maskEffect = {
    WebkitMaskImage: `radial-gradient(circle var(--mask-radius) at var(--mask-x) var(--mask-y), transparent 0, black 100%)`,
    maskImage: `radial-gradient(circle var(--mask-radius) at var(--mask-x) var(--mask-y), transparent 0, black 100%)`,
    WebkitMaskMode: "alpha",
    maskMode: "alpha",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskSize: "100% 100%",
    maskSize: "100% 100%",
    // pointerEvents: "none",
  };

  useEffect(() => {
    const el = containerRef.current;

    gsap.fromTo(
      el,
      {
        x: "-100%",
        opacity: 0,
      },
      {
        x: "0%",
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div
      className={`${
        !onFrontPage || isExploreButtonClicked ? "h-full":"h-[100vh]"
      } overflow-hidden relative`}
    >
      <div
        ref={maskRef}
        className={`absolute z-20 w-full h-full ${
          !onFrontPage ? "hidden" : ""
        }`}
        style={{ ...maskStyle, ...maskEffect }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center front-page px-4 sm:px-6 md:px-8">
          <div
            className="flex flex-col items-center justify-center pointer-events-auto text-center"
            onMouseEnter={() => setDisableHoverMask(true)}
            onMouseLeave={() => setDisableHoverMask(false)}
          >
            <img
              src="assets/Kalvig Logo.svg"
              alt="Kalvig"
              className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64"
            />
            <h1
              className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold"
              style={{ fontSize: "var(--font-size-lg)" }}
            >
              WHERE IDEA MEETS EXECUTION
            </h1>
            <button
              className="flex items-center gap-2 rounded-full px-4 py-2 mt-11 transition-all duration-200 hover:shadow-[0_0_30px_5px_#2098E3]"
              style={{
                background: "var(--color-blue)",
                fontSize: "var(--font-size-md)",
              }}
              onClick={handleExploreClick}
            >
              <span>EXPLORE</span>
              <BiSolidRightArrow />
            </button>
          </div>
        </div>
      </div>

      {(isExploreButtonClicked || !onFrontPage) && (
        <Navbar onFrontPage={onFrontPage} setOnFrontPage={setOnFrontPage} />
      )}

      <div ref={containerRef} className="relative w-full min-h-screen">
        <Home className="absolute z-10 w-full h-full" />
      </div>
    </div>
  );
}

export default FrontPage;
