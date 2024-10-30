import dayjs from "dayjs";

const greet = (name: string): string => {
  return `Hello ${name}!`;
};

console.log(greet("deno")); // Hello deno!

// dayjs
const format = "YYYY-MM-DD HH:mm:ss";
const now = dayjs().format(format);
console.log(now); // 2021-08-31 14:00:00