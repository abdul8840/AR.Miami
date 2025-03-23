import React from 'react';
import OurStoryImage1 from '../../assets/images/consTeam.jpg'; 
import OurStoryImage2 from '../../assets/images/values.jpg'; 
import OurStoryImage3 from '../../assets/images/mission.jpg'; 

const OurStory = () => {
  const sections = [
    {
      title: 'Our Story',
      content: [
        "We started out with a clear goal — to build homes people love and take pride in. From a small group with high hopes, we've grown into a respected construction and design firm that's known for top-notch work and personal attention to clients.",
        "Each project has helped us do more than just put up buildings; it's allowed us to form strong bonds. We love design, take pride in our work, and always aim to make our clients happy. This has pushed us to turn many dreams into real livable spaces. As we move forward, we blend new ideas with time-tested methods to shape what's next in building.",
      ],
      image: OurStoryImage1,
    },
    {
      title: 'Our Values',
      content: [
        "What We Stand For:",
        "Integrity: We stick to honesty and keep our word.",
        "Quality: We pay attention to every detail. We only use the best materials and aim for top standards.",
        "Customer Focus: Your ideas shape what we do. We listen and work with you to make your vision real.",
        "Innovation: We use new methods and eco-friendly practices to build better spaces.",
        "Community: We believe in giving back. We create spaces that improve the lives of people in our communities.",
      ],
      image: OurStoryImage2,
    },
    {
      title: 'Our Mission',
      content: [
        "To give actuality to dreaming, through design, quality construction, and service to clients, is our job. We seek to create spaces that are eternal, functional, and aesthetically pleasing — spaces in which people shall find clarity, energy, and a seamless, stress-free experience from concept to completion.",
      ],
      image: OurStoryImage3,
    },
    {
      title: 'Our Vision',
      content: [
        "In anticipation of a common future, we recognize that every building deserves to be treated as a masterful outcome combining art and engineering. For this reason, we try to become a leading model in the industry of construction and design, embracing innovation, sustainability, and customer satisfaction. We want to do more than just build buildings; we want to build crafts and create a legacy for creativity and care.",
      ],
      image: OurStoryImage1, // Replace with your image path
    },
  ];

  return (
    <section className="!py-12 md:!py-18">
      <div className="!px-5 lg:px-0">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}
          >
            {/* Image */}
            <div className="lg:w-1/2">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-auto shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="lg:w-1/2 container !px-0 !py-10 lg:!p-5">
              <div className="max-w-[500px] !mx-auto ">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#5c7c3b] !mb-4">
                  {section.title}
                </h2>
                <span className="inline-block w-[100px] h-[3px] bg-[#5c7c3b] !mb-2.5"></span>
                {section.content.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-sm sm:text-[16px] text-gray-600 !mb-4"
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  ></p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurStory;