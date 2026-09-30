const STORAGE_KEY = "currentCookies";
const OVENS_KEY = "informedcookie.ovens";

/**
 * Loads the last cookie total from browser storage.
 * Invalid or missing values are treated as a fresh total of zero.
 */
export function getSavedCookieCount(): number {
  const savedCount = Number(window.localStorage.getItem(STORAGE_KEY));

  return Number.isSafeInteger(savedCount) && savedCount >= 0 ? savedCount : 0;
}

/** Saves the current cookie total so it can be restored after a page reload. */
export function saveCookieCount(cookieCount: number): void {
  window.localStorage.setItem(STORAGE_KEY, String(cookieCount));
}

/** Loads the saved oven count. Invalid values become zero. */
export function getSavedOvenCount(): number {
  const saved = Number(window.localStorage.getItem(OVENS_KEY));

  return Number.isSafeInteger(saved) && saved >= 0 ? saved : 0;
}

/** Saves the oven count for restore after a page reload. */
export function saveOvenCount(ovens: number): void {
  window.localStorage.setItem(OVENS_KEY, String(ovens));
}
