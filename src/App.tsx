import { motion, useScroll, useSpring } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { ParticleField, NeuralNetwork } from './components/canvas/Scene';
import { CustomCursor } from './components/CustomCursor';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Team } from './components/sections/Team';
import { Events } from './components/sections/Events';
import { Projects } from './components/sections/Projects';
import { JoinUs } from './components/sections/JoinUs';
import { Footer } from './components/sections/Footer';
import { Navbar } from './components/sections/Navbar';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative bg-black min-h-screen">
      <CustomCursor />
      
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent origin-left z-[10000]"
        style={{ scaleX }}
      />

      <Navbar />

      {/* Background 3D Scene */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <ParticleField />
          <NeuralNetwork />
        </Canvas>
      </div>

      <div className="relative z-10">
        <Hero />
        <About />
        <Team />
        <Events />
        <Projects />
        <JoinUs />
        <Footer />
      </div>
    </main>
  );
}
