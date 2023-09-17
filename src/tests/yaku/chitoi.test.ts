import { chitoi } from "../../mahjong/yaku/chitoi";

describe("chitoi", () => {
  test("七対子1", () => {
    const result = chitoi({
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
      exists: true,
      yaku: "七対子",
      han: 2,
      yakuman: 0,
    });
  });

  test("七対子2 大七星", () => {
    const result = chitoi({
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
      agariHai: "7z",
      tsumo: true,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "七対子",
      han: 2,
      yakuman: 0,
    });
  });

  test("二盃口 大車輪", () => {
    const result = chitoi({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["2p", "2p"], furo: false },
          { type: "shuntsu", hai: ["3p", "4p", "5p"], furo: false },
          { type: "shuntsu", hai: ["3p", "4p", "5p"], furo: false },
          { type: "shuntsu", hai: ["6p", "7p", "8p"], furo: false },
          { type: "shuntsu", hai: ["6p", "7p", "8p"], furo: false },
        ],
      },
      agariHai: "2p",
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
