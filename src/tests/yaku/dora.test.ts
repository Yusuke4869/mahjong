import { dora } from "../../mahjong/yaku/dora";

describe("dora", () => {
  test("1", () => {
    const result = dora(
      {
        hai: {
          hai: ["1m", "1m", "1m", "1m", "2m", "3m", "4m", "5m", "6m", "7m", "8m", "9m", "9m", "9m"],
          furo: [],
        },
        agari: {
          elements: [],
        },
        agariHai: "1m",
        tsumo: true,
        doubleYakuman: true,
      },
      ["9m"],
    );
    expect(result).toEqual([
      {
        exists: true,
        yaku: "ドラ",
        han: 4,
        yakuman: 0,
      },
    ]);
  });

  test("2", () => {
    const result = dora(
      {
        hai: {
          hai: ["2p", "3p", "4p", "0p", "6p", "7p", "0s", "5s", "5s", "1z", "1z"],
          furo: [{ type: "ankan", hai: ["5z", "5z", "5z", "5z"] }],
        },
        agari: {
          elements: [],
        },
        agariHai: "3p",
        tsumo: false,
        doubleYakuman: true,
      },
      ["4z", "7z"],
      ["4s", "1m"],
    );
    expect(result).toEqual([
      {
        exists: true,
        yaku: "ドラ",
        han: 6,
        yakuman: 0,
      },
      {
        exists: true,
        yaku: "赤ドラ",
        han: 2,
        yakuman: 0,
      },
      {
        exists: true,
        yaku: "裏ドラ",
        han: 3,
        yakuman: 0,
      },
    ]);
  });

  test("3", () => {
    const result = dora(
      {
        hai: {
          hai: ["2p", "3p", "4p", "1z", "1z"],
          furo: [
            {
              type: "chi",
              hai: ["0p", "6p", "7p"],
            },
            {
              type: "pon",
              hai: ["0s", "5s", "5s"],
            },
            {
              type: "daiminkan",
              hai: ["5z", "5z", "5z", "5z"],
            },
          ],
        },
        agari: {
          elements: [],
        },
        agariHai: "3p",
        tsumo: false,
        doubleYakuman: true,
      },
      ["4z", "7z"],
      ["4s", "1m"],
    );
    expect(result).toEqual([
      {
        exists: true,
        yaku: "ドラ",
        han: 6,
        yakuman: 0,
      },
      {
        exists: true,
        yaku: "赤ドラ",
        han: 2,
        yakuman: 0,
      },
    ]);
  });

  test("4", () => {
    const result = dora(
      {
        hai: {
          hai: ["2p", "2p", "2p", "4p", "4p", "4p", "5p", "6p", "8s", "8s", "7p"],
          furo: [
            {
              type: "ankan",
              hai: ["0s", "5s", "5s", "5s"],
            },
          ],
        },
        agari: {
          elements: [],
        },
        agariHai: "7p",
        tsumo: false,
        doubleYakuman: true,
      },
      ["5z", "1p", "3p", "9p"],
      ["7s", "1p", "1p", "4s"],
    );
    expect(result).toEqual([
      {
        exists: true,
        yaku: "ドラ",
        han: 6,
        yakuman: 0,
      },
      {
        exists: true,
        yaku: "赤ドラ",
        han: 1,
        yakuman: 0,
      },
      {
        exists: true,
        yaku: "裏ドラ",
        han: 12,
        yakuman: 0,
      },
    ]);
  });
});
