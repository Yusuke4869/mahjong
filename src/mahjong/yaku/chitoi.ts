import type { ProcessingYaku, ProcessingYakuInput } from "../../types/yaku";
import { notExistsRes } from "./convert";

export const chitoi = (data: ProcessingYakuInput): ProcessingYaku => {
  if (data.agari.elements.length !== 7) return notExistsRes;

  const res: ProcessingYaku = {
    exists: true,
    yaku: "七対子",
    han: 2,
    yakuman: 0,
  };
  return res;
};
