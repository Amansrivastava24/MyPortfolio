import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { socialLinks } from '../../data/socialLinks';
import { navLinks } from '../../data/navLinks';
import { personalInfo } from '../../data/personalInfo';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 mt-24">
      <div className="section-container !py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link to="/" className="text-2xl font-display font-bold gradient-text">
              Aman<span className="text-white">.dev</span>
            </Link>
            <p className="text-muted mt-4 max-w-xs leading-relaxed">{personalInfo.tagline}</p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:border-primary/50 transition-colors"
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-muted hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Get in touch</h4>
            <p className="text-muted text-sm mb-2">{personalInfo.email}</p>
            <p className="text-muted text-sm mb-6">{personalInfo.location}</p>
            <a href={personalInfo.resumeUrl} download className="btn-outline text-sm !py-2.5">
              Download Resume
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm">© {year} {personalInfo.name}. All rights reserved.</p>
          <p className="text-muted text-sm">Designed & built with React, Node.js and MongoDB.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
