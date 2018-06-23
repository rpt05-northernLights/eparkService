//dateDiff function calculates the time to resolved
export function dateDiff(date1, date2) {
  // Convert one day to milliseconds
  let one_day = 1000 * 60 * 60 * 24;
  
  // Get days with milliseconds
  date1 = new Date(date1).getTime();
  date2 = new Date(date2).getTime();

  // Calculate the diff in milliseconds
  let difference = date1 - date2;

  // Convert back to days
  return Math.round(difference/one_day);
}
