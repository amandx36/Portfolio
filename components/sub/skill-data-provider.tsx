"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="group flex min-h-32 flex-col items-center justify-center gap-3 bg-black/70 p-4 transition hover:bg-orange-300/[0.07]"
    >
      <Image className="h-12 w-12 object-contain transition duration-300 group-hover:scale-110" src={`/skills/${src}`} width={width} height={height} alt={name} />
      <span className="text-center text-xs font-medium text-zinc-400 group-hover:text-zinc-100">{name}</span>
    </motion.div>
  );
};
