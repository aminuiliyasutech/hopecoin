# HopeCoin

Official site for HopeCoin — a Solana charity meme coin. Where memes meet meaning.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Official community:
- [X](https://x.com/hopecoin15)
- [Telegram](https://t.me/+8-146Y-_7uAwMTE0)
- [Instagram](https://www.instagram.com/hopecoin15)

## Publishing live details

Add the Pump.fun URL and contract address in `src/lib/site.ts` when ready.

### Open-source donation tracker

The Impact page hosts a Solana donation dashboard. Ledger rows and wallet
addresses live in `src/lib/donations.ts` so anyone can audit them in git.

1. Set `donationTracking.wallets.treasury` / `.charity` when addresses are public.
2. Append a `donationRecords` entry after each gift (prefer a Solana `txSignature`).
3. Statuses: `allocated` → `completed` → `acknowledged`.
