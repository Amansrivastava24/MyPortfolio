import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const SkillCard = ({ skill, index = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
      whileHover={{ y: -4 }}
      className="glass-card !p-5"
    >
      <div className="flex items-center justify-center py-2">
        <span className="font-medium text-white text-sm text-center">{skill.name}</span>
      </div>
    </motion.div>
  );
};

export default SkillCard;
