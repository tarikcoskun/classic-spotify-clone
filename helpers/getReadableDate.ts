const intlFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

export function getReadableDate(date: Date): string {
  const today = new Date();
  const diff = Math.floor((today.getTime() - date.getTime()) / 86400000);

  if (diff === 0) return "Today";
  else if (diff <= 7) {
    const num = diff;
    return `${num} day${num === 1 ? "" : "s"} ago`;
  } else if (diff >= 7 && diff <= 30) {
    const num = Math.floor(diff / 30);
    return `${num} week${num === 1 ? "" : "s"} ago`;
  } else if (diff >= 30 && diff <= 90) {
    const num = Math.floor(diff / 30);
    return `${num} month${num === 1 ? "" : "s"} ago`;
  } else return intlFormatter.format(date);
}
