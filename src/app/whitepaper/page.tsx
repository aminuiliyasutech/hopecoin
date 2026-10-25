import type { Metadata } from "next";
import { site } from "@/lib/site";
import { WhitepaperDocument } from "./WhitepaperDocument";

export const metadata: Metadata = {
  title: "White Paper",
  description: `HopeCoin ($HOPE) White Paper Version 1.0 — mission, tokenomics, the ${site.feeShare} creator-fee charity commitment, roadmap, and risks.`,
};

export default function WhitepaperPage() {
  return <WhitepaperDocument />;
}
