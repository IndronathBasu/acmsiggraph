import { motion } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: "Procedural City",
    category: "3D Graphics",
    image: "https://picsum.photos/seed/city/600/400"
  },
  {
    title: "Neural Style Transfer",
    category: "AI Visualization",
    image: "https://picsum.photos/seed/neural/600/400"
  },
  {
    title: "VR Museum",
    category: "Immersive",
    image: "https://picsum.photos/seed/museum/600/400"
  },
  {
    title: "Fluid Simulation",
    category: "Physics",
    image: "https://picsum.photos/seed/fluid/600/400"
  },
  {
    title: "Fractal Explorer",
    category: "Math Art",
    image: "https://picsum.photos/seed/fractal/600/400"
  }
];

export function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Student <span className="text-gradient">Showcase</span>
        </motion.h2>
        <p className="text-white/50">A glimpse into the creative projects built by our members.</p>
      </div>

      <div className="relative">
        <motion.div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-12 px-6 no-scrollbar cursor-grab active:cursor-grabbing"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -10 }}
              className="flex-shrink-0 w-[300px] md:w-[450px] group"
            >
              <div className="glass rounded-3xl overflow-hidden relative aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
