import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const escapedNewLineToLineBreakTag = (str?: string) => {
  if (!str) {
    return null;
  }
  return str.split("\n").map(function (item, idx) {
    return (
      <span key={idx}>
        {item}
        <br />
      </span>
    );
  });
};
