import type { ProcessingYaku, ProcessingYakuInput } from "../../types/yaku";
import { getHaiNormalNum, getHaiSuffix } from "../hai/convert";
import { notExistsRes } from "./convert";

export const roto = (data: ProcessingYakuInput): ProcessingYaku => {
  let existsJihai = false;
  let existsRoto = false;
  for (const elem of data.agari.elements) {
    if (elem.type === "shuntsu") return notExistsRes;

    const h = elem.hai[0];
    if (getHaiSuffix(h) === "z") {
      existsJihai = true;
      continue;
    }

    const num = getHaiNormalNum(h);
    if (num !== 1 && num !== 9) return notExistsRes;
    existsRoto = true;
  }

  if (!existsRoto) return notExistsRes;
  if (existsJihai) {
    const res: ProcessingYaku = {
      exists: true,
      yaku: "混老頭",
      han: 2,
      yakuman: 0,
    };
    return res;
  }

  const res: ProcessingYaku = {
    exists: true,
    yaku: "清老頭",
    han: 0,
    yakuman: 1,
  };
  return res;
};
