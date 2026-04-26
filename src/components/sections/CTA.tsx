import { motion } from 'motion/react';
import { CHURCH_INFO } from '../../data';
import { MessageSquare, Heart } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 relative bg-secondary-navy overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent-gold via-transparent to-transparent" />
      <div 
        className="absolute right-0 bottom-0 opacity-5 -z-0"
        style={{ fontSize: '300px', lineHeight: 0.5, fontFamily: 'serif' }}
      >
        "
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
            Need Prayer, Counseling, or Spiritual Guidance?
          </h2>
          <p className="text-primary-cream/80 text-lg mb-12 font-light max-w-2xl mx-auto">
            We are here for you. Reach out to us today and let us stand with you in faith. 
            God's power to restore is available for your life.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-accent-gold text-white rounded-full font-medium tracking-wide hover:bg-accent-gold/90 transition-colors flex items-center justify-center gap-2"
            >
              <Heart size={20} />
              Request Prayer
            </a>
            <a
              href={CHURCH_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white text-secondary-navy rounded-full font-medium tracking-wide hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare size={20} />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
