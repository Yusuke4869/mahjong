import type { HaiArrayObject } from "../../types/hai";
import type { ProcessingYaku, ProcessingYakuInput } from "../../types/yaku";
import { getHaiNormalNum, getHaiSuffix, suffix2FullType } from "../hai/convert";
import { sortHai } from "../hai/sort";
import { notExistsRes } from "./convert";

export const ittsu = (data: ProcessingYakuInput): ProcessingYaku => {
  let existsFuro = false;
  const haiArrObj: HaiArrayObject = {
    manzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    pinzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    sozu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    jihai: [0, 0, 0, 0, 0, 0, 0],
  };

  for (const elem of data.agari.elements) {
    if (elem.furo) existsFuro = true;
    if (elem.type !== "shuntsu") continue;
    const t = suffix2FullType(getHaiSuffix(elem.hai[0]));

    const hai = sortHai(elem.hai);
    const n1 = getHaiNormalNum(hai[0]);
    const n2 = getHaiNormalNum(hai[1]);
    const n3 = getHaiNormalNum(hai[2]);

    if (n1 === 1 || n1 === 4 || n1 === 7) {
      if (n2 === n1 + 1 && n3 === n1 + 2) {
        haiArrObj[t][n1 - 1]++;
        haiArrObj[t][n2 - 1]++;
        haiArrObj[t][n3 - 1]++;
      }
    }
  }

  for (const k of Object.keys(haiArrObj) as (keyof typeof haiArrObj)[]) {
    if (haiArrObj[k].filter((v) => v !== 0).length === 9) {
      const res: ProcessingYaku = {
        exists: true,
        yaku: "一気通貫",
        han: existsFuro ? 1 : 2,
        yakuman: 0,
      };
      return res;
    }
  }

  return notExistsRes;
};
