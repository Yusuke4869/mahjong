import { isshoku } from "../../mahjong/yaku/isshoku";

describe("isshoku", () => {
  test("清一色1", () => {
    const result = isshoku({
      hai: {
        hai: ["1m", "1m", "2m", "2m", "3m", "3m", "4m", "4m", "5m", "5m", "6m", "6m", "7m", "7m"],
        furo: [],
      },
      agari: {
        elements: [],
      },
      agariHai: "1m",
      tsumo: true,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "清一色",
      han: 6,
      yakuman: 0,
    });
  });

  test("清一色2", () => {
    const result = isshoku({
      hai: {
        hai: ["1s", "1s"],
        furo: [
          { type: "pon", hai: ["2s", "2s", "2s"] },
          { type: "pon", hai: ["4s", "4s", "4s"] },
          { type: "daiminkan", hai: ["6s", "6s", "6s", "6s"] },
          { type: "pon", hai: ["8s", "8s", "8s"] },
        ],
      },
      agari: {
        elements: [],
      },
      agariHai: "1s",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "清一色",
      han: 5,
      yakuman: 0,
    });
  });

  test("混一色1", () => {
    const result = isshoku({
      hai: {
        hai: ["1s", "2s", "2s", "3s", "3s", "4s", "6s", "6s", "6s", "6z", "6z"],
        furo: [{ type: "ankan", hai: ["8s", "8s", "8s", "8s"] }],
      },
      agari: {
        elements: [],
      },
      agariHai: "6s",
      tsumo: true,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "混一色",
      han: 3,
      yakuman: 0,
    });
  });

  test("混一色2", () => {
    const result = isshoku({
      hai: {
        hai: ["1s", "1s"],
        furo: [
          { type: "pon", hai: ["2s", "2s", "2s"] },
          { type: "pon", hai: ["4s", "4s", "4s"] },
          { type: "daiminkan", hai: ["6s", "6s", "6s", "6s"] },
          { type: "pon", hai: ["1z", "1z", "1z"] },
        ],
      },
      agari: {
        elements: [],
      },
      agariHai: "1s",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      exists: true,
      yaku: "混一色",
      han: 2,
      yakuman: 0,
    });
  });

  test("字一色", () => {
    const result = isshoku({
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
      exists: false,
      yaku: null,
      han: 0,
      yakuman: 0,
    });
  });
});
