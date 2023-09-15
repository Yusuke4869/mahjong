import { aka2Normal, getHai, getHaiNormalNum, getHaiSuffix, normal2Aka } from "../../mahjong/hai/convert";

describe("getHaiNormalNum", () => {
  test("1m", () => {
    const result = getHaiNormalNum("1m");
    expect(result).toBe(1);
  });

  test("9p", () => {
    const result = getHaiNormalNum("9p");
    expect(result).toBe(9);
  });

  test("0s", () => {
    const result = getHaiNormalNum("0s");
    expect(result).toBe(5);
  });

  test("5z", () => {
    const result = getHaiNormalNum("5z");
    expect(result).toBe(5);
  });
});

describe("getHaiSuffix", () => {
  test("1m", () => {
    const result = getHaiSuffix("1m");
    expect(result).toBe("m");
  });

  test("9p", () => {
    const result = getHaiSuffix("9p");
    expect(result).toBe("p");
  });

  test("0s", () => {
    const result = getHaiSuffix("0s");
    expect(result).toBe("s");
  });

  test("5z", () => {
    const result = getHaiSuffix("5z");
    expect(result).toBe("z");
  });
});

describe("getHai", () => {
  test("1m", () => {
    const result = getHai(1, "m");
    expect(result).toBe("1m");
  });

  test("9p", () => {
    const result = getHai(9, "p");
    expect(result).toBe("9p");
  });

  test("0s", () => {
    const result = getHai(0, "s");
    expect(result).toBe("0s");
  });

  test("5z", () => {
    const result = getHai(5, "z");
    expect(result).toBe("5z");
  });

  test("8z", () => {
    expect(() => getHai(8, "z")).toThrowError();
  });
});

describe("aka2Normal", () => {
  test("0m", () => {
    const result = aka2Normal("0m");
    expect(result).toBe("5m");
  });

  test("5p", () => {
    const result = aka2Normal("5p");
    expect(result).toBe("5p");
  });

  test("7s", () => {
    const result = aka2Normal("7s");
    expect(result).toBe("7s");
  });

  test("5z", () => {
    const result = aka2Normal("5z");
    expect(result).toBe("5z");
  });
});

describe("normal2Aka", () => {
  test("5m", () => {
    const result = normal2Aka("5m");
    expect(result).toBe("0m");
  });

  test("5p", () => {
    const result = normal2Aka("5p");
    expect(result).toBe("0p");
  });

  test("7s", () => {
    const result = normal2Aka("7s");
    expect(result).toBe("7s");
  });

  test("5z", () => {
    const result = normal2Aka("5z");
    expect(result).toBe("5z");
  });
});
