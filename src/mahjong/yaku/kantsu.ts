import type { ProcessingYaku, ProcessingYakuInput } from "../../types/yaku";
import { notExistsRes } from "./convert";

export const kantsu = (data: ProcessingYakuInput): ProcessingYaku => {
  let count = 0;
  for (const elem of data.agari.elements) {
    if (elem.type === "ankan" || elem.type === "minkan") count++;
  }

  if (count < 3) return notExistsRes;
  if (count === 3) {
    const res: ProcessingYaku = {
      exists: true,
      yaku: "三槓子",
      han: 2,
      yakuman: 0,
    };
    return res;
  }

  const res: ProcessingYaku = {
    exists: true,
    yaku: "四槓子",
    han: 0,
    yakuman: 1,
  };
  return res;
};
