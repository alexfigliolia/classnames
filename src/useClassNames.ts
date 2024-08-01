import { useMemo } from "react";
import { classnames } from "./classnames";
import type { IClassNameList } from "./types";

export const useClassNames = (...args: IClassNameList) => {
  return useMemo(() => classnames(...args), [args]);
};
