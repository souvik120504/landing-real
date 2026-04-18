"use client";
import { MoveUpRight } from 'lucide-react';
import {motion} from "framer-motion"
export default function Invest1() {
  return (
    <div className="w-full min-h-[60vh] flex flex-col lg:flex-row gap-6 items-center justify-center px-4 py-10">
      <div className="flex flex-col gap-4 text-center lg:text-left max-w-2xl w-full">
        <h1 className="text-black font-bold text-3xl md:text-5xl leading-tight">
          Investment in <br />real estate
        </h1>
        <p className="text-gray-700 font-semibold text-sm md:text-base max-w-xl mx-auto lg:mx-0">
          Attractive locations close to business centers provide guaranteed rentals.
        </p>
       <motion.div
  animate={{ rotate: 360 }}
  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
  className="bg-black h-16 w-16 md:h-20 md:w-20 rounded-full flex items-center justify-center mx-auto lg:mx-0"
>
  <MoveUpRight color="white" size={30} />
</motion.div>
      </div>

      <div className="relative w-full max-w-xl h-[320px] md:h-[420px] rounded-3xl">
  
  {/* Main Image */}
  <div
    className="w-full h-full bg-cover bg-center"
    style={{
      backgroundImage:
        'url("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=435&auto=format&fit=crop")',
    }}
  />
  <div
    className="absolute w-28 h-28 md:w-40 md:h-40 -top-8 -right-8 rounded-3xl bg-cover bg-center shadow-2xl border-4 border-white"
    style={{
      backgroundImage:
        'url("https://images.unsplash.com/photo-1559067096-49ebca3406aa?q=80&w=1031&auto=format&fit=crop")',
    }}
  />

  <div
    className="absolute w-24 h-24 md:w-36 md:h-36 -bottom-8 -left-8 rounded-3xl bg-cover bg-center shadow-2xl border-4 border-white"
    style={{
      backgroundImage:
        'url("https://plus.unsplash.com/premium_photo-1663050693144-6b5bc76d2214?q=80&w=1470&auto=format&fit=crop")',
    }}
  />
</div>
    </div>
  );
}