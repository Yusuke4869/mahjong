import type { ProcessingYaku, ProcessingYakuInput } from "../../types/yaku";
import { getHaiArrayObject } from "../hai/array";
import { getHaiNormalNum } from "../hai/convert";
import { notExistsRes } from "./convert";

export const churempoto = (data: ProcessingYakuInput): ProcessingYaku => {
  if (data.hai.furo.length > 0) return notExistsRes;

  const haiArrObj = getHaiArrayObject(data.hai.hai);
  let haiType: keyof typeof haiArrObj | undefined = undefined;

  for (const k of Object.keys(haiArrObj) as (keyof typeof haiArrObj)[]) {
    const len = haiArrObj[k].filter((v) => v !== 0).length;
    if (len === 0) continue;
    if (len !== 9) return notExistsRes;
    if (haiType !== undefined) return notExistsRes;
    haiType = k;

    for (const [index, value] of haiArrObj[k].entries()) {
      if (index === 0 || index === 8) {
        if (value < 3) return notExistsRes;
        haiArrObj[k][index] -= 3;
      } else {
        if (value === 0) return notExistsRes;
        haiArrObj[k][index] -= 1;
      }
    }
  }

  if (haiType === undefined) return notExistsRes;
  if (haiArrObj[haiType].filter((v) => v !== 0).length !== 1) return notExistsRes;

  // 純正九蓮宝燈
  if (haiArrObj[haiType][getHaiNormalNum(data.agariHai) - 1] === 1 || data.tenho) {
    const res: ProcessingYaku = {
      exists: true,
      yaku: "純正九蓮宝燈",
      han: 0,
      yakuman: data.doubleYakuman ? 2 : 1,
    };
    return res;
  }

  const res: ProcessingYaku = {
    exists: true,
    yaku: "九蓮宝燈",
    han: 0,
    yakuman: 1,
  };

  return res;
};
