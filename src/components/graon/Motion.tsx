import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true, margin: "-8%" });
  const reduced = useReducedMotion();
  return <motion.div ref={ref} className={className} initial={{ opacity: 0, y: reduced ? 0 : 24 }} animate={seen ? { opacity: 1, y: 0 } : {}} transition={{ duration: reduced ? .2 : .65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

export function MagneticLink({ href, children, className = "", external = false }: { href: string; children: ReactNode; className?: string; external?: boolean }) {
  const reduced = useReducedMotion();
  return <motion.a href={href} className={className} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}
    onMouseMove={(e) => { if (reduced) return; const r=e.currentTarget.getBoundingClientRect(); e.currentTarget.style.transform=`translate(${((e.clientX-r.left)/r.width-.5)*6}px,${((e.clientY-r.top)/r.height-.5)*6}px)`; }}
    onMouseLeave={(e) => { e.currentTarget.style.transform="translate(0,0)"; }}>{children}</motion.a>;
}
