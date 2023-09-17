import { sangen } from "../../mahjong/yaku/sangen";

describe("sangen", () => {
  test("大三元1", () => {
    const result = sangen({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["0s", "5s"], furo: false },
          { type: "shuntsu", hai: ["4m", "5m", "6m"], furo: false },
          { type: "anko", hai: ["5z", "5z", "5z"], furo: false },
          { type: "anko", hai: ["6z", "6z", "6z"], furo: false },
          { type: "anko", hai: ["7z", "7z", "7z"], furo: false },
        ],
      },
      agariHai: "0s",
      tsumo: true,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "大三元",
      han: 0,
      yakuman: 1,
    });
  });

  test("大三元2", () => {
    const result = sangen({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["1m", "1m"], furo: false },
          { type: "shuntsu", hai: ["7p", "8p", "9p"], furo: true },
          { type: "minkan", hai: ["5z", "5z", "5z", "5z"], furo: true },
          { type: "minko", hai: ["6z", "6z", "6z"], furo: true },
          { type: "ankan", hai: ["7z", "7z", "7z", "7z"], furo: false },
        ],
      },
      agariHai: "1m",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "大三元",
      han: 0,
      yakuman: 1,
    });
  });

  test("小三元", () => {
    const result = sangen({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["6z", "6z"], furo: false },
          { type: "shuntsu", hai: ["3m", "4m", "5m"], furo: false },
          { type: "shuntsu", hai: ["3s", "4s", "5s"], furo: false },
          { type: "minko", hai: ["5z", "5z", "5z"], furo: true },
          { type: "anko", hai: ["7z", "7z", "7z"], furo: false },
        ],
      },
      agariHai: "3s",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "小三元",
      han: 2,
      yakuman: 0,
    });
  });

  test("七対子", () => {
    const result = sangen({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["1m", "1m"], furo: false },
          { type: "toitsu", hai: ["1p", "1p"], furo: false },
          { type: "toitsu", hai: ["1s", "1s"], furo: false },
          { type: "toitsu", hai: ["1z", "1z"], furo: false },
          { type: "toitsu", hai: ["5z", "5z"], furo: false },
          { type: "toitsu", hai: ["6z", "6z"], furo: false },
          { type: "toitsu", hai: ["7z", "7z"], furo: false },
        ],
      },
      agariHai: "5z",
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
