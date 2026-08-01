export const formatMonthYear = (dateStr) => {
  if (!dateStr) return 'Present';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

export const formatDuration = (start, end, current) => {
  const startLabel = formatMonthYear(start);
  const endLabel = current ? 'Present' : formatMonthYear(end);
  return `${startLabel} — ${endLabel}`;
};
