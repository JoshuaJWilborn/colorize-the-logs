export const toDelete = [
  "\\[2K", // clear line
  "\\[1A" // Move cursor up 1 line   ([2B move up 2 lines)
];
export const query = /(\[)(\d{1,2}m)/g;
