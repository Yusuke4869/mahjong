import type { Kaze } from "../../types/hai";
import type { ProcessingYakuInput } from "../../types/yaku";
import { getHaiNormalNum, getHaiSuffix } from "../hai/convert";
import { checkPinfu } from "./pinfu";
import { waiting } from "./waiting";

export const fu = (data: ProcessingYakuInput, bakaze: Kaze, jikaze: Kaze, rempuhai: 2 | 4 = 2): number => {
  // 七対子は一律25符
  if (data.agari.elements.length === 7) return 25;

  // 平和形
  const pinfuRes = checkPinfu(data, bakaze, jikaze);
  if (pinfuRes.exists) {
    // 喰い平和は一律30符
    if (pinfuRes.furo) return 30;
    // 平和ツモは一律20符
    else if (data.tsumo) return 20;
    // 平和ロンは一律30符
    else return 30;
  }

  let sum = 20;
  let furo = false;
  // 各面子, 雀頭について
  for (const element of data.agari.elements) {
    if (element.furo) furo = true;

    // 順子は0符
    if (element.type === "shuntsu") continue;

    const h = element.hai[0];
    const t = getHaiSuffix(h);
    const n = getHaiNormalNum(h);

    // 雀頭
    if (element.type === "toitsu") {
      // 役牌は2符
      if (t !== "z") continue;
      if (h === "5z" || h === "6z" || h === "7z") sum += 2;

      if (h === bakaze && h === jikaze) sum += rempuhai;
      else if (h === bakaze || h === jikaze) sum += 2;
      continue;
    }

    // 明刻
    if (element.type === "minko") {
      // 幺九牌は4符, 中張牌は2符
      if (t === "z") sum += 4;
      else if (n === 1 || n === 9) sum += 4;
      else sum += 2;
    }
    // 暗刻
    else if (element.type === "anko") {
      // 幺九牌は8符, 中張牌は4符
      if (t === "z") sum += 8;
      else if (n === 1 || n === 9) sum += 8;
      else sum += 4;
    }
    // 明槓
    else if (element.type === "minkan") {
      // 幺九牌は16符, 中張牌は8符
      if (t === "z") sum += 16;
      else if (n === 1 || n === 9) sum += 16;
      else sum += 8;
    }
    // 暗槓
    else if (element.type === "ankan") {
      // 幺九牌は32符, 中張牌は16符
      if (t === "z") sum += 32;
      else if (n === 1 || n === 9) sum += 32;
      else sum += 16;
    }
  }

  // ツモは2符, 門前ロンは10符
  if (data.tsumo) sum += 2;
  else if (!furo) sum += 10;

  // 待ちの形が辺張, 嵌張, 単騎の場合は2符
  const w = waiting(data);
  if (w.penchan || w.kanchan || w.tanki) sum += 2;

  // 切り上げ
  sum = Math.ceil(sum / 10) * 10;
  return sum;
};
