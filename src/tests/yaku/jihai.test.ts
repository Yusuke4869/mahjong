import { jihai } from "../../mahjong/yaku/jihai";

describe("jihai", () => {
  test("東場 起家", () => {
    const result = jihai(
      {
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
        agariHai: "9s",
        tsumo: true,
        doubleYakuman: true,
      },
      "1z",
      "1z",
    );
    expect(result).toEqual([
      {
        exists: true,
        yaku: "自風牌",
        han: 1,
        yakuman: 0,
      },
      {
        exists: true,
        yaku: "場風牌",
        han: 1,
        yakuman: 0,
      },
    ]);
  });

  test("南場 西家", () => {
    const result = jihai(
      {
        hai: {
          hai: [],
          furo: [],
        },
        agari: {
          elements: [
            { type: "toitsu", hai: ["1s", "1s"], furo: false },
            { type: "shuntsu", hai: ["7p", "8p", "9p"], furo: false },
            { type: "shuntsu", hai: ["1s", "2s", "3s"], furo: false },
            { type: "minko", hai: ["9s", "9s", "9s"], furo: false },
            { type: "ankan", hai: ["2z", "2z", "2z"], furo: false },
          ],
        },
        agariHai: "9s",
        tsumo: false,
        doubleYakuman: true,
      },
      "2z",
      "3z",
    );
    expect(result).toEqual([
      {
        exists: true,
        yaku: "場風牌",
        han: 1,
        yakuman: 0,
      },
    ]);
  });

  test("東場 南家 發", () => {
    const result = jihai(
      {
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
            { type: "anko", hai: ["6z", "6z", "6z"], furo: false },
          ],
        },
        agariHai: "9s",
        tsumo: true,
        doubleYakuman: true,
      },
      "1z",
      "2z",
    );
    expect(result).toEqual([
      {
        exists: true,
        yaku: "發",
        han: 1,
        yakuman: 0,
      },
    ]);
  });

  test("南場 北家 白 中", () => {
    const result = jihai(
      {
        hai: {
          hai: [],
          furo: [],
        },
        agari: {
          elements: [
            { type: "toitsu", hai: ["1s", "1s"], furo: false },
            { type: "shuntsu", hai: ["7p", "8p", "9p"], furo: false },
            { type: "shuntsu", hai: ["1s", "2s", "3s"], furo: false },
            { type: "minko", hai: ["5z", "5z", "5z"], furo: true },
            { type: "minkan", hai: ["7z", "7z", "7z", "7z"], furo: true },
          ],
        },
        agariHai: "1s",
        tsumo: false,
        doubleYakuman: true,
      },
      "2z",
      "4z",
    );
    expect(result).toEqual([
      {
        exists: true,
        yaku: "白",
        han: 1,
        yakuman: 0,
      },
      {
        exists: true,
        yaku: "中",
        han: 1,
        yakuman: 0,
      },
    ]);
  });
});
