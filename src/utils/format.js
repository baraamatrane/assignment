/**
 * Formats an ISO date string to a human-readable format.
 * Returns "—" for null/undefined values.
 *
 * @param {string|null|undefined} dateString - ISO date string
 * @returns {string} Formatted date (e.g., "Feb 13, 2026") or "—"
 */
export function formatDate(dateString) {
  if (!dateString) return "—";

  const date = new Date(dateString);

  if (isNaN(date.getTime())) return "—";

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Formats a number as USD currency.
 * Returns "—" for null/undefined values.
 *
 * @param {number|null|undefined} amount
 * @returns {string} Formatted currency (e.g., "$48,000") or "—"
 */
export function formatCurrency(amount) {
  if (amount == null) return "—";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
