import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaDownload } from 'react-icons/fa';
import { navLinks } from '../../data/navLinks';
import { socialLinks } from '../../data/socialLinks';
import { personalInfo } from '../../data/personalInfo';
import { cn } from '../../utils/cn';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'py-3 glass border-b border-white/5' : 'py-5 bg-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          <Link to="/" className="text-2xl font-display font-bold gradient-text">
            Aman<span className="text-white">.dev</span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.path} className="relative">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      'relative px-4 py-2 text-sm font-medium rounded-full transition-colors',
                      isActive ? 'text-white' : 'text-muted hover:text-white'
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-white/10 border border-white/10"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            {socialLinks.slice(0, 3).map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-muted hover:text-white transition-colors text-lg"
              >
                <social.icon />
              </a>
            ))}
            <a
              href={personalInfo.resumeUrl}
              download="Aman_Srivastava_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs px-3.5 py-1.5 flex items-center gap-2"
            >
              <FaDownload className="text-xs" /> Resume
            </a>
          </div>


          <button
            className="lg:hidden text-2xl text-white z-50"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="block"
              >
                {mobileOpen ? <HiX /> : <HiMenu />}
              </motion.span>
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden flex flex-col justify-center items-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.4 }}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    cn('text-2xl font-display font-medium', isActive ? 'gradient-text' : 'text-white/80')
                  }
                >
                  {link.name}
                </NavLink>
              </motion.div>
            ))}
            <div className="flex flex-col items-center gap-4 mt-6">
              <a
                href={personalInfo.resumeUrl}
                download="Aman_Srivastava_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center gap-2"
              >
                <FaDownload /> Download Resume
              </a>
              <div className="flex gap-6 mt-2">
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-2xl text-white/70 hover:text-white">
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
