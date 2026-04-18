"use client";
import { useState } from "react";
import { BadgeCheck, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full max-w-6xl mx-auto px-4 md:px-6 py-4 bg-transparent">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <BadgeCheck size={25} className="fill-gray-300" />
          <h1 className="text-xl font-bold text-black">Harmont</h1>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Locations', 'Rooms', 'Experiences', 'Contacts'].map((item) => (
            <button key={item} className="text-lg font-medium text-white hover:text-black transition">
              {item}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <button className="px-4 py-2 text-base rounded-full bg-white text-black hover:bg-black hover:text-white transition">
            Book now
          </button>
        </div>

        <button className="md:hidden text-black" onClick={() => setOpen((prev) => !prev)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-4 rounded-3xl bg-black/95 p-4 text-white shadow-lg">
          <div className="flex flex-col gap-4">
            {['Locations', 'Rooms', 'Experiences', 'Contacts'].map((item) => (
              <button key={item} className="w-full text-left text-lg font-medium hover:text-gray-300 transition">
                {item}
              </button>
            ))}
          </div>

          <button className="mt-5 w-full rounded-full bg-white py-3 text-black font-semibold hover:bg-gray-200 transition">
            Book now
          </button>
        </div>
      )}
    </nav>
  );
}
    