"use client";
import { MoveUpRight , Star } from 'lucide-react';
export default function Opp1(){
    return (
<div className="w-full h-[60vh] flex flex-col md:flex-row gap-4 items-center justify-center px-4">
<div className="flex flex-col gap-2 bg-white rounded-2xl p-4 text-center md:text-left">
<p className="text-lg text-gray-600">OPPORTUNITY</p>
<h1 className="text-2xl md:text-4xl font-bold">Our investment <br />opportunity for you</h1>
<p className="text-base md:text-lg text-gray-600"> The property that suits you. Choose an apartment <br /> that suits your urgent requirements</p>
<button className="p-2 flex flex-row items-center justify-center gap-2 rounded-full w-40 bg-black text-white hover:cursor-pointer mx-auto md:mx-0">Request a call <MoveUpRight color="white" size={20}/></button>
</div>
   <div className="relative w-64 h-64 md:w-[300px] md:h-[300px] flex items-center justify-center"> 
     <div className="absolute w-full h-full bg-pink-100 rounded-2xl rotate-0"></div>
      <div className="absolute right-5 w-full h-full bg-pink-100 rounded-2xl rotate-10"></div>
      <div className="relative bg-white rounded-2xl p-4 md:p-6 shadow-lg z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-center">4.9</h1>
       <div className="flex items-center justify-center gap-1">
  {[...Array(5)].map((_, i) => (
    <Star
      key={i}
      className="w-4 h-4 md:w-5 md:h-5 text-green-500 fill-green-500"
    />
  ))}
</div>
        <p className="text-center text-gray-500 text-sm md:text-base">Trustscore on 436 reviews</p>
      </div>

    </div>
</div>
    );
}