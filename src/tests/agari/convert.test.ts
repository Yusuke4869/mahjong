import { furo2Elements, getAka, initialize, replaceAka } from "../../mahjong/agari/convert";

describe("furo2Elements", () => {
  test("1", () => {
    const result = furo2Elements([
      {
        type: "chi",
        hai: ["1m", "2m", "3m"],
      },
    ]);
    expect(result).toEqual([
      {
        type: "shuntsu",
        hai: ["1m", "2m", "3m"],
        furo: true,
      },
    ]);
  });

  test("2", () => {
    const result = furo2Elements([
      {
        type: "chi",
        hai: ["1m", "2m", "3m"],
      },
      {
        type: "pon",
        hai: ["0p", "5p", "5p"],
      },
    ]);
    expect(result).toEqual([
      {
        type: "shuntsu",
        hai: ["1m", "2m", "3m"],
        furo: true,
      },
      {
        type: "minko",
        hai: ["0p", "5p", "5p"],
        furo: true,
      },
    ]);
  });

  test("3", () => {
    const result = furo2Elements([
      {
        type: "daiminkan",
        hai: ["1z", "1z", "1z", "1z"],
      },
      {
        type: "ankan",
        hai: ["6s", "6s", "6s", "6s"],
      },
      {
        type: "kakan",
        hai: ["5p", "5p", "5p", "5p"],
      },
    ]);
    expect(result).toEqual([
      {
        type: "minkan",
        hai: ["1z", "1z", "1z", "1z"],
        furo: true,
      },
      {
        type: "ankan",
        hai: ["6s", "6s", "6s", "6s"],
        furo: false,
      },
      {
        type: "minkan",
        hai: ["5p", "5p", "5p", "5p"],
        furo: true,
      },
    ]);
  });

  test("invalid", () => {
    const result = furo2Elements([
      {
        type: "chi",
        hai: ["1z", "2z", "3z"],
      },
    ]);
    expect(result).toBe(false);
  });
});

describe("initialize", () => {
  test("1", () => {
    const result = initialize(
      [],
      {
        manzu: [2, 0, 0, 0, 0, 0, 1, 1, 1],
        pinzu: [0, 1, 1, 1, 3, 0, 0, 0, 0],
        sozu: [0, 0, 1, 1, 1, 0, 0, 0, 0],
        jihai: [0, 0, 0, 0, 0, 0, 0],
      },
      {
        type: "toitsu",
        hai: ["1m", "1m"],
        furo: false,
      },
    );
    expect(result).toEqual({
      elements: [
        {
          type: "toitsu",
          hai: ["1m", "1m"],
          furo: false,
        },
      ],
      hai: {
        manzu: [0, 0, 0, 0, 0, 0, 1, 1, 1],
        pinzu: [0, 1, 1, 1, 3, 0, 0, 0, 0],
        sozu: [0, 0, 1, 1, 1, 0, 0, 0, 0],
        jihai: [0, 0, 0, 0, 0, 0, 0],
      },
      completed: false,
    });
  });

  test("2", () => {
    const result = initialize(
      [
        {
          type: "shuntsu",
          hai: ["7p", "8p", "9p"],
          furo: true,
        },
      ],
      {
        manzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        pinzu: [0, 0, 1, 1, 3, 0, 1, 1, 1],
        sozu: [0, 1, 1, 1, 3, 0, 0, 0, 0],
        jihai: [0, 0, 0, 0, 0, 0, 0],
      },
      {
        type: "toitsu",
        hai: ["0p", "5p"],
        furo: false,
      },
    );
    expect(result).toEqual({
      elements: [
        {
          type: "shuntsu",
          hai: ["7p", "8p", "9p"],
          furo: true,
        },
        {
          type: "toitsu",
          hai: ["0p", "5p"],
          furo: false,
        },
      ],
      hai: {
        manzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        pinzu: [0, 0, 1, 1, 1, 0, 1, 1, 1],
        sozu: [0, 1, 1, 1, 3, 0, 0, 0, 0],
        jihai: [0, 0, 0, 0, 0, 0, 0],
      },
      completed: false,
    });
  });
});

describe("getAka", () => {
  test("1", () => {
    const result = getAka(["1m", "1m", "1m", "2m", "3m", "4m", "0m", "5m", "6m", "7m", "8m", "9m", "9m", "9m"]);
    expect(result).toEqual(["5m"]);
  });

  test("2", () => {
    const result = getAka(["0m", "0m", "0m", "0m", "0p", "0p", "0p", "0s", "0s"]);
    expect(result).toEqual(["5m", "5m", "5m", "5m", "5p", "5p", "5p", "5s", "5s"]);
  });

  test("3", () => {
    const result = getAka(["2z", "2z", "2z"]);
    expect(result).toEqual([]);
  });
});

describe("replaceAka", () => {
  test("1", () => {
    const result = replaceAka(
      {
        elements: [
          { type: "ankan", hai: ["2s", "2s", "2s", "2s"], furo: false },
          { type: "minkan", hai: ["1s", "1s", "1s", "1s"], furo: true },
          { type: "minkan", hai: ["8s", "8s", "8s", "8s"], furo: true },
          { type: "toitsu", hai: ["7z", "7z"], furo: false },
          { type: "shuntsu", hai: ["4s", "5s", "6s"], furo: false },
        ],
      },
      ["5s"],
    );
    expect(result).toEqual({
      elements: [
        { type: "ankan", hai: ["2s", "2s", "2s", "2s"], furo: false },
        { type: "minkan", hai: ["1s", "1s", "1s", "1s"], furo: true },
        { type: "minkan", hai: ["8s", "8s", "8s", "8s"], furo: true },
        { type: "toitsu", hai: ["7z", "7z"], furo: false },
        { type: "shuntsu", hai: ["4s", "0s", "6s"], furo: false },
      ],
    });
  });

  test("2", () => {
    const result = replaceAka(
      {
        elements: [
          { type: "toitsu", hai: ["5m", "5m"], furo: false },
          { type: "shuntsu", hai: ["5m", "6m", "7m"], furo: false },
        ],
      },
      ["5m"],
    );
    expect(result).toEqual({
      elements: [
        { type: "toitsu", hai: ["0m", "5m"], furo: false },
        { type: "shuntsu", hai: ["5m", "6m", "7m"], furo: false },
      ],
    });
  });
});
