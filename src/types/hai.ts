// 0は赤ドラ（五萬, 五筒, 五索）
export type Manzu = "0m" | "1m" | "2m" | "3m" | "4m" | "5m" | "6m" | "7m" | "8m" | "9m";
export type Pinzu = "0p" | "1p" | "2p" | "3p" | "4p" | "5p" | "6p" | "7p" | "8p" | "9p";
export type Sozu = "0s" | "1s" | "2s" | "3s" | "4s" | "5s" | "6s" | "7s" | "8s" | "9s";
// 東南西北白發中
export type Jihai = "1z" | "2z" | "3z" | "4z" | "5z" | "6z" | "7z";
// 風
export type Kaze = "1z" | "2z" | "3z" | "4z";

export type Hai = Manzu | Pinzu | Sozu | Jihai;

export type HaiSuffix = "m" | "p" | "s" | "z";
export type HaiFullType = keyof HaiArrayObject;

export interface Furo {
  type: "chi" | "pon" | "daiminkan" | "ankan" | "kakan";
  hai: Hai[];
}

export interface HaiArrayObject {
  manzu: number[];
  pinzu: number[];
  sozu: number[];
  jihai: number[];
}
