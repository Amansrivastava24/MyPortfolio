import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectCard from '../components/sections/ProjectCard';
import { projects, projectCategories } from '../data/projects';
import { cn } from '../utils/cn';

const PAGE_SIZE = 6;

const Projects = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = category === 'all' || p.category === category;
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.techStack.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleFilterChange = (fn) => (...args) => {
    fn(...args);
    setPage(1);
  };

  return (
    <div className="pt-32">
      <section className="section-container !pt-0">
        <SectionHeading
          label="Portfolio"
          title="Projects"
          subtitle="A collection of things I've designed, built, and shipped — from full-stack SaaS tools to AI-powered experiments."
        />



        <AnimatePresence mode="wait">
          {paginated.length > 0 ? (
            <motion.div
              key={`${category}-${search}-${page}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {paginated.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <p className="text-muted text-lg">No projects match your search.</p>
            </motion.div>
          )}
        </AnimatePresence>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-14">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={cn(
                  'w-10 h-10 rounded-full text-sm font-medium transition-all',
                  page === p ? 'bg-gradient-primary text-white' : 'glass text-muted hover:text-white'
                )}
              >
                {p}
              </button>
            ))}
          </div>
        )}

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <p className="text-muted text-lg mb-6">Want to see more of my work?</p>
          <a 
            href="https://github.com/Amansrivastava24" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-outline inline-flex items-center gap-2"
          >
            <FaGithub /> View More on GitHub
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Projects;
