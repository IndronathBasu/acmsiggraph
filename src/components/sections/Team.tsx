import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter } from 'lucide-react';

const team = [
  {
    name: "Indronath Basu",
    role: "Chair",
    bio: "Computer Vision and Graphics enthusiast and lead researcher in real-time rendering.",
    image: "images/Indronath Basu.jpeg",
    linkedin: "https://www.linkedin.com/in/indronathbasu/",
    github: "https://github.com/IndronathBasu"
  },
  {
    name: "Ishaan Bakshi",
    role: "Vice Chair",
    bio: "UI/UX designer focused on immersive VR interfaces",
    image: "images/Ishaan Bakshi.png",
    linkedin: "https://www.linkedin.com/in/ishaanbakshi/",
    github: "https://github.com/ishaan0017"
  },
  {
    name: "Viraj Deglurkar",
    role: "Secretary",
    bio: "Full-stack developer with a passion for procedural generation.",
    image: "images/Viraj.jpeg",
    linkedin: "https://www.linkedin.com/in/viraj-deglurkar/",
    github: "https://github.com/Virajjj646"
  },
  {
    name: "Soumil Mehrotra",
    role: "Treasurer",
    bio: "Data scientist exploring AI-driven animation techniques.",
    image: "images/Soumil.png",
    linkedin: "https://www.linkedin.com/in/soumil-mehrotra-72623131b/",
    github: "https://github.com/TheDaredevil26"
  },
  {
    name: "Aadi Pradeep Mandavia",
    role: "Web Master",
    bio: "Data scientist and Web Developer exploring AI-driven animation techniques.",
    image: "images/Aadi Mandavia.jpeg",
    linkedin: "https://www.linkedin.com/in/aadi-mandavia-006571259/",
    github: "https://github.com/aadimandavia"
  },
  {
    name: "Aaryan Solanki",
    role: "Membership Chair",
    bio: "Community builder and advocate for diversity in tech.",
    image: "images/Aaryan Solanki.png",
    linkedin: "https://www.linkedin.com/in/aaryan-solanki-it",
    github: "https://github.com/aaryan-cloud"
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
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
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
