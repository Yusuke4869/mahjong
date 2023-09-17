import { checkPinfu, pinfu } from "../../mahjong/yaku/pinfu";

describe("checkPinfu", () => {
  test("平和", () => {
    const result = checkPinfu(
      {
        hai: {
          hai: [],
          furo: [],
        },
        agari: {
          elements: [
            { type: "toitsu", hai: ["0m", "5m"], furo: false },
            { type: "shuntsu", hai: ["2m", "3m", "4m"], furo: false },
            { type: "shuntsu", hai: ["2m", "3m", "4m"], furo: false },
            { type: "shuntsu", hai: ["6p", "7p", "8p"], furo: false },
            { type: "shuntsu", hai: ["5s", "6s", "7s"], furo: false },
          ],
        },
        agariHai: "7s",
        tsumo: true,
        doubleYakuman: true,
      },
      "1z",
      "1z",
    );
    expect(result).toEqual({
      exists: true,
      furo: false,
    });
  });

  test("喰い平和", () => {
    const result = checkPinfu(
      {
        hai: {
          hai: [],
          furo: [],
        },
        agari: {
          elements: [
            { type: "toitsu", hai: ["0m", "5m"], furo: false },
            { type: "shuntsu", hai: ["2m", "3m", "4m"], furo: false },
            { type: "shuntsu", hai: ["2m", "3m", "4m"], furo: false },
            { type: "shuntsu", hai: ["6p", "7p", "8p"], furo: true },
            { type: "shuntsu", hai: ["5s", "6s", "7s"], furo: false },
          ],
        },
        agariHai: "7s",
        tsumo: false,
        doubleYakuman: true,
      },
      "1z",
      "2z",
    );
    expect(result).toEqual({
      exists: true,
      furo: true,
    });
  });
});

describe("pinfu", () => {
  test("平和1", () => {
    const result = pinfu(
      {
        hai: {
          hai: [],
          furo: [],
        },
        agari: {
          elements: [
            { type: "toitsu", hai: ["0m", "5m"], furo: false },
            { type: "shuntsu", hai: ["2m", "3m", "4m"], furo: false },
            { type: "shuntsu", hai: ["2m", "3m", "4m"], furo: false },
            { type: "shuntsu", hai: ["6p", "7p", "8p"], furo: false },
            { type: "shuntsu", hai: ["5s", "6s", "7s"], furo: false },
          ],
        },
        agariHai: "7s",
        tsumo: true,
        doubleYakuman: true,
      },
      "1z",
      "1z",
    );
    expect(result).toEqual({
      exists: true,
      yaku: "平和",
      han: 1,
      yakuman: 0,
    });
  });

  test("平和2", () => {
    const result = pinfu(
      {
        hai: {
          hai: [],
          furo: [],
        },
        agari: {
          elements: [
            { type: "toitsu", hai: ["9s", "9s"], furo: false },
            { type: "shuntsu", hai: ["1s", "2s", "3s"], furo: false },
            { type: "shuntsu", hai: ["3s", "4s", "5s"], furo: false },
            { type: "shuntsu", hai: ["0s", "6s", "7s"], furo: false },
            { type: "shuntsu", hai: ["7s", "8s", "9s"], furo: false },
          ],
        },
        agariHai: "9s",
        tsumo: false,
        doubleYakuman: true,
      },
      "1z",
      "2z",
    );
    expect(result).toEqual({
      exists: true,
      yaku: "平和",
      han: 1,
      yakuman: 0,
    });
  });

  test("平和3", () => {
    const result = pinfu(
      {
        hai: {
          hai: [],
          furo: [],
        },
        agari: {
          elements: [
            { type: "toitsu", hai: ["1s", "1s"], furo: false },
            { type: "shuntsu", hai: ["4m", "5m", "6m"], furo: false },
            { type: "shuntsu", hai: ["7m", "8m", "9m"], furo: false },
            { type: "shuntsu", hai: ["7p", "8p", "9p"], furo: false },
            { type: "shuntsu", hai: ["4s", "5s", "6s"], furo: false },
          ],
        },
        agariHai: "9m",
        tsumo: true,
        doubleYakuman: true,
      },
      "1z",
      "3z",
    );
    expect(result).toEqual({
      exists: true,
      yaku: "平和",
      han: 1,
      yakuman: 0,
    });
  });

  test("平和4", () => {
    const result = pinfu(
      {
        hai: {
          hai: [],
          furo: [],
        },
        agari: {
          elements: [
            { type: "toitsu", hai: ["4z", "4z"], furo: false },
            { type: "shuntsu", hai: ["2m", "3m", "4m"], furo: false },
            { type: "shuntsu", hai: ["7m", "8m", "9m"], furo: false },
            { type: "shuntsu", hai: ["1s", "2s", "3s"], furo: false },
            { type: "shuntsu", hai: ["4s", "5s", "6s"], furo: false },
          ],
        },
        agariHai: "6s",
        tsumo: true,
        doubleYakuman: true,
      },
      "2z",
      "3z",
    );
    expect(result).toEqual({
      exists: true,
      yaku: "平和",
      han: 1,
      yakuman: 0,
    });
  });

  test("断么九", () => {
    const result = pinfu(
      {
        hai: {
          hai: [],
          furo: [],
        },
        agari: {
          elements: [
            { type: "toitsu", hai: ["0m", "5m"], furo: false },
            { type: "shuntsu", hai: ["2m", "3m", "4m"], furo: false },
            { type: "shuntsu", hai: ["2m", "3m", "4m"], furo: false },
            { type: "shuntsu", hai: ["6p", "7p", "8p"], furo: false },
            { type: "shuntsu", hai: ["5s", "6s", "7s"], furo: true },
          ],
        },
        agariHai: "8p",
        tsumo: false,
        doubleYakuman: true,
      },
      "1z",
      "1z",
    );
    expect(result).toEqual({
      exists: false,
      yaku: null,
      han: 0,
      yakuman: 0,
    });
  });

  test("fail", () => {
    const result = pinfu(
      {
        hai: {
          hai: [],
          furo: [],
        },
        agari: {
          elements: [
            { type: "toitsu", hai: ["1z", "1z"], furo: false },
            { type: "shuntsu", hai: ["2m", "3m", "4m"], furo: false },
            { type: "shuntsu", hai: ["2m", "3m", "4m"], furo: false },
            { type: "shuntsu", hai: ["6p", "7p", "8p"], furo: false },
            { type: "shuntsu", hai: ["5s", "6s", "7s"], furo: false },
          ],
        },
        agariHai: "7s",
        tsumo: false,
        doubleYakuman: true,
      },
      "2z",
      "1z",
    );
    expect(result).toEqual({
      exists: false,
      yaku: null,
      han: 0,
      yakuman: 0,
    });
  });

  test("嵌張", () => {
    const result = pinfu(
      {
        hai: {
          hai: [],
          furo: [],
        },
        agari: {
          elements: [
            { type: "toitsu", hai: ["0m", "5m"], furo: false },
            { type: "shuntsu", hai: ["2m", "3m", "4m"], furo: false },
            { type: "shuntsu", hai: ["2m", "3m", "4m"], furo: false },
            { type: "shuntsu", hai: ["6p", "7p", "8p"], furo: false },
            { type: "shuntsu", hai: ["5s", "6s", "7s"], furo: false },
          ],
        },
        agariHai: "6s",
        tsumo: true,
        doubleYakuman: true,
      },
      "2z",
      "2z",
    );
    expect(result).toEqual({
      exists: false,
      yaku: null,
      han: 0,
      yakuman: 0,
    });
  });
});
