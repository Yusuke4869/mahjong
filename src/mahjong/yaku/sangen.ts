import type { ProcessingYaku, ProcessingYakuInput } from "../../types/yaku";
import { notExistsRes } from "./convert";

export const sangen = (data: ProcessingYakuInput): ProcessingYaku => {
  let count = 0;
  for (const elem of data.agari.elements) {
    const t = elem.type;
    if (t === "anko" || t === "minko" || t === "ankan" || t === "minkan") {
      const h = elem.hai[0];
      if (h === "5z" || h === "6z" || h === "7z") count++;
    }
  }

  if (count === 3) {
    const res: ProcessingYaku = {
      exists: true,
      yaku: "大三元",
      han: 0,
      yakuman: 1,
    };
    return res;
  }

  if (count !== 2) return notExistsRes;

  const atama = data.agari.elements.filter((elem) => elem.type === "toitsu")[0];
  const atamaHai = atama.hai[0];
  if (atamaHai === "5z" || atamaHai === "6z" || atamaHai === "7z") {
    const res: ProcessingYaku = {
      exists: true,
      yaku: "小三元",
      han: 2,
      yakuman: 0,
    };
    return res;
  }

  return notExistsRes;
};
