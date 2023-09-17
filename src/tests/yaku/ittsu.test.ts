import { ittsu } from "../../mahjong/yaku/ittsu";

describe("ittsu", () => {
  test("一気通貫1", () => {
    const result = ittsu({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["2p", "2p"], furo: false },
          { type: "shuntsu", hai: ["1m", "2m", "3m"], furo: false },
          { type: "shuntsu", hai: ["4m", "5m", "6m"], furo: false },
          { type: "shuntsu", hai: ["7m", "8m", "9m"], furo: false },
          { type: "anko", hai: ["1p", "1p", "1p"], furo: false },
        ],
      },
      agariHai: "9m",
      tsumo: true,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "一気通貫",
      han: 2,
      yakuman: 0,
    });
  });

  test("一気通貫2", () => {
    const result = ittsu({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["1z", "1z"], furo: false },
          { type: "shuntsu", hai: ["1s", "2s", "3s"], furo: true },
          { type: "shuntsu", hai: ["4s", "5s", "6s"], furo: true },
          { type: "shuntsu", hai: ["7s", "8s", "9s"], furo: true },
          { type: "shuntsu", hai: ["7p", "8p", "9p"], furo: false },
        ],
      },
      agariHai: "1z",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "一気通貫",
      han: 1,
      yakuman: 0,
    });
  });

  test("一気通貫3", () => {
    const result = ittsu({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["0s", "5s"], furo: false },
          { type: "shuntsu", hai: ["1m", "2m", "3m"], furo: false },
          { type: "shuntsu", hai: ["4m", "5m", "6m"], furo: false },
          { type: "shuntsu", hai: ["7m", "8m", "9m"], furo: false },
          { type: "ankan", hai: ["7z", "7z", "7z", "7z"], furo: false },
        ],
      },
      agariHai: "9m",
      tsumo: true,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "一気通貫",
      han: 2,
      yakuman: 0,
    });
  });

  test("清一色", () => {
    const result = ittsu({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["9p", "9p"], furo: false },
          { type: "shuntsu", hai: ["1p", "2p", "3p"], furo: false },
          { type: "shuntsu", hai: ["4p", "5p", "6p"], furo: false },
          { type: "anko", hai: ["7p", "7p", "7p"], furo: false },
          { type: "anko", hai: ["8p", "8p", "8p"], furo: false },
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
