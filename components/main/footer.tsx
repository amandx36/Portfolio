import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <footer className="shell border-t border-white/10 py-10 text-zinc-400">
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex w-full flex-row flex-wrap items-start justify-center gap-10 sm:justify-around">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="flex min-w-[140px] flex-col items-center"
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-200">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-4 flex items-center gap-2 text-sm transition hover:text-orange-300"
                >
                  {Icon && <Icon />}
                  <span>{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="text-center text-sm">
          &copy; Aman Deep {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
