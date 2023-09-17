import { peko } from "../../mahjong/yaku/peko";

describe("peko", () => {
  test("一盃口1", () => {
    const result = peko({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["9m", "9m"], furo: false },
          { type: "shuntsu", hai: ["4p", "5p", "6p"], furo: false },
          { type: "shuntsu", hai: ["4p", "0p", "6p"], furo: false },
          { type: "shuntsu", hai: ["4p", "5p", "6p"], furo: false },
          { type: "shuntsu", hai: ["1s", "2s", "3s"], furo: false },
        ],
      },
      agariHai: "9m",
      tsumo: true,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "一盃口",
      han: 1,
      yakuman: 0,
    });
  });

  test("一盃口2", () => {
    const result = peko({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["1z", "1z"], furo: false },
          { type: "shuntsu", hai: ["1s", "2s", "3s"], furo: false },
          { type: "shuntsu", hai: ["1s", "2s", "3s"], furo: false },
          { type: "shuntsu", hai: ["7s", "8s", "9s"], furo: false },
          { type: "ankan", hai: ["7z", "7z", "7z", "7z"], furo: false },
        ],
      },
      agariHai: "1z",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "一盃口",
      han: 1,
      yakuman: 0,
    });
  });

  test("一盃口3", () => {
    const result = peko({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["9m", "9m"], furo: false },
          { type: "shuntsu", hai: ["4p", "5p", "6p"], furo: false },
          { type: "shuntsu", hai: ["4p", "0p", "6p"], furo: false },
          { type: "shuntsu", hai: ["4p", "5p", "6p"], furo: false },
          { type: "anko", hai: ["1s", "1s", "1s"], furo: false },
        ],
      },
      agariHai: "9m",
      tsumo: true,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "一盃口",
      han: 1,
      yakuman: 0,
    });
  });

  test("二盃口1", () => {
    const result = peko({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["0s", "5s"], furo: false },
          { type: "shuntsu", hai: ["1m", "2m", "3m"], furo: false },
          { type: "shuntsu", hai: ["1m", "2m", "3m"], furo: false },
          { type: "shuntsu", hai: ["4m", "5m", "6m"], furo: false },
          { type: "shuntsu", hai: ["4m", "0m", "6m"], furo: false },
        ],
      },
      agariHai: "1m",
      tsumo: true,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "二盃口",
      han: 3,
      yakuman: 0,
    });
  });

  test("二盃口2", () => {
    const result = peko({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["9m", "9m"], furo: false },
          { type: "shuntsu", hai: ["4p", "5p", "6p"], furo: false },
          { type: "shuntsu", hai: ["4p", "0p", "6p"], furo: false },
          { type: "shuntsu", hai: ["4p", "5p", "6p"], furo: false },
          { type: "shuntsu", hai: ["4p", "5p", "6p"], furo: false },
        ],
      },
      agariHai: "9m",
      tsumo: true,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "二盃口",
      han: 3,
      yakuman: 0,
    });
  });

  test("断么九", () => {
    const result = peko({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["0m", "5m"], furo: false },
          { type: "shuntsu", hai: ["2p", "3p", "4p"], furo: false },
          { type: "shuntsu", hai: ["2p", "3p", "4p"], furo: false },
          { type: "shuntsu", hai: ["5s", "6s", "7s"], furo: false },
          { type: "shuntsu", hai: ["5s", "6s", "7s"], furo: true },
        ],
      },
      agariHai: "3p",
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
