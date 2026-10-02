"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="shell flex w-full flex-col-reverse items-center justify-between gap-12 py-16 md:flex-row md:gap-16"
    >
      {/* Left Content */}
      <div className="flex w-full max-w-2xl flex-col gap-6 text-center md:text-left">
        {/* Role Box */}
        <motion.div
          variants={slideInFromTop}
          className="glass-panel mx-auto flex max-w-fit items-center gap-2 rounded-full px-3 py-1.5 md:mx-0"
        >
          <SparklesIcon className="h-4 w-4 text-orange-300" />
          <p className="text-xs font-medium tracking-wide text-zinc-200">
            FULL-STACK · AI/ML · DEVOPS
          </p>
        </motion.div>

        {/* Hero Heading */}
        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Merging{" "}
            <span className="bg-gradient-to-r from-orange-200 via-orange-400 to-amber-500 bg-clip-text text-transparent">
            Web Development
          </span>{" "}
          with{" "}
            <span className="bg-gradient-to-r from-orange-200 via-orange-400 to-amber-500 bg-clip-text text-transparent">
            Machine Intelligence
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="max-w-lg text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8"
        >
         I build considered, data-driven products where reliable full-stack engineering meets practical machine intelligence.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.a
          variants={slideInFromLeft(1)}
          href="#projects"
          className="mx-auto flex w-fit items-center justify-center rounded-full border border-orange-300/50 bg-orange-400/10 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(249,115,22,0.12)] transition hover:-translate-y-0.5 hover:bg-orange-400/20 hover:shadow-[0_0_35px_rgba(249,115,22,0.25)] md:mx-0"
        >
          Learn more
        </motion.a>
      </div>

      {/* Right Side Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="flex w-full max-w-xl items-center justify-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={400}
          width={400}
          draggable={false}
          className="select-none drop-shadow-[0_0_70px_rgba(249,115,22,0.18)] sm:h-[440px] sm:w-[440px] lg:h-[520px] lg:w-[520px]"
        />
      </motion.div>
    </motion.div>
  );
};
