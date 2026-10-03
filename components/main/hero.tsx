import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <section id="about-me" className="relative flex min-h-[760px] items-center overflow-hidden pt-24 sm:min-h-[820px]">
      <video
        autoPlay
        muted
        loop
        className="absolute left-0 top-[-340px] -z-20 h-full w-full rotate-180 object-cover"
      >
        <source src="/videos/blackHole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </section>
  );
};
