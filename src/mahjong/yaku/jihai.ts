import type { Kaze } from "../../types/hai";
import type { ProcessingYaku, ProcessingYakuInput } from "../../types/yaku";

export const jihai = (data: ProcessingYakuInput, bakaze: Kaze, jikaze: Kaze): ProcessingYaku[] => {
  const res: ProcessingYaku[] = [];

  for (const elem of data.agari.elements) {
    if (elem.type === "shuntsu" || elem.type === "toitsu") continue;

    const h = elem.hai[0];
    if (h === jikaze)
      res.push({
        exists: true,
        yaku: "自風牌",
        han: 1,
        yakuman: 0,
      });

    if (h === bakaze)
      res.push({
        exists: true,
        yaku: "場風牌",
        han: 1,
        yakuman: 0,
      });

    if (h === "5z")
      res.push({
        exists: true,
        yaku: "白",
        han: 1,
        yakuman: 0,
      });
    else if (h === "6z")
      res.push({
        exists: true,
        yaku: "發",
        han: 1,
        yakuman: 0,
      });
    else if (h === "7z")
      res.push({
        exists: true,
        yaku: "中",
        han: 1,
        yakuman: 0,
      });
  }

  return res;
};
