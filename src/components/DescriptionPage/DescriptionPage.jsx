import React from "react";
import { useNavigate } from "react-router-dom";
function DescriptionPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {/* img container */}
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[500px] lg:h-[600px]">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/blueprints.png')" }}
        >
          {/* Button in top left corner */}
          <button
            onClick={() => navigate(-1)}
            className="absolute text-[14px] sm:text-[16px] md:text-[18px] lg:text-[28px] xl:text-[32px]  
                      font-semibold flex justify-center items-center 
                      w-[100px] sm:w-[120px] md:w-[140px] lg:w-[170px] 
                      py-2 sm:py-2.5 md:py-3 top-4 left-4 bg-[#2098E3] 
                      px-3 sm:px-4 rounded-[25px] shadow-md"
          >
            <img
              src="/assets/back.svg"
              alt="image"
              className="w-4 sm:w-5 md:w-6 lg:w-7"
            />
            &nbsp;Back
          </button>
        </div>
      </div>
      {/* About project */}
      <div className="flex flex-col justify-center">
        <div className="mb-12 text-center">
          <h1 className="text-[25px] mt-[4rem]  sm:text-[30px] md:text-[40px] lg:text-[60px] xl:text-[70px] font-bold sm:mt-[8rem] ">
            ABOUT THE PROJECT
          </h1>
        </div>
        {/* project content */}
        <div className="flex px-[2rem] sm:px-[7rem] xl:mt-[8rem] gap-6">
          <div className="flex flex-col w-1/2 gap-5 lg:gap-20">
            <div>
              <p className="text-[8px] sm:text-[13px] md:text-[15px] lg:text-[22px] xl:text-[28px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                finibus mattis sem eu cursus. Sed tristique sollicitudin
                suscipit. Nunc in velit non diam finibus semper at sit amet est.
                Vivamus sagittis, eros in finibus pharetra, mauris nulla
                ultrices nisi, eu pharetra tellus nulla vitae felis. Donec
                pellentesque semper metus in pulvinar.
              </p>
            </div>
            <div className="flex flex-col">
              {/* Heading - Left Aligned */}
              <div className="text-left">
                <h3 className=" text-[10px] sm:text-[15px] md:text-[18px] lg:text-[25px] xl:text-[35px] font-bold sm:mb-8 mb-4">
                  Driving the Development
                </h3>
              </div>

              {/* Cards Grid - Left Aligned */}
              <div className="flex gap-3 sm:gap-10 w-full">
                {/* Column 1 */}
                <div className="space-y-3 sm:space-y-6">
                  {/* Figma Card */}
                  <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[126px] lg:h-[140px]  flex flex-col p-4 bg-[#101111] rounded-[18px] shadow-md hover:shadow-lg transition-shadow border">
                    <div className="  h-[80%] sm:h-[70%] lg:h-[4.2rem] sm:w-full mb-3 flex items-center justify-center">
                      <img
                        src="/assets/icon-figma.svg"
                        alt="Figma"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="text-[6px] sm:text-[12px] md:text-[12px] lg:text-[21px] font-medium text-center">
                      Figma
                    </span>
                  </div>

                  {/* Three.js Card */}
                  <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]  md:w-[100px] md:h-[100px] lg:w-[126px] lg:h-[140px]  flex flex-col p-4 bg-[#101111] rounded-[18px] shadow-md hover:shadow-lg transition-shadow border">
                    <div className="h-[80%] sm:h-[70%] w-full mb-3 flex items-center justify-center">
                      <img
                        src="public/assets/devicon_threejs.svg"
                        alt="Three.js"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="text-[6px] sm:text-[12px] md:text-[12px] lg:text-[21px] font-medium text-center">
                      Three.js
                    </span>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-6">
                  {/* React.js Card */}
                  <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]  md:w-[100px] md:h-[100px] lg:w-[126px] lg:h-[140px]  flex flex-col p-4 bg-[#101111] rounded-[18px] shadow-md hover:shadow-lg transition-shadow border">
                    <div className="h-[80%] sm:h-[70%] w-full mb-3 flex items-center justify-center">
                      <img
                        src="public/assets/material-icon-theme_react.svg"
                        alt="React.js"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="text-[6px] sm:text-[12px] md:text-[12px]  xl:text-[21px] font-medium text-center">
                      React.js
                    </span>
                  </div>

                  {/* Empty Slot */}
                  <div className="p-4 opacity-0"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2  xl:h-[1060px]">
            <img
              src="public/assets/projectimg.png"
              alt=""
              className="h-[300px] sm:h-[500px] md:h-[600px] lg:h-[1000px] "
            />
          </div>
        </div>
      </div>
      {/* Process */}
      <div className="flex flex-col justify-center p-8">
        <div className="sm:mb-12 text-center">
          <h1 className=" text-[25px] sm:text-4xl md:text-[45px] lg:text-[60px] xl:text-[70px] font-bold mt-[5rem] sm:mt-[10rem]">
            THE PROCESS
          </h1>
        </div>
        <div class="w-full py-12 px-4 flex flex-row flex-nowrap justify-center gap-3 sm:gap-6 overflow-x-auto">
          <div class="flex flex-col items-center text-center">
            <div class=" w-[2rem] h-[2rem] sm:w-[4rem] sm:h-[4rem]  md:w-[4.9rem] md:h-[4.9rem] lg:w-[7rem] lg:h-[7rem] xl:w-[8rem] xl:h-[8rem] rounded-full bg-gradient-to-br from-blue-500 to-blue-800 flex items-center justify-center mb-3">
              <img
                src="/assets/searchicon.svg"
                alt="Research Icon"
                class="w-[70%] sm:w-[70%] md:w-[2.8rem] lg:w-[4rem] xl:w-[5rem]"
              />
            </div>
            <h3 class="text-white font-semibold text-[5px]  sm:text-[10px] md:text-[17.5px] lg:text-[25px] xl:text-[30px]">
              Research
            </h3>
            <p class="text-gray-400 text-[4px] sm:text-[8px] md:text-[11px] lg:text-sm">
              Gathering insights <br /> to define the problem.
            </p>
          </div>

          <div class="flex items-center">
            <img
              src="/assets/Arrow.svg"
              alt="arrow"
              class="w-[35px] sm:w-[8rem] md:w-[11rem] mdplus:w-[7rem] lg:w-[6rem] xl:w-[3rem]"
            />
          </div>

          <div class="flex flex-col items-center text-center max-w-[150px]">
            <div class="w-[2rem] h-[2rem] sm:w-[4rem] sm:h-[4rem]  md:w-[4.9rem] md:h-[4.9rem] lg:w-[7rem] lg:h-[7rem] xl:w-[8rem] xl:h-[8rem] rounded-full bg-gradient-to-br from-blue-500 to-blue-800 flex items-center justify-center mb-3">
              <img
                src="/assets/planningicon.svg"
                alt="Planning Icon"
                class="w-[70%] md:w-[2.8rem] lg:w-[4rem] xl:w-[5rem]"
              />
            </div>
            <h3 class="text-white font-semibold text-[5px] sm:text-[10px] md:text-[17.5px] lg:text-[25px] xl:text-[30px]">
              Planning
            </h3>
            <p class="text-gray-400 text-[4px] sm:text-[8px] md:text-[11px] lg:text-sm">
              Organizing insights into a structured approach.
            </p>
          </div>

          <div class="flex items-center">
            <img
              src="/assets/Arrow.svg"
              alt="arrow"
              class="w-[35px] sm:w-[8rem] md:w-[11rem] mdplus:w-[7rem] lg:w-[6rem] xl:w-[3rem]"
            />
          </div>

          <div class="flex flex-col items-center text-center max-w-[150px]">
            <div
              class="w-[2rem] h-[2rem] sm:w-[4rem] sm:h-[4rem]  md:w-[4.9rem] md:h-[4.9rem] lg:w-[7rem] lg:h-[7rem] 
            xl:w-[8rem] xl:h-[8rem] rounded-full bg-gradient-to-br from-blue-500
             to-blue-800 flex items-center justify-center mb-3"
            >
              <img
                src="/assets/ideationicon.svg"
                alt="Ideation Icon"
                class=" w-[70%] md:w-[2.8rem] lg:w-[4rem] xl:w-[5rem]"
              />
            </div>
            <h3 class="text-white font-semibold text-[5px] sm:text-[10px] md:text-[17.5px] lg:text-[25px] xl:text-[30px]">
              Ideation
            </h3>
            <p class="text-gray-400 text-[4px]  sm:text-[8px] md:text-[11px] lg:text-sm">
              Brainstorming creative solutions.
            </p>
          </div>

          <div class="flex items-center">
            <img
              src="/assets/Arrow.svg"
              alt="arrow"
              class="w-[35px] sm:w-[8rem] md:w-[11rem] mdplus:w-[7rem] lg:w-[6rem] xl:w-[3rem]"
            />
          </div>

          <div class="flex flex-col items-center text-center max-w-[150px]">
            <div class="w-[2rem] h-[2rem] sm:w-[4rem] sm:h-[4rem]  md:w-[4.9rem] md:h-[4.9rem] lg:w-[7rem] lg:h-[7rem] xl:w-[8rem] xl:h-[8rem] rounded-full bg-gradient-to-br from-blue-500 to-blue-800 flex items-center justify-center mb-3">
              <img
                src="/assets/exectionicon.svg"
                alt="Execution Icon"
                class="w-[70%] md:w-[2.8rem] lg:w-[4rem] xl:w-[5rem]"
              />
            </div>
            <h3 class="text-white font-semibold text-[5px] sm:text-[10px] md:text-[17.5px] lg:text-[25px] xl:text-[30px]">
              Execution
            </h3>
            <p class="text-gray-400 text-[4px]  sm:text-[8px] md:text-[11px] lg:text-sm">
              Transforming ideas into tangible results.
            </p>
          </div>

          <div class="flex items-center">
            <img
              src="/assets/Arrow.svg"
              alt="arrow"
              class="w-[35px] sm:w-[8rem] md:w-[11rem] mdplus:w-[7rem] lg:w-[6rem] xl:w-[3rem]"
            />
          </div>

          <div class="flex flex-col items-center text-center max-w-[150px]">
            <div class="w-[2rem] h-[2rem] sm:w-[4rem] sm:h-[4rem]  md:w-[4.9rem] md:h-[4.9rem] lg:w-[7rem] lg:h-[7rem] xl:w-[8rem] xl:h-[8rem] rounded-full bg-gradient-to-br from-blue-500 to-blue-800 flex items-center justify-center mb-3">
              <img
                src="/assets/feedbackicon.svg"
                alt="Feedback Icon"
                class="w-[70%] md:w-[2.8rem] lg:w-[4rem] xl:w-[5rem]"
              />
            </div>
            <h3 class="text-white font-semibold text-[5px] sm:text-[10px] md:text-[17.5px] lg:text-[25px] xl:text-[30px]">
              Feedback
            </h3>
            <p class="text-gray-400 text-[4px]  sm:text-[8px] md:text-[11px] lg:text-sm">
              Evaluating results to refine and improve the solution.
            </p>
          </div>
        </div>
      </div>
      {/*TimeLine  */}
      <div>
        <div className="sm:mb-12 text-center">
          <h1 className="text-[25px] sm:text-4xl  md:text-[45px] lg:text-[70px] font-bold sm:mt-[4rem] ">
            TIMELINE
          </h1>
        </div>
        <div class="flex justify-center items-center text-white p-8">
          <div class="text-center mx-4">
            <p class="text-gray-400 text-[6px] sm:text-[16px] md:text-[20px] lg:text-[25px] xl:text-[30px]">
              Duration
            </p>
            <p class="text-blue-500 text-[36px] sm:text-[70px] md:text-[120px] lg:text-[160px] xl:text-[150px] font-extrabold leading-none">
              5
            </p>
            <p class="text-gray-400 font-bold text-[7.5px] sm:text-[18px] md:text-[25px] lg:text-[30px] xl:text-[35px]">
              Weeks
            </p>
          </div>

          <div class="w-[2px] sm:w-1 bg-[#FFFFFF] h-20 sm:h-40 sm:mx-4"></div>

          <div class="text-center mx-8">
            <p class="text-gray-400 text-[6px] sm:text-[16px] md:text-[20px] lg:text-[25px] xl:text-[30px]">
              Start
            </p>
            <p class="text-blue-500 text-[36px] sm:text-[70px] md:text-[120px] lg:text-[160px] xl:text-[150px] font-extrabold leading-none">
              1st
            </p>
            <p class="text-gray-400 font-bold text-[7.5px] sm:text-[18px] md:text-[25px] lg:text-[30px] xl:text-[35px]">
              May 2025
            </p>
          </div>

          <div class="w-[2px] sm:w-1 bg-[#FFFFFF] h-20 sm:h-40 sm:mx-4"></div>

          <div class="text-center mx-4">
            <p class="text-gray-400 text-[6px] sm:text-[16px] md:text-[20px] lg:text-[25px] xl:text-[30px]">
              End
            </p>
            <p class="text-blue-500 text-[36px] sm:text-[70px] md:text-[120px] lg:text-[160px] xl:text-[150px] font-extrabold leading-none">
              5th
            </p>
            <p class="text-gray-400 font-bold text-[7.5px] sm:text-[18px] md:text-[25px] lg:text-[30px] xl:text-[35px]">
              June 2025
            </p>
          </div>
        </div>
        {/* timeline weekwise */}
        <div className="flex justify-center items-start p-8 mt-[2rem] md:mt-[6rem] text-white">
          <div className="relative w-full max-w-4xl">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

            {/* 4 Evenly Spaced Dots */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full flex flex-col justify-between items-center">
              <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
            </div>

            {/* Timeline Items */}
            <div className="  md:space-y-[5rem] lg:space-y-[4rem] xl:space-y-[7rem]">
              {/* Item 1 - Left */}
              <div className="flex justify-between items-start w-full ">
                <div className="w-1/2 pr-8 text-right">
                  {/* Icon Placeholder */}
                  <div className="flex justify-end mb-2">
                    <img
                      src="/assets/mingcute_search-fill.svg"
                      alt="searchcicon"
                      className="w-[45px] md:w-[50px] md:h-[50px] lg:w-[70px] lg:h-[70px]"
                    />
                  </div>
                  <p className="text-blue-400  md:text-[45px] lg:text-[55px] xl:text-[60px] font-bold mb-2">
                    Step 1
                  </p>
                  <ul className="list-none text-gray-300 space-y-1 text-[10px] md:text-[15px] lg:text-[1rem]">
                    <li>Research</li>
                    <li>Ideation</li>
                    <li>Wireframing</li>
                  </ul>
                </div>
                <div className="w-0"></div>
                <div className="w-1/2"></div>
              </div>

              {/* Item 2 - Right */}
              <div className="flex justify-between items-start w-full">
                <div className="w-1/2"></div>
                <div className="w-0"></div>
                <div className="w-1/2 pl-8 text-left">
                  {/* Icon Placeholder */}
                  <div className="flex justify-start mb-2 text-blue-400">
                    <img
                      className="text-blue-400 w-[45px] md:w-[50px] md:h-[50px] lg:w-[70px] lg:h-[70px]"
                      src="/assets/el_idea.svg"
                      alt="searchcicon"
                    />
                  </div>
                  <p className="text-blue-400  md:text-[45px] lg:text-[55px]  xl:text-[60px] font-bold mb-2">
                    Step 2
                  </p>
                  <ul className="list-none text-gray-300 space-y-1 text-[10px] md:text-[15px] lg:text-[1rem]">
                    <li>Prototyping</li>
                    <li>Designing</li>
                  </ul>
                </div>
              </div>

              {/* Item 3 - Left */}
              <div className="flex justify-between items-start w-full">
                <div className="w-1/2 pr-8 text-right">
                  {/* Icon Placeholder */}
                  <div className="flex justify-end mb-2">
                    <img
                      src="/assets/game-icons_gears.svg"
                      alt="searchcicon"
                      className="w-[45px] md:w-[50px] md:h-[50px] lg:w-[70px] lg:h-[70px]"
                    />
                  </div>
                  <p className="text-blue-400  md:text-[45px] lg:text-[55px]  xl:text-[60px] font-bold mb-2">
                    Step 3
                  </p>
                  <ul className="list-none text-gray-300 space-y-1 text-[10px] md:text-[15px]  lg:text-[1rem]">
                    <li>Assets Handoff</li>
                    <li>Development</li>
                  </ul>
                </div>
                <div className="w-0"></div>
                <div className="w-1/2"></div>
              </div>

              {/* Item 4 - Right */}
              <div className="flex justify-between items-start w-full">
                <div className="w-1/2"></div>
                <div className="w-0"></div>
                <div className="w-1/2 pl-8 text-left">
                  {/* Icon Placeholder */}
                  <div className="flex justify-start mb-2">
                    <img
                      src="/assets/solar_delivery-bold.svg"
                      alt="searchcicon"
                      className="w-[45px] md:w-[50px] md:h-[50px] lg:w-[70px] lg:h-[70px]"
                    />
                  </div>
                  <p className="text-blue-400 md:text-[45px] lg:text-[55px]  xl:text-[60px] font-bold mb-2">
                    Step 4
                  </p>
                  <ul className="list-none text-gray-300 text-[10px] md:text-[15px] space-y-1 xl:text-[1rem]">
                    <li>Project Wrap Up</li>
                    <li>Client Delivery</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 mt-16">
          <div className="w-[70%] h-[250px]  md:h-[300px] lg:h-[400px] bg-[#1F1F1F] rounded-[6rem] shadow-lg"></div>
          <div className="w-[70%] h-[250px] md:h-[300px]  lg:h-[400px] bg-[#1F1F1F] rounded-[6rem] shadow-lg"></div>
        </div>
      </div>
      {/* client feedback */}
      <div className="w-full flex flex-col justify-center items-center mb-10">
        <div className="mb-12 text-center">
          <h1 className="text-[28px] sm:text-[45px] lg:text-[60px] xl:text-[70px] font-bold mt-[10rem]">
            CLIENT FEEDBACK
          </h1>
        </div>

        <div className=" p-8 w-[70%] rounded-[25px] border border-gray-700  text-white shadow-lg">
          {/* Top Section */}
          <div className="flex items-center space-x-4 mb-4">
            <div className="  w-[70px] sm:h-[100px] sm:w-[100px] lg:w-[150px] lg:h-[150px] bg-gray-600 rounded-full flex items-center justify-center">
              {/* Placeholder for avatar */}
              <img
                src="/assets/testimonialicon.png"
                alt="icon"
                className="rounded-full object-contain"
              />
            </div>
            <div>
              <h3 className="font-bold text-[13px] sm:text-[20px] lg:text-[50px] xl:text-[50px]">
                Kolbeon
              </h3>
              <p className=" text-[10px] sm:text-[18px] lg:text-[20px]  text-gray-400">
                Lorem Ipsum at Lorem
              </p>
              {/* Star rating */}
              <div className="text-[#D9D9D9] text-[14px] sm:text-[20px] lg:text-[40px] mt-1">
                ★ ★ ★ ★ ★
              </div>
            </div>
          </div>

          {/* Body */}
          <p className=" text-[10px] sm:text-[15px] lg:text-[23px] xl:text-[25px] text-[#737373] font-bold leading-snug">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            finibus mattis sem eu cursus. Sed tristique sollicitudin suscipit.
            Nunc in velit non diam finibus semper at sit amet est. Vivamus
            sagittis, eros in finibus pharetra, mauris nulla ultrices nisi, eu
            pharetra tellus nulla vitae felis. Donec pellentesque semper metus
            in pulvinar. In hac habitasse platea dictumst. Ut tempus
          </p>
        </div>

        <button
          className="px-2 py-3 mt-[5rem] mb-[5rem] lg:mt-[10rem] lg:mb-[10rem] w-[160px] h-[60px] sm:h-[85px] sm:w-[250px] sm:text-[20px] md:w-[300px] md:text-[25px] lg:w-[400px] xl:w-[465px] lg:text-[30px] xl:text-[40px]  bg-[#1EA1F2] text-white font-semibold rounded-[25px] shadow-lg 
                     hover:brightness-110 transition-all duration-300
                     text-xs tracking-wide
                     glow-button"
        >
          VISIT THIS PROJECT
        </button>
      </div>
    </div>
  );
}

export default DescriptionPage;
