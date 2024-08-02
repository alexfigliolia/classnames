import type { IClassNameList } from "./types";

export const classnames = (...args: IClassNameList) => {
  const classes: string[] = [];
  for (const arg of args) {
    if (typeof arg === "string" && arg.length) {
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      classes.push(...classnames(arg));
    } else if (typeof arg === "object" && !!arg) {
      for (const key in arg) {
        if (arg[key]) {
          classes.push(key);
        }
      }
    }
  }
  return classes.join(" ");
};
