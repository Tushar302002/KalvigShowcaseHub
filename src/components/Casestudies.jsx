import { useState } from "react";

function caseStudies() {
  const [caseIndex, setCaseIndex] = useState(0);


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

export default caseStudies;
