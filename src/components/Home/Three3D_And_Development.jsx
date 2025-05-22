import React from 'react'

function Three3D_And_Development() {
  return (
    <section className="px-6 py-6 text-white flex md:flex-cols-2 gap-[70px]">
      {/* LEFT: 3D VISUALS & ANIMATIONS */}
      <div>
        <h2 className="text-[36px] font-bold mb-6">
          <span className="text-blue-500">3D VISUALS</span> & ANIMATIONS
        </h2>

        <div className="flex flex-col gap-6">
          <div className="flex gap-6">
            {/* Card 1 */}
            <div className="relative w-[343px] h-[325px] rounded-xl overflow-hidden shadow-md">
              <img
                src="/assets/visual1.png"
                alt="HDRI Lighting Experiment"
                className="w-full h-full opacity-30 object-cover absolute"
              />
              <div className="relative   p-4 h-full flex flex-col justify-start">
                <div className="flex gap-2 mb-2 text-[24px] font-bold">
                  <span className="bg-blue-600 text-white  px-2 py-1 rounded-[22px]">
                    3D
                  </span>
                  <span className="bg-sky-400 text-white px-2 py-1 rounded-[22px]">
                    RENDER
                  </span>
                </div>
                <h3 className="text-[24px] font-bold">
                  HDRI Lighting Experiment
                </h3>
                <p className="text-[20px] font-normal mt-[120px]">
                  3D lighting study using HDRI spheres.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative w-[343px] h-[325px] rounded-xl overflow-hidden shadow-md">
              <img
                src="/assets/visual2.png"
                alt="Character Animation Test"
                className="w-full h-full opacity-30 object-cover absolute"
              />
              <div className="relative p-4 h-full flex flex-col justify-start">
                <div className="flex gap-2 mb-2 text-[24px] font-bold">
                  <span className="bg-blue-600 text-white  px-2 py-1 rounded-[22px]">
                    3D
                  </span>
                  <span className="bg-sky-400 text-white px-2 py-1 rounded-[22px]">
                    ANIMATION
                  </span>
                </div>
                <h3 className="text-[24px] font-bold">
                  Character Animation Test
                </h3>
                <p className="text-[20px] font-normal mt-[120px]">
                  Testing movement and expressions in 3D.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: DEVELOPMENT IN FOCUS */}
      <div>
        <h2 className="text-[36px] font-bold text-right mb-6">
          DEVELOPMENT <span className="text-blue-500">IN FOCUS</span>
        </h2>

        <div className="flex flex-col gap-6">
          <div className="flex gap-6">
            {/* Card 3 */}
            <div className="relative w-[343px] h-[325px] rounded-xl overflow-hidden shadow-md">
              <img
                src="/assets/visual1.png"
                alt="HDRI Lighting Experiment"
                className="w-full h-full opacity-30 object-cover absolute"
              />
              <div className="relative   p-4 h-full flex flex-col justify-start">
                <div className="flex gap-2 mb-2 text-[24px] font-bold">
                  <span className="bg-blue-600 text-white  px-2 py-1 rounded-[22px]">
                    3D
                  </span>
                  <span className="bg-sky-400 text-white px-2 py-1 rounded-[22px]">
                    RENDER
                  </span>
                </div>
                <h3 className="text-[24px] font-bold">
                  HDRI Lighting Experiment
                </h3>
                <p className="text-[20px] font-normal mt-[120px]">
                  3D lighting study using HDRI spheres.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative w-[343px] h-[325px] rounded-xl overflow-hidden shadow-md">
              <img
                src="/assets/visual2.png"
                alt="Character Animation Test"
                className="w-full h-full opacity-30 object-cover absolute"
              />
              <div className="relative p-4 h-full flex flex-col justify-start">
                <div className="flex gap-2 mb-2 text-[24px] font-bold">
                  <span className="bg-blue-600 text-white  px-2 py-1 rounded-[22px]">
                    3D
                  </span>
                  <span className="bg-sky-400 text-white px-2 py-1 rounded-[22px]">
                    ANIMATION
                  </span>
                </div>
                <h3 className="text-[24px] font-bold">
                  Character Animation Test
                </h3>
                <p className="text-[20px] font-normal mt-[120px]">
                  Testing movement and expressions in 3D.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Three3D_And_Development