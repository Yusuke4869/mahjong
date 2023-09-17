import { ryuiso } from "../../mahjong/yaku/ryuiso";

describe("ryuiso", () => {
  test("緑一色1", () => {
    const result = ryuiso({
      hai: {
        hai: ["2s", "2s", "3s", "3s", "4s", "4s", "6s", "6s", "8s", "8s", "8s", "6z", "6z", "6z"],
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
      yaku: "緑一色",
      han: 0,
      yakuman: 1,
    });
  });

  test("緑一色2", () => {
    const result = ryuiso({
      hai: {
        hai: ["6s", "6s"],
        furo: [
          { type: "pon", hai: ["2s", "2s", "2s"] },
          { type: "pon", hai: ["4s", "4s", "4s"] },
          { type: "pon", hai: ["8s", "8s", "8s"] },
          { type: "daiminkan", hai: ["6z", "6z", "6z"] },
        ],
      },
      agari: {
        elements: [],
      },
      agariHai: "6s",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "緑一色",
      han: 0,
      yakuman: 1,
    });
  });

  test("清一色", () => {
    const result = ryuiso({
      hai: {
        hai: ["1s", "2s", "2s", "3s", "3s", "4s", "6s", "6s", "6s", "8s", "8s", "8s", "6z", "6z"],
        furo: [],
      },
      agari: {
        elements: [],
      },
      agariHai: "6s",
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
