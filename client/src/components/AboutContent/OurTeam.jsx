import React, { useState } from 'react';
import { FaEye, FaTimes } from 'react-icons/fa';
import Profile1 from '../../assets/images/profile3.jpg';
import Profile2 from '../../assets/images/profile4.jpg';
import Profile3 from '../../assets/images/profile5.jpg';
import Profile4 from '../../assets/images/profile7.jpg';

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      position: 'CEO',
      experience: '10+ Years',
      image: Profile1,
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Architect',
      experience: '8+ Years',
      image: Profile2,
    },
    {
      id: 3,
      name: 'Alice Johnson',
      position: 'Project Manager',
      experience: '12+ Years',
      image: Profile3,
    },
    {
      id: 4,
      name: 'Bob Brown',
      position: 'Engineer',
      experience: '7+ Years',
      image: Profile4,
    },
    {
      id: 5,
      name: 'Charlie Davis',
      position: 'Designer',
      experience: '5+ Years',
      image: Profile4,
    },
    {
      id: 6,
      name: 'Eva Green',
      position: 'Consultant',
      experience: '9+ Years',
      image: Profile3,
    },
    {
      id: 7,
      name: 'Frank White',
      position: 'Developer',
      experience: '6+ Years',
      image: Profile2,
    },
    {
      id: 8,
      name: 'Grace Hall',
      position: 'Marketing Head',
      experience: '11+ Years',
      image: Profile1,
    },
  ];

  const [selectedMember, setSelectedMember] = useState(null);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const closePopup = () => {
    setSelectedMember(null);
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  return (
    <section className="!py-12 md:!py-18 !bg-gray-100">
      <div className="container mx-auto !px-5 lg:px-0">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 !mb-4">
            <span className="inline-block w-[20px] sm:w-[50px] h-[3px] bg-orange-500 !mb-2.5"></span>{' '}
            Our Team{' '}
            <span className="inline-block w-[20px] sm:w-[50px] h-[3px] bg-orange-500 !mb-2.5"></span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 !mb-8 sm:!mb-12">
            Meet Our Expert Team Members.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white !p-4 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl cursor-pointer relative flex gap-4"
            >
              {/* Team Member Image */}
              <div className="w-20 h-20 rounded-lg shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Team Member Details */}
              <div className="mt-4">
                <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.position}</p>
                <p className="text-sm text-gray-500">{member.experience}</p>

                {/* Eye Icon in Bottom-Right Corner */}
                <div
                  className="absolute bottom-4 right-4 text-orange-500 hover:text-orange-600 cursor-pointer"
                  onClick={() => handleMemberClick(member)}
                >
                  <FaEye className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup for Selected Team Member */}
      {selectedMember && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50"
          onClick={handleBackgroundClick}
        >
          <div className="bg-white !p-6 sm:!p-8 rounded-lg shadow-lg max-w-md w-full relative"
            style={{
              animation: "modalFadeIn 0.3s ease-out",
            }}
          >
            {/* Close Button Inside Modal */}
            <button
              className="absolute top-4 right-4 text-orange-500 hover:text-orange-600 cursor-pointer"
              onClick={closePopup}
            >
              <FaTimes className="w-6 h-6" />
            </button>

            {/* Popup Content */}
            <div className="text-center !py-8">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-96 h-96 rounded-lg !mx-auto object-cover !mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedMember.name}
              </h3>
              <p className="text-lg text-gray-600">{selectedMember.position}</p>
            </div>
          </div>
        </div>
      )}

      {/* Add CSS for Modal Animation */}
      <style>
        {`
          @keyframes modalFadeIn {
            0% {
              opacity: 0;
              transform: scale(0.5);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </section>
  );
};

export default OurTeam;