"use client";
import { MoveUpRight } from 'lucide-react';

export default function Opp2() {
  return (
    <div className="w-full px-4 py-10">
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
        {[
          { id: 1, title: 'Residential property', accent: 'bg-[#c8a7ff]', number: '01' },
          { id: 2, title: 'Commercial property', accent: 'bg-teal-200', number: '02' },
          { id: 3, title: 'Raw Land property', accent: 'bg-green-300', number: '03' },
        ].map((card) => (
          <div key={card.id} className="w-full rounded-[28px] bg-white border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-6 relative overflow-hidden transition duration-300 hover:shadow-xl">
            <div className={`${card.accent} absolute top-0 right-0 w-24 h-24 rounded-bl-[40px] -rotate-5`} />
            <div className="w-14 h-14 rounded-full border border-gray-200 bg-white flex items-center justify-center text-lg font-medium text-gray-800 shadow-sm relative z-10">
              {card.number}
            </div>
            <div className="mt-6 relative z-10">
              <h3 className="text-xl md:text-2xl leading-tight font-semibold text-gray-900">
                {card.title}
              </h3>
              <p className="mt-3 text-sm md:text-base leading-7 text-gray-500">
                Providing private investors with investment opportunities usually available only to major institutional investors.
              </p>
              <button className="inline-flex items-center gap-2 mt-6 text-sm md:text-base font-medium text-gray-900">
                View More
                <span className="text-lg"><MoveUpRight color="black" size={20} /></span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}