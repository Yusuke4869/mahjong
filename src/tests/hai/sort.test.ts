import { sortHai } from "../../mahjong/hai/sort";

describe("sortHai", () => {
  test("1", () => {
    const result = sortHai(["1p", "4p", "7z", "3m", "6p", "7z", "7m", "2m", "8m", "6m", "7z", "1p", "1m", "5p"]);
    expect(result).toEqual(["1m", "2m", "3m", "6m", "7m", "8m", "1p", "1p", "4p", "5p", "6p", "7z", "7z", "7z"]);
  });

  test("2", () => {
    const result = sortHai(["5s", "4p", "5p", "3p", "3s", "6p", "0s", "8p", "2s", "4s", "7p", "6p", "9p", "5s"]);
    expect(result).toEqual(["3p", "4p", "5p", "6p", "6p", "7p", "8p", "9p", "2s", "3s", "4s", "0s", "5s", "5s"]);
  });

  test("3", () => {
    const result = sortHai(["9m", "5p", "4p", "7p", "3s", "5s", "4s", "7m", "3p", "8m", "5p", "7p", "2p", "0p"]);
    expect(result).toEqual(["7m", "8m", "9m", "2p", "3p", "4p", "0p", "5p", "5p", "7p", "7p", "3s", "4s", "5s"]);
  });
});
