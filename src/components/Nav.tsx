"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BuyLink } from "@/components/BuyLink";
import { Logo } from "@/components/Logo";
import { nav } from "@/lib/site";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border,backdrop-filter,box-shadow] duration-500 ${
        scrolled || open
          ? "border-b border-ink/8 bg-cream/78 shadow-[0_10px_40px_-28px_rgba(18,16,13,0.45)] backdrop-blur-2xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-ivory focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <div className="shell flex h-[72px] items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${pathname === item.href ? "is-active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/community#join" className="btn btn-ghost !min-h-10 px-4 text-[0.82rem]">
            Join
          </Link>
          <BuyLink className="btn btn-ink !min-h-10 px-4 text-[0.82rem]" />
        </div>
        <button
          type="button"
          className="relative z-50 -mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span
            className={`absolute h-px w-6 bg-ink transition-transform duration-500 ${
              open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-px w-6 bg-ink transition-transform duration-500 ${
              open ? "translate-y-0 -rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      <div
        className={`lg:hidden ${
          open ? "pointer-events-auto visible" : "pointer-events-none invisible"
        }`}
      >
        <div
          className={`fixed inset-0 top-[72px] overflow-y-auto bg-cream/96 backdrop-blur-xl transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          <nav className="shell flex min-h-full flex-col justify-between pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-4">
            <div className="flex flex-col">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="display border-b border-ink/10 py-4 text-[2.15rem] sm:py-5 sm:text-[2.7rem]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="grid gap-3 pt-8">
              <Link href="/community#join" className="btn btn-ghost w-full">
                Join the community
              </Link>
              <BuyLink className="btn btn-ink w-full" />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
