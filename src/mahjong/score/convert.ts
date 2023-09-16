import type { PayConvert } from "../../types/score";

export const num2Kanji = (num: number): string => {
  const kanji: string[] = ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
  let res = "";
  for (const n of num.toString()) {
    res += kanji[parseInt(n)];
  }
  return res;
};

export const roundUp10 = (num: number): number => {
  return Math.ceil(num / 100) * 100;
};

export const pay2Score = (pay: PayConvert, tsumo: boolean, sanma: boolean): number => {
  const ko = tsumo ? roundUp10(pay.ko) : pay.ko;
  // 親のとき
  if (pay.oya === null) return tsumo ? roundUp10(sanma ? ko * 2 : ko * 3) : roundUp10(ko * 3);

  const oya = tsumo ? roundUp10(pay.oya) : pay.oya;
  // 子のとき
  return tsumo ? roundUp10(oya + (sanma ? ko : ko * 2)) : roundUp10(oya + ko * 2);
};
