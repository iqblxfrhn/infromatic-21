"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const ProfileText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold mt-[5px] text-center mb-[10px]"
      >
        Profile Company
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[25px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Teknik Informatika Universitas Islam Raden Rahmat Malang
      </motion.div>
    </div>
  );
};

export default ProfileText;
