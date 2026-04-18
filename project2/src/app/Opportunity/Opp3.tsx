"use client";
import { useState } from "react";
import { MoveLeft, MoveRight, Star } from 'lucide-react';
interface Card {
  id: number;
  h1: string;
  p: string;
  h3: string;
}

export default function Opp3() {

  const cards:Card[] = [
    {
      id: 1,
      h1: "4.9",
      p: "Trustscore on 436 reviews",
      h3: "Communication is so important when we invest big sums of money. It gives a feeling of security, and payments always arrive on time.",
    },
    {
      id: 2,
      h1: "4.8",
      p: "Trustscore on 436 reviews",
      h3: "Communication is so important when we invest big sums of money. It gives a feeling of security, and payments always arrive on time.",
    },
    {
      id: 3,
      h1: "4.7",
      p: "Trustscore on 436 reviews",
      h3: "Communication is so important when we invest big sums of money. It gives a feeling of security, and payments always arrive on time.",
    },
    {
      id: 4,
      h1: "4.6",
      p: "Trustscore on 436 reviews",
      h3: "Communication is so important when we invest big sums of money. It gives a feeling of security, and payments always arrive on time.",
    },
  ];

  const [index, setIndex] = useState<number>(0);

  return (
    <div className="w-full px-4 py-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <h1 className="text-2xl md:text-4xl font-semibold text-center md:text-left">
            Investment is our priority
          </h1>
          <div className="flex gap-4">
            <button
              onClick={() => setIndex((prev) => Math.max(prev - 1, 0))}
              disabled={index === 0}
              className="px-4 py-2 bg-black text-white rounded-full disabled:opacity-50"
            >
              <MoveLeft size={14} />
            </button>
            <button
              onClick={() => setIndex((prev) => Math.min(prev + 1, cards.length - 1))}
              disabled={index === cards.length - 1}
              className="px-4 py-2 bg-black text-white rounded-full disabled:opacity-50"
            >
              <MoveRight size={14} />
            </button>
          </div>
        </div>

        <div className="w-full overflow-hidden rounded-3xl bg-gray-100">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="min-w-full flex flex-col md:flex-row gap-4 p-6 md:p-8"
              >
                <div className="flex-1 bg-white rounded-3xl p-6 shadow-lg flex flex-col items-center justify-center text-center">
                  <h1 className="text-4xl md:text-5xl font-bold">{card.h1}</h1>
                  <div className="flex items-center justify-center gap-1 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-green-500 fill-green-500"
                      />
                    ))}
                  </div>
                  <p className="mt-3 text-sm md:text-base text-gray-500">{card.p}</p>
                </div>
                <div className="flex-1 bg-white rounded-3xl p-6 shadow-lg text-sm md:text-lg leading-relaxed text-gray-700">
                  {card.h3}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
                 
  );
}