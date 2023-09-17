import type { ProcessingYaku, ProcessingYakuInput } from "../../types/yaku";
import { getHaiArrayObject } from "../hai/array";
import { notExistsRes } from "./convert";

export const ryuiso = (data: ProcessingYakuInput): ProcessingYaku => {
  const haiArrObj = getHaiArrayObject(data.hai.hai);

  for (const k of Object.keys(haiArrObj) as (keyof typeof haiArrObj)[]) {
    for (const [index, value] of haiArrObj[k].entries()) {
      if (k === "manzu" || k === "pinzu") {
        if (value !== 0) return notExistsRes;
      } else if (k === "jihai") {
        if (index !== 5 && value !== 0) return notExistsRes;
        else continue;
      } else if (index === 0 || index === 4 || index === 6 || index === 8) {
        if (value !== 0) return notExistsRes;
      }
    }
  }

  const res: ProcessingYaku = {
    exists: true,
    yaku: "緑一色",
    han: 0,
    yakuman: 1,
  };
  return res;
};
