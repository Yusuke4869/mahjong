import { tanyao } from "../../mahjong/yaku/tanyao";

describe("tanyao", () => {
  test("断么九1", () => {
    const result = tanyao({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["0m", "5m"], furo: true },
          { type: "shuntsu", hai: ["2m", "3m", "4m"], furo: false },
          { type: "shuntsu", hai: ["2m", "3m", "4m"], furo: false },
          { type: "shuntsu", hai: ["6p", "7p", "8p"], furo: false },
          { type: "anko", hai: ["5s", "5s", "5s"], furo: false },
        ],
      },
      agariHai: "7p",
      tsumo: true,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "断么九",
      han: 1,
      yakuman: 0,
    });
  });

  test("断么九2", () => {
    const result = tanyao({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["4m", "4m"], furo: false },
          { type: "shuntsu", hai: ["6m", "7m", "8m"], furo: true },
          { type: "shuntsu", hai: ["2p", "3p", "4p"], furo: false },
          { type: "shuntsu", hai: ["3s", "4s", "5s"], furo: false },
          { type: "shuntsu", hai: ["0s", "6s", "7s"], furo: false },
        ],
      },
      agariHai: "4m",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "断么九",
      han: 1,
      yakuman: 0,
    });
  });

  test("平和", () => {
    const result = tanyao({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["9s", "9s"], furo: false },
          { type: "shuntsu", hai: ["1s", "2s", "3s"], furo: false },
          { type: "shuntsu", hai: ["3s", "4s", "5s"], furo: false },
          { type: "shuntsu", hai: ["0s", "6s", "7s"], furo: false },
          { type: "shuntsu", hai: ["7s", "8s", "9s"], furo: false },
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
