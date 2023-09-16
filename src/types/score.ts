export interface Pay {
  oya: number | null;
  ko: number | null;
}

export interface PayConvert {
  oya: number | null;
  ko: number;
}

export interface ScoreInfoInput {
  fu: number;
  han: number;
  tsumo?: boolean;
  oya?: boolean;
  honba?: number;
  yakuman?: number;
  kazoeYakuman?: boolean;
  kiriageMangan?: boolean;
  sanma?: boolean;
}

export interface CalcScore {
  scoreType: string | null;
  score: number;
  pay: Pay;
}

export interface FinalScore {
  rawScore: number;
  score: number;
  pay: Pay;
}

export interface Score {
  han: number;
  fu: number;
  scoreType: string | null;
  rawScore: number;
  score: number;
  pay: Pay;
  detail: {
    tsumo: boolean;
    oya: boolean;
    honba: number;
  };
  rule: {
    kazoeYakuman: boolean;
    kiriageMangan: boolean;
    sanma: boolean;
  };
}
