import { IconInstagram, IconTelegram, IconX } from "@/components/Icons";
import { channels } from "@/lib/site";

const icons = {
  x: IconX,
  telegram: IconTelegram,
  instagram: IconInstagram,
};

export function SocialLinks({
  tone = "ink",
}: {
  tone?: "ink" | "ivory";
}) {
  const color =
    tone === "ivory"
      ? "border-ivory/20 text-ivory/70 hover:border-ivory/50 hover:text-ivory"
      : "border-ink/15 text-ink/70 hover:border-ink/40 hover:text-ink";

  return (
    <ul className="flex items-center gap-2">
      {channels.map((item) => {
        const Icon = icons[item.id];
        return (
          <li key={item.id}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${color}`}
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
