import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import StatsCounter from '../components/sections/StatsCounter';
import { personalInfo } from '../data/personalInfo';

const About = () => {
  return (
    <div className="pt-32">
      <section className="section-container !pt-0">
        <SectionHeading label="About Me" title="The story behind the code" align="left" />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
              <div className="relative glass-card !p-0 aspect-[4/5] flex items-center justify-center overflow-hidden">
                <img src="/profile.jpg" alt="Aman Srivastava" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {personalInfo.quickFacts.map((fact) => (
                <div key={fact.label} className="glass-card !p-4">
                  <p className="text-xs text-muted uppercase tracking-wide mb-1">{fact.label}</p>
                  <p className="text-white font-medium text-sm">{fact.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-lg text-white/90 leading-relaxed">{personalInfo.about.intro}</p>
            <p className="text-muted leading-relaxed">{personalInfo.about.story}</p>
            <p className="text-muted leading-relaxed">{personalInfo.about.journey}</p>
            <div className="glass-card !p-6 border-l-2 border-l-primary">
              <p className="text-sm text-white/80 leading-relaxed italic">{personalInfo.about.objective}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-container">
        <StatsCounter stats={personalInfo.stats} />
      </section>

      <section className="section-container !pt-0">
        <SectionHeading label="Highlights" title="Key Achievements" align="left" />
        <div className="grid gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card !p-6"
          >
            <ul className="space-y-4 text-muted">
              <li className="flex gap-3">
                <span className="text-accent">🏆</span>
                <span>Solved <strong>700+ Data Structures & Algorithms problems</strong> across LeetCode, Codeforces and other coding platforms.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">🚀</span>
                <span>Achieved a peak rating of <strong>1631 on LeetCode</strong> and actively participate in competitive programming contests.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">🥈</span>
                <span>Secured <strong>Runner-Up position in Tech Trivia 2025</strong> for presenting an Edge-AI based Smart Glasses solution for visually impaired individuals.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">🎖️</span>
                <span>Received the <strong>Honourable Mention Award at GLBMUN 2024</strong> for outstanding performance.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">🌟</span>
                <span>Secured <strong>AIR 7 in Smart India Hackathon 2025</strong> after advancing through the Internal Hackathon Round from a pool of 450+ participating teams.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
