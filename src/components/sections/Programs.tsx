import { motion } from 'motion/react';
import { PROGRAMS } from '../../data';
import { Clock } from 'lucide-react';

export function Programs() {
  return (
    <section id="programs" className="py-24 bg-secondary-purple text-primary-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-accent-gold uppercase tracking-[0.2em] text-sm font-semibold mb-3">Join Us</h4>
          <h2 className="text-4xl font-serif mb-6 text-white">Programs & Events</h2>
          <p className="text-primary-cream/80 font-light leading-relaxed">
            Experience the transforming power of the Holy Spirit in our regular services and special programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROGRAMS.map((program, i) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
            >
              <div className="inline-flex items-center space-x-2 bg-accent-gold/20 text-accent-gold px-4 py-2 rounded-full text-xs font-medium tracking-wide uppercase mb-6">
                <Clock size={14} />
                <span>{program.schedule}</span>
              </div>
              <h3 className="font-serif text-2xl text-white mb-4">{program.name}</h3>
              <p className="text-primary-cream/70 text-sm leading-relaxed">
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
