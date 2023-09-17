import type { ProcessingYaku, ProcessingYakuInput } from "../../types/yaku";
import { notExistsRes } from "./convert";

export const sushiho = (data: ProcessingYakuInput): ProcessingYaku => {
  let count = 0;
  for (const elem of data.agari.elements) {
    const t = elem.type;
    if (t === "anko" || t === "minko" || t === "ankan" || t === "minkan") {
      const h = elem.hai[0];
      if (h === "1z" || h === "2z" || h === "3z" || h === "4z") count++;
    }
  }

  if (count === 4) {
    const res: ProcessingYaku = {
      exists: true,
      yaku: "大四喜",
      han: 0,
      yakuman: data.doubleYakuman ? 2 : 1,
    };
    return res;
  }

  if (count !== 3) return notExistsRes;

  const atama = data.agari.elements.filter((elem) => elem.type === "toitsu")[0];
  const atamaHai = atama.hai[0];
  if (atamaHai === "1z" || atamaHai === "2z" || atamaHai === "3z" || atamaHai === "4z") {
    const res: ProcessingYaku = {
      exists: true,
      yaku: "小四喜",
      han: 0,
      yakuman: 1,
    };
    return res;
  }

  return notExistsRes;
};
