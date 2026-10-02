import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="shell flex flex-col items-center"
    >
      <div className="mb-12 text-center sm:mb-16">
        <p className="section-kicker mb-3">Selected work</p>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Things I&apos;ve built.</h2>
      </div>

      {/* Cards */}
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};
