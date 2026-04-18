"use client"
import { Birdhouse ,  MoveUpRight } from 'lucide-react';
import About from './About';
import Invested from './Invested';
import Contact from "./Contact"
export default function Footer() {
  return (
    <div className="w-full bg-gray-950 text-white py-10 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between">
        <div className="w-full lg:w-[30%] flex flex-col gap-4 border-b border-gray-700 pb-6 lg:border-b-0 lg:pb-0">
          <div className="flex items-center gap-2 text-xl md:text-2xl text-gray-300">
            <Birdhouse /> ProInvest
          </div>
          <p className='text-gray-300 text-sm md:text-base'>High quality sustainable property investment with one of the UK's finest house builders.</p>
          <p className='text-white text-lg md:text-xl font-semibold'>Subscribe to our newsletter</p>
          <div className="flex flex-col gap-3">
            <button className='bg-white p-3 font-semibold text-black rounded-full hover:bg-teal-200 transition duration-300'>Enter your Email</button>
            <button className='bg-white p-3 flex items-center justify-center gap-2 font-semibold text-black rounded-full hover:bg-teal-200 transition duration-300'>Subscribe now <MoveUpRight /></button>
          </div>
        </div>

        <About />
        <Invested />
        <Contact />
      </div>
    </div>
  );
}