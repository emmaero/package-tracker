export function convertToDateText(textDate) {
  const date = new Date(textDate);
  return `${date.toDateString()}`;
}
