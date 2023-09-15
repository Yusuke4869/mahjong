import type { Hai } from "../../types/hai";
import { getHaiSuffix } from "./convert";

export const sortHai = (hai: Hai[]): Hai[] => {
  const res: Hai[] = [...hai];
  res.sort((a, b) => {
    const aType = getHaiSuffix(a);
    const bType = getHaiSuffix(b);

    // 牌の種類が同じなら昇順
    if (aType === bType) {
      const aNum = parseInt(a);
      const bNum = parseInt(b);

      const aCompNum = aNum === 0 ? 5 : aNum;
      const bCompNum = bNum === 0 ? 5 : bNum;

      // 赤の五萬、五筒、五索は他の五萬、五筒、五索の前に並べるように
      if (aCompNum === 5 && bCompNum === 5) return aNum - bNum;
      return aCompNum - bCompNum;
    }
    // 萬子を先に
    if (aType === "m") return -1;
    if (bType === "m") return 1;
    // その次に筒子
    if (aType === "p") return -1;
    if (bType === "p") return 1;
    // その次に索子
    if (aType === "s") return -1;
    if (bType === "s") return 1;
    return 0;
  });
  return res;
};
