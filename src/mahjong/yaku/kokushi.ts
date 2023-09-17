import type { ProcessingYaku, ProcessingYakuInput } from "../../types/yaku";
import { getHaiArrayObject } from "../hai/array";
import { notExistsRes } from "./convert";

export const kokushi = (data: ProcessingYakuInput): ProcessingYaku => {
  if (data.agari.elements.length > 0) return notExistsRes;
  if (data.hai.furo.length > 0) return notExistsRes;

  const haiArrObj = getHaiArrayObject(data.hai.hai);
  let count = 0;
  for (const k of Object.keys(haiArrObj) as (keyof typeof haiArrObj)[]) {
    for (const [index, value] of haiArrObj[k].entries()) {
      if (k === "jihai") {
        if (value === 0) return notExistsRes;
        else count++;
      } else if (index === 0 || index === 8) {
        if (value === 0) return notExistsRes;
        else count++;
      } else {
        if (value !== 0) return notExistsRes;
      }
    }
  }

  if (count !== 13) return notExistsRes;

  const r = data.hai.hai.filter((h) => h === data.agariHai);
  if (r.length === 2 || data.tenho) {
    const res: ProcessingYaku = {
      exists: true,
      yaku: "国士無双十三面待ち",
      han: 0,
      yakuman: data.doubleYakuman ? 2 : 1,
    };
    return res;
  }

  const res: ProcessingYaku = {
    exists: true,
    yaku: "国士無双",
    han: 0,
    yakuman: 1,
  };

  return res;
};
