import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import SkillCard from '../components/sections/SkillCard';
import { skills, skillCategories } from '../data/skills';
import { cn } from '../utils/cn';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = useMemo(() => {
    if (activeCategory === 'All') return skills;
    return skills.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="pt-32">
      <section className="section-container !pt-0">
        <SectionHeading
          label="Capabilities"
          title="Skills & Technologies"
          subtitle="A comprehensive look at the languages, frameworks, and tools I use to build reliable software."
        />

        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {['All', ...skillCategories].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-5 py-2 rounded-full text-sm font-medium transition-all border',
                activeCategory === category
                  ? 'bg-gradient-primary border-transparent text-white shadow-glow'
                  : 'border-white/10 text-muted hover:text-white hover:border-white/30'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {filteredSkills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Skills;
