import { sanshokudoko } from "../../mahjong/yaku/sanshokudoko";

describe("sanshokudoko", () => {
  test("三色同刻1", () => {
    const result = sanshokudoko({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["3s", "3s"], furo: false },
          { type: "anko", hai: ["5m", "5m", "5m"], furo: false },
          { type: "anko", hai: ["0p", "5p", "5p"], furo: false },
          { type: "ankan", hai: ["0s", "5s", "5s", "5s"], furo: false },
          { type: "anko", hai: ["4z", "4z", "4z"], furo: false },
        ],
      },
      agariHai: "4z",
      tsumo: true,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "三色同刻",
      han: 2,
      yakuman: 0,
    });
  });

  test("三色同刻2", () => {
    const result = sanshokudoko({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["1z", "1z"], furo: false },
          { type: "minko", hai: ["0m", "5m", "5m"], furo: false },
          { type: "minko", hai: ["7m", "7m", "7m"], furo: true },
          { type: "minko", hai: ["7p", "7p", "7p"], furo: true },
          { type: "minkan", hai: ["7s", "7s", "7s", "7s"], furo: true },
        ],
      },
      agariHai: "0m",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "三色同刻",
      han: 2,
      yakuman: 0,
    });
  });

  test("対々和", () => {
    const result = sanshokudoko({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["0m", "5m"], furo: false },
          { type: "anko", hai: ["5p", "5p", "5p"], furo: false },
          { type: "anko", hai: ["8p", "8p", "8p"], furo: false },
          { type: "minko", hai: ["0s", "5s", "5s"], furo: false },
          { type: "anko", hai: ["5z", "5z", "5z"], furo: false },
        ],
      },
      agariHai: "0s",
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
