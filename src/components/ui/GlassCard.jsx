import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const GlassCard = ({ children, className, hover = true, ...props }) => {
  return (
    <motion.div
      className={cn('glass-card p-6', hover && 'hover:border-white/20 hover:-translate-y-1', className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
