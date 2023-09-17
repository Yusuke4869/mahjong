import type { AgariElement } from "../../types/agari";
import type { Hai } from "../../types/hai";
import type { ProcessingYaku } from "../../types/yaku";
import { aka2Normal, getHai, getHaiNormalNum, getHaiSuffix } from "../hai/convert";

export const notExistsRes: ProcessingYaku = {
  exists: false,
  yaku: null,
  han: 0,
  yakuman: 0,
};

export const agariElementsRemoveAka = (agari: AgariElement[]): AgariElement[] => {
  const res: AgariElement[] = [];

  for (const e of agari) {
    const r: AgariElement = {
      type: e.type,
      hai: [],
      furo: e.furo,
    };

    for (const h of e.hai) {
      r.hai.push(aka2Normal(h));
    }

    res.push(r);
  }

  return res;
};

export const doraHyo2Dora = (doraHyo: Hai): Hai => {
  const haiNum = getHaiNormalNum(doraHyo);
  const haiSuffix = getHaiSuffix(doraHyo);

  if (haiSuffix === "z") {
    if (haiNum === 7) return getHai(5, haiSuffix);
    else if (haiNum === 4) return getHai(1, haiSuffix);
    return getHai(haiNum + 1, haiSuffix);
  }

  if (haiNum === 9) return getHai(1, haiSuffix);
  return getHai(haiNum + 1, haiSuffix);
};
