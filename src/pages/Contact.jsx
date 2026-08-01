import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import SectionHeading from '../components/ui/SectionHeading';
import { personalInfo } from '../data/personalInfo';
import { socialLinks } from '../data/socialLinks';

const contactDetails = [
  { icon: FaEnvelope, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: FaPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: FaMapMarkerAlt, label: 'Location', value: personalInfo.location, href: '' },
];

const Contact = () => {
  return (
    <div className="pt-32">
      <section className="section-container !pt-0">
        <SectionHeading
          label="Let's Talk"
          title="Get In Touch"
          subtitle="Feel free to reach out to me via email or phone."
        />

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card !p-6 flex items-center justify-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-white">{personalInfo.availability}</span>
            </div>

            {contactDetails.map((detail) => (
              <a
                key={detail.label}
                href={detail.href || undefined}
                className="glass-card !p-6 flex items-center gap-4 hover:border-primary/40 transition-colors"
              >
                <div className="w-11 h-11 rounded-full bg-gradient-primary flex items-center justify-center shrink-0">
                  <detail.icon />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wide">{detail.label}</p>
                  <p className="text-white font-medium text-sm">{detail.value}</p>
                </div>
              </a>
            ))}

            <div className="glass-card !p-6">
              <p className="text-xs text-muted uppercase tracking-wide mb-4 text-center">Find me online</p>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:border-primary/50 transition-colors"
                  >
                    <social.icon className="text-lg" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
