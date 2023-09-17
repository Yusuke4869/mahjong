import { churempoto } from "../../mahjong/yaku/churempoto";

describe("churempoto", () => {
  test("九蓮宝燈1", () => {
    const result = churempoto({
      hai: {
        hai: ["2m", "1m", "1m", "1m", "2m", "3m", "4m", "5m", "6m", "7m", "8m", "9m", "9m", "9m"],
        furo: [],
      },
      agari: {
        elements: [],
      },
      agariHai: "9m",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "九蓮宝燈",
      han: 0,
      yakuman: 1,
    });
  });

  test("九蓮宝燈2", () => {
    const result = churempoto({
      hai: {
        hai: ["8p", "1p", "1p", "1p", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p", "9p", "9p"],
        furo: [],
      },
      agari: {
        elements: [],
      },
      agariHai: "1p",
      tsumo: true,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "九蓮宝燈",
      han: 0,
      yakuman: 1,
    });
  });

  test("純正九蓮宝燈", () => {
    const result = churempoto({
      hai: {
        hai: ["1m", "1m", "1m", "2m", "3m", "4m", "0m", "5m", "6m", "7m", "8m", "9m", "9m", "9m"],
        furo: [],
      },
      agari: {
        elements: [],
      },
      agariHai: "0m",
      tsumo: true,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "純正九蓮宝燈",
      han: 0,
      yakuman: 2,
    });
  });

  test("純正九蓮宝燈 シングル役満扱い", () => {
    const result = churempoto({
      hai: {
        hai: ["4p", "1p", "1p", "1p", "2p", "3p", "4p", "5p", "6p", "7p", "8p", "9p", "9p", "9p"],
        furo: [],
      },
      agari: {
        elements: [],
      },
      agariHai: "4p",
      tsumo: false,
      doubleYakuman: false,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "純正九蓮宝燈",
      han: 0,
      yakuman: 1,
    });
  });

  test("純正九蓮宝燈 天和", () => {
    const result = churempoto({
      hai: {
        hai: ["1m", "1m", "1m", "1m", "2m", "3m", "4m", "5m", "6m", "7m", "8m", "9m", "9m", "9m"],
        furo: [],
      },
      agari: {
        elements: [],
      },
      agariHai: "4m",
      tsumo: true,
      doubleYakuman: true,
      tenho: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "純正九蓮宝燈",
      han: 0,
      yakuman: 2,
    });
  });

  test("清一色", () => {
    const result = churempoto({
      hai: {
        hai: ["4p", "4p"],
        furo: [
          { type: "chi", hai: ["1p", "2p", "3p"] },
          { type: "chi", hai: ["4p", "5p", "6p"] },
          { type: "chi", hai: ["7p", "8p", "9p"] },
          { type: "pon", hai: ["9p", "9p", "9p"] },
        ],
      },
      agari: {
        elements: [],
      },
      agariHai: "4p",
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
