import type { ProcessingYaku, ProcessingYakuInput } from "../../types/yaku";
import { getHaiNormalNum } from "../hai/convert";
import { sortHai } from "../hai/sort";
import { notExistsRes } from "./convert";

export const sanshokudojun = (data: ProcessingYakuInput): ProcessingYaku => {
  let existsFuro = false;
  const shuntsuArr = data.agari.elements.filter((v) => {
    if (v.furo) existsFuro = true;
    return v.type === "shuntsu";
  });
  const shuntsuSet = new Set(shuntsuArr);
  if (shuntsuSet.size < 3) return notExistsRes;

  const haiTypeArr: ("m" | "p" | "s")[] = shuntsuArr.map((v) => v.hai[0].slice(-1) as "m" | "p" | "s");
  const haiTypeSet = new Set(haiTypeArr);
  if (haiTypeSet.size !== 3) return notExistsRes;

  const numArr: number[] = [];
  for (const elem of Array.from(shuntsuSet)) {
    const hai = sortHai(elem.hai);
    const n1 = getHaiNormalNum(hai[0]);
    const n2 = getHaiNormalNum(hai[1]);
    const n3 = getHaiNormalNum(hai[2]);

    if (n2 === n1 + 1 && n3 === n1 + 2) {
      numArr.push(n1);
    }
  }

  const numSet = new Set(numArr);
  if (numArr.length === 3 && numSet.size === 1) {
    const res: ProcessingYaku = {
      exists: true,
      yaku: "三色同順",
      han: existsFuro ? 1 : 2,
      yakuman: 0,
    };
    return res;
  }

  if (numArr.length !== 4 && numSet.size > 2) return notExistsRes;
  for (const num of numSet) {
    if (numArr.filter((v) => v === num).length >= 3) {
      const res: ProcessingYaku = {
        exists: true,
        yaku: "三色同順",
        han: existsFuro ? 1 : 2,
        yakuman: 0,
      };
      return res;
    }
  }

  return notExistsRes;
};
