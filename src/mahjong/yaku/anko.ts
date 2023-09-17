import type { Hai } from "../../types/hai";
import type { ProcessingYaku, ProcessingYakuInput } from "../../types/yaku";
import { aka2Normal } from "../hai/convert";
import { agariElementsRemoveAka, notExistsRes } from "./convert";

export const anko = (data: ProcessingYakuInput): ProcessingYaku => {
  let count = 0;
  const haiArr: Hai[] = [];
  for (const elem of agariElementsRemoveAka(data.agari.elements)) {
    if (elem.type === "anko" || elem.type === "ankan") {
      count++;
      haiArr.push(elem.hai[0]);
    }
  }

  if (count < 3) return notExistsRes;
  const atamaHai = aka2Normal(data.agari.elements.filter((elem) => elem.type === "toitsu")[0].hai[0]);
  const agariHai = aka2Normal(data.agariHai);

  if (count === 4) {
    if (agariHai === atamaHai || data.tenho) {
      const res: ProcessingYaku = {
        exists: true,
        yaku: "四暗刻単騎",
        han: 0,
        yakuman: data.doubleYakuman ? 2 : 1,
      };
      return res;
    } else if (data.tsumo) {
      const res: ProcessingYaku = {
        exists: true,
        yaku: "四暗刻",
        han: 0,
        yakuman: 1,
      };
      return res;
    } else {
      const res: ProcessingYaku = {
        exists: true,
        yaku: "三暗刻",
        han: 2,
        yakuman: 0,
      };
      return res;
    }
  }

  const jud = haiArr.includes(agariHai);
  if ((jud && data.tsumo) || !jud) {
    const res: ProcessingYaku = {
      exists: true,
      yaku: "三暗刻",
      han: 2,
      yakuman: 0,
    };
    return res;
  }

  return notExistsRes;
};
