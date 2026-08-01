import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';

const ProjectCard = ({ project, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -8 }}
      className="group glass-card overflow-hidden flex flex-col"
    >
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
        <span className="text-5xl font-display font-bold text-white/10 group-hover:scale-110 transition-transform duration-500">
          {project.title.split(' ')[0]}
        </span>
        {project.featured && (
          <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full bg-accent/20 text-accent border border-accent/30">
            Featured
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-3 pb-4">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/30" onClick={(e) => e.stopPropagation()}>
              <FaGithub />
            </a>
          )}

        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-display font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-muted text-sm leading-relaxed mb-4 flex-1">{project.shortDescription}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted">
              {tech}
            </span>
          ))}
        </div>

        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary-light hover:text-white transition-colors group/link"
        >
          Case Study
          <FaArrowRight className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
