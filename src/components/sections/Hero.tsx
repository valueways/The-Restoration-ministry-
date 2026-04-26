import { motion } from 'motion/react';
import { CHURCH_INFO } from '../../data';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-cream">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-gold/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-navy/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="inline-flex items-center space-x-2 bg-accent-gold/10 text-accent-gold px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6">
              <span>Welcome to {CHURCH_INFO.name}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-serif text-secondary-navy font-bold leading-[1.1] mb-6">
              Restoring Broken Lives Through God's Word
            </h1>
            
            <p className="text-lg md:text-xl text-secondary-navy/70 font-light max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed border-l-4 border-accent-gold pl-6 text-left">
              {CHURCH_INFO.bioSummary}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href={CHURCH_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-accent-gold text-white rounded-full font-medium tracking-wide hover:bg-accent-gold/90 shadow-lg shadow-accent-gold/20 transition-all hover:-translate-y-1"
              >
                Request Prayer
              </a>
              <a 
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-transparent text-secondary-navy rounded-full font-medium tracking-wide border border-secondary-navy/20 hover:border-secondary-navy hover:bg-secondary-navy/5 transition-all"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative order-1 lg:order-2"
          >
             <div className="relative rounded-t-full rounded-b-[2rem] overflow-hidden aspect-[4/5] shadow-2xl border-8 border-white">
                <img 
                  src="https://iili.io/BP3kM2R.jpg" 
                  alt={CHURCH_INFO.minister}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-navy/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-center pb-12">
                  <h3 className="font-serif tracking-wide text-white text-3xl drop-shadow-md">
                    {CHURCH_INFO.minister}
                  </h3>
                  <p className="text-accent-gold text-sm font-medium tracking-widest uppercase mt-2">
                    Founder / Lead Pastor
                  </p>
                </div>
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute -z-10 top-10 -right-8 w-32 h-32 bg-accent-gold/30 rounded-full blur-xl" />
             <div className="absolute -z-10 bottom-10 -left-8 w-40 h-40 bg-secondary-navy/20 rounded-full blur-xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
