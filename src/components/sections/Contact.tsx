import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { CHURCH_INFO } from '../../data';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app with Firebase, we would save to database here.
    // For now, we simulate a successful submission.
    console.log("Form data:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-accent-gold uppercase tracking-[0.2em] text-sm font-semibold mb-3">Get in Touch</h4>
          <h2 className="text-4xl font-serif text-secondary-navy">Contact & Location</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Map */}
          <div>
            <div className="bg-primary-cream rounded-3xl p-10 mb-8 shadow-sm">
              <h3 className="font-serif text-2xl text-secondary-navy mb-8">Reach Out</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-accent-gold flex-shrink-0 shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-secondary-navy text-sm uppercase tracking-wider mb-1">Our Location</h5>
                    <p className="text-secondary-navy/70 text-sm leading-relaxed">{CHURCH_INFO.location}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-accent-gold flex-shrink-0 shadow-sm">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-secondary-navy text-sm uppercase tracking-wider mb-1">Call Us</h5>
                    <p className="text-secondary-navy/70 text-sm leading-relaxed">
                      <a href={`tel:${CHURCH_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-accent-gold transition-colors">{CHURCH_INFO.phone}</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-accent-gold flex-shrink-0 shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-secondary-navy text-sm uppercase tracking-wider mb-1">Email Us</h5>
                    <p className="text-secondary-navy/70 text-sm leading-relaxed">
                       <a href="mailto:contact@restorationministry.org" className="hover:text-accent-gold transition-colors">contact@restorationministry.org</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed Mock/Location Visual */}
            <div className="rounded-3xl overflow-hidden aspect-video bg-gray-100 shadow-inner relative">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126588.35626296317!2d5.539665675438848!3d6.324209939523295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d3663a8a07c1%3A0x63ebfc4867df3c9!2sBenin%20City%2C%20Edo%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1714249071060!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale contrast-125 opacity-80"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none mix-blend-color bg-accent-gold/20"></div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl border border-gray-100 p-10 shadow-xl shadow-gray-200/40">
            <h3 className="font-serif text-2xl text-secondary-navy mb-2">Send a Message</h3>
            <p className="text-secondary-navy/60 text-sm mb-8">We will get back to you as soon as possible.</p>

            {submitted ? (
              <div className="bg-green-50 text-green-800 p-6 rounded-2xl text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={24} />
                </div>
                <h4 className="font-serif text-xl mb-2">Message Sent</h4>
                <p className="text-sm opacity-80">Thank you for reaching out. We are praying for you.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-secondary-navy/70 uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-accent-gold focus:bg-white focus:ring-0 transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-secondary-navy/70 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-accent-gold focus:bg-white focus:ring-0 transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-secondary-navy/70 uppercase tracking-wider mb-2">
                    Your Message / Prayer Request
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:border-accent-gold focus:bg-white focus:ring-0 transition-all outline-none resize-none"
                    placeholder="How can we help or pray for you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-secondary-navy text-white rounded-xl font-medium tracking-wide hover:bg-secondary-navy/90 transition-colors flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
