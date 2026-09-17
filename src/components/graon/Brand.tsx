import { Power } from "lucide-react";
import { cn } from "@/lib/utils";

export function Brand({ inverse = false, compact = false, className }: { inverse?: boolean; compact?: boolean; className?: string }) {
  return <div className={cn("flex items-center gap-3", className)} aria-label="GRÃON Pós-Colheita">
    <div className="relative grid size-10 shrink-0 place-items-center text-brand-orange">
      <svg viewBox="0 0 48 48" aria-hidden="true" className="absolute inset-0 size-full fill-none stroke-current stroke-[2]">
        <path d="M24 3 42 13.5v21L24 45 6 34.5v-21Z" />
      </svg>
      <Power className="size-5" strokeWidth={2.2} aria-hidden="true" />
    </div>
    {!compact && <div className="leading-none">
      <div className={cn("font-display text-[1.35rem] font-bold tracking-normal", inverse ? "text-surface" : "text-brand-deep")}>GRÃON</div>
      <div className={cn("mt-1 text-[0.52rem] font-semibold uppercase tracking-[0.18em]", inverse ? "text-brand-orange" : "text-brand-teal")}>Pós — Colheita</div>
    </div>}
  </div>;
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-brand-orange">{children}</p>;
}

export function HexMark({ className = "" }: { className?: string }) {
  return <svg viewBox="0 0 100 100" aria-hidden="true" className={className}><path d="M50 3 91 26.5v47L50 97 9 73.5v-47Z" fill="none" stroke="currentColor" strokeWidth="1" /></svg>;
}
