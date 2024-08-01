import type { IClassNameList } from "./types";

export const classnames = (...args: IClassNameList) => {
  const classes: string[] = [];
  for (const arg of args) {
    switch (typeof arg) {
      case "string":
        classes.push(arg);
        break;
      case "object": {
        if (!arg) {
          break;
        }
        if (Array.isArray(arg)) {
          classes.push(...classnames(arg));
          break;
        }
        for (const key in arg) {
          if (arg[key]) {
            classes.push(key);
          }
        }
        break;
      }
      case "undefined":
      default:
        break;
    }
  }
  return classes.join(" ");
};
