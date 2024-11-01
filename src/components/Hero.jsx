import React from 'react'
import ocmimage from '../assets/ocm.png'
import { useNavigate} from 'react-router-dom'

export default function Hero() {

  const navigate = useNavigate();

  const handleAuthClick = (e) => {
    e.preventDefault();
    navigate('/auth');
  };

  return (
    <div className="relative isolate px-6 lg:px-8 bg-white sm:py-32">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#FF9800]  to-[#1976D2] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 sm:py-48 lg:py-40">
          <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start lg:gap-16">
            {/* Text Section */}
            <div className="text-center lg:text-left max-w-2xl">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Find What You Need, Sell What You Don't
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                OrangeCityMart is Nagpur’s premier online marketplace, designed to simplify buying and selling within the community.
              </p>
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
                <button 
                  onClick={handleAuthClick}
                  className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </button>
                <a href="#join-us" className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* Image Section (Visible only on Desktop) */}
            <div className="hidden lg:block">
              <img
                src={ocmimage}
                alt="OrangeCityMart Showcase"
                className="max-w-md"
              />
            </div>
          </div>
        </div>


        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#FF9800] to-[#1976D2] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
  )
}
