// 1) ********plain front page without homepage******

// import React from 'react'
// import { BiSolidRightArrow } from "react-icons/bi";

// function FrontPage() {

//     return (
//             <div className='h-[100vh] w-full flex flex-col items-center justify-center absolute z-20 front-page'>
//                 <img src="assets/Kalvig Logo.svg" alt="Kalvig" />
//                 <h1 style={{ fontSize: "var(--font-size-lg)" }}>WHERE IDEA MEETS EXECUTION</h1>
//                 <button
//                     className='flex items-center gap-2 rounded-[50px] px-4 py-2 mt-11 transition-all duration-200 hover:shadow-[0_0_30px_5px_#2098E3] '
//                     style={{ background: "var(--color-blue)", fontSize: "var(--font-size-md)" }}>
//                     <span>EXPLORE</span>
//                     <BiSolidRightArrow />
//                 </button>
//             </div>
//     )
// }

// export default FrontPage



// 2) **********home page is behind the front page but there is no hover functionality********

// import React, { useEffect, useRef } from 'react'
// import { BiSolidRightArrow } from "react-icons/bi";
// import Home from '../pages/Home';

// function FrontPage() {

//     return (
//         <div className='h-[100vh] overflow-hidden'>
//             <div className='h-full w-full flex flex-col items-center justify-center absolute z-20 front-page'>
//                 <img src="assets/Kalvig Logo.svg" alt="Kalvig" />
//                 <h1 style={{ fontSize: "var(--font-size-lg)" }}>WHERE IDEA MEETS EXECUTION</h1>
//                 <button
//                     className='flex items-center gap-2 rounded-[50px] px-4 py-2 mt-11 transition-all duration-200 hover:shadow-[0_0_30px_5px_#2098E3] '
//                     style={{ background: "var(--color-blue)", fontSize: "var(--font-size-md)" }}>
//                     <span>EXPLORE</span>
//                     <BiSolidRightArrow />
//                 </button>
//             </div>
//             <Home className="absolute z-10" />
//         </div>
//     )
// }

// export default FrontPage





// 3) **********home page is behind the front page with the hover functionality but the hover is also working on the content********

// import React, { useEffect, useState } from 'react';
// import { BiSolidRightArrow } from "react-icons/bi";
// import Home from '../pages/Home';

// function FrontPage() {
//     const [coords, setCoords] = useState({ x: -9999, y: -9999 });

//     useEffect(() => {
//         const updateMask = (e) => {
//             const { clientX, clientY } = e;
//             setCoords({ x: clientX, y: clientY });
//         };

//         window.addEventListener("mousemove", updateMask);
//         return () => window.removeEventListener("mousemove", updateMask);
//     }, []);

//     // Create a circular transparent hole at cursor position
//     const maskStyle ={
//         WebkitMaskImage: `radial-gradient(circle 80px at ${coords.x}px ${coords.y}px, transparent 0px, black 100px)`,
//         maskImage: `radial-gradient(circle 80px at ${coords.x}px ${coords.y}px, transparent 0px, black 100px)`,
//         WebkitMaskMode: "alpha",
//         maskMode: "alpha",
//         WebkitMaskRepeat: "no-repeat",
//         maskRepeat: "no-repeat",
//         WebkitMaskSize: "100% 100%",
//         maskSize: "100% 100%",
//         pointerEvents: "none",
//     };

//     return (
//         <div className='h-[100vh] overflow-hidden relative'>

//             {/* Top layer (masked with circle) */}
//             <div className="absolute z-20 w-full h-full" style={ maskStyle}>
//                 <div className='w-full h-full flex flex-col items-center justify-center front-page'>
//                     <img src="assets/Kalvig Logo.svg" alt="Kalvig" />
//                     <h1 style={{ fontSize: "var(--font-size-lg)" }} >WHERE IDEA MEETS EXECUTION</h1>
//                     <button
//                         className='flex items-center gap-2 rounded-[50px] px-4 py-2 mt-11 transition-all duration-200 hover:shadow-[0_0_30px_5px_#2098E3]'
//                         style={{ background: "var(--color-blue)", fontSize: "var(--font-size-md)" }}
//                     >
//                         <span>EXPLORE</span>
//                         <BiSolidRightArrow />
//                     </button>
//                 </div>
//             </div>

//             {/* Bottom layer (revealed through circle) */}
//             <Home className="absolute z-10 w-full h-full" />
//         </div>
//     );
// }

// export default FrontPage;





// 4) **********home page is behind the front page with the hover functionality and the hover is not working on the content********



// import React, { useEffect, useState } from 'react';
// import { BiSolidRightArrow } from "react-icons/bi";
// import Home from '../pages/Home';

// function FrontPage() {
//     const [coords, setCoords] = useState({ x: -9999, y: -9999 });
//     const [disableMask, setDisableMask] = useState(false);

//     useEffect(() => {
//         const updateMask = (e) => {
//             const { clientX, clientY } = e;
//             setCoords({ x: clientX, y: clientY });
//         };

//         window.addEventListener("mousemove", updateMask);
//         return () => window.removeEventListener("mousemove", updateMask);
//     }, []);

//     // Create a circular transparent hole at cursor position
//     const maskStyle = !disableMask ? {
//         WebkitMaskImage: `radial-gradient(circle 80px at ${coords.x}px ${coords.y}px, transparent 0px, black 100px)`,
//         maskImage: `radial-gradient(circle 80px at ${coords.x}px ${coords.y}px, transparent 0px, black 100px)`,
//         WebkitMaskMode: "alpha",
//         maskMode: "alpha",
//         WebkitMaskRepeat: "no-repeat",
//         maskRepeat: "no-repeat",
//         WebkitMaskSize: "100% 100%",
//         maskSize: "100% 100%",
//         // pointerEvents: "none",
//     } : {};

//     return (
//         <div className='h-[100vh] overflow-hidden relative'>

//             {/* Top layer (masked with circle) */}
//             <div className="absolute z-20 w-full h-full" style={maskStyle}>
//                 <div className='w-full h-full flex flex-col items-center justify-center front-page'>
//                     <div className='flex flex-col items-center justify-center pointer-events-auto'
//                         onMouseMove={() => setDisableMask(true)} onMouseLeave={() => setDisableMask(false)}
//                     >
//                         <img src="assets/Kalvig Logo.svg" alt="Kalvig"
//                         />
//                         <h1 style={{ fontSize: "var(--font-size-lg)" }} >WHERE IDEA MEETS EXECUTION</h1>
//                         <button
//                             className='flex items-center gap-2 rounded-[50px] px-4 py-2 mt-11 transition-all duration-200 hover:shadow-[0_0_30px_5px_#2098E3]'
//                             style={{ background: "var(--color-blue)", fontSize: "var(--font-size-md)" }}
//                         >
//                             <span>EXPLORE</span>
//                             <BiSolidRightArrow />
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Bottom layer (revealed through circle) */}
//             <Home className="absolute z-10 w-full h-full" />
//         </div>
//     );
// }

// export default FrontPage;




// 5) **********home page is behind the front page with the hover functionalityt and the hover is not working on the content and there is click functionality on the button which shows the home page but this is intstantanious********


// import React, { useEffect, useState } from 'react';
// import { BiSolidRightArrow } from "react-icons/bi";
// import Home from '../pages/Home';

// function FrontPage() {
//     const [coords, setCoords] = useState({ x: -9999, y: -9999 });
//     const [disableMask, setDisableMask] = useState(false);
//     const [reveal, setReveal] = useState(false);
//     const [clickCoords, setClickCoords] = useState({ x: 0, y: 0 });

//     useEffect(() => {
//         const updateMask = (e) => {
//             if (!reveal) {
//                 setCoords({ x: e.clientX, y: e.clientY });
//             }
//         };

//         window.addEventListener("mousemove", updateMask);
//         return () => window.removeEventListener("mousemove", updateMask);
//     }, [reveal]);

//     // Style for expanding mask
//     const maskStyle = reveal
//         ? {
//               WebkitMaskImage: `radial-gradient(circle ${window.innerWidth * 1.5}px at ${clickCoords.x}px ${clickCoords.y}px, transparent 0px, black 100%)`,
//               maskImage: `radial-gradient(circle ${window.innerWidth * 1.5}px at ${clickCoords.x}px ${clickCoords.y}px, transparent 0px, black 100%)`,
//               WebkitMaskMode: "alpha",
//               maskMode: "alpha",
//               WebkitMaskRepeat: "no-repeat",
//               maskRepeat: "no-repeat",
//               WebkitMaskSize: "100% 100%",
//               maskSize: "100% 100%",
//               transition: "WebkitMaskImage 1s ease, maskImage 1s ease",
//           }
//         : !disableMask
//         ? {
//               WebkitMaskImage: `radial-gradient(circle 80px at ${coords.x}px ${coords.y}px, transparent 0px, black 100px)`,
//               maskImage: `radial-gradient(circle 80px at ${coords.x}px ${coords.y}px, transparent 0px, black 100px)`,
//               WebkitMaskMode: "alpha",
//               maskMode: "alpha",
//               WebkitMaskRepeat: "no-repeat",
//               maskRepeat: "no-repeat",
//               WebkitMaskSize: "100% 100%",
//               maskSize: "100% 100%",
//               transition: "WebkitMaskImage 0.3s ease, maskImage 0.3s ease",
//           }
//         : {};

//     const handleExploreClick = (e) => {
//         const rect = e.currentTarget.getBoundingClientRect();
//         const clickX = rect.left + rect.width / 2;
//         const clickY = rect.top + rect.height / 2;
//         setClickCoords({ x: clickX, y: clickY });
//         setReveal(true);
//     };

//     return (
//         <div className="h-[100vh] overflow-hidden relative">
//             {/* Top layer (masked with circle) */}
//             <div className={`absolute z-20 w-full h-full `} style={maskStyle}>
//                 <div className="w-full h-full flex flex-col items-center justify-center front-page">
//                     <div
//                         className="flex flex-col items-center justify-center pointer-events-auto"
//                         onMouseMove={() => setDisableMask(true)}
//                         onMouseLeave={() => setDisableMask(false)}
//                     >
//                         <img src="assets/Kalvig Logo.svg" alt="Kalvig" />
//                         <h1 style={{ fontSize: "var(--font-size-lg)" }}>WHERE IDEA MEETS EXECUTION</h1>
//                         <button
//                             className="flex items-center gap-2 rounded-[50px] px-4 py-2 mt-11 transition-all duration-200 hover:shadow-[0_0_30px_5px_#2098E3]"
//                             style={{ background: "var(--color-blue)", fontSize: "var(--font-size-md)" }}
//                             onClick={handleExploreClick}
//                         >
//                             <span>EXPLORE</span>
//                             <BiSolidRightArrow />
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Bottom layer (revealed through circle) */}
//             <Home className="absolute z-10 w-full h-full" />
//         </div>
//     );
// }

// export default FrontPage;




// 6) **********home page is behind the front page with the hover functionalityt and the hover is not working on the content and there is click functionality on the button which shows the home page and this is animated but the animation is not in circular fashion instead it is horizontal fashion********

import React, { useEffect, useRef, useState } from 'react';
import { BiSolidRightArrow } from "react-icons/bi";
import Home from '../pages/Home';
import gsap from 'gsap';
import Navbar from './Navbar';

function FrontPage({isFrontPageRevealed, setisFrontPageRevealed}) {
    const [coords, setCoords] = useState({ x: -9999, y: -9999 });
    const [disableHoverMask, setDisableHoverMask] = useState(false);
    const [reveal, setReveal] = useState(false);
    const [clickCoords, setClickCoords] = useState({ x: 0, y: 0 });
    const maskRef = useRef(null);

    // Hover mask movement
    useEffect(() => {
        const updateMask = (e) => {
            if (!reveal) {
                setCoords({ x: e.clientX, y: e.clientY });
            }
        };
        window.addEventListener("mousemove", updateMask);
        return () => window.removeEventListener("mousemove", updateMask);
    }, [reveal]);

    // Animate circular reveal
    useEffect(() => {
        if (reveal && maskRef.current) {
            gsap.to(maskRef.current, {
                '--mask-radius': `${window.innerWidth * 1.5}px`,
                duration: 1,
                ease: 'power2.out',
            });
            setTimeout(() => {
                maskRef.current.style.display="none";
                setisFrontPageRevealed(true)
            }, 300);
            
        }
    }, [reveal]);

    const handleExploreClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = rect.left + rect.width / 2;
        const clickY = rect.top + rect.height / 2;
        setClickCoords({ x: clickX, y: clickY });
        setReveal(true);
    };

    // Mask style
    const maskStyle = reveal
        ? {
              '--mask-x': `${clickCoords.x}px`,
              '--mask-y': `${clickCoords.y}px`,
              '--mask-radius': '80px', // initial radius, animated via GSAP
          }
        : !disableHoverMask
        ? {
              '--mask-x': `${coords.x}px`,
              '--mask-y': `${coords.y}px`,
              '--mask-radius': '80px',
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

    return (
        <div className={`${(isFrontPageRevealed || reveal)?"h-full":"h-[100vh]"} overflow-hidden relative`}>
            <div
                ref={maskRef}
                className={`absolute z-20 w-full h-full ${isFrontPageRevealed?"hidden":""}`}
                style={{ ...maskStyle, ...maskEffect }}
            >
                <div className="w-full h-full flex flex-col items-center justify-center front-page">
                    <div
                        className="flex flex-col items-center justify-center pointer-events-auto"
                        onMouseEnter={() => setDisableHoverMask(true)}
                        onMouseLeave={() => setDisableHoverMask(false)}
                    >
                        <img src="assets/Kalvig Logo.svg" alt="Kalvig" />
                        <h1 style={{ fontSize: "var(--font-size-lg)" }}>WHERE IDEA MEETS EXECUTION</h1>
                        <button
                            className="flex items-center gap-2 rounded-[50px] px-4 py-2 mt-11 transition-all duration-200 hover:shadow-[0_0_30px_5px_#2098E3]"
                            style={{ background: "var(--color-blue)", fontSize: "var(--font-size-md)" }}
                            onClick={handleExploreClick}
                        >
                            <span>EXPLORE</span>
                            <BiSolidRightArrow />
                        </button>
                    </div>
                </div>
            </div>
            {(reveal || isFrontPageRevealed) && <Navbar isFrontPageRevealed={isFrontPageRevealed} setisFrontPageRevealed={setisFrontPageRevealed}/>}
            <Home className="absolute z-10 w-full h-full" />
        </div>
    );
}

export default FrontPage;




// 7) now the animation is in circular fashion but the home page is not visible

// import React, { useEffect, useRef, useState } from 'react';
// import { BiSolidRightArrow } from "react-icons/bi";
// import Home from '../pages/Home';
// import gsap from 'gsap';

// function FrontPage() {
//     const [coords, setCoords] = useState({ x: -9999, y: -9999 });
//     const [disableHover, setDisableHover] = useState(false);
//     const [reveal, setReveal] = useState(false);
//     const [clickCoords, setClickCoords] = useState({ x: 0, y: 0 });

//     const overlayRef = useRef(null);

//     // Track cursor for hover mask
//     useEffect(() => {
//         const handleMove = (e) => {
//             if (!reveal) {
//                 setCoords({ x: e.clientX, y: e.clientY });
//             }
//         };
//         window.addEventListener('mousemove', handleMove);
//         return () => window.removeEventListener('mousemove', handleMove);
//     }, [reveal]);

//     // Reveal animation
//     useEffect(() => {
//         if (reveal && overlayRef.current) {
//             const maxRadius = Math.hypot(window.innerWidth, window.innerHeight);
//             gsap.fromTo(
//                 overlayRef.current,
//                 {
//                     clipPath: `circle(0px at ${clickCoords.x}px ${clickCoords.y}px)`,
//                 },
//                 {
//                     clipPath: `circle(${maxRadius}px at ${clickCoords.x}px ${clickCoords.y}px)`,
//                     duration: 1,
//                     ease: 'power2.out',
//                 }
//             );
//         }
//     }, [reveal, clickCoords]);

//     const handleClick = (e) => {
//         const rect = e.currentTarget.getBoundingClientRect();
//         const x = rect.left + rect.width / 2;
//         const y = rect.top + rect.height / 2;
//         setClickCoords({ x, y });
//         setReveal(true);
//     };

//     // Hover mask style
//     const hoverMaskStyle = !disableHover && !reveal
//         ? {
//               WebkitMaskImage: `radial-gradient(circle 80px at ${coords.x}px ${coords.y}px, transparent 0, black 100px)`,
//               maskImage: `radial-gradient(circle 80px at ${coords.x}px ${coords.y}px, transparent 0, black 100px)`,
//               WebkitMaskMode: 'alpha',
//               maskMode: 'alpha',
//               WebkitMaskRepeat: 'no-repeat',
//               maskRepeat: 'no-repeat',
//               WebkitMaskSize: '100% 100%',
//               maskSize: '100% 100%',
//           }
//         : {};

//     return (
//         <div className="h-screen overflow-hidden relative">

//             {/* Home in the background */}
//             <div className="absolute top-0 left-0 w-full h-full z-0">
//                 <Home />
//             </div>

//             {/* FrontPage content */}
//             <div
//                 className="absolute top-0 left-0 w-full h-full z-10"
//                 style={hoverMaskStyle}
//             >
//                 <div className="w-full h-full flex flex-col items-center justify-center front-page bg-white">
//                     <div
//                         className="flex flex-col items-center justify-center pointer-events-auto"
//                         onMouseEnter={() => setDisableHover(true)}
//                         onMouseLeave={() => setDisableHover(false)}
//                     >
//                         <img src="assets/Kalvig Logo.svg" alt="Kalvig" />
//                         <h1 style={{ fontSize: "var(--font-size-lg)" }}>
//                             WHERE IDEA MEETS EXECUTION
//                         </h1>
//                         <button
//                             className="flex items-center gap-2 rounded-[50px] px-4 py-2 mt-11 transition-all duration-200 hover:shadow-[0_0_30px_5px_#2098E3]"
//                             style={{ background: "var(--color-blue)", fontSize: "var(--font-size-md)" }}
//                             onClick={handleClick}
//                         >
//                             <span>EXPLORE</span>
//                             <BiSolidRightArrow />
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Circular overlay that reveals Home */}
//             <div
//                 ref={overlayRef}
//                 className="absolute top-0 left-0 w-full h-full z-20 bg-white pointer-events-none"
//                 style={{ clipPath: 'circle(0px at 0px 0px)' }}
//             />
//         </div>
//     );
// }

// export default FrontPage;


