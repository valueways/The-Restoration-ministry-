import { CHURCH_INFO } from '../../data';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary-navy text-primary-cream py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-serif text-2xl mb-4">{CHURCH_INFO.name}</h3>
          <p className="text-primary-cream/70 text-sm leading-relaxed mb-6">
            "Come unto me, all ye that labour and are heavy laden, and I will give you rest." <br/> — Matthew 11:28
          </p>
          <div className="flex flex-col space-y-3 text-sm text-primary-cream/80">
            <div className="flex items-center space-x-3">
              <MapPin size={18} />
              <span>{CHURCH_INFO.location}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={18} />
              <span>{CHURCH_INFO.phone}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={18} />
              <span>contact@restorationministry.org</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-4 text-accent-gold">Quick Links</h4>
          <ul className="space-y-3">
            {['Home', 'About Us', 'Ministries', 'Programs', 'Prayer Request'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-primary-cream/70 hover:text-accent-gold transition-colors text-sm">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-4 text-accent-gold">Service Times</h4>
          <ul className="space-y-3 text-sm text-primary-cream/70">
            <li>Sundays: 9:00 AM (Supernatural Encounter)</li>
            <li>Wednesdays: 6:00 PM (Bible Study)</li>
            <li>Fridays: 5:00 PM (Hour of Deliverance)</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-primary-cream/10 flex flex-col md:flex-row justify-between items-center text-xs text-primary-cream/50">
        <p>© {new Date().getFullYear()} {CHURCH_INFO.name}. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Led by {CHURCH_INFO.minister}</p>
      </div>
    </footer>
  );
}
