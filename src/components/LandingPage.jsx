'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ocmimage from '../assets/ocm.png'
import { ShoppingCartIcon, ChatBubbleLeftRightIcon, PencilSquareIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import community from '../assets/community.png'

const features = [
  {
    name: 'Buy and Sell Easily',
    description:
      'Seamlessly browse listings or post your products with just a few clicks. Connect with local buyers and sellers effortlessly.',
    icon: ShoppingCartIcon,
  },
  {
    name: 'User Authentication',
    description:
      'Enjoy secure access with JWT-based authentication to protect your data and transactions on the platform.',
    icon: LockClosedIcon,
  },
  {
    name: 'Instant Messaging',
    description:
      'Communicate directly with other users to negotiate and finalize deals quickly without any hassle.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Product Listings Management',
    description:
      'Easily manage your posted items, update product details, or remove listings when sold, all in one place.',
    icon: PencilSquareIcon,
  },
];


const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About us', href: '#' },
  // { name: 'See How it works', href: '#' },
  { name: 'Contact us', href: '#' },
]

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Orange City Mart</span>
            <span className="text-orange-500 text-xl font-bold">Orange City Mart</span>
          </a>

          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              SignUp / Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">OrangeCityMart</span>
                <img
                  alt=""
                  src={ocmimage}
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    SignUp / Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 lg:px-8">
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
                <a
                  href="#"
                  className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
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

      <div className="bg-white sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-orange-600">About Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              One Place for All Your Buying and Selling Needs
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Your local marketplace for Nagpur, where buying, selling, and connecting with the community is easy and enjoyable. Explore a variety of products, list your items, and communicate with fellow Nagpurites—all in one place!
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600">
                      <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>



      {/* Join Us */}
      <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-16 rounded-lg max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10">
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
            href="#"
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


      <hr className="border-t border-gray-300 my-8" />
      
      {/* Contact Us  */}

      <section className="bg-white">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-900 sm:text-xl">
            Got a question or feedback about OrangeCityMart? We're here to help!
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5"
                placeholder="name@orangecitymart.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-orange-600 focus:border-orange-600"
                placeholder="Let us know how we can assist you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-orange-600 focus:border-orange-600"
                placeholder="Leave a comment..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-orange-600 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300"
            >
              Send message
            </button>
          </form>
        </div>
      </section>


      <hr className="border-t border-gray-300 my-8" />
      
      {/* footer */}
      <footer className="bg-white p-10 font-[sans-serif] tracking-wide">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:flex lg:items-center">
            <a href="javascript:void(0)">
              <img
                src={ocmimage}
                alt="logo"
                className="w-52"
              />
            </a>
          </div>

          <div className="lg:flex lg:items-center">
            <ul className="flex space-x-6">
              <li>
                <a href="javascript:void(0)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-gray-500 hover:fill-orange-600 w-7 h-7"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V8.5A3.5 3.5 0 0 1 15.5 5H18v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-gray-500 hover:fill-orange-600 w-7 h-7"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="fill-gray-500 hover:fill-orange-600 w-7 h-7"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.92 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.83 4.5 17.72 4 16.46 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.9 20.29 6.16 21 8.58 21c7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="javascript:void(0)" className="text-gray-600 hover:text-orange-600 text-sm">Email</a>
              </li>
              <li>
                <a href="javascript:void(0)" className="text-gray-600 hover:text-orange-600 text-sm">Phone</a>
              </li>
              <li>
                <a href="javascript:void(0)" className="text-gray-600 hover:text-orange-600 text-sm">Address</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900">Information</h4>
            <ul className="space-y-4">
              <li>
                <a href="javascript:void(0)" className="text-gray-600 hover:text-orange-600 text-sm">About Us</a>
              </li>
              <li>
                <a href="javascript:void(0)" className="text-gray-600 hover:text-orange-600 text-sm">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="javascript:void(0)" className="text-gray-600 hover:text-orange-600 text-sm">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <p className='text-gray-600 text-sm mt-10'>
          © OrangeCityMart. All rights reserved.
        </p>
      </footer>


    </div>
  )
}
