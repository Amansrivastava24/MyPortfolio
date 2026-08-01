import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
import { personalInfo } from '../../data/personalInfo';
import { socialLinks } from '../../data/socialLinks';
import MagneticButton from '../ui/MagneticButton';

const RoleChanger = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-10 sm:h-12 overflow-hidden relative">
      <motion.div
        key={index}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-xl sm:text-2xl font-medium text-primary-light absolute inset-0 flex items-center justify-center lg:justify-start"
      >
        {personalInfo.roles[index]}
      </motion.div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-blob" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[140px]" />

      <div className="section-container !py-0 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary-light font-medium mb-4 tracking-wide"
          >
            👋 Hi, I'm {personalInfo.firstName}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-[1.05] mb-4"
          >
            I craft <span className="gradient-text bg-[length:200%_auto] animate-gradient-x">digital</span>
            <br /> experiences.
          </motion.h1>

          <RoleChanger />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted text-lg mt-6 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            {personalInfo.about.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-10"
          >
            <MagneticButton>
              <Link to="/projects" className="btn-primary">
                View Projects <FaArrowRight />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <a href={personalInfo.resumeUrl} download className="btn-outline">
                <FaDownload /> Resume
              </a>
            </MagneticButton>

          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center lg:justify-start gap-5 mt-10"
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-xl text-muted hover:text-white hover:-translate-y-1 transition-all"
              >
                <social.icon />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:flex items-center justify-center"
        >
          <div className="relative w-80 h-80 xl:w-[420px] xl:h-[420px]">
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-3xl animate-pulse" />
            <div className="absolute inset-4 rounded-[2.5rem] glass flex items-center justify-center overflow-hidden">
              <img src="/profile.jpg" alt="Aman Srivastava" className="w-full h-full object-cover" />
            </div>




          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-5 h-9 rounded-full border border-white/20 flex justify-center pt-2"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <div className="w-1 h-2 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
