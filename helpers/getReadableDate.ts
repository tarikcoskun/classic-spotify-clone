const intlFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

export const getReadableDate = (date: Date) => {
  const today = new Date();
  const diff = Math.floor((today.getTime() - date.getTime()) / 86400000);

  if (diff === 0) return "Today";
  else if (diff <= 7) {
    const num = diff;
    return `${num} day${num === 1 ? "" : "s"} ago`;
  } else return intlFormatter.format(date);
};
