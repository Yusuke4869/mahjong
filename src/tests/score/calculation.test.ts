import { calculateFinalScore, calculateScore } from "../../mahjong/score/calculation";

describe("calculateScore", () => {
  test("親 三倍役満 ロン和了", () => {
    const result = calculateScore({ fu: 0, han: 0, oya: true, yakuman: 3 });
    expect(result).toEqual({
      scoreType: "三倍役満",
      score: 144000,
      pay: {
        oya: null,
        ko: null,
      },
    });
  });

  test("三倍役満 ロン和了", () => {
    const result = calculateScore({ fu: 0, han: 0, yakuman: 3 });
    expect(result).toEqual({
      scoreType: "三倍役満",
      score: 96000,
      pay: {
        oya: null,
        ko: null,
      },
    });
  });

  test("二倍役満 ツモ和了", () => {
    const result = calculateScore({ fu: 0, han: 0, tsumo: true, yakuman: 2 });
    expect(result).toEqual({
      scoreType: "二倍役満",
      score: 64000,
      pay: {
        oya: 32000,
        ko: 16000,
      },
    });
  });

  test("親 役満 ツモ和了", () => {
    const result = calculateScore({ fu: 0, han: 0, tsumo: true, oya: true, yakuman: 1 });
    expect(result).toEqual({
      scoreType: "役満",
      score: 48000,
      pay: {
        oya: null,
        ko: 16000,
      },
    });
  });

  test("役満 ツモ和了", () => {
    const result = calculateScore({ fu: 0, han: 0, tsumo: true, yakuman: 1 });
    expect(result).toEqual({
      scoreType: "役満",
      score: 32000,
      pay: {
        oya: 16000,
        ko: 8000,
      },
    });
  });

  test("数え役満 ツモ和了", () => {
    const result = calculateScore({ fu: 20, han: 13, tsumo: true });
    expect(result).toEqual({
      scoreType: "数え役満",
      score: 32000,
      pay: {
        oya: 16000,
        ko: 8000,
      },
    });
  });

  test("三倍満 ツモ和了", () => {
    const result = calculateScore({ fu: 20, han: 11, tsumo: true });
    expect(result).toEqual({
      scoreType: "三倍満",
      score: 24000,
      pay: {
        oya: 12000,
        ko: 6000,
      },
    });
  });

  test("倍満 ツモ和了", () => {
    const result = calculateScore({ fu: 20, han: 8, tsumo: true });
    expect(result).toEqual({
      scoreType: "倍満",
      score: 16000,
      pay: {
        oya: 8000,
        ko: 4000,
      },
    });
  });

  test("跳満 ツモ和了", () => {
    const result = calculateScore({ fu: 20, han: 6, tsumo: true });
    expect(result).toEqual({
      scoreType: "跳満",
      score: 12000,
      pay: {
        oya: 6000,
        ko: 3000,
      },
    });
  });

  test("満貫 ツモ和了", () => {
    const result = calculateScore({ fu: 20, han: 5, tsumo: true });
    expect(result).toEqual({
      scoreType: "満貫",
      score: 8000,
      pay: {
        oya: 4000,
        ko: 2000,
      },
    });
  });

  test("4翻満貫 ツモ和了", () => {
    const result = calculateScore({ fu: 40, han: 4, tsumo: true });
    expect(result).toEqual({
      scoreType: "満貫",
      score: 8000,
      pay: {
        oya: 4000,
        ko: 2000,
      },
    });
  });

  test("3翻満貫 ツモ和了", () => {
    const result = calculateScore({ fu: 70, han: 3, tsumo: true });
    expect(result).toEqual({
      scoreType: "満貫",
      score: 8000,
      pay: {
        oya: 4000,
        ko: 2000,
      },
    });
  });

  test("親 30符4翻 ツモ和了", () => {
    const result = calculateScore({ fu: 30, han: 4, tsumo: true, oya: true });
    expect(result).toEqual({
      scoreType: null,
      score: 11700,
      pay: {
        oya: null,
        ko: 3900,
      },
    });
  });

  test("30符4翻 ツモ和了", () => {
    const result = calculateScore({ fu: 30, han: 4, tsumo: true });
    expect(result).toEqual({
      scoreType: null,
      score: 7900,
      pay: {
        oya: 3900,
        ko: 2000,
      },
    });
  });

  test("30符4翻 ツモ和了 切り上げ満貫", () => {
    const result = calculateScore({ fu: 30, han: 4, tsumo: true, kiriageMangan: true });
    expect(result).toEqual({
      scoreType: "満貫",
      score: 8000,
      pay: {
        oya: 4000,
        ko: 2000,
      },
    });
  });

  test("25符4翻 ツモ和了", () => {
    const result = calculateScore({ fu: 25, han: 4, tsumo: true });
    expect(result).toEqual({
      scoreType: null,
      score: 6400,
      pay: {
        oya: 3200,
        ko: 1600,
      },
    });
  });

  test("20符4翻 ツモ和了", () => {
    const result = calculateScore({ fu: 20, han: 2, tsumo: true });
    expect(result).toEqual({
      scoreType: null,
      score: 1500,
      pay: {
        oya: 700,
        ko: 400,
      },
    });
  });

  test("20符2翻 ツモ和了", () => {
    const result = calculateScore({ fu: 20, han: 4, tsumo: true });
    expect(result).toEqual({
      scoreType: null,
      score: 5200,
      pay: {
        oya: 2600,
        ko: 1300,
      },
    });
  });

  test("60符3翻 ツモ和了", () => {
    const result = calculateScore({ fu: 60, han: 3, tsumo: true });
    expect(result).toEqual({
      scoreType: null,
      score: 7900,
      pay: {
        oya: 3900,
        ko: 2000,
      },
    });
  });

  test("60符3翻 ツモ和了 切り上げ満貫", () => {
    const result = calculateScore({ fu: 60, han: 3, tsumo: true, kiriageMangan: true });
    expect(result).toEqual({
      scoreType: "満貫",
      score: 8000,
      pay: {
        oya: 4000,
        ko: 2000,
      },
    });
  });

  test("50符3翻 ツモ和了", () => {
    const result = calculateScore({ fu: 50, han: 3, tsumo: true });
    expect(result).toEqual({
      scoreType: null,
      score: 6400,
      pay: {
        oya: 3200,
        ko: 1600,
      },
    });
  });

  test("40符3翻 ツモ和了", () => {
    const result = calculateScore({ fu: 40, han: 3, tsumo: true });
    expect(result).toEqual({
      scoreType: null,
      score: 5200,
      pay: {
        oya: 2600,
        ko: 1300,
      },
    });
  });

  test("30符3翻 ツモ和了", () => {
    const result = calculateScore({ fu: 30, han: 3, tsumo: true });
    expect(result).toEqual({
      scoreType: null,
      score: 4000,
      pay: {
        oya: 2000,
        ko: 1000,
      },
    });
  });

  test("30符1翻 ツモ和了", () => {
    const result = calculateScore({ fu: 30, han: 1, tsumo: true });
    expect(result).toEqual({
      scoreType: null,
      score: 1100,
      pay: {
        oya: 500,
        ko: 300,
      },
    });
  });

  test("30符3翻 ロン和了", () => {
    const result = calculateScore({ fu: 30, han: 3 });
    expect(result).toEqual({
      scoreType: null,
      score: 3900,
      pay: {
        oya: null,
        ko: null,
      },
    });
  });

  test("30符1翻 ロン和了", () => {
    const result = calculateScore({ fu: 30, han: 1 });
    expect(result).toEqual({
      scoreType: null,
      score: 1000,
      pay: {
        oya: null,
        ko: null,
      },
    });
  });
});

describe("calculateFinalScore", () => {
  test("1本場 ツモ和了", () => {
    const result = calculateFinalScore(
      {
        scoreType: "満貫",
        score: 12000,
        pay: {
          oya: null,
          ko: 4000,
        },
      },
      1,
      false,
    );
    expect(result).toEqual({
      rawScore: 12000,
      score: 12300,
      pay: {
        oya: null,
        ko: 4100,
      },
    });
  });

  test("3本場 ロン和了", () => {
    const result = calculateFinalScore(
      {
        scoreType: "満貫",
        score: 8000,
        pay: {
          oya: null,
          ko: null,
        },
      },
      3,
      false,
    );
    expect(result).toEqual({
      rawScore: 8000,
      score: 8900,
      pay: {
        oya: null,
        ko: null,
      },
    });
  });

  test("三麻 2本場 ツモ和了", () => {
    const result = calculateFinalScore(
      {
        scoreType: "跳満",
        score: 12000,
        pay: {
          oya: null,
          ko: 6000,
        },
      },
      2,
      true,
    );
    expect(result).toEqual({
      rawScore: 12000,
      score: 12400,
      pay: {
        oya: null,
        ko: 6200,
      },
    });
  });

  test("三麻 3本場 ロン和了", () => {
    const result = calculateFinalScore(
      {
        scoreType: "跳満",
        score: 12000,
        pay: {
          oya: null,
          ko: null,
        },
      },
      3,
      true,
    );
    expect(result).toEqual({
      rawScore: 12000,
      score: 12600,
      pay: {
        oya: null,
        ko: null,
      },
    });
  });
});
