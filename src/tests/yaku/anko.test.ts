import { anko } from "../../mahjong/yaku/anko";

describe("anko", () => {
  test("四暗刻", () => {
    const result = anko({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["1m", "1m"], furo: false },
          { type: "anko", hai: ["1z", "1z", "1z"], furo: false },
          { type: "anko", hai: ["2z", "2z", "2z"], furo: false },
          { type: "anko", hai: ["3z", "3z", "3z"], furo: false },
          { type: "anko", hai: ["4z", "4z", "4z"], furo: false },
        ],
      },
      agariHai: "2z",
      tsumo: true,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "四暗刻",
      han: 0,
      yakuman: 1,
    });
  });

  test("四暗刻単騎 ダブル役満", () => {
    const result = anko({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["1m", "1m"], furo: false },
          { type: "anko", hai: ["1p", "1p", "1p"], furo: false },
          { type: "anko", hai: ["2p", "2p", "2p"], furo: false },
          { type: "anko", hai: ["3p", "3p", "3p"], furo: false },
          { type: "ankan", hai: ["4p", "4p", "4p", "4p"], furo: false },
        ],
      },
      agariHai: "1m",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "四暗刻単騎",
      han: 0,
      yakuman: 2,
    });
  });

  test("四暗刻単騎 シングル役満扱い", () => {
    const result = anko({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["0s", "5s"], furo: false },
          { type: "anko", hai: ["1z", "1z", "1z"], furo: false },
          { type: "anko", hai: ["2z", "2z", "2z"], furo: false },
          { type: "anko", hai: ["3z", "3z", "3z"], furo: false },
          { type: "ankan", hai: ["4z", "4z", "4z", "4z"], furo: false },
        ],
      },
      agariHai: "5s",
      tsumo: true,
      doubleYakuman: false,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "四暗刻単騎",
      han: 0,
      yakuman: 1,
    });
  });

  test("四暗刻単騎 天和", () => {
    const result = anko({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["0s", "5s"], furo: false },
          { type: "anko", hai: ["1m", "1m", "1m"], furo: false },
          { type: "anko", hai: ["1p", "1p", "1p"], furo: false },
          { type: "anko", hai: ["1s", "1s", "1s"], furo: false },
          { type: "anko", hai: ["1z", "1z", "1z"], furo: false },
        ],
      },
      agariHai: "1z",
      tsumo: true,
      doubleYakuman: true,
      tenho: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "四暗刻単騎",
      han: 0,
      yakuman: 2,
    });
  });

  test("三暗刻 ツモ四暗刻", () => {
    const result = anko({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["1m", "1m"], furo: false },
          { type: "anko", hai: ["1z", "1z", "1z"], furo: false },
          { type: "minko", hai: ["2z", "2z", "2z"], furo: false },
          { type: "anko", hai: ["3z", "3z", "3z"], furo: false },
          { type: "anko", hai: ["4z", "4z", "4z"], furo: false },
        ],
      },
      agariHai: "2z",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "三暗刻",
      han: 2,
      yakuman: 0,
    });
  });

  test("ツモ三暗刻", () => {
    const result = anko({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["1m", "1m"], furo: false },
          { type: "shuntsu", hai: ["1p", "2p", "3p"], furo: true },
          { type: "anko", hai: ["2z", "2z", "2z"], furo: false },
          { type: "anko", hai: ["3z", "3z", "3z"], furo: false },
          { type: "anko", hai: ["4z", "4z", "4z"], furo: false },
        ],
      },
      agariHai: "1m",
      tsumo: true,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "三暗刻",
      han: 2,
      yakuman: 0,
    });
  });

  test("三暗刻", () => {
    const result = anko({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["5m", "5m"], furo: false },
          { type: "shuntsu", hai: ["1p", "2p", "3p"], furo: false },
          { type: "anko", hai: ["2z", "2z", "2z"], furo: false },
          { type: "anko", hai: ["3z", "3z", "3z"], furo: false },
          { type: "anko", hai: ["4z", "4z", "4z"], furo: false },
        ],
      },
      agariHai: "2p",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "三暗刻",
      han: 2,
      yakuman: 0,
    });
  });

  test("対々和", () => {
    const result = anko({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["5m", "5m"], furo: false },
          { type: "minko", hai: ["2z", "2z", "2z"], furo: true },
          { type: "minko", hai: ["3z", "3z", "3z"], furo: true },
          { type: "minko", hai: ["4z", "4z", "4z"], furo: true },
          { type: "minko", hai: ["5z", "5z", "5z"], furo: true },
        ],
      },
      agariHai: "5m",
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

  test("fail", () => {
    const result = anko({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["5m", "5m"], furo: false },
          { type: "shuntsu", hai: ["1p", "2p", "3p"], furo: false },
          { type: "anko", hai: ["3m", "3m", "3m"], furo: false },
          { type: "minko", hai: ["0s", "5s", "5s"], furo: false },
          { type: "anko", hai: ["6z", "6z", "6z"], furo: false },
        ],
      },
      agariHai: "0s",
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
