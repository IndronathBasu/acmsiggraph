import { motion } from 'framer-motion';

interface BrandLogosProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export function BrandLogos({ className = '', size = 'md', showText = true }: BrandLogosProps) {
  const heights = {
    sm: { srm: 'h-6', siggraph: 'h-7', divider: 'h-5' },
    md: { srm: 'h-10', siggraph: 'h-12', divider: 'h-8' },
    lg: { srm: 'h-24', siggraph: 'h-28', divider: 'h-20' }
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="flex items-center gap-3">
        {/* SRM Logo */}
        <img 
          src="/images/SRM.png"
          alt="SRM IST Logo" 
          className={`${heights[size].srm} w-auto brightness-0 invert opacity-90`}
          referrerPolicy="no-referrer"
        />
        
        <div className={`${heights[size].divider} w-[1px] bg-white/20`} />
        
        {/* SIGGRAPH Logo */}
        <img 
          src="/images/ACM SIG GRAPH LOGO.png" 
          alt="ACM SIGGRAPH Logo" 
          className={`${heights[size].siggraph} w-auto opacity-90`}
          referrerPolicy="no-referrer"
        />
      </div>
      
      {showText && size !== 'lg' && (
        <div className="flex flex-col leading-none">
          <span className="text-sm font-bold tracking-tighter text-white">ACM SIGGRAPH</span>
          <span className="text-[10px] font-medium text-white/40 uppercase tracking-widest">SRM KTR CHAPTER</span>
        </div>
      )}
    </div>
  );
}
