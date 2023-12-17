export function getFormattedDate(date) {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return date.toLocaleString("en-GB", options);
}

export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}

export function getFormattedISODate(date) {
  return date.toISOString().slice(0, 10);
}
