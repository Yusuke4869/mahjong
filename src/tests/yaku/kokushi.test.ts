import { kokushi } from "../../mahjong/yaku/kokushi";

describe("kokushi", () => {
  test("国士無双", () => {
    const result = kokushi({
      hai: {
        hai: ["1m", "1m", "9m", "1p", "9p", "1s", "9s", "1z", "2z", "3z", "4z", "5z", "6z", "7z"],
        furo: [],
      },
      agari: {
        elements: [],
      },
      agariHai: "3z",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "国士無双",
      han: 0,
      yakuman: 1,
    });
  });

  test("国士無双十三面待ち ダブル役満", () => {
    const result = kokushi({
      hai: {
        hai: ["9p", "1m", "9m", "1p", "9p", "1s", "9s", "1z", "2z", "3z", "4z", "5z", "6z", "7z"],
        furo: [],
      },
      agari: {
        elements: [],
      },
      agariHai: "9p",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "国士無双十三面待ち",
      han: 0,
      yakuman: 2,
    });
  });

  test("国士無双十三面待ち シングル役満扱い", () => {
    const result = kokushi({
      hai: {
        hai: ["9p", "1m", "9m", "1p", "9p", "1s", "9s", "1z", "2z", "3z", "4z", "5z", "6z", "7z"],
        furo: [],
      },
      agari: {
        elements: [],
      },
      agariHai: "9p",
      tsumo: false,
      doubleYakuman: false,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "国士無双十三面待ち",
      han: 0,
      yakuman: 1,
    });
  });

  test("国士無双十三面待ち 天和", () => {
    const result = kokushi({
      hai: {
        hai: ["7z", "1m", "9m", "1p", "9p", "1s", "9s", "1z", "2z", "3z", "4z", "5z", "6z", "7z"],
        furo: [],
      },
      agari: {
        elements: [],
      },
      agariHai: "3z",
      tsumo: true,
      doubleYakuman: true,
      tenho: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "国士無双十三面待ち",
      han: 0,
      yakuman: 2,
    });
  });

  test("清老頭", () => {
    const result = kokushi({
      hai: {
        hai: ["1m", "1m", "1m", "9m", "9m", "9m", "1p", "1p", "1p", "9p", "9p", "9p", "1s", "1s"],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["1s", "1s"], furo: false },
          { type: "anko", hai: ["1m", "1m", "1m"], furo: false },
          { type: "anko", hai: ["9m", "9m", "9m"], furo: false },
          { type: "anko", hai: ["1p", "1p", "1p"], furo: false },
          { type: "anko", hai: ["9p", "9p", "9p"], furo: false },
        ],
      },
      agariHai: "1s",
      tsumo: true,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: false,
      yaku: null,
      han: 0,
      yakuman: 0,
    });
  });

  test("fail 1", () => {
    const result = kokushi({
      hai: {
        hai: ["1m", "1m", "9m", "1p", "9p", "1s", "9s", "1z", "2z", "3z", "4z", "5z", "6z", "6z"],
        furo: [],
      },
      agari: {
        elements: [],
      },
      agariHai: "1z",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: false,
      yaku: null,
      han: 0,
      yakuman: 0,
    });
  });
});
