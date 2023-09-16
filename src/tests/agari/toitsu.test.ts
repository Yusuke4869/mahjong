import { getToitsu } from "../../mahjong/agari/toitsu";

describe("getToitsu", () => {
  test("1", () => {
    const result = getToitsu({
      elements: [],
      hai: {
        manzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        pinzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        sozu: [0, 2, 2, 2, 2, 2, 2, 2, 0],
        jihai: [0, 0, 0, 0, 0, 0, 0],
      },
      completed: false,
    });
    expect(result).toEqual({
      elements: [
        { type: "toitsu", hai: ["2s", "2s"], furo: false },
        { type: "toitsu", hai: ["3s", "3s"], furo: false },
        { type: "toitsu", hai: ["4s", "4s"], furo: false },
        { type: "toitsu", hai: ["5s", "5s"], furo: false },
        { type: "toitsu", hai: ["6s", "6s"], furo: false },
        { type: "toitsu", hai: ["7s", "7s"], furo: false },
        { type: "toitsu", hai: ["8s", "8s"], furo: false },
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
    const result = getToitsu({
      elements: [],
      hai: {
        manzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        pinzu: [0, 0, 0, 2, 4, 2, 0, 0, 0],
        sozu: [1, 1, 1, 0, 0, 0, 0, 0, 0],
        jihai: [3, 0, 0, 0, 0, 0, 0],
      },
      completed: false,
    });
    expect(result).toEqual({
      elements: [
        { type: "toitsu", hai: ["4p", "4p"], furo: false },
        { type: "toitsu", hai: ["5p", "5p"], furo: false },
        { type: "toitsu", hai: ["6p", "6p"], furo: false },
        { type: "toitsu", hai: ["1z", "1z"], furo: false },
      ],
      hai: {
        manzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        pinzu: [0, 0, 0, 0, 2, 0, 0, 0, 0],
        sozu: [1, 1, 1, 0, 0, 0, 0, 0, 0],
        jihai: [1, 0, 0, 0, 0, 0, 0],
      },
      completed: false,
    });
  });
});
