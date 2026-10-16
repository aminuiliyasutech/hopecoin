const items = [
  "Build the community",
  "Spread the hope",
  "Make a difference",
  "Memes meet meaning",
  "Courage",
  "Kindness",
  "Hope",
];

export function Marquee() {
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className="marquee border-y border-ink/10 bg-sand/40 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-ink/70">
      <div className="marquee-track">
        {row.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-10">
            {item}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
