import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const events = [
  {
    title: "Ray Tracing Workshop",
    desc: "Master the fundamentals of light simulation and path tracing from scratch.",
    date: "Oct 15, 2026",
    location: "Main Lab, SRM",
    image: "https://picsum.photos/seed/ray/800/600"
  },
  {
    title: "Graphix Hackathon",
    desc: "48 hours of intense coding to build the most innovative visual tools.",
    date: "Nov 02, 2026",
    location: "Tech Park",
    image: "https://picsum.photos/seed/hack/800/600"
  },
  {
    title: "Metaverse Summit",
    desc: "A deep dive into the future of spatial computing and social VR.",
    date: "Dec 10, 2026",
    location: "Virtual",
    image: "https://picsum.photos/seed/meta/800/600"
  }
];

export function Events() {
  return (
    <section id="events" className="py-24 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Upcoming <span className="text-gradient">Experiences</span>
            </motion.h2>
            <p className="text-white/50">Don't miss out on our flagship events and learning sessions.</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-primary font-bold"
          >
            View Calendar <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group glass rounded-3xl overflow-hidden hover:border-primary/50 transition-all"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-bold">
                  {event.date}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{event.title}</h3>
                <p className="text-white/50 text-sm mb-6 line-clamp-2">{event.desc}</p>
                
                <div className="flex items-center gap-4 text-xs text-white/40">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {event.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
