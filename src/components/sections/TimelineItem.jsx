import { motion } from 'framer-motion';
import { formatDuration } from '../../utils/formatDate';

const TimelineItem = ({ item, index, type = 'experience' }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="relative pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-12 mb-14"
    >
      <span className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-1 w-4 h-4 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background" />
      <div className={`hidden md:block ${isLeft ? '' : 'order-2'}`} />

      <div className={`glass-card !p-6 ${isLeft ? 'md:order-1' : ''}`}>
        {type === 'experience' ? (
          <>
            <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
              <div>
                <h3 className="text-lg font-display font-semibold text-white">{item.role}</h3>
                <p className="text-primary-light font-medium">{item.company}</p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted whitespace-nowrap">
                {formatDuration(item.startDate, item.endDate, item.current)}
              </span>
            </div>
            <p className="text-muted text-sm mb-4">{item.location} · {item.employmentType}</p>
            <ul className="space-y-2 mb-4">
              {item.responsibilities.map((r, i) => (
                <li key={i} className="text-sm text-white/80 flex gap-2">
                  <span className="text-accent mt-1.5">▸</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted">
                  {tech}
                </span>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
              <div>
                <h3 className="text-lg font-display font-semibold text-white">{item.degree}</h3>
                <p className="text-primary-light font-medium">{item.institution}</p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted whitespace-nowrap">
                {item.startYear} — {item.endYear || 'Present'}
              </span>
            </div>
            <p className="text-muted text-sm mb-4">{item.fieldOfStudy} · CGPA/Score: {item.cgpa}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {item.coursework.map((c) => (
                <span key={c} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted">
                  {c}
                </span>
              ))}
            </div>
            <ul className="space-y-2">
              {item.achievements.map((a, i) => (
                <li key={i} className="text-sm text-white/80 flex gap-2">
                  <span className="text-accent mt-1.5">▸</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default TimelineItem;
