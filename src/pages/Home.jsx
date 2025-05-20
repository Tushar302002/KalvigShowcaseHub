import React, { useState } from "react";

function Home() {
  const [workActiveIndex, setWorkActiveIndex] = useState(0);
  const [designActiveIndex, setDesignActiveIndex] = useState(0);
  const [caseIndex, setCaseIndex] = useState(0);

  const workcards = [
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

  const Designcards = [
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

  const caseStudies = [
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

  // Work section handlers
  const handleWorkNext = () => {
    setWorkActiveIndex((prev) =>
      prev === workcards.length - 1 ? 0 : prev + 1
    );
  };

  const handleWorkPrev = () => {
    setWorkActiveIndex((prev) =>
      prev === 0 ? workcards.length - 1 : prev - 1
    );
  };

  // Design section handlers
  const handleDesignNext = () => {
    setDesignActiveIndex((prev) =>
      prev === Designcards.length - 1 ? 0 : prev + 1
    );
  };

  const handleDesignPrev = () => {
    setDesignActiveIndex((prev) =>
      prev === 0 ? Designcards.length - 1 : prev - 1
    );
  };

  // Get visible cards for work section
  const getVisibleWorkCards = () => {
    const prevIndex =
      workActiveIndex === 0 ? workcards.length - 1 : workActiveIndex - 1;
    const nextIndex =
      workActiveIndex === workcards.length - 1 ? 0 : workActiveIndex + 1;
    return [
      workcards[prevIndex],
      workcards[workActiveIndex],
      workcards[nextIndex],
    ];
  };

  // Get visible cards for design section
  const getVisibleDesignCards = () => {
    const prevIndex =
      designActiveIndex === 0 ? Designcards.length - 1 : designActiveIndex - 1;
    const nextIndex =
      designActiveIndex === Designcards.length - 1 ? 0 : designActiveIndex + 1;
    return [
      Designcards[prevIndex],
      Designcards[designActiveIndex],
      Designcards[nextIndex],
    ];
  };

  const visibleWorkCards = getVisibleWorkCards();
  const visibleDesignCards = getVisibleDesignCards();

  const handleNext = () => {
    if (caseIndex < caseStudies.length - 4) {
      setCaseIndex(caseIndex + 1);
    }
  };

  const handlePrev = () => {
    if (caseIndex > 0) {
      setCaseIndex(caseIndex - 1);
    }
  };

  return (
    <div>
      {/* WORK SECTION */}
      <section className="px-6 py-10 text-white">
        {/* Top title + arrows */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-[36px] font-semibold">
            TOP WORK <span className="text-blue-700">THIS MONTH</span>
          </p>
          <div className="flex gap-2 text-white">
            <button
              className="w-[70px] h-[70px] bg-neutral-50 hover:bg-gray-600 border rounded-full flex items-center justify-center"
              onClick={handleWorkPrev}
            >
              <img src="/assets/leftarrow.svg" alt="Left Arrow" />
            </button>
            <button
              className="w-[70px] h-[70px] bg-neutral-50 hover:bg-gray-600 border rounded-full flex items-center justify-center"
              onClick={handleWorkNext}
            >
              <img src="/assets/rightarrow.svg" alt="Right Arrow" />
            </button>
          </div>
        </div>

        {/* Cards Container */}
        <div className="flex items-center justify-center gap-2">
          {/* Active Card (large) */}
          <div className="w-[923px] h-[549px] rounded-[25px] overflow-hidden transition-all duration-300 border-[1px] ">
            <div className="relative h-full p-6 rounded-[25px]">
              <img
                src={visibleWorkCards[1].image}
                alt={visibleWorkCards[1].title}
                className="absolute inset-0 w-full h-full object-cover opacity-50 rounded-[25px] "
              />
              <div className="relative z-10 flex flex-col justify-end">
                <div className="flex gap-2 mb-4">
                  {visibleWorkCards[1].tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[32px] font-bold bg-blue-600 text-white px-2 py-0.5 rounded-[20px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-[48px] font-bold w-[379px]">
                  {visibleWorkCards[1].title}
                </h3>
                <p className="text-gray-300 text-[32px] w-[379px] mt-[130px]">
                  {visibleWorkCards[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Next Card (small) */}
          <div
            className="w-[411px] h-[549px] rounded-[20px] overflow-hidden transition-all duration-300 cursor-pointer hover:scale-105 border-[1px]"
            onClick={handleWorkNext}
          >
            <div className="relative h-full p-4 ">
              <img
                src={visibleWorkCards[2].image}
                alt={visibleWorkCards[2].title}
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="relative z-10 flex flex-col justify-end">
                <div className="flex gap-2 mb-2">
                  {visibleWorkCards[2].tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[24px] bg-blue-600 text-white px-2 py-0.5 rounded-[20px] font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-bold text-[36px] w-[300px] mt-8">
                  {visibleWorkCards[2].title}
                </h3>
                <p className="text-gray-300 text-[24px] font-normal w-[252px] mt-[130px]">
                  {visibleWorkCards[2].description}
                </p>
              </div>
            </div>
          </div>
          {/* Previous Card (small) */}
          <div
            className="w-[411px] h-[549px] rounded-[20px] border-[1px] overflow-hidden transition-all duration-300 cursor-pointer hover:scale-105"
            onClick={handleWorkPrev}
          >
            <div className="relative h-full p-4">
              <img
                src={visibleWorkCards[0].image}
                alt={visibleWorkCards[0].title}
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="relative z-10 flex flex-col justify-end">
                <div className="flex gap-2 mb-2">
                  {visibleWorkCards[0].tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[24px] bg-blue-600 text-white px-2 py-0.5 rounded-[20px] font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-bold text-[36px] w-[300px] mt-8">
                  {visibleWorkCards[0].title}
                </h3>
                <p className="text-gray-300 text-[24px] font-normal w-[252px] mt-[130px]">
                  {visibleWorkCards[0].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {workcards.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === workActiveIndex ? "bg-blue-500" : "bg-gray-600"
              }`}
              onClick={() => setWorkActiveIndex(index)}
            />
          ))}
        </div>
      </section>

      <div className="flex items-center justify-center ">
        <div className="w-[45%] h-px bg-gray-200" />
        <div className="w-[2%]" /> {/* Empty space in center */}
        <div className="w-[45%] h-px bg-gray-200" />
      </div>

      {/* DESIGN SECTION */}
      <section className="px-6 py-6 text-white">
        <div className="flex justify-between items-center mb-4">
          <p className="text-[36px] font-semibold">
            DESIGN <span className="text-blue-700">SHOWCASE</span>
          </p>
          <div className="flex gap-2 text-white">
            <button
              className="w-[70px] h-[70px] bg-neutral-50 hover:bg-gray-600 border rounded-full flex items-center justify-center"
              onClick={handleDesignPrev}
            >
              <img src="/assets/leftarrow.svg" alt="Left Arrow" />
            </button>
            <button
              className="w-[70px] h-[70px] bg-neutral-50 hover:bg-gray-600 border rounded-full flex items-center justify-center"
              onClick={handleDesignNext}
            >
              <img src="/assets/rightarrow.svg" alt="Right Arrow" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          {/* Previous Card (small) */}
          <div
            className="w-[500px] h-[402px] rounded-[20px] overflow-hidden transition-all duration-300 cursor-pointer hover:scale-105 border-[1px]"
            onClick={handleDesignPrev}
          >
            <div className="relative h-full p-4 ">
              <img
                src={visibleDesignCards[0].image}
                alt={visibleDesignCards[0].title}
                className="absolute inset-0 w-full h-full object-cover object-center opacity-50 "
              />
              <div className="relative z-10 flex flex-col justify-end">
                <div className="flex gap-2 mb-2">
                  {visibleDesignCards[0].tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[24px] bg-blue-600 text-white px-2 py-0.5 rounded-[20px] font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-bold text-[36px] w-[300px] mt-8">
                  {visibleDesignCards[0].title}
                </h3>
                <p className="text-gray-300 text-[32px] w-[379px] mt-[70px]">
                  {visibleDesignCards[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Active Card (large) */}
          <div className="w-[650px] h-[402px] rounded-[25px] overflow-hidden transition-all duration-300 border-[1px]">
            <div className="relative h-full p-6 rounded-[25px]">
              <img
                src={visibleDesignCards[1].image}
                alt={visibleDesignCards[1].title}
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="relative z-10 flex flex-col justify-end">
                <div className="flex gap-2 mb-4">
                  {visibleDesignCards[1].tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[32px] font-bold bg-blue-600 text-white px-2 py-0.5 rounded-[20px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-[48px] font-bold w-[379px]">
                  {visibleDesignCards[1].title}
                </h3>
                <p className="text-gray-300 text-[32px] w-[400px] mt-[37px]">
                  {visibleDesignCards[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Next Card (small) */}
          <div
            className="w-[500px] h-[402px] rounded-[20px] overflow-hidden transition-all duration-300 cursor-pointer hover:scale-105 border-[1px]"
            onClick={handleDesignNext}
          >
            <div className="relative h-full p-4">
              <img
                src={visibleDesignCards[2].image}
                alt={visibleDesignCards[2].title}
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="relative z-10 flex flex-col justify-end">
                <div className="flex gap-2 mb-2">
                  {visibleDesignCards[2].tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[24px] bg-blue-600 text-white px-2 py-0.5 rounded-[20px] font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-bold text-[36px] w-[300px] mt-8">
                  {visibleDesignCards[2].title}
                </h3>
                <p className="text-gray-300 text-[32px] w-[400px] ">
                  {visibleDesignCards[2].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {Designcards.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === designActiveIndex ? "bg-blue-500" : "bg-gray-600"
              }`}
              onClick={() => setDesignActiveIndex(index)}
            />
          ))}
        </div>
      </section>

      <hr className="w-3/4 mx-auto border-t-[1px] border-gray-600 " />
      
      {/* CASE STUDY SECTION */}
      <section className="px-6 py-6 text-white ">
        <div className="flex justify-between items-center mb-3 ">
          <h2 className="text-[32px] font-semibold">
            CASE <span className="text-blue-600">STUDIES</span>
          </h2>
          <div className="flex gap-2 text-white">
            <button
              className="w-[70px] h-[70px] bg-neutral-50 hover:bg-gray-600 border rounded-full flex items-center justify-center"
              onClick={handlePrev}
            >
              <img src="/assets/leftarrow.svg" alt="Left Arrow" />
            </button>
            <button
              className="w-[70px] h-[70px] bg-neutral-50 hover:bg-gray-600 border rounded-full flex items-center justify-center"
              onClick={handleNext}
            >
              <img src="/assets/rightarrow.svg" alt="Right Arrow" />
            </button>
          </div>
        </div>
        <div className="flex gap-4 overflow-hidden transition-all duration-300 ">
          {caseStudies
            .slice(caseIndex, caseIndex + 4)
            .map((caseStudy, index) => (
              <div
                key={index}
                className="min-w-[300px] h-[321px] rounded-[20px] overflow-hidden relative bg-black  border-[1px]"
              >
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <div className="mt-3">
                    <span className="bg-blue-600 text-white text-[24px] font-bold px-3 py-1 rounded-full">
                      CASE STUDY
                    </span>
                    <h3 className="text-xl font-bold mt-4 w-[261px]">
                      {caseStudy.title}
                    </h3>
                  </div>
                  <p className="text-gray-200 text-[20px]">
                    {caseStudy.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
