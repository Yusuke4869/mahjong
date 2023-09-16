import type { Agari, AgariElement, ProcessingAgari } from "../../types/agari";
import type { Furo, Hai, HaiArrayObject } from "../../types/hai";
import { getHai, getHaiNormalNum, getHaiSuffix, suffix2FullType } from "../hai/convert";
import { furoValidation } from "./validation";

const furoType2ElementType = (furoType: Furo["type"]): AgariElement["type"] => {
  switch (furoType) {
    case "chi":
      return "shuntsu";
    case "pon":
      return "minko";
    case "daiminkan":
      return "minkan";
    case "ankan":
      return "ankan";
    case "kakan":
      return "minkan";
  }
};

export const furo2Elements = (furo: Furo[]): AgariElement[] | false => {
  const elem: AgariElement[] = [];
  for (const f of furo) {
    const r = furoValidation(f);
    if (!r) return false;

    elem.push({
      type: furoType2ElementType(f.type),
      hai: f.hai,
      furo: f.type === "ankan" ? false : true,
    });
  }

  return elem;
};

export const initialize = (
  furo: AgariElement[],
  haiArrObj: HaiArrayObject,
  atama: AgariElement,
): ProcessingAgari | null => {
  if (atama.type !== "toitsu") return null;

  const r: ProcessingAgari = {
    elements: [...furo],
    hai: {
      manzu: [...haiArrObj.manzu],
      pinzu: [...haiArrObj.pinzu],
      sozu: [...haiArrObj.sozu],
      jihai: [...haiArrObj.jihai],
    },
    completed: false,
  };
  r.elements.push(atama);

  const atamaHai = atama.hai[0];
  const n = getHaiNormalNum(atamaHai);
  const t = getHaiSuffix(atamaHai);
  r.hai[suffix2FullType(t)][n - 1] -= 2;

  return r;
};

export const getAka = (hai: Hai[]): Hai[] => {
  const aka: Hai[] = [];

  for (const h of hai) {
    const num = parseInt(h);
    const t = getHaiSuffix(h);
    if (num === 0 && (t === "m" || t === "p" || t === "s")) {
      aka.push(`5${t}`);
    }
  }

  return aka;
};

export const replaceAka = (agari: Agari, aka: Hai[]): Agari => {
  const res: Agari = {
    elements: [],
  };

  for (const e of agari.elements) {
    if (e.furo) {
      res.elements.push(e);
      continue;
    }

    const r: AgariElement = {
      type: e.type,
      hai: [],
      furo: e.furo,
    };

    for (const h of e.hai) {
      if (aka.includes(h)) {
        const t = getHaiSuffix(h);
        r.hai.push(getHai(0, t));

        aka.splice(aka.indexOf(h), 1);
      } else r.hai.push(h);
    }

    res.elements.push(r);
  }

  return res;
};
