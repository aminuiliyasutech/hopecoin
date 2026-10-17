import Link from "next/link";
import { Logo } from "@/components/Logo";
import { SocialLinks } from "@/components/SocialLinks";
import { channels, nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="shell py-16 pb-[max(4rem,calc(4rem+env(safe-area-inset-bottom)))] md:py-24">
        <p className="display display-lg max-w-4xl text-ivory">
          Welcome to HopeCoin.
          <em className="text-gold-soft"> Where memes meet meaning.</em>
        </p>
        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo onInk />
            <p className="mt-5 max-w-sm text-[0.98rem] leading-relaxed text-ivory/62">
              A Solana charity meme coin. Build the community. Spread the hope.
              Make a difference.
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="kicker text-gold-soft">Explore</p>
            <ul className="mt-5 space-y-3 text-ivory/78">
              <li>
                <Link href="/" className="hover:text-ivory">
                  Home
                </Link>
              </li>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-ivory">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="kicker text-gold-soft">Enter</p>
            <ul className="mt-5 space-y-3 text-ivory/78">
              <li>
                <Link href="/community#join" className="hover:text-ivory">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/token" className="hover:text-ivory">
                  Get $HOPE
                </Link>
              </li>
              <li>
                <Link href="/whitepaper" className="hover:text-ivory">
                  White paper
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-ivory">
                  Public ledger
                </Link>
              </li>
              {channels.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="hover:text-ivory"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-20 flex flex-col gap-8 border-t border-ivory/10 pt-8 text-sm text-ivory/42 md:flex-row md:items-end md:justify-between">
          <p className="max-w-2xl leading-relaxed">
            HopeCoin is a community meme coin on Solana. Nothing here is
            financial advice. Tokens can lose value. Charity gifts are listed
            in the public ledger as they are made.
          </p>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <SocialLinks tone="ivory" />
            <p>© {new Date().getFullYear()} HopeCoin</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
