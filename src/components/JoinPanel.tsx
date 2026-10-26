import Link from "next/link";
import { Arrow, IconInstagram, IconTelegram, IconX } from "@/components/Icons";
import { channels } from "@/lib/site";

const icons = {
  x: IconX,
  telegram: IconTelegram,
  instagram: IconInstagram,
};

const nextSteps = [
  {
    href: "/token",
    name: "Get $HOPE",
    hint: "The official contract lives on the token page. One address. Nowhere else.",
  },
  {
    href: "/impact",
    name: "Follow creator fees",
    hint: "Half of creator fees support children battling cancer. Every share is listed.",
  },
  {
    href: "/hopey",
    name: "Make with Hopey",
    hint: "Draw him. Meme him. Keep the gold ribbon. That is how the culture spreads.",
  },
];

export function JoinPanel() {
  return (
    <div>
      <div className="divide-y divide-ink/10 border-y border-ink/10">
        {channels.map((item) => {
          const Icon = icons[item.id];
          return (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col gap-5 py-8 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-start gap-5">
                <span className="mt-1 text-gold">
                  <Icon />
                </span>
                <div>
                  <p className="font-serif text-3xl tracking-tight">{item.label}</p>
                  <p className="mt-2 max-w-md text-muted">{item.hint}</p>
                </div>
              </div>
              <span className="btn btn-ink w-full sm:w-fit">
                Open {item.label}
                <Arrow />
              </span>
            </a>
          );
        })}
      </div>
      <div className="mt-8 grid gap-px overflow-hidden rounded-[1.75rem] bg-ink/10 md:grid-cols-3">
        {nextSteps.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group bg-ivory px-6 py-7 transition-colors hover:bg-cream sm:px-7 sm:py-8"
          >
            <p className="font-serif text-2xl tracking-tight">{item.name}</p>
            <p className="mt-3 leading-relaxed text-muted">{item.hint}</p>
            <span className="link-quiet mt-6 text-sm">
              Continue
              <Arrow className="h-3 w-3" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
