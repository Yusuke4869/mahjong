import { agariElementsRemoveAka, doraHyo2Dora } from "../../mahjong/yaku/convert";

describe("agariElementsRemoveAka", () => {
  test("1", () => {
    const result = agariElementsRemoveAka([
      { type: "toitsu", hai: ["0m", "5m"], furo: false },
      { type: "shuntsu", hai: ["2m", "3m", "4m"], furo: false },
      { type: "shuntsu", hai: ["2m", "3m", "4m"], furo: false },
      { type: "shuntsu", hai: ["6p", "7p", "8p"], furo: false },
      { type: "shuntsu", hai: ["0s", "6s", "7s"], furo: true },
    ]);
    expect(result).toEqual([
      { type: "toitsu", hai: ["5m", "5m"], furo: false },
      { type: "shuntsu", hai: ["2m", "3m", "4m"], furo: false },
      { type: "shuntsu", hai: ["2m", "3m", "4m"], furo: false },
      { type: "shuntsu", hai: ["6p", "7p", "8p"], furo: false },
      { type: "shuntsu", hai: ["5s", "6s", "7s"], furo: true },
    ]);
  });

  test("2", () => {
    const result = agariElementsRemoveAka([
      { type: "toitsu", hai: ["2z", "2z"], furo: false },
      { type: "anko", hai: ["0m", "5m", "5m"], furo: false },
      { type: "anko", hai: ["0p", "5p", "5p"], furo: false },
      { type: "anko", hai: ["0s", "5s", "5s"], furo: false },
      { type: "anko", hai: ["5z", "5z", "5z"], furo: false },
    ]);
    expect(result).toEqual([
      { type: "toitsu", hai: ["2z", "2z"], furo: false },
      { type: "anko", hai: ["5m", "5m", "5m"], furo: false },
      { type: "anko", hai: ["5p", "5p", "5p"], furo: false },
      { type: "anko", hai: ["5s", "5s", "5s"], furo: false },
      { type: "anko", hai: ["5z", "5z", "5z"], furo: false },
    ]);
  });
});

describe("doraHyo2Dora", () => {
  test("1m", () => {
    const result = doraHyo2Dora("1m");
    expect(result).toEqual("2m");
  });

  test("2m", () => {
    const result = doraHyo2Dora("2m");
    expect(result).toEqual("3m");
  });

  test("3m", () => {
    const result = doraHyo2Dora("3m");
    expect(result).toEqual("4m");
  });

  test("4p", () => {
    const result = doraHyo2Dora("4p");
    expect(result).toEqual("5p");
  });

  test("5p", () => {
    const result = doraHyo2Dora("5p");
    expect(result).toEqual("6p");
  });

  test("0p", () => {
    const result = doraHyo2Dora("0p");
    expect(result).toEqual("6p");
  });

  test("6p", () => {
    const result = doraHyo2Dora("6p");
    expect(result).toEqual("7p");
  });

  test("7s", () => {
    const result = doraHyo2Dora("7s");
    expect(result).toEqual("8s");
  });

  test("8s", () => {
    const result = doraHyo2Dora("8s");
    expect(result).toEqual("9s");
  });

  test("9s", () => {
    const result = doraHyo2Dora("9s");
    expect(result).toEqual("1s");
  });

  test("1z", () => {
    const result = doraHyo2Dora("1z");
    expect(result).toEqual("2z");
  });

  test("2z", () => {
    const result = doraHyo2Dora("2z");
    expect(result).toEqual("3z");
  });

  test("3z", () => {
    const result = doraHyo2Dora("3z");
    expect(result).toEqual("4z");
  });

  test("4z", () => {
    const result = doraHyo2Dora("4z");
    expect(result).toEqual("1z");
  });

  test("5z", () => {
    const result = doraHyo2Dora("5z");
    expect(result).toEqual("6z");
  });

  test("6z", () => {
    const result = doraHyo2Dora("6z");
    expect(result).toEqual("7z");
  });

  test("7z", () => {
    const result = doraHyo2Dora("7z");
    expect(result).toEqual("5z");
  });
});
