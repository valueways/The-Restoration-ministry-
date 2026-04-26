import { motion } from 'motion/react';
import { MINISTRIES } from '../../data';
import { ArrowRight } from 'lucide-react';

export function Ministries() {
  return (
    <section id="ministries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-accent-gold uppercase tracking-[0.2em] text-sm font-semibold mb-3">Our Organizations</h4>
          <h2 className="text-4xl font-serif text-secondary-navy mb-6">Ministries & Fellowships</h2>
          <p className="text-secondary-navy/70 font-light leading-relaxed">
            Find your place in our spiritual family. We have dedicated groups to help you grow, serve, and connect with others.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 flex-wrap">
          {MINISTRIES.map((ministry, i) => (
            <motion.div
              key={ministry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-primary-cream rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow group flex flex-col items-start min-h-[250px]"
            >
              <h3 className="font-serif text-2xl text-secondary-navy mb-4">{ministry.name}</h3>
              <p className="text-secondary-navy/70 text-sm leading-relaxed mb-8 flex-grow">
                {ministry.description}
              </p>
              <a href="#contact" className="inline-flex items-center text-accent-gold font-medium text-sm hover:text-accent-gold/80 transition-colors mt-auto">
                Learn More
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
