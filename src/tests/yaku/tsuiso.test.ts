import { tsuiso } from "../../mahjong/yaku/tsuiso";

describe("tsuiso", () => {
  test("字一色1", () => {
    const result = tsuiso({
      hai: {
        hai: ["1z", "1z", "2z", "2z", "3z", "3z", "4z", "4z", "5z", "5z", "6z", "6z", "7z", "7z"],
        furo: [],
      },
      agari: {
        elements: [],
      },
      agariHai: "6z",
      tsumo: true,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "字一色",
      han: 0,
      yakuman: 1,
    });
  });

  test("字一色2", () => {
    const result = tsuiso({
      hai: {
        hai: ["7z", "7z"],
        furo: [
          { type: "pon", hai: ["1z", "1z", "1z"] },
          { type: "pon", hai: ["2z", "2z", "2z"] },
          { type: "pon", hai: ["3z", "3z", "3z"] },
          { type: "daiminkan", hai: ["4z", "4z", "4z"] },
        ],
      },
      agari: {
        elements: [],
      },
      agariHai: "7z",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "字一色",
      han: 0,
      yakuman: 1,
    });
  });

  test("混一色", () => {
    const result = tsuiso({
      hai: {
        hai: ["1z", "1z", "2z", "2z", "3z", "3z", "4z", "4z", "1s", "1s", "2s", "2s", "3s", "3s"],
        furo: [],
      },
      agari: {
        elements: [],
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
