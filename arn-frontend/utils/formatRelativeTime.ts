import {
  formatDistanceToNowStrict,
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  parseISO,
} from 'date-fns';

export function formatRelativeTime(isoDate: string): string {
  const date = parseISO(isoDate);
  const now = new Date();

  if (isNaN(date.getTime())) return 'Invalid date';

  const minutesDiff = differenceInMinutes(now, date);
  const hoursDiff = differenceInHours(now, date);
  const daysDiff = differenceInDays(now, date);

  if (minutesDiff < 1) return 'Just Now';
  if (minutesDiff < 60) return `${minutesDiff} min ago`;
  if (hoursDiff < 24) return `${hoursDiff} hour${hoursDiff > 1 ? 's' : ''} ago`;
  if (daysDiff === 1) return 'Yesterday';
  if (daysDiff <= 30) return `${daysDiff} day${daysDiff > 1 ? 's' : ''} ago`;

  return formatDistanceToNowStrict(date, { addSuffix: true }); // fallback: e.g., '1 month ago'
}
