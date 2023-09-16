import { getScore } from "../../mahjong";

describe("getScore", () => {
  test("50符3翻 2本場 ツモ和了", () => {
    const result = getScore({ fu: 50, han: 3, tsumo: true, honba: 2 });
    expect(result).toEqual({
      fu: 50,
      han: 3,
      scoreType: null,
      rawScore: 6400,
      score: 7000,
      pay: {
        oya: 3400,
        ko: 1800,
      },
      detail: {
        tsumo: true,
        oya: false,
        honba: 2,
      },
      rule: {
        kazoeYakuman: true,
        kiriageMangan: false,
        sanma: false,
      },
    });
  });

  test("30符2翻 親 ロン和了", () => {
    const result = getScore({ fu: 30, han: 2, oya: true });
    expect(result).toEqual({
      fu: 30,
      han: 2,
      scoreType: null,
      rawScore: 2900,
      score: 2900,
      pay: {
        oya: null,
        ko: null,
      },
      detail: {
        tsumo: false,
        oya: true,
        honba: 0,
      },
      rule: {
        kazoeYakuman: true,
        kiriageMangan: false,
        sanma: false,
      },
    });
  });

  test("ダブル役満 ツモ和了", () => {
    const result = getScore({ fu: 0, han: 0, tsumo: true, yakuman: 2 });
    expect(result).toEqual({
      fu: 0,
      han: 0,
      scoreType: "二倍役満",
      rawScore: 64000,
      score: 64000,
      pay: {
        oya: 32000,
        ko: 16000,
      },
      detail: {
        tsumo: true,
        oya: false,
        honba: 0,
      },
      rule: {
        kazoeYakuman: true,
        kiriageMangan: false,
        sanma: false,
      },
    });
  });

  test("30符4翻 親 ロン和了 切り上げ満貫あり", () => {
    const result = getScore({ fu: 30, han: 4, oya: true, kiriageMangan: true });
    expect(result).toEqual({
      fu: 30,
      han: 4,
      scoreType: "満貫",
      rawScore: 12000,
      score: 12000,
      pay: {
        oya: null,
        ko: null,
      },
      detail: {
        tsumo: false,
        oya: true,
        honba: 0,
      },
      rule: {
        kazoeYakuman: true,
        kiriageMangan: true,
        sanma: false,
      },
    });
  });

  test("20符2翻 ツモ和了 三麻", () => {
    const result = getScore({ fu: 20, han: 2, tsumo: true, sanma: true });
    expect(result).toEqual({
      fu: 20,
      han: 2,
      scoreType: null,
      rawScore: 1100,
      score: 1100,
      pay: {
        oya: 700,
        ko: 400,
      },
      detail: {
        tsumo: true,
        oya: false,
        honba: 0,
      },
      rule: {
        kazoeYakuman: true,
        kiriageMangan: false,
        sanma: true,
      },
    });
  });

  test("60符30翻 親 ツモ和了 数え役満あり", () => {
    const result = getScore({ fu: 60, han: 30, tsumo: true, oya: true, kazoeYakuman: true });
    expect(result).toEqual({
      fu: 60,
      han: 30,
      scoreType: "数え役満",
      rawScore: 48000,
      score: 48000,
      pay: {
        oya: null,
        ko: 16000,
      },
      detail: {
        tsumo: true,
        oya: true,
        honba: 0,
      },
      rule: {
        kazoeYakuman: true,
        kiriageMangan: false,
        sanma: false,
      },
    });
  });

  test("60符30翻 親 ロン和了 数え役満なし 三麻", () => {
    const result = getScore({ fu: 60, han: 30, oya: true, kazoeYakuman: false, sanma: true });
    expect(result).toEqual({
      fu: 60,
      han: 30,
      scoreType: "三倍満",
      rawScore: 36000,
      score: 36000,
      pay: {
        oya: null,
        ko: null,
      },
      detail: {
        tsumo: false,
        oya: true,
        honba: 0,
      },
      rule: {
        kazoeYakuman: false,
        kiriageMangan: false,
        sanma: true,
      },
    });
  });

  test("30符4翻 子 ツモ和了 切り上げ満貫あり 三麻", () => {
    const result = getScore({ fu: 30, han: 4, tsumo: true, kiriageMangan: true, sanma: true });
    expect(result).toEqual({
      fu: 30,
      han: 4,
      scoreType: "満貫",
      rawScore: 6000,
      score: 6000,
      pay: {
        oya: 4000,
        ko: 2000,
      },
      detail: {
        tsumo: true,
        oya: false,
        honba: 0,
      },
      rule: {
        kazoeYakuman: true,
        kiriageMangan: true,
        sanma: true,
      },
    });
  });

  test("30符2翻 ロン和了 4本場 三麻", () => {
    const result = getScore({ fu: 30, han: 2, tsumo: true, honba: 4, sanma: true });
    expect(result).toEqual({
      fu: 30,
      han: 2,
      scoreType: null,
      rawScore: 1500,
      score: 2300,
      pay: {
        oya: 1400,
        ko: 900,
      },
      detail: {
        tsumo: true,
        oya: false,
        honba: 4,
      },
      rule: {
        kazoeYakuman: true,
        kiriageMangan: false,
        sanma: true,
      },
    });
  });
});
