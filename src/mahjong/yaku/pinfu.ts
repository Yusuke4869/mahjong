import type { Kaze } from "../../types/hai";
import type { CheckPinfuResult, ProcessingYaku, ProcessingYakuInput } from "../../types/yaku";
import { notExistsRes } from "./convert";
import { waiting } from "./waiting";

export const checkPinfu = (data: ProcessingYakuInput, bakaze: Kaze, jikaze: Kaze): CheckPinfuResult => {
  const res: CheckPinfuResult = {
    exists: false,
    furo: false,
  };

  let furo = false;
  for (const elem of data.agari.elements) {
    if (elem.furo) furo = true;

    const t = elem.type;
    if (t === "toitsu") {
      const hai = elem.hai[0];
      if (hai === bakaze || hai === jikaze || hai === "5z" || hai === "6z" || hai === "7z") return res;
      continue;
    }

    if (t !== "shuntsu") return res;
  }

  const w = waiting(data);
  if (!w.ryammen) return res;

  res.exists = true;
  res.furo = furo;
  return res;
};

export const pinfu = (data: ProcessingYakuInput, bakaze: Kaze, jikaze: Kaze): ProcessingYaku => {
  const result = checkPinfu(data, bakaze, jikaze);
  if (!result.exists) return notExistsRes;
  if (result.furo) return notExistsRes;

  const res: ProcessingYaku = {
    exists: true,
    yaku: "平和",
    han: 1,
    yakuman: 0,
  };
  return res;
};
