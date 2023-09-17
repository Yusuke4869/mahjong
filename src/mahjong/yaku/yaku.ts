import type { ProcessingYakuInput, TmpYakuResult, YakuInfoInput, YakuResult } from "../../types/yaku";
import { getAgari } from "../agari/agari";
import { getScore } from "../score/score";
import { anko } from "./anko";
import { chanta } from "./chanta";
import { chitoi } from "./chitoi";
import { churempoto } from "./churempoto";
import { dora } from "./dora";
import { fu } from "./fu";
import { isshoku } from "./isshoku";
import { ittsu } from "./ittsu";
import { jihai } from "./jihai";
import { kantsu } from "./kantsu";
import { kokushi } from "./kokushi";
import { peko } from "./peko";
import { pinfu } from "./pinfu";
import { roto } from "./roto";
import { ryuiso } from "./ryuiso";
import { sangen } from "./sangen";
import { sanshokudojun } from "./sanshokudojun";
import { sanshokudoko } from "./sanshokudoko";
import { sushiho } from "./sushiho";
import { tanyao } from "./tanyao";
import { toitoi } from "./toitoi";
import { tsuiso } from "./tsuiso";

const sortedYakuArr = [
  "天和",
  "地和",
  "大三元",
  "清老頭",
  "字一色",
  "緑一色",
  "小四喜",
  "大四喜",
  "四槓子",
  "四暗刻",
  "四暗刻単騎",
  "国士無双",
  "国士無双十三面待ち",
  "九蓮宝燈",
  "純正九蓮宝燈",
  "立直",
  "ダブル立直",
  "一発",
  "槍槓",
  "嶺上開花",
  "海底摸月",
  "河底撈魚",
  "門前清自摸和",
  "清一色",
  "純全帯么九",
  "二盃口",
  "混一色",
  "七対子",
  "対々和",
  "混老頭",
  "混全帯么九",
  "一気通貫",
  "小三元",
  "三槓子",
  "三暗刻",
  "三色同順",
  "三色同刻",
  "断么九",
  "平和",
  "一盃口",
  "白",
  "發",
  "中",
  "自風牌",
  "場風牌",
  "ドラ",
  "赤ドラ",
  "裏ドラ",
];

export const getYaku = (data: YakuInfoInput): YakuResult => {
  const doraHyo = data.doraHyo ?? [];
  const uradoraHyo = data.uradoraHyo ?? [];
  const tenho = data.tenho ?? false;
  const oya = data.oya ?? false;
  const honba = data.honba ?? 0;
  const rempuhai = data.rempuhai ?? 2;
  const kazoeYakuman = data.kazoeYakuman ?? true;
  const doubleYakuman = data.doubleYakuman ?? true;
  const kiriageMangan = data.kiriageMangan ?? false;
  const sanma = data.sanma ?? false;
  const res: YakuResult = {
    yaku: [],
    fu: 0,
    han: 0,
    yakuman: 0,
    scoreType: null,
    rawScore: 0,
    score: 0,
    pay: {
      oya: null,
      ko: null,
    },
    detail: {
      bakaze: data.bakaze,
      jikaze: data.jikaze,
      doraHyo: doraHyo,
      uradoraHyo: uradoraHyo,
      tsumo: data.tsumo,
      oya: oya,
      honba: honba,
      agari: [],
    },
    rule: {
      rempuhai: rempuhai,
      kazoeYakuman: kazoeYakuman,
      doubleYakuman: doubleYakuman,
      kiriageMangan: kiriageMangan,
      sanma: sanma,
    },
  };

  if (tenho) {
    res.yaku.push({ name: "天和", han: 0 });
    res.yakuman += 1;
  } else if (data.chiho) {
    res.yaku.push({ name: "地和", han: 0 });
    res.yakuman += 1;
  }

  const agariArr = getAgari(data.hai, data.agariHai, data.tsumo);

  if (agariArr === null) {
    const kokushiRes = kokushi({
      hai: data.hai,
      agari: {
        elements: [],
      },
      agariHai: data.agariHai,
      tsumo: data.tsumo,
      doubleYakuman: doubleYakuman,
      tenho: tenho,
    });

    if (kokushiRes.exists && kokushiRes.yaku) {
      res.yaku.push({ name: kokushiRes.yaku, han: kokushiRes.han });
      res.yakuman += kokushiRes.yakuman;
    }

    const score = getScore({
      fu: res.fu,
      han: res.han,
      tsumo: data.tsumo,
      oya: oya,
      honba: honba,
      yakuman: res.yakuman,
      kazoeYakuman: kazoeYakuman,
      kiriageMangan: kiriageMangan,
      sanma: sanma,
    });
    res.scoreType = score.scoreType;
    res.rawScore = score.rawScore;
    res.score = score.score;
    res.pay = score.pay;

    return res;
  }

  let max: TmpYakuResult = {
    yaku: [],
    fu: 0,
    han: 0,
    yakuman: 0,
    agari: [],
  };

  for (const agari of agariArr) {
    const tmp: TmpYakuResult = {
      yaku: [],
      fu: 0,
      han: 0,
      yakuman: 0,
      agari: agari.elements,
    };

    const input: ProcessingYakuInput = {
      hai: data.hai,
      agari: agari,
      agariHai: data.agariHai,
      tsumo: data.tsumo,
      doubleYakuman: doubleYakuman,
      tenho: tenho,
    };

    const sangenRes = sangen(input);
    if (sangenRes.exists && sangenRes.yaku) {
      tmp.yaku.push({ name: sangenRes.yaku, han: sangenRes.han });
      tmp.han += sangenRes.han;
      tmp.yakuman += sangenRes.yakuman;
    }

    const rotoRes = roto(input);
    if (rotoRes.exists && rotoRes.yaku) {
      tmp.yaku.push({ name: rotoRes.yaku, han: rotoRes.han });
      tmp.han += rotoRes.han;
      tmp.yakuman += rotoRes.yakuman;
    }

    const tsuisoRes = tsuiso(input);
    if (tsuisoRes.exists && tsuisoRes.yaku) {
      tmp.yaku.push({ name: tsuisoRes.yaku, han: tsuisoRes.han });
      tmp.han += tsuisoRes.han;
      tmp.yakuman += tsuisoRes.yakuman;
    }

    const ryuisoRes = ryuiso(input);
    if (ryuisoRes.exists && ryuisoRes.yaku) {
      tmp.yaku.push({ name: ryuisoRes.yaku, han: ryuisoRes.han });
      tmp.han += ryuisoRes.han;
      tmp.yakuman += ryuisoRes.yakuman;
    }

    const sushihoRes = sushiho(input);
    if (sushihoRes.exists && sushihoRes.yaku) {
      tmp.yaku.push({ name: sushihoRes.yaku, han: sushihoRes.han });
      tmp.han += sushihoRes.han;
      tmp.yakuman += sushihoRes.yakuman;
    }

    const kantsuRes = kantsu(input);
    if (kantsuRes.exists && kantsuRes.yaku) {
      tmp.yaku.push({ name: kantsuRes.yaku, han: kantsuRes.han });
      tmp.han += kantsuRes.han;
      tmp.yakuman += kantsuRes.yakuman;
    }

    const ankoRes = anko(input);
    if (ankoRes.exists && ankoRes.yaku) {
      tmp.yaku.push({ name: ankoRes.yaku, han: ankoRes.han });
      tmp.han += ankoRes.han;
      tmp.yakuman += ankoRes.yakuman;
    }

    const churempotoRes = churempoto(input);
    if (churempotoRes.exists && churempotoRes.yaku) {
      tmp.yaku.push({ name: churempotoRes.yaku, han: churempotoRes.han });
      tmp.han += churempotoRes.han;
      tmp.yakuman += churempotoRes.yakuman;
    }

    if (tmp.yakuman > 0 && tmp.yakuman > max.yakuman) {
      tmp.han = 0;
      max = tmp;
      continue;
    }

    const isshokuRes = isshoku(input);
    if (isshokuRes.exists && isshokuRes.yaku) {
      tmp.yaku.push({ name: isshokuRes.yaku, han: isshokuRes.han });
      tmp.han += isshokuRes.han;
    }

    const chantaRes = chanta(input);
    // 混老頭とは複合しない
    if (!rotoRes.exists && chantaRes.exists && chantaRes.yaku) {
      tmp.yaku.push({ name: chantaRes.yaku, han: chantaRes.han });
      tmp.han += chantaRes.han;
    }

    const pekoRes = peko(input);
    if (pekoRes.exists && pekoRes.yaku) {
      tmp.yaku.push({ name: pekoRes.yaku, han: pekoRes.han });
      tmp.han += pekoRes.han;
    }

    const chitoiRes = chitoi(input);
    if (chitoiRes.exists && chitoiRes.yaku) {
      tmp.yaku.push({ name: chitoiRes.yaku, han: chitoiRes.han });
      tmp.han += chitoiRes.han;
    }

    const toitoiRes = toitoi(input);
    if (toitoiRes.exists && toitoiRes.yaku) {
      tmp.yaku.push({ name: toitoiRes.yaku, han: toitoiRes.han });
      tmp.han += toitoiRes.han;
    }

    const ittsuRes = ittsu(input);
    if (ittsuRes.exists && ittsuRes.yaku) {
      tmp.yaku.push({ name: ittsuRes.yaku, han: ittsuRes.han });
      tmp.han += ittsuRes.han;
    }

    const sanshokudojunRes = sanshokudojun(input);
    if (sanshokudojunRes.exists && sanshokudojunRes.yaku) {
      tmp.yaku.push({ name: sanshokudojunRes.yaku, han: sanshokudojunRes.han });
      tmp.han += sanshokudojunRes.han;
    }

    const sanshokudokoRes = sanshokudoko(input);
    if (sanshokudokoRes.exists && sanshokudokoRes.yaku) {
      tmp.yaku.push({ name: sanshokudokoRes.yaku, han: sanshokudokoRes.han });
      tmp.han += sanshokudokoRes.han;
    }

    const tanyaoRes = tanyao(input);
    if (tanyaoRes.exists && tanyaoRes.yaku) {
      tmp.yaku.push({ name: tanyaoRes.yaku, han: tanyaoRes.han });
      tmp.han += tanyaoRes.han;
    }

    const pinfuRes = pinfu(input, data.bakaze, data.jikaze);
    if (pinfuRes.exists && pinfuRes.yaku) {
      tmp.yaku.push({ name: pinfuRes.yaku, han: pinfuRes.han });
      tmp.han += pinfuRes.han;
    }

    const jihaiRes = jihai(input, data.bakaze, data.jikaze);
    for (const r of jihaiRes) {
      if (r.exists && r.yaku) {
        tmp.yaku.push({ name: r.yaku, han: r.han });
        tmp.han += r.han;
      }
    }

    tmp.fu = fu(input, data.bakaze, data.jikaze, rempuhai);

    if (tmp.han >= max.han && tmp.fu >= max.fu) {
      max = tmp;
    }
  }

  if (max.yakuman === 0) {
    if (data.doubleReach) {
      max.yaku.push({ name: "ダブル立直", han: 2 });
      max.han += 2;
    } else if (data.reach) {
      max.yaku.push({ name: "立直", han: 1 });
      max.han++;
    }

    if (data.ippatsu) {
      max.yaku.push({ name: "一発", han: 1 });
      max.han++;
    }

    if (data.chankan && !data.tsumo) {
      max.yaku.push({ name: "槍槓", han: 1 });
      max.han++;
    }

    if (data.rinshan && data.tsumo) {
      max.yaku.push({ name: "嶺上開花", han: 1 });
      max.han++;
    }

    if (data.haitei && data.tsumo) {
      max.yaku.push({ name: "海底摸月", han: 1 });
      max.han++;
    } else if (data.hotei && !data.tsumo) {
      max.yaku.push({ name: "河底撈魚", han: 1 });
      max.han++;
    }

    if (data.tsumo && data.hai.furo.filter((v) => v.type !== "ankan").length === 0) {
      max.yaku.push({ name: "門前清自摸和", han: 1 });
      max.han++;
    }

    const doraRes = dora(
      {
        hai: data.hai,
        agari: {
          elements: [],
        },
        agariHai: data.agariHai,
        tsumo: data.tsumo,
        doubleYakuman: doubleYakuman,
        tenho: tenho,
      },
      doraHyo,
      uradoraHyo,
    );

    for (const r of doraRes) {
      if (r.exists && r.yaku) {
        max.yaku.push({ name: r.yaku, han: r.han });
        max.han += r.han;
      }
    }
  }

  res.yaku = max.yaku.sort((a, b) => sortedYakuArr.indexOf(a.name) - sortedYakuArr.indexOf(b.name));
  res.fu = max.fu;
  res.han = max.han;
  res.yakuman = max.yakuman;
  res.detail.agari = max.agari;

  const score = getScore({
    fu: res.fu,
    han: res.han,
    tsumo: data.tsumo,
    oya: oya,
    honba: honba,
    yakuman: res.yakuman,
    kazoeYakuman: kazoeYakuman,
    kiriageMangan: kiriageMangan,
    sanma: sanma,
  });
  res.scoreType = score.scoreType;
  res.rawScore = score.rawScore;
  res.score = score.score;
  res.pay = score.pay;

  return res;
};
