export const whitepaperMeta = {
  title: "HopeCoin White Paper",
  subtitle: "Memes for Hope. Action for Kids.",
  status: "Pre-launch",
  versionLabel: "Working white paper",
} as const;

export const whitepaperToc = [
  { id: "executive-summary", label: "1. Executive Summary" },
  { id: "vision", label: "2. Our Vision" },
  { id: "problem", label: "3. The Problem" },
  { id: "solution", label: "4. The Solution" },
  { id: "hopey", label: "5. The Hopey Mascot" },
  { id: "token", label: "6. Token Information" },
  { id: "tokenomics", label: "7. Tokenomics" },
  { id: "charity", label: "8. The 50% Commitment" },
  { id: "community", label: "9. Community & Marketing" },
  { id: "roadmap", label: "10. Roadmap" },
  { id: "governance", label: "11. Governance" },
  { id: "risks", label: "12. Risks & Disclaimers" },
  { id: "promise", label: "13. Our Promise" },
  { id: "notice", label: "Important Notice" },
] as const;

export const projectFacts = [
  { label: "Blockchain", value: "Solana" },
  { label: "Planned launch", value: "Pump.fun" },
  { label: "Token symbol", value: "$HOPE" },
  { label: "Status", value: "Pre-launch" },
] as const;

export const tokenParams = [
  { label: "Token name", value: "HopeCoin" },
  { label: "Ticker", value: "$HOPE" },
  { label: "Blockchain", value: "Solana" },
  { label: "Planned launch platform", value: "Pump.fun" },
  { label: "Proposed total supply", value: "1,000,000,000 HOPE" },
  { label: "Launch approach", value: "Fair launch" },
  { label: "Presale", value: "None planned" },
  { label: "Separate team-token allocation", value: "None planned" },
  { label: "Separate charity-token allocation", value: "None planned" },
  { label: "Project-imposed transaction tax", value: "None planned" },
  { label: "Token address", value: "To be published after creation" },
  { label: "Launch status", value: "Pre-launch" },
] as const;

export const tokenDistribution = [
  { label: "Public launch", share: "100%" },
  { label: "Separate team allocation", share: "0%" },
  { label: "Separate marketing allocation", share: "0%" },
  { label: "Separate charity allocation", share: "0%" },
  { label: "Total", share: "100%" },
] as const;

export const feeAllocation = [
  {
    purpose: "Charitable support",
    percentage: "50%",
    detail:
      "Directed toward verified organizations that support children battling cancer.",
  },
  {
    purpose: "Community growth and marketing",
    percentage: "30%",
    detail:
      "Content creation, community campaigns, promotional materials, collaborations, and other approved growth expenses.",
  },
  {
    purpose: "Operations and reserve",
    percentage: "20%",
    detail:
      "Essential project expenses, tools, development, administration, and a reasonable operating reserve.",
  },
] as const;

export const feeExample = [
  { purpose: "Charitable support", amount: "$500" },
  { purpose: "Community growth and marketing", amount: "$300" },
  { purpose: "Operations and reserve", amount: "$200" },
  { purpose: "Total", amount: "$1,000" },
] as const;

export const charitySteps = [
  {
    title: "Track revenue",
    body: "Record eligible creator-fee revenue actually received by the project.",
  },
  {
    title: "Calculate the charitable share",
    body: "Calculate 50% of eligible revenue according to the published accounting method.",
  },
  {
    title: "Verify recipients",
    body: "Research potential recipients and verify their legitimacy before announcing a formal relationship or transferring funds.",
  },
  {
    title: "Distribute funds",
    body: "Transfer charitable funds through an appropriate, documented payment method.",
  },
  {
    title: "Publish evidence",
    body: "Share the donation amount, date, transaction reference where available, and recipient confirmation where possible.",
  },
] as const;

export const transparencyStates = [
  {
    title: "Revenue received",
    body: "Money actually received through eligible creator fees.",
  },
  {
    title: "Funds allocated",
    body: "Money designated for charitable use but not yet transferred.",
  },
  {
    title: "Donations completed",
    body: "Funds actually transferred to a recipient.",
  },
  {
    title: "Donations acknowledged",
    body: "Contributions confirmed by the recipient, where confirmation is available.",
  },
] as const;

export const roadmap = [
  {
    phase: "Phase 1",
    title: "Foundation",
    items: [
      "Finalize the project identity and white paper.",
      "Develop the Hopey mascot and initial content.",
      "Establish official social media channels.",
      "Define community guidelines.",
      "Develop a transparent accounting and charitable policy.",
    ],
  },
  {
    phase: "Phase 2",
    title: "Community Building",
    items: [
      "Publish consistent memes and educational content.",
      "Invite early supporters to participate.",
      "Establish a public channel for project updates.",
      "Research and verify potential charitable recipients.",
      "Define the process for tracking eligible creator-fee revenue.",
    ],
  },
  {
    phase: "Phase 3",
    title: "Token Launch",
    items: [
      "Confirm token parameters and launch arrangements.",
      "Create the token using the chosen platform, subject to its current requirements.",
      "Publish the verified token address and relevant explorer links.",
      "Explain the actual fee arrangements and their limitations.",
      "Communicate risks clearly to prospective holders.",
    ],
  },
  {
    phase: "Phase 4",
    title: "Transparency and Impact",
    items: [
      "Monitor and record eligible creator-fee revenue.",
      "Implement the proposed revenue allocation when operationally feasible.",
      "Make charitable contributions through appropriate channels.",
      "Publish verifiable records of completed donations.",
      "Review community feedback and improve accountability.",
    ],
  },
  {
    phase: "Phase 5",
    title: "Long-Term Development",
    items: [
      "Grow the community organically.",
      "Expand educational and awareness campaigns.",
      "Explore additional collaborations where appropriate.",
      "Improve public reporting and operational processes.",
      "Evaluate further initiatives based on actual resources and community needs.",
    ],
  },
] as const;

export const risks = [
  {
    title: "Market risk",
    body: "Meme coins are highly volatile. The token price may rise or fall sharply, and purchasers may lose their entire investment.",
  },
  {
    title: "Liquidity risk",
    body: "There may be insufficient buyers or sellers to complete transactions at an expected price. Liquidity can change rapidly.",
  },
  {
    title: "Launch risk",
    body: "The launch may face delays, technical issues, platform restrictions, or changes to the platform’s rules.",
  },
  {
    title: "Revenue risk",
    body: "Creator-fee revenue is uncertain and may be low or nonexistent. The proposed allocation model does not guarantee that funds will be available.",
  },
  {
    title: "Charitable implementation risk",
    body: "Charitable contributions depend on actual revenue, verified recipients, workable payment processes, and compliance with applicable requirements.",
  },
  {
    title: "Operational risk",
    body: "The team may not achieve all proposed milestones. Marketing expenses, administration, and other operating costs may differ from expectations.",
  },
  {
    title: "Regulatory risk",
    body: "Cryptocurrency, fundraising, charitable contributions, and related activities may be subject to laws and regulatory requirements that vary by jurisdiction.",
  },
] as const;
