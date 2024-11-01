import React from 'react'
import { ChatBubbleLeftRightIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import { ShoppingCartIcon, LockClosedIcon } from '@heroicons/react/24/outline'

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


export default function AboutUs() {
  return (
    <div id="about-us" className="bg-white sm:py-32">
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
  )
}
