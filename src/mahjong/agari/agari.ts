import type { Agari, HaiInput, ProcessingAgari } from "../../types/agari";
import type { Hai } from "../../types/hai";
import { getHaiArrayObject } from "../hai/array";
import { furo2Elements, getAka, initialize, replaceAka } from "./convert";
import { getKotsuCombination, getShuntsu } from "./mentsu";
import { getToitsu } from "./toitsu";
import { inputValidation } from "./validation";

export const getAgari = (hai: HaiInput, agariHai: Hai, tsumo?: boolean): Agari[] | null => {
  const validation = inputValidation(hai);
  if (!validation) return null;

  const furo = furo2Elements(hai.furo);
  if (!furo) return null;
  const aka = getAka(hai.hai);

  const haiArrObj = getHaiArrayObject(hai.hai);
  const agariArr: ProcessingAgari[] = [];
  const res: Agari[] = [];

  const toitsu: ProcessingAgari = getToitsu({
    elements: [],
    hai: {
      manzu: [...haiArrObj.manzu],
      pinzu: [...haiArrObj.pinzu],
      sozu: [...haiArrObj.sozu],
      jihai: [...haiArrObj.jihai],
    },
    completed: false,
  });

  if (toitsu.completed && toitsu.elements.length === 7) {
    const agari: Agari = {
      elements: toitsu.elements,
    };

    res.push(replaceAka(agari, aka));
  }

  for (const atama of toitsu.elements) {
    // 雀頭
    const r = initialize(furo, haiArrObj, atama);
    if (!r) continue;

    // 刻子
    const comb = getKotsuCombination(r, agariHai, tsumo ?? true);
    agariArr.push(...comb);
  }

  for (const v of agariArr) {
    // 順子
    const r = getShuntsu(v);

    if (r.completed && r.elements.length === 5) {
      const agari: Agari = {
        elements: r.elements,
      };

      res.push(replaceAka(agari, aka));
    }
  }

  return res.length > 0 ? res : null;
};
