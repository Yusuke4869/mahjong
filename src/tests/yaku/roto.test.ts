import { roto } from "../../mahjong/yaku/roto";

describe("roto", () => {
  test("清老頭1", () => {
    const result = roto({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["1m", "1m"], furo: false },
          { type: "anko", hai: ["9m", "9m", "9m"], furo: false },
          { type: "anko", hai: ["1p", "1p", "1p"], furo: false },
          { type: "anko", hai: ["1s", "1s", "1s"], furo: false },
          { type: "anko", hai: ["9s", "9s", "9s"], furo: false },
        ],
      },
      agariHai: "9s",
      tsumo: true,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "清老頭",
      han: 0,
      yakuman: 1,
    });
  });

  test("清老頭2", () => {
    const result = roto({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["9p", "9p"], furo: false },
          { type: "anko", hai: ["9m", "9m", "9m"], furo: false },
          { type: "minko", hai: ["1p", "1p", "1p"], furo: true },
          { type: "minkan", hai: ["1s", "1s", "1s", "1s"], furo: true },
          { type: "ankan", hai: ["9s", "9s", "9s", "9s"], furo: false },
        ],
      },
      agariHai: "9p",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "清老頭",
      han: 0,
      yakuman: 1,
    });
  });

  test("混老頭1", () => {
    const result = roto({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["6z", "6z"], furo: false },
          { type: "anko", hai: ["9m", "9m", "9m"], furo: false },
          { type: "anko", hai: ["1p", "1p", "1p"], furo: false },
          { type: "anko", hai: ["1s", "1s", "1s"], furo: false },
          { type: "anko", hai: ["9s", "9s", "9s"], furo: false },
        ],
      },
      agariHai: "6z",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "混老頭",
      han: 2,
      yakuman: 0,
    });
  });

  test("混老頭2", () => {
    const result = roto({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["9p", "9p"], furo: false },
          { type: "anko", hai: ["1z", "1z", "1z"], furo: false },
          { type: "minko", hai: ["2z", "2z", "2z"], furo: true },
          { type: "minkan", hai: ["3z", "3z", "3z", "3z"], furo: true },
          { type: "ankan", hai: ["4z", "4z", "4z", "4z"], furo: false },
        ],
      },
      agariHai: "1z",
      tsumo: true,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "混老頭",
      han: 2,
      yakuman: 0,
    });
  });

  test("混全帯么九", () => {
    const result = roto({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["9p", "9p"], furo: false },
          { type: "shuntsu", hai: ["1m", "2m", "3m"], furo: false },
          { type: "minko", hai: ["2z", "2z", "2z"], furo: true },
          { type: "minkan", hai: ["3z", "3z", "3z", "3z"], furo: true },
          { type: "ankan", hai: ["4z", "4z", "4z", "4z"], furo: false },
        ],
      },
      agariHai: "1m",
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

  test("大七星", () => {
    const result = roto({
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
});
