import type { Agari, HaiInput } from "./agari";
import type { Hai, Kaze } from "./hai";
import type { Pay } from "./score";

export interface ProcessingYakuInput {
  hai: HaiInput;
  agari: Agari;
  agariHai: Hai;
  tsumo: boolean;
  doubleYakuman: boolean;
  tenho?: boolean;
}

export interface ProcessingYaku {
  exists: boolean;
  yaku: string | null;
  han: number;
  yakuman: number;
}

export interface Waiting {
  ryammen: boolean;
  shampon: boolean;
  penchan: boolean;
  kanchan: boolean;
  tanki: boolean;
}

export interface CheckPinfuResult {
  exists: boolean;
  furo: boolean;
}

export interface YakuInfoInput {
  hai: HaiInput;
  agariHai: Hai;
  bakaze: Kaze;
  jikaze: Kaze;
  tsumo: boolean;
  doraHyo?: Hai[];
  reach?: boolean;
  uradoraHyo?: Hai[];
  ippatsu?: boolean;
  chankan?: boolean;
  rinshan?: boolean;
  haitei?: boolean;
  hotei?: boolean;
  doubleReach?: boolean;
  tenho?: boolean;
  chiho?: boolean;
  oya?: boolean;
  honba?: number;
  rempuhai?: 2 | 4;
  kazoeYakuman?: boolean;
  doubleYakuman?: boolean;
  kiriageMangan?: boolean;
  sanma?: boolean;
}

interface Yaku {
  name: string;
  han: number;
}

export interface TmpYakuResult {
  yaku: Yaku[];
  fu: number;
  han: number;
  yakuman: number;
  agari: Agari["elements"];
}

export interface YakuResult {
  yaku: Yaku[];
  fu: number;
  han: number;
  yakuman: number;
  scoreType: string | null;
  rawScore: number;
  score: number;
  pay: Pay;
  detail: {
    bakaze: Kaze;
    jikaze: Kaze;
    doraHyo: Hai[];
    uradoraHyo: Hai[];
    tsumo: boolean;
    oya: boolean;
    honba: number;
    agari: Agari["elements"];
  };
  rule: {
    rempuhai: 2 | 4;
    kazoeYakuman: boolean;
    doubleYakuman: boolean;
    kiriageMangan: boolean;
    sanma: boolean;
  };
}
