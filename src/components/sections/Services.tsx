import { motion } from 'motion/react';
import { Mic2, HeartHandshake, Flame, ShieldCheck } from 'lucide-react';

const services = [
  { icon: Mic2, title: "Speaking Engagements", desc: "Inviting Evangelist Omoragbon Austin to minister the uncompromised word of God." },
  { icon: HeartHandshake, title: "Counseling & Mentorship", desc: "Biblical guidance for life's challenges, relationships, and spiritual growth." },
  { icon: Flame, title: "Prayer & Deliverance", desc: "Dedicated sessions for spiritual liberation, healing, and breakthroughs." },
  { icon: ShieldCheck, title: "Leadership Training", desc: "Equipping believers to walk in spiritual authority and influence their spheres." },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-primary-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-accent-gold uppercase tracking-[0.2em] text-sm font-semibold mb-3">How We Serve</h4>
          <h2 className="text-4xl font-serif text-secondary-navy mb-6">Spiritual Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center text-accent-gold mb-6 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-accent-gold/10 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
                  <Icon size={32} className="relative z-10" />
                </div>
                <h3 className="font-serif text-xl text-secondary-navy mb-3">{service.title}</h3>
                <p className="text-secondary-navy/70 text-sm leading-relaxed max-w-[250px]">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
