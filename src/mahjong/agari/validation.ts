import type { HaiInput } from "../../types/agari";
import type { Furo } from "../../types/hai";
import { getHaiArrayObject } from "../hai/array";
import { getHaiNormalNum, getHaiSuffix } from "../hai/convert";
import { sortHai } from "../hai/sort";

export const furoValidation = (furo: Furo): boolean => {
  const haiType = getHaiSuffix(furo.hai[0]);
  for (const h of furo.hai) {
    const hType = getHaiSuffix(h);
    if (hType !== haiType) return false;
  }

  if (furo.type === "chi") {
    if (furo.hai.length !== 3) return false;

    const haiType = getHaiSuffix(furo.hai[0]);
    if (haiType === "z") return false;

    const hai = sortHai(furo.hai);

    const num = getHaiNormalNum(hai[0]);
    if (num > 7) return false;
    for (let i = 1; i < 3; i++) {
      const n = getHaiNormalNum(hai[i]);
      if (n - num !== i) return false;
    }

    return true;
  }

  if (furo.type === "pon" || furo.type === "daiminkan" || furo.type === "ankan" || furo.type === "kakan") {
    if (furo.type === "pon") {
      if (furo.hai.length !== 3) return false;
    } else {
      if (furo.hai.length !== 4) return false;
    }

    const num = getHaiNormalNum(furo.hai[0]);
    for (const h of furo.hai) {
      const n = getHaiNormalNum(h);
      if (n !== num) return false;
    }

    return true;
  }

  return false;
};

export const inputValidation = (input: HaiInput): boolean => {
  const hai = Array.from(input.hai);
  for (const furo of input.furo) {
    const r = furoValidation(furo);
    if (!r) return false;
    hai.push(...furo.hai);
  }

  if (hai.length < 14) return false;
  if (input.hai.length !== 14 - input.furo.length * 3) return false;

  const haiArrObj = getHaiArrayObject(hai);
  for (const k of Object.keys(haiArrObj) as (keyof typeof haiArrObj)[]) {
    for (const v of haiArrObj[k]) {
      if (v > 4) return false;
    }
  }

  return true;
};
