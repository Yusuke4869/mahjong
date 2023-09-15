import type { Hai, HaiArrayObject } from "../../types/hai";
import { getHaiNormalNum, getHaiSuffix, suffix2FullType } from "./convert";

export const getHaiArrayObject = (hai: Hai[]): HaiArrayObject => {
  const res: HaiArrayObject = {
    manzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    pinzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    sozu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    jihai: [0, 0, 0, 0, 0, 0, 0],
  };

  for (const h of hai) {
    const t = getHaiSuffix(h);
    const n = getHaiNormalNum(h);
    res[suffix2FullType(t)][n - 1]++;
  }

  return res;
};

export const isHaiArrayObjectEmpty = (haiArray: HaiArrayObject): boolean => {
  for (const k of Object.keys(haiArray) as (keyof typeof haiArray)[]) {
    for (const v of haiArray[k]) {
      if (v !== 0) return false;
    }
  }
  return true;
};
