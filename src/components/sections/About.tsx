import { motion } from 'motion/react';
import { CHURCH_INFO } from '../../data';

export function About() {
  return (
    <section id="about" className="py-24 bg-primary-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://iili.io/BP3kM2R.jpg" 
                alt={CHURCH_INFO.minister}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-secondary-navy/10 mix-blend-multiply" />
            </div>
            {/* Design Element */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent-gold/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-accent-gold uppercase tracking-[0.2em] text-sm font-semibold mb-3">About The Founder</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary-navy mb-8 leading-tight">
              A Passionate Servant of God
            </h2>
            
            <div className="space-y-6 text-secondary-navy/80 font-light leading-relaxed mb-10">
              <p>
                <strong>{CHURCH_INFO.minister}</strong> is a passionate servant of God and the visionary founder of {CHURCH_INFO.name}. With a deep calling to restore lives, destinies, and broken relationships through the power of God's Word, he has dedicated his life to spreading the message of hope, healing, and divine transformation.
              </p>
              <p>
                From humble beginnings, the ministry was birthed through a divine encounter and a strong burden to see people delivered from spiritual struggles and empowered to fulfill their God-given purpose. 
              </p>
              <p>
                Known for a dynamic teaching style and a heart full of compassion, Evangelist Omoragbon Austin emphasizes holiness, faith, and total dependence on God. The ministry continues to grow as a place where individuals experience true restoration—spiritually, emotionally, and physically.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-secondary-navy/10">
              <div>
                <h5 className="font-serif text-xl text-secondary-navy mb-2">The Calling</h5>
                <p className="text-sm text-secondary-navy/70 leading-relaxed">To bring light to those in darkness and strength to the weary through consistent prayer and teaching.</p>
              </div>
              <div>
                <h5 className="font-serif text-xl text-secondary-navy mb-2">The Impact</h5>
                <p className="text-sm text-secondary-navy/70 leading-relaxed">Countless lives impacted, raising believers grounded in truth to influence their world positively.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
