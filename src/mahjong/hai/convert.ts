import type { Hai, HaiFullType, HaiSuffix } from "../../types/hai";

export const getHaiNormalNum = (hai: Hai): number => {
  const haiNum = parseInt(hai, 10);
  return haiNum === 0 ? 5 : haiNum;
};

export const getHaiSuffix = (hai: Hai): HaiSuffix => {
  return hai.slice(-1) as HaiSuffix;
};

export const getHai = (num: number, suffix: HaiSuffix): Hai => {
  if (
    (num === 0 ||
      num === 1 ||
      num === 2 ||
      num === 3 ||
      num === 4 ||
      num === 5 ||
      num === 6 ||
      num === 7 ||
      num === 8 ||
      num === 9) &&
    (suffix === "m" || suffix === "p" || suffix === "s")
  )
    return `${num}${suffix}`;

  if ((num === 1 || num === 2 || num === 3 || num === 4 || num === 5 || num === 6 || num === 7) && suffix === "z")
    return `${num}${suffix}`;

  throw new Error(`Not Exists Hai: ${num}${suffix}`);
};

export const aka2Normal = (hai: Hai): Hai => {
  const num = parseInt(hai);
  const suffix = getHaiSuffix(hai);
  if (num === 0 && (suffix === "m" || suffix === "p" || suffix === "s")) return getHai(5, suffix);

  return hai;
};

export const normal2Aka = (hai: Hai): Hai => {
  const num = getHaiNormalNum(hai);
  const suffix = getHaiSuffix(hai);
  if (num === 5 && (suffix === "m" || suffix === "p" || suffix === "s")) return getHai(0, suffix);

  return hai;
};

export const suffix2FullType = (suffix: HaiSuffix): HaiFullType => {
  switch (suffix) {
    case "m":
      return "manzu";
    case "p":
      return "pinzu";
    case "s":
      return "sozu";
    case "z":
      return "jihai";
  }
};

export const fullType2Suffix = (fullType: HaiFullType): HaiSuffix => {
  switch (fullType) {
    case "manzu":
      return "m";
    case "pinzu":
      return "p";
    case "sozu":
      return "s";
    case "jihai":
      return "z";
  }
};
