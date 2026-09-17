import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

type Grain = { x:number; y:number; vx:number; vy:number; r:number; orange:boolean };
export function GrainCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    let frame = 0, active = true, grains: Grain[] = [], mouse={x:-999,y:-999};
    const resize=()=>{ const d=Math.min(devicePixelRatio,2); const r=canvas.getBoundingClientRect(); canvas.width=r.width*d; canvas.height=r.height*d; ctx.setTransform(d,0,0,d,0,0); const count=Math.min(150,Math.floor(r.width*r.height/(innerWidth<600?13000:8500))); grains=Array.from({length:count},()=>({x:Math.random()*r.width,y:Math.random()*r.height,vx:(Math.random()-.5)*.16,vy:.12+Math.random()*.28,r:.7+Math.random()*1.8,orange:Math.random()<.08})); };
    const draw=()=>{ if(!active) return; const r=canvas.getBoundingClientRect(); ctx.clearRect(0,0,r.width,r.height); for(const g of grains){ if(!reduced){ const dx=g.x-mouse.x,dy=g.y-mouse.y,d=Math.hypot(dx,dy); if(d<120&&d>0){const f=(120-d)/120*.55;g.vx+=dx/d*f;g.vy+=dy/d*f;} g.vx*=.985;g.vy=Math.min(g.vy*.998,.42);g.x+=g.vx;g.y+=g.vy;if(g.y>r.height+5){g.y=-5;g.x=Math.random()*r.width}if(g.x<0)g.x=r.width;if(g.x>r.width)g.x=0;} ctx.beginPath();ctx.ellipse(g.x,g.y,g.r,g.r*1.5,.25,0,Math.PI*2);ctx.fillStyle=g.orange?"rgba(255,144,37,.72)":"rgba(252,251,249,.38)";ctx.fill(); } frame=requestAnimationFrame(draw); };
    const obs=new IntersectionObserver(([entry])=>{active=entry.isIntersecting;if(active)draw();else cancelAnimationFrame(frame)});
    obs.observe(canvas); resize(); draw();
    const move=(e:PointerEvent)=>{const r=canvas.getBoundingClientRect();mouse={x:e.clientX-r.left,y:e.clientY-r.top}};
    canvas.addEventListener("pointermove",move); window.addEventListener("resize",resize);
    return()=>{cancelAnimationFrame(frame);obs.disconnect();canvas.removeEventListener("pointermove",move);window.removeEventListener("resize",resize)};
  },[reduced]);
  return <canvas ref={canvasRef} className="absolute inset-0 size-full" aria-hidden="true" />;
}
