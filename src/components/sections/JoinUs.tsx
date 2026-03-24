import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export function JoinUs() {
  return (
    <section id="join" className="py-24 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <div className="glass p-12 rounded-[40px] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-32 -mt-32" />
          
          <div className="relative z-10 text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Join the <span className="text-gradient">Chapter</span></h2>
            <p className="text-white/60">Ready to start your journey in visual computing? Apply now to become a member.</p>
          </div>

          <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/40 ml-4">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/40 ml-4">Email Address</label>
                <input
                  type="email"
                  placeholder="john@srmist.edu.in"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/40 ml-4">Department</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors appearance-none">
                  <option className="bg-neutral-900">Computer Science</option>
                  <option className="bg-neutral-900">IT</option>
                  <option className="bg-neutral-900">ECE</option>
                  <option className="bg-neutral-900">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/40 ml-4">Year of Study</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors appearance-none">
                  <option className="bg-neutral-900">1st Year</option>
                  <option className="bg-neutral-900">2nd Year</option>
                  <option className="bg-neutral-900">3rd Year</option>
                  <option className="bg-neutral-900">4th Year</option>
                </select>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 bg-gradient-to-r from-primary to-secondary text-black font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
            >
              Submit Application <Send className="w-4 h-4" />
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
