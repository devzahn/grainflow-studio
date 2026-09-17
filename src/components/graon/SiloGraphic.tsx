import { motion, useReducedMotion } from "framer-motion";
export function SiloGraphic({ loss = 0, className = "" }: { loss?: number; className?: string }) {
 const reduced=useReducedMotion(); const boundary=Math.max(18, Math.min(78, 78-loss*11));
 return <svg viewBox="0 0 300 400" className={className} role="img" aria-label={loss ? `Silo com ${loss}% de perda destacada` : "Representação técnica de um silo"}>
  <defs><clipPath id={`silo-${loss}`}><path d="M45 145h210v205H45z"/></clipPath><pattern id="grain" width="9" height="9" patternUnits="userSpaceOnUse"><ellipse cx="4" cy="5" rx="2.4" ry="1.4" fill="currentColor" transform="rotate(-25 4 5)"/></pattern></defs>
  <g fill="none" stroke="currentColor" strokeWidth="2"><path d="M35 145 150 52l115 93M45 145h210v205H45zM65 145v205m170-205v205M30 350h240M150 52V25"/><path opacity=".35" d="M45 175h210M45 205h210M45 235h210M45 265h210M45 295h210M45 325h210"/></g>
  <g clipPath={`url(#silo-${loss})`}><motion.rect x="45" width="210" height="210" fill="url(#grain)" className="text-brand-orange" initial={{y:350}} animate={{y:boundary+65}} transition={{duration:reduced?.2:1.8,ease:[.22,1,.36,1]}} opacity=".78"/>{loss>0&&<rect x="45" y={boundary+65} width="210" height={Math.max(9,loss*8)} className="fill-brand-orange" opacity=".95"/>}</g>
  <g className="fill-brand-orange"><circle cx="150" cy="25" r="4"/><circle cx="45" cy="350" r="4"/><circle cx="255" cy="350" r="4"/></g>
  <g className="fill-current font-body text-[8px] uppercase tracking-[.18em]" opacity=".6"><text x="4" y="143">+12.40</text><text x="264" y="353">±0.00</text></g>
 </svg>;
}
