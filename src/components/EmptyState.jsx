/**
 * EmptyState — Reusable component for displaying empty/no-results messages.
 */
export default function EmptyState({ message, suggestion }) {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">📋</div>
      <p className="empty-state-message">{message}</p>
      {suggestion && <p className="empty-state-suggestion">{suggestion}</p>}
    </div>
  );
}
