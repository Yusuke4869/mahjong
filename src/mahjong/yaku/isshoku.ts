import type { ProcessingYaku, ProcessingYakuInput } from "../../types/yaku";
import { getHaiArrayObject } from "../hai/array";
import { getHaiSuffix, suffix2FullType } from "../hai/convert";
import { notExistsRes } from "./convert";

export const isshoku = (data: ProcessingYakuInput): ProcessingYaku => {
  const haiArrObj = getHaiArrayObject(data.hai.hai);
  let existsFuro = false;
  let haiType: keyof typeof haiArrObj | undefined = undefined;
  let existsJihai = false;

  for (const k of Object.keys(haiArrObj) as (keyof typeof haiArrObj)[]) {
    const len = haiArrObj[k].filter((v) => v !== 0).length;
    if (len === 0) continue;

    if (k === "jihai") {
      existsJihai = true;
      continue;
    }

    if (haiType !== undefined) return notExistsRes;
    haiType = k;
  }

  for (const furo of data.hai.furo) {
    if (furo.type !== "ankan") existsFuro = true;
    const t = suffix2FullType(getHaiSuffix(furo.hai[0]));
    if (t === "jihai") {
      existsJihai = true;
      continue;
    }

    if (haiType !== undefined && haiType !== t) return notExistsRes;
  }

  if (haiType === undefined) return notExistsRes;
  if (existsJihai) {
    const res: ProcessingYaku = {
      exists: true,
      yaku: "混一色",
      han: existsFuro ? 2 : 3,
      yakuman: 0,
    };
    return res;
  }

  const res: ProcessingYaku = {
    exists: true,
    yaku: "清一色",
    han: existsFuro ? 5 : 6,
    yakuman: 0,
  };
  return res;
};
