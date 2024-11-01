'use client'

import Header from '../components/Header'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import JoinUs from '../components/JoinUs'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

export default function LandingPage() {

  return (
    <div className="bg-white">

      <Header /> 
      <Hero />
      <AboutUs />
      <JoinUs />
      <hr className="border-t border-gray-300 my-8" />
      <ContactUs />
      <hr className="border-t border-gray-300 my-8" />
      <Footer />

    </div>
  )
}
