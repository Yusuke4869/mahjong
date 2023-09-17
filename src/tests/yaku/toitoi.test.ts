import { toitoi } from "../../mahjong/yaku/toitoi";

describe("toitoi", () => {
  test("対々和1", () => {
    const result = toitoi({
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
          { type: "minko", hai: ["4z", "4z", "4z"], furo: true },
        ],
      },
      agariHai: "2z",
      tsumo: true,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "対々和",
      han: 2,
      yakuman: 0,
    });
  });

  test("対々和2", () => {
    const result = toitoi({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["1m", "1m"], furo: false },
          { type: "minko", hai: ["1p", "1p", "1p"], furo: true },
          { type: "minko", hai: ["2p", "2p", "2p"], furo: true },
          { type: "minkan", hai: ["3p", "3p", "3p", "3p"], furo: true },
          { type: "minkan", hai: ["4p", "4p", "4p", "4p"], furo: true },
        ],
      },
      agariHai: "1m",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "対々和",
      han: 2,
      yakuman: 0,
    });
  });

  test("七対子", () => {
    const result = toitoi({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["1m", "1m"], furo: false },
          { type: "toitsu", hai: ["0m", "5m"], furo: false },
          { type: "toitsu", hai: ["1p", "1p"], furo: false },
          { type: "toitsu", hai: ["0p", "5p"], furo: false },
          { type: "toitsu", hai: ["1s", "1s"], furo: false },
          { type: "toitsu", hai: ["0s", "5s"], furo: false },
          { type: "toitsu", hai: ["1z", "1z"], furo: false },
        ],
      },
      agariHai: "1z",
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

  test("fail", () => {
    const result = toitoi({
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
