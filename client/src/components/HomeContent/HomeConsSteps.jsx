import React from 'react';
import ConstructionImage from '../../assets/images/conshero.jpg'; // Replace with your image path

const HomeConsSteps = () => {
  const steps = [
    {
      title: 'Step 1: Planning & Design',
      description:
        "We start with your vision. This phase includes site evaluation, blueprints, permits, and material selection. Careful planning ensures a smooth construction process, laying the groundwork for a successful project.",
    },
    {
      title: 'Step 2: Site Preparation & Foundation',
      description:
        "Turning plans into action. We clear the land, level the site, and lay a sturdy foundation. This critical step ensures the structure’s strength and stability, setting the stage for the build.",
    },
    {
      title: 'Step 3: Construction & Building',
      description:
        "Bringing your vision to life. From framing and roofing to electrical, plumbing, and interior work — we carefully build each element with precision and high-quality materials to create a lasting structure.",
    },
    {
      title: 'Step 4: Finishing Touches & Handover',
      description:
        "The final reveal. We add the last details, including paint, fixtures, and landscaping, ensuring everything is polished and perfect. After a final inspection, we hand over the completed project, ready for you to enjoy!",
    },
  ];

  return (
    <section className="!py-12 md:!py-18 !bg-gray-100">
      <div className="container mx-auto !px-5 lg:px-0">
        <div className="text-center !mb-18">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 !mb-4">
            <span className="inline-block w-[20px] sm:w-[50px] h-[3px] bg-orange-500 !mb-1 sm:!mb-2.5 !mr-1"></span>  
             Construction Process 
             <span className="inline-block w-[20px] sm:w-[50px] h-[3px] bg-orange-500 !mb-1 sm:!mb-2.5 !ml-1"></span> 
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
            Follow our step-by-step process to bring your vision to life.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <img
              src={ConstructionImage}
              alt="Construction Process"
              className="w-full h-[400px] sm:h-[550px] object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="lg:w-1/2 relative">
            <div className="absolute left-4 sm:left-5 h-full w-1 bg-orange-500 block"></div>

            <div className="space-y-16 flex flex-col gap-5">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start relative">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold z-10 mr-6 shadow-lg">
                    0{index + 1}
                  </div>

                  <div className="flex-1 !pl-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-md text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
              <div className="flex gap-4 !ml-13">
                <button className='broder border-2 !py-1 !px-2 sm:!py-2 sm:!px-4 border-orange-500 text-white font-semibold !mt-10 rounded-lg cursor-pointer bg-orange-500 hover:bg-white hover:text-black transition-all'>Call Now</button>
                <button className='broder border-2 !py-2 !px-4 border-orange-500 font-semibold !mt-10 rounded-lg cursor-pointer hover:bg-orange-500 hover:text-white transition-all'>Get Free Quotes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeConsSteps;
