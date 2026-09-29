const STORAGE_KEY = "currentCookies";

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
  window.localStorage.setItem("cookieCount", String(cookieCount));
}
