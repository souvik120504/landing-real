"use client";
import Gallerysec from "./Gallerysec";
export default function Gallerymain() {
  return (
    <div className="w-full bg-gradient-to-b from-white to-sky-200 py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-700 mt-2 text-sm md:text-base">GALLERY</p>
        <h1 className="text-2xl md:text-4xl font-bold mt-4">Most Investment Properties</h1>
      </div>
      <Gallerysec />
    </div>
  );
}
