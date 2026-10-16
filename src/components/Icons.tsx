export function Arrow({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M2 7h10M8 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconX({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14.7 10.3 22.4 1h-2.2l-6.6 8.1L8.3 1H1.6l8.1 12.2L1.6 23h2.2l7.1-8.7L15.7 23h6.7l-7.7-12.7ZM5 2.7h2.1l12 18.6h-2.1L5 2.7Z" />
    </svg>
  );
}

export function IconTelegram({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.8 4.3 18.6 20c-.2.9-.8 1.1-1.6.7l-4.5-3.3-2.2 2.1c-.2.3-.4.4-.8.4l.3-4.6 8.4-7.6c.4-.3 0-.5-.6-.2l-10.4 6.5-4.5-1.4c-1-.3-1-.9.2-1.4L20.3 3.4c.8-.3 1.5.2 1.5.9Z" />
    </svg>
  );
}

export function IconInstagram({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" />
    </svg>
  );
}
