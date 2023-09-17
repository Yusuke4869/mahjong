import type { ProcessingYaku, ProcessingYakuInput } from "../../types/yaku";
import { getHaiNormalNum, getHaiSuffix } from "../hai/convert";
import { notExistsRes } from "./convert";

export const tanyao = (data: ProcessingYakuInput): ProcessingYaku => {
  for (const elem of data.agari.elements) {
    if (getHaiSuffix(elem.hai[0]) === "z") return notExistsRes;

    const t = elem.type;
    if (t === "shuntsu") {
      for (const hai of elem.hai) {
        const haiNum = getHaiNormalNum(hai);
        if (haiNum === 1 || haiNum === 9) return notExistsRes;
      }
    } else {
      const haiNum = getHaiNormalNum(elem.hai[0]);
      if (haiNum === 1 || haiNum === 9) return notExistsRes;
    }
  }

  const res: ProcessingYaku = {
    exists: true,
    yaku: "断么九",
    han: 1,
    yakuman: 0,
  };
  return res;
};
