import { motion } from 'framer-motion';
import { useCountUp } from '../../hooks/useCountUp';

const StatItem = ({ label, value }) => {
  const { count, ref } = useCountUp(value, 1800);
  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl sm:text-5xl font-display font-extrabold gradient-text">{count}+</p>
      <p className="text-muted text-sm mt-2">{label}</p>
    </div>
  );
};

const StatsCounter = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 glass-card !p-10">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        >
          <StatItem label={stat.label} value={stat.value} />
        </motion.div>
      ))}
    </div>
  );
};

export default StatsCounter;
