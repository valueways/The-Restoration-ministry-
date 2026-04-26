import { motion } from 'motion/react';
import { TESTIMONIALS } from '../../data';
import { Quote } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="py-24 bg-primary-cream relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white -skew-y-3 transform origin-top-left -z-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-accent-gold uppercase tracking-[0.2em] text-sm font-semibold mb-3">Testimonies</h4>
          <h2 className="text-4xl font-serif text-secondary-navy">Lives Transformed</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white rounded-3xl p-10 shadow-sm relative"
            >
              <Quote className="text-accent-gold/20 mb-6 absolute top-8 left-8" size={60} />
              <p className="text-secondary-navy/80 font-serif italic text-lg leading-relaxed relative z-10 mb-8 pt-4">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-secondary-navy/5 text-secondary-navy rounded-full flex items-center justify-center font-serif font-bold text-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h5 className="font-semibold text-secondary-navy text-sm uppercase tracking-wider">{testimonial.author}</h5>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
