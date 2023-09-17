import type { AgariElement } from "../../types/agari";
import type { Hai } from "../../types/hai";
import type { ProcessingYakuInput, Waiting } from "../../types/yaku";
import { aka2Normal, getHaiNormalNum } from "../hai/convert";
import { sortHai } from "../hai/sort";
import { agariElementsRemoveAka } from "./convert";

export const waiting = (data: ProcessingYakuInput): Waiting => {
  const tarElemArr: AgariElement[] = [];
  const agariHai: Hai = aka2Normal(data.agariHai);

  for (const elem of agariElementsRemoveAka(data.agari.elements)) {
    if (elem.furo) continue;
    if (elem.type === "ankan" || elem.type === "minkan") continue;
    // ロン和了の刻子は明刻になる
    if (elem.type === "anko" && !data.tsumo) continue;

    for (const hai of elem.hai) {
      if (hai === agariHai) {
        tarElemArr.push(elem);
        break;
      }
    }
  }

  const res: Waiting = {
    ryammen: false,
    shampon: false,
    penchan: false,
    kanchan: false,
    tanki: false,
  };

  for (const elem of tarElemArr) {
    const t = elem.type;
    if (t === "toitsu") {
      res.tanki = true;
      continue;
    }

    if (t === "anko") {
      res.shampon = true;
      continue;
    }

    if (t !== "shuntsu") continue;
    const hai = sortHai(elem.hai);

    if (hai[1] === agariHai) {
      res.kanchan = true;
      continue;
    }

    if (hai[0] === agariHai) {
      if (getHaiNormalNum(agariHai) === 7) res.penchan = true;
      else res.ryammen = true;

      continue;
    }

    if (hai[2] === agariHai) {
      if (getHaiNormalNum(agariHai) === 3) res.penchan = true;
      else res.ryammen = true;
    }
  }

  return res;
};
