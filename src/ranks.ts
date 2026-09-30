export interface Rank {
  threshold: number;
  title: string;
}

export const RANKS: Rank[] = [
  { threshold: 0, title: "Apprentice Baker" },
  { threshold: 10, title: "Junior Baker" },
  { threshold: 100, title: "Senior Baker" },
  { threshold: 1000, title: "Head of Bakery" },
  { threshold: 10000, title: "Permanent Secretary of Cookies" },
];

/** Returns the highest rank reached for the given total. */
export function getRank(total: number): Rank {
  let current = RANKS[0];
  for (const rank of RANKS) {
    if (total >= rank.threshold) {
      current = rank;
    }
  }
  return current;
}

/** Returns the next rank above the given total, if any. */
export function getNextRank(total: number): Rank | null {
  for (const rank of RANKS) {
    if (total < rank.threshold) {
      return rank;
    }
  }
  return null;
}
