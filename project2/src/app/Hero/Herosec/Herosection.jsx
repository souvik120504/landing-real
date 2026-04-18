"use client"
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { FaLocationDot } from "react-icons/fa6";
import { Diamond , House , Clock , Users } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Herosection() {
    return (
        <motion.div
            className="relative flex flex-col justify-between items-center w-full max-w-[1200px] min-h-[80vh] md:min-h-[90vh] border-4 border-white rounded-2xl px-4 py-6 md:px-8 md:py-8 mx-auto overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <Navbar />

            <motion.div variants={itemVariants} className="w-full max-w-3xl text-center">
                <motion.h1
                    variants={itemVariants}
                    className="text-3xl md:text-6xl font-bold leading-tight text-black"
                >
                    Find Your <br /> Perfect <span className="text-white">Space</span>
                </motion.h1>
                <motion.p
                    variants={itemVariants}
                    className="mt-4 text-sm md:text-base text-white max-w-xl mx-auto leading-relaxed"
                >
                    Discover Handpicked Luxury Cabins in Breathtaking Locations. Unplug, unwind, and reconnect with what matters most.
                </motion.p>
            </motion.div>

            <motion.div
                variants={itemVariants}
                className="w-full flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 md:gap-4 mt-6"
            >
                {[
                  { label: "Self Check-in" },
                  { label: "Wi-Fi 100Mbps" },
                  { label: "Pet Friendly" },
                ].map((item, index) => (
                  <motion.button
                    key={item.label}
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    style={{ background: 'rgba(0,0,0,0.2)' }}
                    className="min-w-[180px] px-4 py-3 shadow-md flex items-center justify-center gap-2 text-white rounded-full transition duration-300 text-sm md:text-base"
                  >
                    <Diamond size={18} className="text-white" /> {item.label}
                  </motion.button>
                ))}
            </motion.div>

            <motion.div variants={itemVariants} className="w-full flex flex-col md:flex-row items-center justify-between gap-4 mt-8 px-2 md:px-6">
                <motion.div
                    variants={itemVariants}
                    className="bg-white rounded-full h-12 w-12 md:h-14 md:w-14 flex items-center justify-center text-xl md:text-2xl text-black"
                >
                    <FaLocationDot />
                </motion.div>
                <motion.p
                    variants={itemVariants}
                    className="text-center md:text-left text-gray-200 text-sm md:text-lg font-semibold max-w-xl"
                >
                    Experience the perfect blend of comfort and nature crafted for your ultimate escape.
                </motion.p>
                <motion.p
                    variants={itemVariants}
                    className="text-center text-white font-bold text-lg md:text-3xl"
                >
                    *4.9<br />
                    <span className="text-gray-300 text-xs md:text-sm">from 2400 stays</span>
                </motion.p>
            </motion.div>

            <motion.div
                variants={itemVariants}
                className="relative mx-auto mt-10 w-full max-w-[92vw] md:max-w-[1080px] bg-white/95 rounded-3xl p-2 md:p-3 shadow-xl flex flex-wrap items-center justify-center gap-2 md:gap-3"
            >
                {[{
                  icon: House,
                  text: "Room\nPhone Log",
                  width: "md:min-w-[150px]",
                }, {
                  icon: Clock,
                  text: "Check-in\n15 March 2025",
                  width: "md:min-w-[170px]",
                }, {
                  icon: Clock,
                  text: "Check-out\n20 March 2025",
                  width: "md:min-w-[180px]",
                }, {
                  icon: Users,
                  text: "Guests\n4 people",
                  width: "md:min-w-[170px]",
                }].map((card) => {
                  const Icon = card.icon;
                  return (
                    <motion.div
                      key={card.text}
                      variants={itemVariants}
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.25 }}
                      className={`flex min-w-[120px] ${card.width} h-10 md:h-12 hover:bg-amber-200 rounded-full items-center justify-center gap-2 md:gap-3 px-3 md:px-4 transition duration-300 shrink-0`}
                    >
                      <Icon size={16} className="md:w-5 md:h-5" />
                      <div className="flex flex-col text-[11px] md:text-sm font-semibold text-center whitespace-normal">
                        {card.text.split("\n").map((line, idx) => (
                          <span key={idx}>{line}</span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25 }}
                  className="flex min-w-[120px] md:min-w-[170px] h-10 md:h-12 hover:bg-amber-200 text-[11px] md:text-sm font-semibold rounded-full items-center justify-center px-3 md:px-4 transition duration-300 shrink-0"
                >
                  Book Your Stay
                </motion.div>
            </motion.div>
        </motion.div>
    )
}