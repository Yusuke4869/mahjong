import type { CalcScore, FinalScore, Score, ScoreInfoInput } from "../../types/score";
import { calculateFinalScore, calculateScore } from "./calculation";

export const getScore = ({
  fu,
  han,
  tsumo = false,
  oya = false,
  honba = 0,
  yakuman = 0,
  kazoeYakuman = true,
  kiriageMangan = false,
  sanma = false,
}: ScoreInfoInput): Score => {
  const res: Score = {
    fu: fu,
    han: han,
    scoreType: null,
    rawScore: 0,
    score: 0,
    pay: {
      oya: null,
      ko: null,
    },
    detail: {
      tsumo: tsumo,
      oya: oya,
      honba: honba,
    },
    rule: {
      kazoeYakuman: kazoeYakuman,
      kiriageMangan: kiriageMangan,
      sanma: sanma,
    },
  };

  // 数え役満がないとき
  if (!kazoeYakuman && han >= 13) han = 11;

  // 点数計算
  const rawScore: CalcScore = calculateScore({ han, fu, tsumo, oya, yakuman, kiriageMangan, sanma });
  res.scoreType = rawScore.scoreType;
  res.rawScore = rawScore.score;

  // 積み棒計算
  const result: FinalScore = calculateFinalScore(rawScore, honba, sanma);
  res.score = result.score;
  res.pay = result.pay;

  return res;
};
