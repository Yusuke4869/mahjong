import { chanta } from "../../mahjong/yaku/chanta";

describe("chanta", () => {
  test("純全帯么九1", () => {
    const result = chanta({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["1s", "1s"], furo: false },
          { type: "anko", hai: ["9m", "9m", "9m"], furo: false },
          { type: "shuntsu", hai: ["7p", "8p", "9p"], furo: false },
          { type: "shuntsu", hai: ["1s", "2s", "3s"], furo: false },
          { type: "anko", hai: ["9s", "9s", "9s"], furo: false },
        ],
      },
      agariHai: "9s",
      tsumo: true,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "純全帯么九",
      han: 3,
      yakuman: 0,
    });
  });

  test("純全帯么九2", () => {
    const result = chanta({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["9s", "9s"], furo: false },
          { type: "ankan", hai: ["1m", "1m", "1m", "1m"], furo: true },
          { type: "shuntsu", hai: ["7m", "8m", "9m"], furo: true },
          { type: "shuntsu", hai: ["7p", "8p", "9p"], furo: false },
          { type: "shuntsu", hai: ["1s", "2s", "3s"], furo: false },
        ],
      },
      agariHai: "9s",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "純全帯么九",
      han: 2,
      yakuman: 0,
    });
  });

  test("混全帯么九1", () => {
    const result = chanta({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["1s", "1s"], furo: false },
          { type: "shuntsu", hai: ["7p", "8p", "9p"], furo: false },
          { type: "shuntsu", hai: ["1s", "2s", "3s"], furo: false },
          { type: "anko", hai: ["9s", "9s", "9s"], furo: false },
          { type: "anko", hai: ["1z", "1z", "1z"], furo: false },
        ],
      },
      agariHai: "1z",
      tsumo: true,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "混全帯么九",
      han: 2,
      yakuman: 0,
    });
  });

  test("混全帯么九2", () => {
    const result = chanta({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["9s", "9s"], furo: false },
          { type: "shuntsu", hai: ["7m", "8m", "9m"], furo: false },
          { type: "shuntsu", hai: ["7p", "8p", "9p"], furo: false },
          { type: "shuntsu", hai: ["1s", "2s", "3s"], furo: false },
          { type: "minkan", hai: ["7z", "7z", "7z", "7z"], furo: true },
        ],
      },
      agariHai: "9s",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "混全帯么九",
      han: 1,
      yakuman: 0,
    });
  });

  test("平和", () => {
    const result = chanta({
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
          { type: "shuntsu", hai: ["7s", "8s", "9s"], furo: false },
        ],
      },
      agariHai: "9s",
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
