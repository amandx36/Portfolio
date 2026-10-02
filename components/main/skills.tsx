import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import { SKILL_DATA } from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="shell relative flex flex-col items-center overflow-hidden"
    >
      <SkillText />

      <div className="glass-panel grid w-full max-w-5xl grid-cols-3 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-5">
        {SKILL_DATA.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>
    </section>
  );
};
