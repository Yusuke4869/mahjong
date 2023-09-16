import type { AgariElement, ProcessingAgari } from "../../types/agari";
import type { HaiArrayObject } from "../../types/hai";
import type { Hai } from "../../types/hai";
import { isHaiArrayObjectEmpty } from "../hai/array";
import { fullType2Suffix, getHai, getHaiNormalNum, getHaiSuffix, suffix2FullType } from "../hai/convert";

export const getKotsuCombination = (data: ProcessingAgari, agariHai: Hai, tsumo: boolean): ProcessingAgari[] => {
  const kotsu: AgariElement[] = [];
  const hai: HaiArrayObject = {
    manzu: [...data.hai.manzu],
    pinzu: [...data.hai.pinzu],
    sozu: [...data.hai.sozu],
    jihai: [...data.hai.jihai],
  };

  for (const k of Object.keys(hai) as (keyof typeof hai)[]) {
    const t = fullType2Suffix(k);

    for (const [index, value] of data.hai[k].entries()) {
      if (value >= 3) {
        const n = index + 1;
        kotsu.push({
          type: getHai(n, t) === agariHai && !tsumo && value === 3 ? "minko" : "anko",
          hai: [getHai(n, t), getHai(n, t), getHai(n, t)],
          furo: false,
        });

        hai[k][index] -= 3;
      }
    }
  }

  const res: ProcessingAgari[] = [];

  // bit全探索
  for (let i = 0; i < 1 << kotsu.length; i++) {
    const r: ProcessingAgari = {
      elements: [...data.elements],
      hai: {
        manzu: [...data.hai.manzu],
        pinzu: [...data.hai.pinzu],
        sozu: [...data.hai.sozu],
        jihai: [...data.hai.jihai],
      },
      completed: false,
    };

    for (let j = 0; j < kotsu.length; j++) {
      if ((i >> j) & 1) {
        r.elements.push(kotsu[j]);

        const hai = kotsu[j].hai[0];
        const t = getHaiSuffix(hai);
        const n = getHaiNormalNum(hai);
        r.hai[suffix2FullType(t)][n - 1] -= 3;
      }
    }

    r.completed = isHaiArrayObjectEmpty(r.hai);
    res.push(r);
  }

  return res;
};

export const getShuntsu = (data: ProcessingAgari): ProcessingAgari => {
  if (data.completed) return data;
  const { elements, hai } = data;

  for (const k of Object.keys(hai) as (keyof typeof hai)[]) {
    if (k === "jihai") continue;
    const t = fullType2Suffix(k);

    for (let i = 0; i < 7; ) {
      const v1: number = hai[k][i];
      const v2: number = hai[k][i + 1];
      const v3: number = hai[k][i + 2];
      if (v1 > 0 && v2 > 0 && v3 > 0) {
        const n = i + 1;
        elements.push({
          type: "shuntsu",
          hai: [getHai(n, t), getHai(n + 1, t), getHai(n + 2, t)],
          furo: false,
        });

        hai[k][i]--;
        hai[k][i + 1]--;
        hai[k][i + 2]--;

        if (v1 > 0) continue;
      }

      i++;
    }
  }

  const res: ProcessingAgari = {
    elements: elements,
    hai: hai,
    completed: isHaiArrayObjectEmpty(hai),
  };

  return res;
};
