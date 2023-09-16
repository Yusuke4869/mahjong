import { furoValidation, inputValidation } from "../../mahjong/agari/validation";

describe("inputValidation", () => {
  test("1", () => {
    const result = inputValidation({
      hai: ["1m", "2m", "3m", "6p", "7p", "8p", "8p", "8p", "3s", "4s", "4s", "5s", "5s", "6s"],
      furo: [],
    });
    expect(result).toBe(true);
  });

  test("2", () => {
    const result = inputValidation({
      hai: ["4m", "5m", "5m", "5m", "6m", "5p", "0p", "5p", "0s", "6s", "7s"],
      furo: [
        {
          type: "chi",
          hai: ["4m", "0m", "6m"],
        },
      ],
    });
    expect(result).toBe(true);
  });

  test("3", () => {
    const result = inputValidation({
      hai: ["6m", "6m", "7z", "7z", "7z"],
      furo: [
        {
          type: "kakan",
          hai: ["8p", "8p", "8p", "8p"],
        },
        {
          type: "pon",
          hai: ["6z", "6z", "6z"],
        },
        {
          type: "pon",
          hai: ["4z", "4z", "4z"],
        },
      ],
    });
    expect(result).toBe(true);
  });

  test("fail 1", () => {
    const result = inputValidation({
      hai: ["1m", "2m", "3m", "6p", "7p", "8p", "8p", "8p", "3s", "4s", "4s", "5s", "5s"],
      furo: [],
    });
    expect(result).toBe(false);
  });

  test("fail 2", () => {
    const result = inputValidation({
      hai: ["1m", "2m", "3m", "6p", "7p", "8p", "8p", "8p", "8p", "8p", "8p", "3s", "4s", "5s"],
      furo: [],
    });
    expect(result).toBe(false);
  });

  test("fail 3", () => {
    const result = inputValidation({
      hai: ["1m", "2m", "3m", "6p", "7p", "8p", "8p", "8p", "3s", "4s", "5s"],
      furo: [
        {
          type: "daiminkan",
          hai: ["0m", "5m", "5m", "5m", "5m"],
        },
      ],
    });
    expect(result).toBe(false);
  });
});

describe("furoValidation", () => {
  test("1m/2m/3m", () => {
    const result = furoValidation({ type: "chi", hai: ["1m", "2m", "3m"] });
    expect(result).toBe(true);
  });

  test("4s/6s/5s", () => {
    const result = furoValidation({ type: "chi", hai: ["4s", "6s", "5s"] });
    expect(result).toBe(true);
  });

  test("8p/9p/1p", () => {
    const result = furoValidation({ type: "chi", hai: ["8p", "9p", "1p"] });
    expect(result).toBe(false);
  });

  test("2z/3z/4z", () => {
    const result = furoValidation({ type: "chi", hai: ["2z", "3z", "4z"] });
    expect(result).toBe(false);
  });

  test("pon 4s/5s/6s", () => {
    const result = furoValidation({ type: "pon", hai: ["4s", "5s", "6s"] });
    expect(result).toBe(false);
  });

  test("3p/3p/3p", () => {
    const result = furoValidation({ type: "pon", hai: ["3p", "3p", "3p"] });
    expect(result).toBe(true);
  });

  test("0m/0p/0s", () => {
    const result = furoValidation({ type: "pon", hai: ["0m", "0p", "0s"] });
    expect(result).toBe(false);
  });

  test("pon 1p/2p/3p", () => {
    const result = furoValidation({ type: "pon", hai: ["1p", "2p", "3p"] });
    expect(result).toBe(false);
  });

  test("5s/0s/5s/5s", () => {
    const result = furoValidation({ type: "daiminkan", hai: ["5s", "0s", "5s", "5s"] });
    expect(result).toBe(true);
  });

  test("3p/3p/3p/3p", () => {
    const result = furoValidation({ type: "ankan", hai: ["3p", "3p", "3p", "3p"] });
    expect(result).toBe(true);
  });

  test("1z/1z/1z/1z", () => {
    const result = furoValidation({ type: "kakan", hai: ["1z", "1z", "1z", "1z"] });
    expect(result).toBe(true);
  });

  test("pon 5s/0s/5s/5s", () => {
    const result = furoValidation({ type: "pon", hai: ["5s", "0s", "5s", "5s"] });
    expect(result).toBe(false);
  });
});
