import type { ProcessingYaku, ProcessingYakuInput } from "../../types/yaku";
import { notExistsRes } from "./convert";

export const toitoi = (data: ProcessingYakuInput): ProcessingYaku => {
  if (data.agari.elements.length !== 5) return notExistsRes;

  for (const elem of data.agari.elements) {
    const t = elem.type;
    if (t === "shuntsu") return notExistsRes;
  }

  const res: ProcessingYaku = {
    exists: true,
    yaku: "対々和",
    han: 2,
    yakuman: 0,
  };
  return res;
};
