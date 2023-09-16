import { num2Kanji, pay2Score, roundUp10 } from "../../mahjong/score/convert";

describe("num2Kanji", () => {
  test("2", () => {
    expect(num2Kanji(2)).toBe("二");
  });

  test("10", () => {
    expect(num2Kanji(10)).toBe("一〇");
  });
});

describe("roundUp10", () => {
  test("240", () => {
    expect(roundUp10(240)).toBe(300);
  });

  test("1920", () => {
    expect(roundUp10(1920)).toBe(2000);
  });
});

describe("pay2Score", () => {
  test("300/500", () => {
    const result = pay2Score({ oya: 480, ko: 240 }, true, false);
    expect(result).toBe(1100);
  });

  test("400/700", () => {
    const result = pay2Score({ oya: 640, ko: 320 }, true, false);
    expect(result).toBe(1500);
  });

  test("1000", () => {
    const result = pay2Score({ oya: 480, ko: 240 }, false, false);
    expect(result).toBe(1000);
  });

  test("2000/4000", () => {
    const result = pay2Score({ oya: 4000, ko: 2000 }, true, false);
    expect(result).toBe(8000);
  });

  test("8000", () => {
    const result = pay2Score({ oya: 4000, ko: 2000 }, false, false);
    expect(result).toBe(8000);
  });

  test("満貫 4000オール", () => {
    const result = pay2Score({ oya: null, ko: 4000 }, true, false);
    expect(result).toBe(12000);
  });

  test("満貫 12000", () => {
    const result = pay2Score({ oya: null, ko: 4000 }, false, false);
    expect(result).toBe(12000);
  });

  test("300/500 三麻", () => {
    const result = pay2Score({ oya: 480, ko: 240 }, true, true);
    expect(result).toBe(800);
  });

  test("1000 三麻", () => {
    const result = pay2Score({ oya: 480, ko: 240 }, false, true);
    expect(result).toBe(1000);
  });

  test("2000/4000 三麻", () => {
    const result = pay2Score({ oya: 4000, ko: 2000 }, true, true);
    expect(result).toBe(6000);
  });

  test("8000 三麻", () => {
    const result = pay2Score({ oya: 4000, ko: 2000 }, false, true);
    expect(result).toBe(8000);
  });

  test("満貫 4000オール 三麻", () => {
    const result = pay2Score({ oya: null, ko: 4000 }, true, true);
    expect(result).toBe(8000);
  });

  test("満貫 12000 三麻", () => {
    const result = pay2Score({ oya: null, ko: 4000 }, false, true);
    expect(result).toBe(12000);
  });
});
