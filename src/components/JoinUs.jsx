import React from 'react'
import community from '../assets/community.png'
import { useNavigate } from 'react-router-dom';

export default function JoinUs() {
  const navigate = useNavigate();
  const handleAuthClick = (e) => {
    e.preventDefault();
    navigate('/auth');
  };
  return (
    <div id="join-us" className="bg-white p-6 sm:p-8 md:p-10 lg:p-16 rounded-lg max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10">
        {/* Left Side - Image and Heading */}
        <div className="flex flex-col items-center md:items-start md:w-1/2">
          <img
            alt="community image"
            src={community}
            className="max-w-md mb-4 pr-16" // Added margin bottom for spacing
          />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            How to Join Our Marketplace
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-4">
            Explore Nagpur’s most vibrant marketplace in just 3 easy steps!
          </p>
          <button
            onClick={handleAuthClick}
            className="rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign up now
          </button>
        </div>

        {/* Right Side - Steps */}
        <div className="flex flex-col gap-6 md:gap-8 md:w-1/2">
          <div className="space-y-2">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900">Step 1</h3>
            <p className="text-gray-600 text-base">
              Create an account to start browsing and listing products instantly.
            </p>
            <hr className="border-gray-300" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900">Step 2</h3>
            <p className="text-gray-600 text-base">
              Post your products or find the perfect deals tailored to your needs.
            </p>
            <hr className="border-gray-300" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900">Step 3</h3>
            <p className="text-gray-600 text-base">
              Connect with other buyers and sellers and experience seamless buying and selling within Nagpur!
            </p>
          </div>
        </div>
      </div>
  )
}
