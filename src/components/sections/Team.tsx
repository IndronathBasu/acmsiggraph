import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter } from 'lucide-react';

const team = [
  {
    name: "Indronath Basu",
    role: "Chair",
    bio: "Computer Vision and Graphics enthusiast and lead researcher in real-time rendering.",
    image: "https://picsum.photos/seed/alex/400/400"
  },
  {
    name: "Ishaan Bakshi",
    role: "Vice Chair",
    bio: "UI/UX designer focused on immersive VR interfaces.",
    image: "https://picsum.photos/seed/sarah/400/400"
  },
  {
    name: "Viraj Deglurkar",
    role: "Secretary",
    bio: "Full-stack developer with a passion for procedural generation.",
    image: "https://picsum.photos/seed/david/400/400"
  },
  {
    name: "Soumil Mehrotra",
    role: "Treasurer",
    bio: "Data scientist exploring AI-driven animation techniques.",
    image: "https://picsum.photos/seed/elena/400/400"
  },
  {
    name: "Aadi Pradeep Mandavia",
    role: "Web Master",
    bio: "Frontend architect building high-performance web graphics.",
    image: "https://picsum.photos/seed/marcus/400/400"
  },
  {
    name: "Aaryan Solanki",
    role: "Membership Chair",
    bio: "Community builder and advocate for diversity in tech.",
    image: "https://picsum.photos/seed/aisha/400/400"
  }
];

export function Team() {
  return (
    <section id="team" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Meet the <span className="text-gradient">Founding Team</span>
          </motion.h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            The visionaries behind ACM SIGGRAPH SRM, leading the charge in visual innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="glass rounded-3xl overflow-hidden p-4 h-full flex flex-col items-center text-center transition-all group-hover:border-primary/50 group-hover:neon-border">
                <div className="relative w-32 h-32 mb-6 rounded-2xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <Linkedin className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                    <Github className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-4 uppercase tracking-widest">{member.role}</p>
                <p className="text-white/60 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
