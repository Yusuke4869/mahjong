import { getHaiArrayObject, isHaiArrayObjectEmpty } from "../../mahjong/hai/array";

describe("getHaiArrayObject", () => {
  test("1", () => {
    const result = getHaiArrayObject([
      "1m",
      "2m",
      "3m",
      "6m",
      "7m",
      "8m",
      "1p",
      "1p",
      "4p",
      "5p",
      "6p",
      "7z",
      "7z",
      "7z",
    ]);
    expect(result).toEqual({
      manzu: [1, 1, 1, 0, 0, 1, 1, 1, 0],
      pinzu: [2, 0, 0, 1, 1, 1, 0, 0, 0],
      sozu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      jihai: [0, 0, 0, 0, 0, 0, 3],
    });
  });

  test("2", () => {
    const result = getHaiArrayObject([
      "3p",
      "4p",
      "5p",
      "6p",
      "6p",
      "7p",
      "8p",
      "9p",
      "2s",
      "3s",
      "4s",
      "0s",
      "5s",
      "5s",
    ]);
    expect(result).toEqual({
      manzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      pinzu: [0, 0, 1, 1, 1, 2, 1, 1, 1],
      sozu: [0, 1, 1, 1, 3, 0, 0, 0, 0],
      jihai: [0, 0, 0, 0, 0, 0, 0],
    });
  });

  test("3", () => {
    const result = getHaiArrayObject([
      "7m",
      "8m",
      "9m",
      "2p",
      "3p",
      "4p",
      "0p",
      "5p",
      "5p",
      "7p",
      "7p",
      "3s",
      "4s",
      "5s",
    ]);
    expect(result).toEqual({
      manzu: [0, 0, 0, 0, 0, 0, 1, 1, 1],
      pinzu: [0, 1, 1, 1, 3, 0, 2, 0, 0],
      sozu: [0, 0, 1, 1, 1, 0, 0, 0, 0],
      jihai: [0, 0, 0, 0, 0, 0, 0],
    });
  });
});

describe("isHaiArrayObjectEmpty", () => {
  test("empty", () => {
    const result = isHaiArrayObjectEmpty({
      manzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      pinzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      sozu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      jihai: [0, 0, 0, 0, 0, 0, 0],
    });
    expect(result).toBe(true);
  });

  test("not empty 1", () => {
    const result = isHaiArrayObjectEmpty({
      manzu: [1, 1, 1, 0, 0, 1, 1, 1, 0],
      pinzu: [2, 0, 0, 1, 1, 1, 0, 0, 0],
      sozu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      jihai: [0, 0, 0, 0, 0, 0, 3],
    });
    expect(result).toBe(false);
  });

  test("not empty 2", () => {
    const result = isHaiArrayObjectEmpty({
      manzu: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      pinzu: [0, 0, 1, 1, 1, 2, 1, 1, 1],
      sozu: [0, 1, 1, 1, 3, 0, 0, 0, 0],
      jihai: [0, 0, 0, 0, 0, 0, 0],
    });
    expect(result).toBe(false);
  });

  test("not empty 3", () => {
    const result = isHaiArrayObjectEmpty({
      manzu: [0, 0, 0, 0, 0, 0, 1, 1, 1],
      pinzu: [0, 1, 1, 1, 3, 0, 2, 0, 0],
      sozu: [0, 0, 1, 1, 1, 0, 0, 0, 0],
      jihai: [0, 0, 0, 0, 0, 0, 0],
    });
    expect(result).toBe(false);
  });
});
