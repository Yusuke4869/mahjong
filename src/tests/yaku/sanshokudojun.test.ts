import { sanshokudojun } from "../../mahjong/yaku/sanshokudojun";

describe("sanshokudojun", () => {
  test("三色同順1", () => {
    const result = sanshokudojun({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["3s", "3s"], furo: false },
          { type: "shuntsu", hai: ["4m", "5m", "6m"], furo: false },
          { type: "shuntsu", hai: ["4p", "0p", "6p"], furo: false },
          { type: "shuntsu", hai: ["4s", "5s", "6s"], furo: false },
          { type: "shuntsu", hai: ["0s", "6s", "7s"], furo: false },
        ],
      },
      agariHai: "0s",
      tsumo: true,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "三色同順",
      han: 2,
      yakuman: 0,
    });
  });

  test("三色同順2", () => {
    const result = sanshokudojun({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["1z", "1z"], furo: false },
          { type: "shuntsu", hai: ["1m", "2m", "3m"], furo: false },
          { type: "shuntsu", hai: ["1p", "2p", "3p"], furo: false },
          { type: "shuntsu", hai: ["1s", "2s", "3s"], furo: false },
          { type: "minkan", hai: ["7z", "7z", "7z", "7z"], furo: true },
        ],
      },
      agariHai: "1z",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "三色同順",
      han: 1,
      yakuman: 0,
    });
  });

  test("三色同順3", () => {
    const result = sanshokudojun({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["6m", "6m"], furo: false },
          { type: "shuntsu", hai: ["7m", "8m", "9m"], furo: false },
          { type: "shuntsu", hai: ["7m", "8m", "9m"], furo: false },
          { type: "shuntsu", hai: ["7p", "8p", "9p"], furo: false },
          { type: "shuntsu", hai: ["7s", "8s", "9s"], furo: false },
        ],
      },
      agariHai: "8m",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "三色同順",
      han: 2,
      yakuman: 0,
    });
  });

  test("平和", () => {
    const result = sanshokudojun({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["0m", "5m"], furo: false },
          { type: "shuntsu", hai: ["2m", "3m", "4m"], furo: false },
          { type: "shuntsu", hai: ["2m", "3m", "4m"], furo: false },
          { type: "shuntsu", hai: ["6p", "7p", "8p"], furo: false },
          { type: "shuntsu", hai: ["5s", "6s", "7s"], furo: false },
        ],
      },
      agariHai: "7s",
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
