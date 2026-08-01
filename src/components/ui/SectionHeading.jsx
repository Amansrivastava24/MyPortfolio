import { motion } from 'framer-motion';

const SectionHeading = ({ label, title, subtitle, align = 'center' }) => {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <motion.div
      className={`flex flex-col ${alignment} max-w-2xl mb-16`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {label && <span className="section-label">{label}</span>}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">{title}</h2>
      {subtitle && <p className="text-muted text-lg leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
};

export default SectionHeading;
