import type { ProcessingYaku, ProcessingYakuInput } from "../../types/yaku";
import { agariElementsRemoveAka, notExistsRes } from "./convert";

export const peko = (data: ProcessingYakuInput): ProcessingYaku => {
  let existsFuro = false;
  const shuntsuAgariArr = agariElementsRemoveAka(data.agari.elements).filter((v) => {
    if (v.furo) existsFuro = true;
    return v.type === "shuntsu";
  });
  if (existsFuro || shuntsuAgariArr.length < 2) return notExistsRes;

  const shuntsuCounts: { [key: string]: number } = shuntsuAgariArr
    .map((v) => v.hai.join(""))
    .reduce((acc: { [key: string]: number }, cur) => ((acc[cur] = (acc[cur] || 0) + 1), acc), {});
  const tarCountArr = Object.values(shuntsuCounts).filter((v) => v > 1);

  if (tarCountArr.length === 2 || (tarCountArr.length === 1 && tarCountArr[0] === 4)) {
    const res: ProcessingYaku = {
      exists: true,
      yaku: "二盃口",
      han: 3,
      yakuman: 0,
    };
    return res;
  } else if (tarCountArr.length === 1) {
    const res: ProcessingYaku = {
      exists: true,
      yaku: "一盃口",
      han: 1,
      yakuman: 0,
    };
    return res;
  }

  return notExistsRes;
};
