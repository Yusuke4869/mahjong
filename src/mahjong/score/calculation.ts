import type { CalcScore, FinalScore, PayConvert, ScoreInfoInput } from "../../types/score";
import { num2Kanji, pay2Score, roundUp10 } from "./convert";

export const calculateScore = ({
  fu,
  han,
  tsumo = false,
  oya = false,
  yakuman = 0,
  kiriageMangan = false,
  sanma = false,
}: ScoreInfoInput): CalcScore => {
  let scoreType: string | null = null;
  let pay: PayConvert | null = { oya: null, ko: 0 };

  // 役満
  if (yakuman > 0) {
    scoreType = yakuman === 1 ? "役満" : `${num2Kanji(yakuman)}倍役満`;
    pay = {
      oya: oya ? null : 16000 * yakuman,
      ko: 8000 * yakuman * (oya ? 2 : 1),
    };
  }

  // 数え役満
  else if (han >= 13) {
    scoreType = "数え役満";
    pay = {
      oya: oya ? null : 16000,
      ko: 8000 * (oya ? 2 : 1),
    };
  }

  // 三倍満
  else if (han >= 11 && han < 13) {
    scoreType = "三倍満";
    pay = {
      oya: oya ? null : 12000,
      ko: 6000 * (oya ? 2 : 1),
    };
  }

  // 倍満
  else if (han >= 8 && han < 11) {
    scoreType = "倍満";
    pay = {
      oya: oya ? null : 8000,
      ko: 4000 * (oya ? 2 : 1),
    };
  }

  // 跳満
  else if (han >= 6 && han < 8) {
    scoreType = "跳満";
    pay = {
      oya: oya ? null : 6000,
      ko: 3000 * (oya ? 2 : 1),
    };
  }

  // 満貫
  else if (
    (han >= 5 && han < 6) ||
    (fu >= 70 && han === 3) ||
    (fu >= 40 && han === 4) ||
    (kiriageMangan && fu >= 60 && han === 3) ||
    (kiriageMangan && fu >= 30 && han === 4)
  ) {
    scoreType = "満貫";
    pay = {
      oya: oya ? null : 4000,
      ko: 2000 * (oya ? 2 : 1),
    };
  }

  // その他
  else {
    // スコアは 符 x 2^翻 x 4 で計算
    const score = fu * 2 ** han * 4;
    pay = {
      oya: oya ? null : score * 2,
      ko: score * (oya ? 2 : 1),
    };
  }

  const res: CalcScore = {
    scoreType: scoreType,
    score: pay2Score(pay, tsumo, sanma),
    pay: tsumo
      ? {
          oya: pay.oya ? roundUp10(pay.oya) : null,
          ko: roundUp10(pay.ko),
        }
      : { oya: null, ko: null },
  };
  return res;
};

export const calculateFinalScore = (rawScoreData: CalcScore, honba: number, sanma: boolean): FinalScore => {
  const rawScore = rawScoreData.score;
  const res: FinalScore = {
    rawScore: rawScore,
    score: rawScore + 100 * (sanma ? 2 : 3) * honba,
    pay: {
      oya: rawScoreData.pay.oya ? rawScoreData.pay.oya + 100 * honba : null,
      ko: rawScoreData.pay.ko ? rawScoreData.pay.ko + 100 * honba : null,
    },
  };

  return res;
};
