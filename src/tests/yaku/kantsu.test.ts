import { kantsu } from "../../mahjong/yaku/kantsu";

describe("kantsu", () => {
  test("四槓子1", () => {
    const result = kantsu({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["1m", "1m"], furo: false },
          { type: "ankan", hai: ["1z", "1z", "1z", "1z"], furo: false },
          { type: "ankan", hai: ["2z", "2z", "2z", "2z"], furo: false },
          { type: "ankan", hai: ["3z", "3z", "3z", "3z"], furo: false },
          { type: "ankan", hai: ["4z", "4z", "4z", "4z"], furo: false },
        ],
      },
      agariHai: "1m",
      tsumo: true,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "四槓子",
      han: 0,
      yakuman: 1,
    });
  });

  test("四槓子2", () => {
    const result = kantsu({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["1m", "1m"], furo: false },
          { type: "minkan", hai: ["1p", "1p", "1p", "1p"], furo: true },
          { type: "minkan", hai: ["2p", "2p", "2p", "2p"], furo: true },
          { type: "minkan", hai: ["3p", "3p", "3p", "3p"], furo: true },
          { type: "ankan", hai: ["4p", "4p", "4p", "4p"], furo: false },
        ],
      },
      agariHai: "1m",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "四槓子",
      han: 0,
      yakuman: 1,
    });
  });

  test("三槓子", () => {
    const result = kantsu({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["1m", "1m"], furo: false },
          { type: "ankan", hai: ["1z", "1z", "1z", "1z"], furo: true },
          { type: "ankan", hai: ["2z", "2z", "2z", "2z"], furo: true },
          { type: "ankan", hai: ["3z", "3z", "3z", "3z"], furo: true },
          { type: "anko", hai: ["4z", "4z", "4z"], furo: false },
        ],
      },
      agariHai: "4z",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "三槓子",
      han: 2,
      yakuman: 0,
    });
  });

  test("対々和", () => {
    const result = kantsu({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["5m", "5m"], furo: false },
          { type: "ankan", hai: ["2z", "2z", "2z", "2z"], furo: false },
          { type: "minkan", hai: ["3z", "3z", "3z", "3z"], furo: true },
          { type: "anko", hai: ["4z", "4z", "4z"], furo: false },
          { type: "anko", hai: ["5z", "5z", "5z"], furo: false },
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
});
