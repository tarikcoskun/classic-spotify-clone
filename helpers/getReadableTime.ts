export function getReadableTime(timestamp: number) {
  return [new String(Math.floor(timestamp / 60000)), new String(Math.floor((timestamp % 60000) / 1000)).padStart(2, "0")].join(":");
}
