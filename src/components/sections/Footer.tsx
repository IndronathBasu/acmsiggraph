import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';
import { BrandLogos } from '../BrandLogos';

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <BrandLogos className="mb-8" />
            <p className="text-white/40 max-w-sm leading-relaxed mb-8">
              The official student chapter of ACM SIGGRAPH at SRM Institute of Science and Technology, 
              Kattankulathur. Empowering students through visual computing.
            </p>
            <div className="flex gap-4">
              {[Github, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: '#00f2ff' }}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/60 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#team" className="hover:text-primary transition-colors">Our Team</a></li>
              <li><a href="#events" className="hover:text-primary transition-colors">Events</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6">Contact</h3>
            <ul className="space-y-4 text-white/40 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                siggraph@srmist.edu.in
              </li>
              <li>SRM IST, Kattankulathur</li>
              <li>Chennai, Tamil Nadu 603203</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/20 uppercase tracking-widest">
          <p>© 2026 ACM SIGGRAPH SRM KTR. All rights reserved.</p>
          <p>Designed with ❤️ by the Web Team</p>
        </div>
      </div>
    </footer>
  );
}
