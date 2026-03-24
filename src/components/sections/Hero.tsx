import { motion } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';
import { BrandLogos } from '../BrandLogos';

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="max-w-7xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center mb-12"
        >
          <BrandLogos size="lg" showText={false} className="opacity-80 hover:opacity-100 transition-opacity" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-white/80 tracking-wider uppercase">SRM IST Kattankulathur</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8"
        >
          ACM <span className="text-gradient">SIGGRAPH</span> SRM
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          Where Creativity Meets Computation. Exploring the frontiers of Computer Graphics, 
          Visual Computing, and Interactive Techniques.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              Join Us <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button className="px-8 py-4 glass text-white font-bold rounded-full transition-all hover:bg-white/10 hover:scale-105 active:scale-95">
            Explore Events
          </button>
        </motion.div>
      </div>

      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] pointer-events-none -z-10" />
    </section>
  );
}
