import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Hero from '../components/sections/Hero';
import StatsCounter from '../components/sections/StatsCounter';
import ProjectCard from '../components/sections/ProjectCard';
import SkillCard from '../components/sections/SkillCard';
import SectionHeading from '../components/ui/SectionHeading';
import { personalInfo } from '../data/personalInfo';
import { projects } from '../data/projects';
import { skills } from '../data/skills';

const Home = () => {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const allowedCategories = ['Programming Languages', 'Frontend', 'Backend', 'Database'];
  const topSkills = skills
    .filter((s) => allowedCategories.includes(s.category))
    .sort((a, b) => b.proficiency - a.proficiency)
    .slice(0, 8);

  return (
    <>
      <Hero />

      <section className="section-container !pt-0">
        <StatsCounter stats={personalInfo.stats} />
      </section>

      <section className="section-container">
        <SectionHeading
          label="Selected Work"
          title="Featured Projects"
          subtitle="A handful of projects I'm most proud of — explore more for architecture, challenges, and results."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link to="/projects" className="btn-outline">
            View All Projects <FaArrowRight />
          </Link>
        </div>
      </section>

      <section className="section-container">
        <SectionHeading
          label="Toolbox"
          title="Technologies I Work With"
          subtitle="A snapshot of the skills I use daily to design, build, and ship products."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {topSkills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link to="/skills" className="btn-outline">
            See All Skills <FaArrowRight />
          </Link>
        </div>
      </section>

      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card !p-12 md:!p-16 text-center relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-secondary/20 rounded-full blur-[100px]" />
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 relative z-10">
            Have a project in mind?
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto mb-8 relative z-10">
            I'm currently {personalInfo.availability.toLowerCase()}. Let's build something great together.
          </p>
          <Link to="/contact" className="btn-primary relative z-10">
            Start a Conversation <FaArrowRight />
          </Link>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
