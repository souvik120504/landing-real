"use client";
import { useEffect, useState } from "react";
interface Card {
  id: number;
  title: string;
  desc: string;
  img: string;
}
const cards:Card[] = [
  { id: 1, title: "Luxury Villa", desc: "Beautiful modern villa", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
  { id: 2, title: "City Apartment", desc: "Perfect for urban life", img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994" },
  { id: 3, title: "Modern House", desc: "Minimal design", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be" },
  { id: 4, title: "Beach House", desc: "Sea side living", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85" },
  { id: 5, title: "Cabin", desc: "Nature vibes", img: "https://images.unsplash.com/photo-1449844908441-8829872d2607" },
  { id: 6, title: "Luxury Flat", desc: "Premium feel", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb" },
  { id: 7, title: "Classic Home", desc: "Timeless look", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2" },
  { id: 8, title: "Smart Home", desc: "Future tech", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" },
  { id: 9, title: "Penthouse", desc: "Top floor luxury", img: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6" },
  { id: 10, title: "Studio", desc: "Compact living", img: "https://images.unsplash.com/photo-1554995207-c18c203602cb" },
];
export default function Gallerysec() {
  const [scrollX, setScrollX] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollX((prev) => prev + 1);
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden w-full py-10">
      <div
        className="flex gap-4"
        style={{
          transform: `translateX(-${scrollX}px)`,
          width: "max-content",
        }}
      >
        {[...cards, ...cards].map((card, index) => (
          <div
            key={index}
            className="relative min-w-[220px] md:min-w-[260px] h-[250px] md:h-[300px] rounded-3xl overflow-hidden group transition-all duration-300"
          >
            <img
              src={card.img}
              className="w-full h-full object-cover"
              alt={card.title}
            />

            <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
              <h1 className="text-white text-lg md:text-xl font-bold">
                {card.title}
              </h1>
              <p className="text-white text-sm md:text-base">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}