import { sushiho } from "../../mahjong/yaku/sushiho";

describe("sushiho", () => {
  test("大四喜1 ダブル役満", () => {
    const result = sushiho({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["5z", "5z"], furo: false },
          { type: "anko", hai: ["1z", "1z", "1z"], furo: false },
          { type: "anko", hai: ["2z", "2z", "2z"], furo: false },
          { type: "anko", hai: ["3z", "3z", "3z"], furo: false },
          { type: "minko", hai: ["4z", "4z", "4z"], furo: false },
        ],
      },
      agariHai: "4z",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "大四喜",
      han: 0,
      yakuman: 2,
    });
  });

  test("大四喜2 ダブル役満", () => {
    const result = sushiho({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["6z", "6z"], furo: false },
          { type: "anko", hai: ["1z", "1z", "1z"], furo: false },
          { type: "minko", hai: ["2z", "2z", "2z"], furo: true },
          { type: "ankan", hai: ["3z", "3z", "3z", "3z"], furo: false },
          { type: "minkan", hai: ["4z", "4z", "4z", "4z"], furo: true },
        ],
      },
      agariHai: "6z",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "大四喜",
      han: 0,
      yakuman: 2,
    });
  });

  test("大四喜3 シングル役満扱い", () => {
    const result = sushiho({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["3s", "3s"], furo: false },
          { type: "anko", hai: ["1z", "1z", "1z"], furo: false },
          { type: "anko", hai: ["2z", "2z", "2z"], furo: false },
          { type: "anko", hai: ["3z", "3z", "3z"], furo: false },
          { type: "anko", hai: ["4z", "4z", "4z"], furo: false },
        ],
      },
      agariHai: "2z",
      tsumo: true,
      doubleYakuman: false,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "大四喜",
      han: 0,
      yakuman: 1,
    });
  });

  test("小四喜", () => {
    const result = sushiho({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["4z", "4z"], furo: false },
          { type: "anko", hai: ["1z", "1z", "1z"], furo: false },
          { type: "anko", hai: ["2z", "2z", "2z"], furo: false },
          { type: "anko", hai: ["3z", "3z", "3z"], furo: false },
          { type: "shuntsu", hai: ["1p", "2p", "3p"], furo: false },
        ],
      },
      agariHai: "4z",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "小四喜",
      han: 0,
      yakuman: 1,
    });
  });

  test("七対子", () => {
    const result = sushiho({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["1z", "1z"], furo: false },
          { type: "toitsu", hai: ["2z", "2z"], furo: false },
          { type: "toitsu", hai: ["3z", "3z"], furo: false },
          { type: "toitsu", hai: ["4z", "4z"], furo: false },
          { type: "toitsu", hai: ["5z", "5z"], furo: false },
          { type: "toitsu", hai: ["6z", "6z"], furo: false },
          { type: "toitsu", hai: ["7z", "7z"], furo: false },
        ],
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
