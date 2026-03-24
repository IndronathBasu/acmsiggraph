import { motion } from 'framer-motion';
import { Cpu, Box, Monitor, Gamepad2 } from 'lucide-react';

const focusAreas = [
  {
    icon: Monitor,
    title: "Computer Graphics",
    desc: "Pushing the boundaries of rendering, modeling, and animation."
  },
  {
    icon: Cpu,
    title: "AI + Visual Computing",
    desc: "Integrating machine learning with computer vision for next-gen visuals."
  },
  {
    icon: Box,
    title: "AR/VR",
    desc: "Creating immersive experiences that bridge the physical and digital worlds."
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    desc: "Building interactive worlds with cutting-edge engine techniques."
  }
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Pioneering the <span className="text-gradient">Visual Future</span>
            </h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              ACM SIGGRAPH is the world's leading community in computer graphics and interactive techniques. 
              Our SRM Student Chapter is a hub for innovators, artists, and engineers dedicated to 
              mastering the art of visual computing.
            </p>
            
            <div className="glass p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Our Mission
              </h3>
              <p className="text-white/70">
                To nurture a community of students passionate about graphics, providing them with 
                the resources, mentorship, and platform to excel in the global tech landscape.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {focusAreas.map((area, idx) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass p-6 rounded-2xl hover:border-primary/50 transition-colors group"
              >
                <area.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-bold mb-2">{area.title}</h4>
                <p className="text-sm text-white/50">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
