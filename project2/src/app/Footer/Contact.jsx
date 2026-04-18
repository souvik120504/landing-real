"use client";
import { FaFacebookF , FaInstagram , FaTwitter , FaLinkedinIn } from "react-icons/fa";
export default function Contact() {
  return (
    <div className="w-full md:w-[22%] text-white flex flex-col items-center md:items-start justify-start gap-3">
      <h1 className="text-xl font-semibold">Contact Us</h1>
      <p className="text-base text-gray-300">+91-8801600884475</p>
      <p className="text-base text-gray-300">support@proinvest.com</p>
      <p className="text-base text-gray-300">info@proinvest.com</p>
      <div className="w-full mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
        <div className="h-12 w-12 flex items-center justify-center text-xl border-2 border-emerald-300 text-emerald-300 hover:text-black hover:bg-emerald-300 transition-all cursor-pointer duration-300 rounded-full"><FaFacebookF /></div>
        <div className="h-12 w-12 flex items-center justify-center text-xl border-2 border-emerald-300 text-emerald-300 hover:text-black hover:bg-emerald-300 transition-all cursor-pointer duration-300 rounded-full"><FaInstagram /></div>
        <div className="h-12 w-12 flex items-center justify-center text-xl border-2 border-emerald-300 text-emerald-300 hover:text-black hover:bg-emerald-300 transition-all cursor-pointer duration-300 rounded-full"><FaTwitter /></div>
        <div className="h-12 w-12 flex items-center justify-center text-xl border-2 border-emerald-300 text-emerald-300 hover:text-black hover:bg-emerald-300 transition-all cursor-pointer duration-300 rounded-full"><FaLinkedinIn /></div>
      </div>
    </div>
  );
} 