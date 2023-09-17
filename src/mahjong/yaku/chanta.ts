import type { ProcessingYaku, ProcessingYakuInput } from "../../types/yaku";
import { getHaiNormalNum, getHaiSuffix } from "../hai/convert";
import { notExistsRes } from "./convert";

export const chanta = (data: ProcessingYakuInput): ProcessingYaku => {
  let existsFuro = false;
  let existsJihai = false;

  for (const elem of data.agari.elements) {
    if (elem.furo) existsFuro = true;
    if (getHaiSuffix(elem.hai[0]) === "z") {
      existsJihai = true;
      continue;
    }

    let existsRoto = false;
    for (const h of elem.hai) {
      const num = getHaiNormalNum(h);
      if (num === 1 || num === 9) {
        existsRoto = true;
        break;
      }
    }

    if (!existsRoto) return notExistsRes;
  }

  if (existsJihai) {
    const res: ProcessingYaku = {
      exists: true,
      yaku: "混全帯么九",
      han: existsFuro ? 1 : 2,
      yakuman: 0,
    };
    return res;
  }

  const res: ProcessingYaku = {
    exists: true,
    yaku: "純全帯么九",
    han: existsFuro ? 2 : 3,
    yakuman: 0,
  };
  return res;
};
