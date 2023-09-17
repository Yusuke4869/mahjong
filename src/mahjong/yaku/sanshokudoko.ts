import type { Hai } from "../../types/hai";
import type { ProcessingYaku, ProcessingYakuInput } from "../../types/yaku";
import { getHaiNormalNum, getHaiSuffix } from "../hai/convert";
import { notExistsRes } from "./convert";

export const sanshokudoko = (data: ProcessingYakuInput): ProcessingYaku => {
  const kotsuArr: Hai[] = [];

  for (const elem of data.agari.elements) {
    const t = elem.type;
    if (t === "shuntsu" || t === "toitsu") continue;
    if (getHaiSuffix(elem.hai[0]) === "z") continue;

    kotsuArr.push(elem.hai[0]);
  }

  const kotsuSet = new Set(kotsuArr);
  if (kotsuSet.size < 3) return notExistsRes;

  const numArr = Array.from(kotsuSet).map((v) => getHaiNormalNum(v));
  const numSet = new Set(numArr);

  if (kotsuSet.size === 3 && numSet.size === 1) {
    const res: ProcessingYaku = {
      exists: true,
      yaku: "三色同刻",
      han: 2,
      yakuman: 0,
    };
    return res;
  }

  if (kotsuSet.size === 4 && numSet.size === 2) {
    for (const num of numSet) {
      if (numArr.filter((v) => v === num).length === 3) {
        const res: ProcessingYaku = {
          exists: true,
          yaku: "三色同刻",
          han: 2,
          yakuman: 0,
        };
        return res;
      }
    }
  }

  return notExistsRes;
};
