import type { Hai } from "../../types/hai";
import type { ProcessingYaku, ProcessingYakuInput } from "../../types/yaku";
import { aka2Normal } from "../hai/convert";
import { doraHyo2Dora } from "./convert";

export const dora = (data: ProcessingYakuInput, doraHyo: Hai[], uradoraHyo?: Hai[]): ProcessingYaku[] => {
  const res: ProcessingYaku[] = [];
  const doraHai = doraHyo.map((v) => doraHyo2Dora(v));
  const uradoraHai = uradoraHyo?.map((v) => doraHyo2Dora(v));
  let isFuro = false;
  let countAka = 0;
  let countDora = 0;
  let countUraDora = 0;

  for (const hai of data.hai.hai) {
    if (hai === "0m" || hai === "0p" || hai === "0s") countAka++;
    const h = aka2Normal(hai);

    for (const dora of doraHai) if (dora === h) countDora++;
    for (const uradora of uradoraHai ?? []) if (uradora === h) countUraDora++;
  }

  for (const furo of data.hai.furo) {
    if (furo.type !== "ankan") isFuro = true;

    for (const hai of furo.hai) {
      if (hai === "0m" || hai === "0p" || hai === "0s") countAka++;
      const h = aka2Normal(hai);

      for (const dora of doraHai) if (dora === h) countDora++;
      for (const uradora of uradoraHai ?? []) if (uradora === h) countUraDora++;
    }
  }

  if (countDora > 0)
    res.push({
      exists: true,
      yaku: "ドラ",
      han: countDora,
      yakuman: 0,
    });

  if (countAka > 0)
    res.push({
      exists: true,
      yaku: "赤ドラ",
      han: countAka,
      yakuman: 0,
    });

  if (!isFuro && countUraDora > 0)
    res.push({
      exists: true,
      yaku: "裏ドラ",
      han: countUraDora,
      yakuman: 0,
    });

  return res;
};
