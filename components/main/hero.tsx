import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <section id="about-me" className="relative isolate flex min-h-[760px] items-center overflow-hidden pt-24 sm:min-h-[820px]">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25 mix-blend-screen"
      >
        <source src="/videos/blackHole.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_35%,rgba(249,115,22,0.13),transparent_28%),radial-gradient(circle_at_15%_80%,rgba(255,255,255,0.06),transparent_24%),linear-gradient(to_bottom,#000,rgba(0,0,0,0.88))]" />
      <HeroContent />
    </section>
  );
};
