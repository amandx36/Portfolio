"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="mb-12 flex h-auto w-full flex-col items-center justify-center text-center sm:mb-16">
      <motion.div
        variants={slideInFromTop}
        className="glass-panel flex items-center rounded-full px-3 py-1.5"
      >
        <SparklesIcon className="mr-2 h-4 w-4 text-orange-300" />
        <p className="text-xs font-medium tracking-wide text-zinc-200">MY TOOLKIT</p>
      </motion.div>

      {/* Main Title */}
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
      >
        Built with focus, not clutter.
      </motion.div>

      {/* Subtext */}
      <motion.div
        variants={slideInFromRight(0.5)}
        className="mt-3 max-w-xl text-base leading-7 text-zinc-400"
      >
        A practical stack for thoughtfully engineered digital experiences.
      </motion.div>
    </div>
  );
};
