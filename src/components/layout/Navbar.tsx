import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { CHURCH_INFO } from '../../data';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Ministries', href: '#ministries' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary-cream/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-xl md:text-2xl font-serif font-semibold tracking-wide text-secondary-navy hover:text-accent-gold transition-colors">
          Restoration Ministry
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm tracking-widest uppercase transition-colors text-secondary-navy hover:text-accent-gold font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href={CHURCH_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full text-sm font-medium transition-all bg-accent-gold text-white hover:bg-accent-gold/90 shadow-md shadow-accent-gold/10"
          >
            Prayer Request
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-secondary-navy hover:text-accent-gold transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-primary-cream shadow-lg py-4 px-6 flex flex-col space-y-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-secondary-navy text-lg font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href={CHURCH_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center bg-accent-gold text-white px-6 py-3 rounded-full font-medium w-full"
          >
            Request Prayer
          </a>
        </motion.div>
      )}
    </nav>
  );
}
