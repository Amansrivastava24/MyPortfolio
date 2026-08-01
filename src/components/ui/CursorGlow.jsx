import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

const CursorGlow = () => {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[1] hidden lg:block"
      animate={{ x: x - 250, y: y - 250 }}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
    >
      <div className="w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
    </motion.div>
  );
};

export default CursorGlow;
