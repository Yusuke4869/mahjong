import type { ProcessingYaku, ProcessingYakuInput } from "../../types/yaku";
import { getHaiArrayObject } from "../hai/array";
import { notExistsRes } from "./convert";

export const tsuiso = (data: ProcessingYakuInput): ProcessingYaku => {
  const haiArrObj = getHaiArrayObject(data.hai.hai);

  for (const k of Object.keys(haiArrObj) as (keyof typeof haiArrObj)[]) {
    const len = haiArrObj[k].filter((v) => v !== 0).length;

    if (k !== "jihai" && len !== 0) return notExistsRes;
  }

  const res: ProcessingYaku = {
    exists: true,
    yaku: "字一色",
    han: 0,
    yakuman: 1,
  };
  return res;
};
