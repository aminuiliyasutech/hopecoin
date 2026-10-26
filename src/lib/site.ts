export const site = {
  name: "HopeCoin",
  ticker: "HOPE",
  tagline: "Where memes meet meaning.",
  description:
    "HopeCoin is a Solana charity meme coin. A global community of memes, culture, and support for children battling cancer.",
  url: "https://gethopecoin.com",
  chain: "Solana",
  launchVenue: "Pump.fun",
  feeShare: "50%",
  contractAddress: "JChmfnfC9fovJL1rbciVenLSD5XjwN22dGRHrQmTpump",
  pumpUrl: "https://pump.fun/coin/JChmfnfC9fovJL1rbciVenLSD5XjwN22dGRHrQmTpump",
  email: "",
  handles: {
    x: "@hopecoin15",
    instagram: "@hopecoin15",
  },
  socials: {
    x: "https://x.com/hopecoin15",
    telegram: "https://t.me/+8-146Y-_7uAwMTE0",
    instagram: "https://www.instagram.com/hopecoin15",
  },
} as const;

export const nav = [
  { href: "/mission", label: "Mission" },
  { href: "/hopey", label: "Hopey" },
  { href: "/token", label: "Token" },
  { href: "/whitepaper", label: "Whitepaper" },
  { href: "/community", label: "Community" },
  { href: "/impact", label: "Impact" },
] as const;

export const channels = [
  {
    id: "x",
    label: "X",
    href: site.socials.x,
    handle: site.handles.x,
    hint: "Memes, updates, and the public voice of Hopey.",
  },
  {
    id: "telegram",
    label: "Telegram",
    href: site.socials.telegram,
    handle: "Telegram",
    hint: "The live room — conversation, art, and the day-to-day.",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: site.socials.instagram,
    handle: site.handles.instagram,
    hint: "A quieter feed. Hopey, stills, and the gold ribbon.",
  },
] as const;

export function truncateAddress(value: string) {
  if (value.length < 12) return value;
  return `${value.slice(0, 4)}…${value.slice(-4)}`;
}

export function buyHref() {
  return site.pumpUrl || "/token";
}

export function buyIsExternal() {
  return Boolean(site.pumpUrl);
}
