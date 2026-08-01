import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import { projects } from '../data/projects';

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/404" replace />;

  const sections = [
    { title: 'Overview', content: project.description },
    { title: 'Problem Statement', content: project.problemStatement },
    { title: 'Solution', content: project.solution },
    { title: 'Architecture', content: project.architecture },
    { title: 'Challenges', content: project.challenges },
    { title: 'Results', content: project.results },
  ];

  return (
    <div className="pt-32">
      <section className="section-container !pt-0">
        <Link to="/projects" className="inline-flex items-center gap-2 text-muted hover:text-white transition-colors mb-8 text-sm">
          <FaArrowLeft /> Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden h-72 sm:h-96 glass-card !p-0 flex items-center justify-center mb-12 bg-gradient-to-br from-primary/20 to-secondary/20"
        >
          <span className="text-6xl sm:text-8xl font-display font-bold text-white/10">{project.title.split(' ')[0]}</span>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h1 className="text-3xl sm:text-4xl font-display font-bold mb-3">{project.title}</h1>
              <p className="text-muted text-lg leading-relaxed">{project.shortDescription}</p>
            </div>

            {sections.map(
              (section) =>
                section.content && (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl font-display font-semibold mb-3 text-white">{section.title}</h2>
                    <p className="text-muted leading-relaxed">{section.content}</p>
                  </motion.div>
                )
            )}

            {project.gallery?.length > 0 && (
              <div>
                <h2 className="text-xl font-display font-semibold mb-4 text-white">Gallery</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.gallery.map((img, i) => (
                    <div key={i} className="aspect-video rounded-2xl glass-card !p-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                      <span className="text-muted text-sm">Gallery Image {i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="glass-card !p-6 sticky top-28">
              <h3 className="font-semibold text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-muted">
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="font-semibold text-white mb-4">Key Features</h3>
              <ul className="space-y-2 mb-6">
                {project.features.map((f, i) => (
                  <li key={i} className="text-sm text-white/80 flex gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline w-full">
                    <FaGithub /> View Code
                  </a>
                )}

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
