import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  link: string;
};

export const ProjectCard = ({ src, title, link }: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="glass-panel group relative w-full overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-orange-300/40 hover:bg-white/[0.07]"
    >
      <div>
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="h-56 w-full object-cover object-left-top opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="relative p-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-orange-300">Open project ↗</p>
          <h3 className="text-xl font-semibold leading-snug text-white">{title}</h3>
        </div>
      </div>
    </Link>
  );
};
