import { getKotsuCombination, getShuntsu } from "../../mahjong/agari/mentsu";

describe("getKotsuCombination", () => {
  test("1", () => {
    const result = getKotsuCombination(
      {
        elements: [
          {
            type: "toitsu",
            hai: ["8m", "8m"],
            furo: false,
          },
        ],
        hai: {
          manzu: [0, 1, 1, 1, 4, 1, 1, 0, 0],
          pinzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          sozu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          jihai: [0, 0, 0, 0, 0, 0, 0],
        },
        completed: false,
      },
      "8m",
      true,
    );
    expect(result).toEqual([
      {
        elements: [
          {
            type: "toitsu",
            hai: ["8m", "8m"],
            furo: false,
          },
        ],
        hai: {
          manzu: [0, 1, 1, 1, 4, 1, 1, 0, 0],
          pinzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          sozu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          jihai: [0, 0, 0, 0, 0, 0, 0],
        },
        completed: false,
      },
      {
        elements: [
          {
            type: "toitsu",
            hai: ["8m", "8m"],
            furo: false,
          },
          {
            type: "anko",
            hai: ["5m", "5m", "5m"],
            furo: false,
          },
        ],
        hai: {
          manzu: [0, 1, 1, 1, 1, 1, 1, 0, 0],
          pinzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          sozu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          jihai: [0, 0, 0, 0, 0, 0, 0],
        },
        completed: false,
      },
    ]);
  });

  test("2", () => {
    const result = getKotsuCombination(
      {
        elements: [
          {
            type: "toitsu",
            hai: ["8m", "8m"],
            furo: false,
          },
        ],
        hai: {
          manzu: [0, 1, 1, 1, 3, 1, 1, 1, 0],
          pinzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          sozu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          jihai: [0, 0, 0, 0, 0, 0, 0],
        },
        completed: false,
      },
      "5m",
      false,
    );
    expect(result).toEqual([
      {
        elements: [
          {
            type: "toitsu",
            hai: ["8m", "8m"],
            furo: false,
          },
        ],
        hai: {
          manzu: [0, 1, 1, 1, 3, 1, 1, 1, 0],
          pinzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          sozu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          jihai: [0, 0, 0, 0, 0, 0, 0],
        },
        completed: false,
      },
      {
        elements: [
          {
            type: "toitsu",
            hai: ["8m", "8m"],
            furo: false,
          },
          {
            type: "minko",
            hai: ["5m", "5m", "5m"],
            furo: false,
          },
        ],
        hai: {
          manzu: [0, 1, 1, 1, 0, 1, 1, 1, 0],
          pinzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          sozu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          jihai: [0, 0, 0, 0, 0, 0, 0],
        },
        completed: false,
      },
    ]);
  });

  test("3", () => {
    const result = getKotsuCombination(
      {
        elements: [
          {
            type: "toitsu",
            hai: ["8m", "8m"],
            furo: false,
          },
        ],
        hai: {
          manzu: [0, 1, 1, 1, 4, 1, 1, 0, 0],
          pinzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          sozu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          jihai: [0, 0, 0, 0, 0, 0, 0],
        },
        completed: false,
      },
      "5m",
      false,
    );
    expect(result).toEqual([
      {
        elements: [
          {
            type: "toitsu",
            hai: ["8m", "8m"],
            furo: false,
          },
        ],
        hai: {
          manzu: [0, 1, 1, 1, 4, 1, 1, 0, 0],
          pinzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          sozu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          jihai: [0, 0, 0, 0, 0, 0, 0],
        },
        completed: false,
      },
      {
        elements: [
          {
            type: "toitsu",
            hai: ["8m", "8m"],
            furo: false,
          },
          {
            type: "anko",
            hai: ["5m", "5m", "5m"],
            furo: false,
          },
        ],
        hai: {
          manzu: [0, 1, 1, 1, 1, 1, 1, 0, 0],
          pinzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          sozu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          jihai: [0, 0, 0, 0, 0, 0, 0],
        },
        completed: false,
      },
    ]);
  });

  test("4", () => {
    const result = getKotsuCombination(
      {
        elements: [
          {
            type: "toitsu",
            hai: ["5z", "5z"],
            furo: false,
          },
        ],
        hai: {
          manzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          pinzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          sozu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          jihai: [3, 3, 3, 3, 0, 0, 0],
        },
        completed: false,
      },
      "1z",
      true,
    );
    expect(result).toEqual([
      {
        elements: [
          {
            type: "toitsu",
            hai: ["5z", "5z"],
            furo: false,
          },
        ],
        hai: {
          manzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          pinzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          sozu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          jihai: [3, 3, 3, 3, 0, 0, 0],
        },
        completed: false,
      },
      {
        elements: [
          {
            type: "toitsu",
            hai: ["5z", "5z"],
            furo: false,
          },
          {
            type: "anko",
            hai: ["1z", "1z", "1z"],
            furo: false,
          },
        ],
        hai: {
          manzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          pinzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          sozu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          jihai: [0, 3, 3, 3, 0, 0, 0],
        },
        completed: false,
      },
      {
        elements: [
          {
            type: "toitsu",
            hai: ["5z", "5z"],
            furo: false,
          },
          {
            type: "anko",
            hai: ["2z", "2z", "2z"],
            furo: false,
          },
        ],
        hai: {
          manzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          pinzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          sozu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          jihai: [3, 0, 3, 3, 0, 0, 0],
        },
        completed: false,
      },
      {
        elements: [
          {
            type: "toitsu",
            hai: ["5z", "5z"],
            furo: false,
          },
          {
            type: "anko",
            hai: ["1z", "1z", "1z"],
            furo: false,
          },
          {
            type: "anko",
            hai: ["2z", "2z", "2z"],
            furo: false,
          },
        ],
        hai: {
          manzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          pinzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          sozu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          jihai: [0, 0, 3, 3, 0, 0, 0],
        },
        completed: false,
      },
      {
        elements: [
          {
            type: "toitsu",
            hai: ["5z", "5z"],
            furo: false,
          },
          {
            type: "anko",
            hai: ["3z", "3z", "3z"],
            furo: false,
          },
        ],
        hai: {
          manzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          pinzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          sozu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          jihai: [3, 3, 0, 3, 0, 0, 0],
        },
        completed: false,
      },
      {
        elements: [
          {
            type: "toitsu",
            hai: ["5z", "5z"],
            furo: false,
          },
          {
            type: "anko",
            hai: ["1z", "1z", "1z"],
            furo: false,
          },
          {
            type: "anko",
            hai: ["3z", "3z", "3z"],
            furo: false,
          },
        ],
        hai: {
          manzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          pinzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          sozu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          jihai: [0, 3, 0, 3, 0, 0, 0],
        },
        completed: false,
      },
      {
        elements: [
          {
            type: "toitsu",
            hai: ["5z", "5z"],
            furo: false,
          },
          {
            type: "anko",
            hai: ["2z", "2z", "2z"],
            furo: false,
          },
          {
            type: "anko",
            hai: ["3z", "3z", "3z"],
            furo: false,
          },
        ],
        hai: {
          manzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          pinzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          sozu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          jihai: [3, 0, 0, 3, 0, 0, 0],
        },
        completed: false,
      },
      {
        elements: [
          {
            type: "toitsu",
            hai: ["5z", "5z"],
            furo: false,
          },
          {
            type: "anko",
            hai: ["1z", "1z", "1z"],
            furo: false,
          },
          {
            type: "anko",
            hai: ["2z", "2z", "2z"],
            furo: false,
          },
          {
            type: "anko",
            hai: ["3z", "3z", "3z"],
            furo: false,
          },
        ],
        hai: {
          manzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          pinzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          sozu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          jihai: [0, 0, 0, 3, 0, 0, 0],
        },
        completed: false,
      },
      {
        elements: [
          {
            type: "toitsu",
            hai: ["5z", "5z"],
            furo: false,
          },
          {
            type: "anko",
            hai: ["4z", "4z", "4z"],
            furo: false,
          },
        ],
        hai: {
          manzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          pinzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          sozu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          jihai: [3, 3, 3, 0, 0, 0, 0],
        },
        completed: false,
      },
      {
        elements: [
          {
            type: "toitsu",
            hai: ["5z", "5z"],
            furo: false,
          },
          {
            type: "anko",
            hai: ["1z", "1z", "1z"],
            furo: false,
          },
          {
            type: "anko",
            hai: ["4z", "4z", "4z"],
            furo: false,
          },
        ],
        hai: {
          manzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          pinzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          sozu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          jihai: [0, 3, 3, 0, 0, 0, 0],
        },
        completed: false,
      },
      {
        elements: [
          {
            type: "toitsu",
            hai: ["5z", "5z"],
            furo: false,
          },
          {
            type: "anko",
            hai: ["2z", "2z", "2z"],
            furo: false,
          },
          {
            type: "anko",
            hai: ["4z", "4z", "4z"],
            furo: false,
          },
        ],
        hai: {
          manzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          pinzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          sozu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          jihai: [3, 0, 3, 0, 0, 0, 0],
        },
        completed: false,
      },
      {
        elements: [
          {
            type: "toitsu",
            hai: ["5z", "5z"],
            furo: false,
          },
          {
            type: "anko",
            hai: ["1z", "1z", "1z"],
            furo: false,
          },
          {
            type: "anko",
            hai: ["2z", "2z", "2z"],
            furo: false,
          },
          {
            type: "anko",
            hai: ["4z", "4z", "4z"],
            furo: false,
          },
        ],
        hai: {
          manzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          pinzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          sozu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          jihai: [0, 0, 3, 0, 0, 0, 0],
        },
        completed: false,
      },
      {
        elements: [
          {
            type: "toitsu",
            hai: ["5z", "5z"],
            furo: false,
          },
          {
            type: "anko",
            hai: ["3z", "3z", "3z"],
            furo: false,
          },
          {
            type: "anko",
            hai: ["4z", "4z", "4z"],
            furo: false,
          },
        ],
        hai: {
          manzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          pinzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          sozu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          jihai: [3, 3, 0, 0, 0, 0, 0],
        },
        completed: false,
      },
      {
        elements: [
          {
            type: "toitsu",
            hai: ["5z", "5z"],
            furo: false,
          },
          {
            type: "anko",
            hai: ["1z", "1z", "1z"],
            furo: false,
          },
          {
            type: "anko",
            hai: ["3z", "3z", "3z"],
            furo: false,
          },
          {
            type: "anko",
            hai: ["4z", "4z", "4z"],
            furo: false,
          },
        ],
        hai: {
          manzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          pinzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          sozu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          jihai: [0, 3, 0, 0, 0, 0, 0],
        },
        completed: false,
      },
      {
        elements: [
          {
            type: "toitsu",
            hai: ["5z", "5z"],
            furo: false,
          },
          {
            type: "anko",
            hai: ["2z", "2z", "2z"],
            furo: false,
          },
          {
            type: "anko",
            hai: ["3z", "3z", "3z"],
            furo: false,
          },
          {
            type: "anko",
            hai: ["4z", "4z", "4z"],
            furo: false,
          },
        ],
        hai: {
          manzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          pinzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          sozu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          jihai: [3, 0, 0, 0, 0, 0, 0],
        },
        completed: false,
      },
      {
        elements: [
          {
            type: "toitsu",
            hai: ["5z", "5z"],
            furo: false,
          },
          {
            type: "anko",
            hai: ["1z", "1z", "1z"],
            furo: false,
          },
          {
            type: "anko",
            hai: ["2z", "2z", "2z"],
            furo: false,
          },
          {
            type: "anko",
            hai: ["3z", "3z", "3z"],
            furo: false,
          },
          {
            type: "anko",
            hai: ["4z", "4z", "4z"],
            furo: false,
          },
        ],
        hai: {
          manzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          pinzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          sozu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
          jihai: [0, 0, 0, 0, 0, 0, 0],
        },
        completed: true,
      },
    ]);
  });
});

describe("getShuntsu", () => {
  test("1", () => {
    const result = getShuntsu({
      elements: [
        {
          type: "toitsu",
          hai: ["8m", "8m"],
          furo: false,
        },
        {
          type: "anko",
          hai: ["5m", "5m", "5m"],
          furo: false,
        },
      ],
      hai: {
        manzu: [0, 1, 1, 1, 1, 1, 1, 0, 0],
        pinzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        sozu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        jihai: [0, 0, 0, 0, 0, 0, 0],
      },
      completed: false,
    });
    expect(result).toEqual({
      elements: [
        {
          type: "toitsu",
          hai: ["8m", "8m"],
          furo: false,
        },
        {
          type: "anko",
          hai: ["5m", "5m", "5m"],
          furo: false,
        },
        {
          type: "shuntsu",
          hai: ["2m", "3m", "4m"],
          furo: false,
        },
        {
          type: "shuntsu",
          hai: ["5m", "6m", "7m"],
          furo: false,
        },
      ],
      hai: {
        manzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        pinzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        sozu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        jihai: [0, 0, 0, 0, 0, 0, 0],
      },
      completed: true,
    });
  });

  test("2", () => {
    const result = getShuntsu({
      elements: [
        {
          type: "toitsu",
          hai: ["8p", "8p"],
          furo: false,
        },
      ],
      hai: {
        manzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        pinzu: [0, 1, 2, 2, 3, 2, 2, 0, 0],
        sozu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        jihai: [0, 0, 0, 0, 0, 0, 0],
      },
      completed: false,
    });
    expect(result).toEqual({
      elements: [
        {
          type: "toitsu",
          hai: ["8p", "8p"],
          furo: false,
        },
        {
          type: "shuntsu",
          hai: ["2p", "3p", "4p"],
          furo: false,
        },
        {
          type: "shuntsu",
          hai: ["3p", "4p", "5p"],
          furo: false,
        },
        {
          type: "shuntsu",
          hai: ["5p", "6p", "7p"],
          furo: false,
        },
        {
          type: "shuntsu",
          hai: ["5p", "6p", "7p"],
          furo: false,
        },
      ],
      hai: {
        manzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        pinzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        sozu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        jihai: [0, 0, 0, 0, 0, 0, 0],
      },
      completed: true,
    });
  });

  test("3", () => {
    const result = getShuntsu({
      elements: [],
      hai: {
        manzu: [0, 1, 1, 0, 0, 0, 0, 0, 0],
        pinzu: [1, 0, 0, 0, 0, 0, 0, 1, 1],
        sozu: [0, 0, 1, 0, 1, 0, 1, 0, 0],
        jihai: [0, 1, 1, 1, 0, 0, 3],
      },
      completed: false,
    });
    expect(result).toEqual({
      elements: [],
      hai: {
        manzu: [0, 1, 1, 0, 0, 0, 0, 0, 0],
        pinzu: [1, 0, 0, 0, 0, 0, 0, 1, 1],
        sozu: [0, 0, 1, 0, 1, 0, 1, 0, 0],
        jihai: [0, 1, 1, 1, 0, 0, 3],
      },
      completed: false,
    });
  });
});
