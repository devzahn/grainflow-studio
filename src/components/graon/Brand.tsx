import { cn } from "@/lib/utils";

export function GraonLogoMark({ className = "size-10", ...props }: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      viewBox="0 0 100 135"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {/* 1. Telhado Hexagonal Superior (Chevron) */}
      <path
        d="M50 4 L82 21 V44 L70 44 L50 32 L30 44 L18 44 V21 Z"
        fill="currentColor"
      />

      {/* 2. Torre / Arco do Silo */}
      <path
        d="M50 38 L72 49 V66 H62 V56 L50 47 L38 56 V66 H28 V49 Z"
        fill="currentColor"
      />

      {/* 3. Arco Superior Circular */}
      <path
        d="M21 64 A42 42 0 0 1 79 64"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />

      {/* 4. Anel Principal / Corpo do Silo */}
      <path
        d="M36 71 A38 38 0 1 0 64 71"
        stroke="currentColor"
        strokeWidth="13"
        strokeLinecap="round"
        fill="none"
      />

      {/* 5. Pino Central / Chute */}
      <rect x="44" y="50" width="12" height="40" rx="6" fill="currentColor" />
    </svg>
  );
}

export function Brand({ inverse = false, compact = false, className }: { inverse?: boolean; compact?: boolean; className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)} aria-label="GRÃON Pós-Colheita">
      <div className="relative shrink-0 flex items-center justify-center text-brand-orange">
        <GraonLogoMark className="h-10 w-auto" />
      </div>
      {!compact && (
        <div className="leading-none">
          <div className={cn("font-display text-[1.35rem] font-bold tracking-normal", inverse ? "text-surface" : "text-brand-deep")}>
            GRÃON
          </div>
          <div className={cn("mt-1 text-[0.52rem] font-semibold uppercase tracking-[0.18em]", inverse ? "text-brand-orange" : "text-brand-teal")}>
            Pós — Colheita
          </div>
        </div>
      )}
    </div>
  );
}


export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-brand-orange">{children}</p>;
}

export function HexMark({ className = "" }: { className?: string }) {
  return <svg viewBox="0 0 100 100" aria-hidden="true" className={className}><path d="M50 3 91 26.5v47L50 97 9 73.5v-47Z" fill="none" stroke="currentColor" strokeWidth="1" /></svg>;
}
