import type { ProcessingAgari } from "../../types/agari";
import { isHaiArrayObjectEmpty } from "../hai/array";
import { fullType2Suffix, getHai } from "../hai/convert";

export const getToitsu = (data: ProcessingAgari): ProcessingAgari => {
  const { elements, hai } = data;

  for (const k of Object.keys(hai) as (keyof typeof hai)[]) {
    const t = fullType2Suffix(k);

    for (const [index, value] of data.hai[k].entries()) {
      if (value >= 2) {
        const n = index + 1;
        elements.push({
          type: "toitsu",
          hai: [getHai(n, t), getHai(n, t)],
          furo: false,
        });

        hai[k][index] -= 2;
      }
    }
  }

  const res: ProcessingAgari = {
    elements: elements,
    hai: hai,
    completed: isHaiArrayObjectEmpty(hai),
  };

  return res;
};
