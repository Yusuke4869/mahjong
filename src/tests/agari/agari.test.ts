import { getAgari } from "../../mahjong/agari/agari";

describe("getAgari", () => {
  test("1", () => {
    const result = getAgari(
      {
        hai: ["4s", "5s", "6s", "7z", "7z"],
        furo: [
          {
            type: "ankan",
            hai: ["2s", "2s", "2s", "2s"],
          },
          {
            type: "daiminkan",
            hai: ["1s", "1s", "1s", "1s"],
          },
          {
            type: "kakan",
            hai: ["8s", "8s", "8s", "8s"],
          },
        ],
      },
      "6s",
    );
    expect(result).toContainEqual({
      elements: [
        { type: "ankan", hai: ["2s", "2s", "2s", "2s"], furo: false },
        { type: "minkan", hai: ["1s", "1s", "1s", "1s"], furo: true },
        { type: "minkan", hai: ["8s", "8s", "8s", "8s"], furo: true },
        { type: "toitsu", hai: ["7z", "7z"], furo: false },
        { type: "shuntsu", hai: ["4s", "5s", "6s"], furo: false },
      ],
    });
  });

  test("2", () => {
    const result = getAgari(
      {
        hai: ["2p", "2p", "5p", "6p", "7p"],
        furo: [
          {
            type: "pon",
            hai: ["1p", "1p", "1p"],
          },
          {
            type: "pon",
            hai: ["2z", "2z", "2z"],
          },
          {
            type: "chi",
            hai: ["7p", "8p", "6p"],
          },
        ],
      },
      "2p",
    );
    expect(result).toContainEqual({
      elements: [
        { type: "minko", hai: ["1p", "1p", "1p"], furo: true },
        { type: "minko", hai: ["2z", "2z", "2z"], furo: true },
        { type: "shuntsu", hai: ["7p", "8p", "6p"], furo: true },
        { type: "toitsu", hai: ["2p", "2p"], furo: false },
        { type: "shuntsu", hai: ["5p", "6p", "7p"], furo: false },
      ],
    });
  });

  test("3", () => {
    const result = getAgari(
      {
        hai: ["7m", "8m", "9m", "3p", "3p", "3p", "4p", "5p", "6p", "7p", "5s", "6s", "7s", "5p"],
        furo: [],
      },
      "5p",
    );
    expect(result).toContainEqual({
      elements: [
        { type: "toitsu", hai: ["3p", "3p"], furo: false },
        { type: "shuntsu", hai: ["7m", "8m", "9m"], furo: false },
        { type: "shuntsu", hai: ["3p", "4p", "5p"], furo: false },
        { type: "shuntsu", hai: ["5p", "6p", "7p"], furo: false },
        { type: "shuntsu", hai: ["5s", "6s", "7s"], furo: false },
      ],
    });
  });

  test("4 赤入り1", () => {
    const result = getAgari(
      {
        hai: ["4m", "4m", "0m", "5m", "5m", "5m", "6m", "6m", "5p", "0p", "5p", "0s", "6s", "7s"],
        furo: [],
      },
      "5p",
      true,
    );
    expect(result).toContainEqual({
      elements: [
        { type: "toitsu", hai: ["0m", "5m"], furo: false },
        { type: "anko", hai: ["0p", "5p", "5p"], furo: false },
        { type: "shuntsu", hai: ["4m", "5m", "6m"], furo: false },
        { type: "shuntsu", hai: ["4m", "5m", "6m"], furo: false },
        { type: "shuntsu", hai: ["0s", "6s", "7s"], furo: false },
      ],
    });
  });

  test("4 赤入り2", () => {
    const result = getAgari(
      {
        hai: ["4m", "4m", "0m", "5m", "5m", "5m", "6m", "6m", "5p", "0p", "5p", "0s", "6s", "7s"],
        furo: [],
      },
      "5p",
      false,
    );
    expect(result).toContainEqual({
      elements: [
        { type: "toitsu", hai: ["0m", "5m"], furo: false },
        { type: "minko", hai: ["0p", "5p", "5p"], furo: false },
        { type: "shuntsu", hai: ["4m", "5m", "6m"], furo: false },
        { type: "shuntsu", hai: ["4m", "5m", "6m"], furo: false },
        { type: "shuntsu", hai: ["0s", "6s", "7s"], furo: false },
      ],
    });
  });

  test("5 赤入り3", () => {
    const result = getAgari(
      {
        hai: ["4m", "5m", "5m", "5m", "6m", "5p", "0p", "5p", "0s", "6s", "7s"],
        furo: [
          {
            type: "chi",
            hai: ["4m", "0m", "6m"],
          },
        ],
      },
      "0m",
    );
    expect(result).toContainEqual({
      elements: [
        { type: "shuntsu", hai: ["4m", "0m", "6m"], furo: true },
        { type: "toitsu", hai: ["5m", "5m"], furo: false },
        { type: "anko", hai: ["0p", "5p", "5p"], furo: false },
        { type: "shuntsu", hai: ["4m", "5m", "6m"], furo: false },
        { type: "shuntsu", hai: ["0s", "6s", "7s"], furo: false },
      ],
    });
  });

  test("四暗刻", () => {
    const result = getAgari(
      {
        hai: ["3m", "3m", "3m", "4m", "4m", "4m", "5m", "5m", "5m", "6m", "6m", "6m", "7m", "7m"],
        furo: [],
      },
      "7m",
    );
    expect(result).toContainEqual({
      elements: [
        { type: "toitsu", hai: ["7m", "7m"], furo: false },
        { type: "anko", hai: ["3m", "3m", "3m"], furo: false },
        { type: "anko", hai: ["4m", "4m", "4m"], furo: false },
        { type: "anko", hai: ["5m", "5m", "5m"], furo: false },
        { type: "anko", hai: ["6m", "6m", "6m"], furo: false },
      ],
    });
  });

  test("九蓮宝燈", () => {
    const result = getAgari(
      {
        hai: ["1m", "1m", "1m", "2m", "3m", "4m", "5m", "6m", "7m", "8m", "9m", "9m", "9m", "9m"],
        furo: [],
      },
      "9m",
      false,
    );
    expect(result).toContainEqual({
      elements: [
        { type: "toitsu", hai: ["1m", "1m"], furo: false },
        { type: "anko", hai: ["9m", "9m", "9m"], furo: false },
        { type: "shuntsu", hai: ["1m", "2m", "3m"], furo: false },
        { type: "shuntsu", hai: ["4m", "5m", "6m"], furo: false },
        { type: "shuntsu", hai: ["7m", "8m", "9m"], furo: false },
      ],
    });
  });

  test("大車輪", () => {
    const result = getAgari(
      {
        hai: ["2p", "2p", "3p", "3p", "4p", "4p", "5p", "5p", "6p", "6p", "7p", "7p", "8p", "8p"],
        furo: [],
      },
      "8p",
    );
    expect(result).toContainEqual({
      elements: [
        { type: "toitsu", hai: ["2p", "2p"], furo: false },
        { type: "toitsu", hai: ["3p", "3p"], furo: false },
        { type: "toitsu", hai: ["4p", "4p"], furo: false },
        { type: "toitsu", hai: ["5p", "5p"], furo: false },
        { type: "toitsu", hai: ["6p", "6p"], furo: false },
        { type: "toitsu", hai: ["7p", "7p"], furo: false },
        { type: "toitsu", hai: ["8p", "8p"], furo: false },
      ],
    });
    expect(result).toContainEqual({
      elements: [
        { hai: ["2p", "2p"], furo: false, type: "toitsu" },
        { hai: ["3p", "4p", "5p"], furo: false, type: "shuntsu" },
        { hai: ["3p", "4p", "5p"], furo: false, type: "shuntsu" },
        { hai: ["6p", "7p", "8p"], furo: false, type: "shuntsu" },
        { hai: ["6p", "7p", "8p"], furo: false, type: "shuntsu" },
      ],
    });
    expect(result).toContainEqual({
      elements: [
        { hai: ["5p", "5p"], furo: false, type: "toitsu" },
        { hai: ["2p", "3p", "4p"], furo: false, type: "shuntsu" },
        { hai: ["2p", "3p", "4p"], furo: false, type: "shuntsu" },
        { hai: ["6p", "7p", "8p"], furo: false, type: "shuntsu" },
        { hai: ["6p", "7p", "8p"], furo: false, type: "shuntsu" },
      ],
    });
    expect(result).toContainEqual({
      elements: [
        { hai: ["8p", "8p"], furo: false, type: "toitsu" },
        { hai: ["2p", "3p", "4p"], furo: false, type: "shuntsu" },
        { hai: ["2p", "3p", "4p"], furo: false, type: "shuntsu" },
        { hai: ["5p", "6p", "7p"], furo: false, type: "shuntsu" },
        { hai: ["5p", "6p", "7p"], furo: false, type: "shuntsu" },
      ],
    });
  });

  test("清一色1", () => {
    const result = getAgari(
      {
        hai: ["2m", "3m", "3m", "3m", "3m", "4m", "4m", "4m", "5m", "5m", "6m", "6m", "8m", "8m"],
        furo: [],
      },
      "3m",
    );
    expect(result).toContainEqual({
      elements: [
        { type: "toitsu", hai: ["8m", "8m"], furo: false },
        { type: "anko", hai: ["3m", "3m", "3m"], furo: false },
        { type: "shuntsu", hai: ["2m", "3m", "4m"], furo: false },
        { type: "shuntsu", hai: ["4m", "5m", "6m"], furo: false },
        { type: "shuntsu", hai: ["4m", "5m", "6m"], furo: false },
      ],
    });
  });

  test("清一色2", () => {
    const result = getAgari(
      {
        hai: ["1m", "2m", "3m", "3m", "4m", "4m", "5m", "5m", "6m", "7m", "8m", "9m", "9m", "9m"],
        furo: [],
      },
      "5m",
    );
    expect(result).toContainEqual({
      elements: [
        { type: "toitsu", hai: ["9m", "9m"], furo: false },
        { type: "shuntsu", hai: ["1m", "2m", "3m"], furo: false },
        { type: "shuntsu", hai: ["3m", "4m", "5m"], furo: false },
        { type: "shuntsu", hai: ["4m", "5m", "6m"], furo: false },
        { type: "shuntsu", hai: ["7m", "8m", "9m"], furo: false },
      ],
    });
  });

  test("清一色3", () => {
    const result = getAgari(
      {
        hai: ["2p", "3p", "3p", "3p", "3p", "4p", "4p", "4p", "5p", "5p", "6p", "6p", "8p", "8p"],
        furo: [],
      },
      "3p",
      false,
    );
    expect(result).toContainEqual({
      elements: [
        { type: "toitsu", hai: ["8p", "8p"], furo: false },
        { type: "anko", hai: ["3p", "3p", "3p"], furo: false },
        { type: "shuntsu", hai: ["2p", "3p", "4p"], furo: false },
        { type: "shuntsu", hai: ["4p", "5p", "6p"], furo: false },
        { type: "shuntsu", hai: ["4p", "5p", "6p"], furo: false },
      ],
    });
  });

  test("国士無双", () => {
    const result = getAgari(
      {
        hai: ["1m", "9m", "1p", "9p", "1s", "9s", "1z", "2z", "3z", "4z", "5z", "6z", "7z", "1p"],
        furo: [],
      },
      "5z",
    );
    expect(result).toBe(null);
  });

  test("fail 1", () => {
    const result = getAgari(
      {
        hai: ["1m", "2p", "3s", "4m", "5p", "6s", "1z", "2z", "3z", "4z", "5z", "6z", "7z", "7z"],
        furo: [],
      },
      "7z",
    );
    expect(result).toBe(null);
  });

  test("fail 2", () => {
    const result = getAgari(
      {
        hai: ["1m", "1m", "1m", "2m", "2m", "2m", "3m", "3m", "3m", "4m", "4m", "4m", "5m", "5m", "5m"],
        furo: [],
      },
      "4m",
    );
    expect(result).toBe(null);
  });

  test("fail 3", () => {
    const result = getAgari(
      {
        hai: ["1m", "1m", "1m", "2m", "2m", "2m", "3m", "3m", "3m", "4m", "4m", "4m", "5m", "5m", "5m", "1z", "1z"],
        furo: [],
      },
      "1z",
    );
    expect(result).toBe(null);
  });
});
