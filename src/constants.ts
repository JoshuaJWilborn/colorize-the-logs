export const toDelete = [
  "\\[2K", // clear line
  "\\[1A" // Move cursor up 1 line   ([2B move up 2 lines)
];
export const query = /(\[)(\d{1,3}m)/g;
export const end = /((\[39m)|(\[0m))/g;
