import React from "react";

function Three3D_And_Development() {
  return (
    <section className="px-6 py-6 text-white flex justify-between sm:gap-6  md:flex-cols-2 ">
      {/* LEFT: 3D VISUALS & ANIMATIONS */}
      <div className="w-[50%]">
        <h2 className="md:text-[14px] lg:text-[1.5rem] xl:text-[2.25rem] font-bold mb-6">
          <span className="text-blue-500">3D VISUALS</span> & ANIMATIONS
        </h2>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col md:flex-row  gap-6">
            {/* Card 1 */}
            <div
              className="relative w-[95%] h-[200px] md:w-[40%] md:h-[150px] lg:w-[14rem] lg:h-[15rem]
             xl:w-1/2 xl:h-[20.3125rem] rounded-xl overflow-hidden shadow-md"
            >
              <img
                src="/assets/visual1.png"
                alt="HDRI Lighting Experiment"
                className="w-full h-full opacity-30 object-cover absolute"
              />
              <div className="relative p-4 h-full flex flex-col justify-start">
                <div className="flex gap-2 mb-2 md:text-[9.48px]  lg:text-[1.3rem] xl:text-[1.5rem] font-bold">
                  <span className="bg-blue-600 text-white px-[0.5rem] py-[0.25rem] rounded-[1.375rem]">
                    3D
                  </span>
                  <span className="bg-sky-400 text-white px-[0.5rem] py-[0.25rem] rounded-[1.375rem]">
                    RENDER
                  </span>
                </div>
                <h3 className="md:text-[9.48px] lg:text-[1.2rem] xl:text-[1.5rem] font-bold">
                  HDRI Lighting Experiment
                </h3>
                <div className="flex flex-grow"></div>
                <p className=" md:text-[7.9px] lg:text-[1.1rem] xl:text-[1.25rem] font-normal xl:mt-[7.5rem]">
                  3D lighting study using HDRI spheres.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative w-[95%] h-[200px] md:w-[40%]  md:h-[150px]   lg:w-[14rem] lg:h-[15rem] xl:w-1/2 xl:h-[20.3125rem] rounded-xl overflow-hidden shadow-md">
              <img
                src="/assets/visual2.png"
                alt="HDRI Lighting Experiment"
                className="w-full h-full opacity-30 object-cover absolute"
              />
              <div className="relative p-4 h-full flex flex-col justify-start">
                <div className="flex gap-2 mb-2 md:text-[9.48px] lg:text-[1.3rem] xl:text-[1.5rem] font-bold">
                  <span className="bg-blue-600 text-white px-[0.5rem] py-[0.25rem] rounded-[1.375rem]">
                    3D
                  </span>
                  <span className="bg-sky-400 text-white px-[0.5rem] py-[0.25rem] rounded-[1.375rem]">
                    RENDER
                  </span>
                </div>
                <h3 className="md:text-[9.48px] lg:text-[1.2rem] xl:text-[1.5rem] font-bold">
                  HDRI Lighting Experiment
                </h3>
                <div className="flex flex-grow"></div>
                <p className="md:text-[7.9px] lg:text-[1.1rem] xl:text-[1.25rem] font-normal xl:mt-[7.5rem]">
                  Character Animation Test
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: DEVELOPMENT IN FOCUS */}
      <div className="w-[50%]  ">
        <h2 className="  md:text-[14px] lg:text-[1.5rem] xl:text-[2.25rem] font-bold mb-6  text-right">
          DEVELOPMENT <span className="text-blue-500">IN FOCUS</span>
        </h2>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-6 md:flex-row md:justify-end">
            {/* Card 3 */}
            <div className="relative w-full h-[200px] md:w-[40%] md:h-[150px] lg:w-[14rem] lg:h-[15rem] xl:w-1/2 xl:h-[20.3125rem] rounded-xl overflow-hidden shadow-md">
              <img
                src="/assets/visual1.png"
                alt="HDRI Lighting Experiment"
                className="w-full h-full opacity-30 object-cover absolute"
              />
              <div className="relative p-4 h-full flex flex-col justify-start">
                <div className="flex gap-2 mb-2 md:text-[9.48px] lg:text-[1.3rem] xl:text-[1.5rem] font-bold">
                  <span className="bg-blue-600 text-white px-[0.5rem] py-[0.25rem] rounded-[1.375rem]">
                    3D
                  </span>
                  <span className="bg-sky-400 text-white px-[0.5rem] py-[0.25rem] rounded-[1.375rem]">
                    RENDER
                  </span>
                </div>
                <h3 className="md:text-[9.48px] lg:text-[1.2rem] xl:text-[1.5rem] font-bold">
                  HDRI Lighting Experiment
                </h3>
                <div className="flex flex-grow"></div>
                <p className="md:text-[7.9px] lg:text-[1.1rem] xl:text-[1.25rem] font-normal xl:mt-[7.5rem]">
                  3D lighting study using HDRI spheres.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative w-full h-[200px] md:w-[40%] md:h-[150px] lg:w-[14rem] lg:h-[15rem] xl:w-1/2 xl:h-[20.3125rem] rounded-xl overflow-hidden shadow-md">
              <img
                src="/assets/visual2.png"
                alt="HDRI Lighting Experiment"
                className="w-full h-full opacity-30 object-cover absolute"
              />
              <div className="relative p-4 h-full flex flex-col justify-start">
                <div className="flex gap-2 mb-2 md:text-[9.48px] lg:text-[1.3rem] xl:text-[1.5rem] font-bold">
                  <span className="bg-blue-600 text-white px-[0.5rem] py-[0.25rem] rounded-[1.375rem]">
                    3D
                  </span>
                  <span className="bg-sky-400 text-white px-[0.5rem] py-[0.25rem] rounded-[1.375rem]">
                    RENDER
                  </span>
                </div>
                <h3 className="md:text-[9.48px] lg:text-[1.2rem] xl:text-[1.5rem] font-bold">
                  HDRI Lighting Experiment
                </h3>
                <div className="flex flex-grow"></div>
                <p className="md:text-[7.9px] lg:text-[1.1rem] xl:text-[1.25rem] font-normal xl:mt-[7.5rem]">
                  Character Animation Test
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Three3D_And_Development;
