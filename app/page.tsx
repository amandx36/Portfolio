import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="relative z-10 w-full">
      <div className="flex flex-col gap-24 pb-24 sm:gap-32 sm:pb-32">
        <Hero />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
