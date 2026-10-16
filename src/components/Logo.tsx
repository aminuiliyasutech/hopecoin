import Link from "next/link";

export function RibbonMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M24 8.5c-5.2 4.4-8.6 10.2-8.6 16.1 0 4.6 2.4 8.3 6.1 10.3"
        stroke="#B08A2C"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M24 8.5c5.2 4.4 8.6 10.2 8.6 16.1 0 4.6-2.4 8.3-6.1 10.3"
        stroke="#B08A2C"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M17.8 38.2 24 28.4l6.2 9.8"
        stroke="#B08A2C"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ onInk = false }: { onInk?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5">
      <RibbonMark className="h-8 w-8 shrink-0 transition-transform duration-500 group-hover:rotate-[-8deg]" />
      <span
        className={`font-serif text-[1.35rem] leading-none tracking-[-0.03em] ${
          onInk ? "text-ivory" : "text-ink"
        }`}
      >
        HopeCoin
      </span>
    </Link>
  );
}
