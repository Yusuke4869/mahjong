import { fu } from "../../mahjong/yaku/fu";

describe("fu", () => {
  test("七対子", () => {
    const result = fu(
      {
        hai: {
          hai: [],
          furo: [],
        },
        agari: {
          elements: [
            { type: "toitsu", hai: ["1m", "1m"], furo: false },
            { type: "toitsu", hai: ["2m", "2m"], furo: false },
            { type: "toitsu", hai: ["3m", "3m"], furo: false },
            { type: "toitsu", hai: ["4m", "4m"], furo: false },
            { type: "toitsu", hai: ["5m", "5m"], furo: false },
            { type: "toitsu", hai: ["6m", "6m"], furo: false },
            { type: "toitsu", hai: ["7m", "7m"], furo: false },
          ],
        },
        agariHai: "7m",
        tsumo: true,
        doubleYakuman: true,
      },
      "1z",
      "1z",
    );
    expect(result).toEqual(25);
  });

  test("平和ツモ", () => {
    const result = fu(
      {
        hai: {
          hai: [],
          furo: [],
        },
        agari: {
          elements: [
            { type: "toitsu", hai: ["1s", "1s"], furo: false },
            { type: "shuntsu", hai: ["2m", "3m", "4m"], furo: false },
            { type: "shuntsu", hai: ["5p", "6p", "7p"], furo: false },
            { type: "shuntsu", hai: ["2s", "3s", "4s"], furo: false },
            { type: "shuntsu", hai: ["6s", "7s", "8s"], furo: false },
          ],
        },
        agariHai: "8s",
        tsumo: true,
        doubleYakuman: true,
      },
      "1z",
      "1z",
    );
    expect(result).toEqual(20);
  });

  test("平和ロン", () => {
    const result = fu(
      {
        hai: {
          hai: [],
          furo: [],
        },
        agari: {
          elements: [
            { type: "toitsu", hai: ["1s", "1s"], furo: false },
            { type: "shuntsu", hai: ["2m", "3m", "4m"], furo: false },
            { type: "shuntsu", hai: ["5p", "6p", "7p"], furo: false },
            { type: "shuntsu", hai: ["2s", "3s", "4s"], furo: false },
            { type: "shuntsu", hai: ["6s", "7s", "8s"], furo: false },
          ],
        },
        agariHai: "8s",
        tsumo: false,
        doubleYakuman: true,
      },
      "1z",
      "1z",
    );
    expect(result).toEqual(30);
  });

  test("喰い平和", () => {
    const result = fu(
      {
        hai: {
          hai: [],
          furo: [],
        },
        agari: {
          elements: [
            { type: "toitsu", hai: ["1s", "1s"], furo: false },
            { type: "shuntsu", hai: ["1m", "2m", "3m"], furo: true },
            { type: "shuntsu", hai: ["1p", "2p", "3p"], furo: false },
            { type: "shuntsu", hai: ["1s", "2s", "3s"], furo: true },
            { type: "shuntsu", hai: ["6s", "7s", "8s"], furo: false },
          ],
        },
        agariHai: "8s",
        tsumo: true,
        doubleYakuman: true,
      },
      "1z",
      "1z",
    );
    expect(result).toEqual(30);
  });

  test("ツモ40符", () => {
    const result = fu(
      {
        hai: {
          hai: [],
          furo: [],
        },
        agari: {
          elements: [
            { type: "toitsu", hai: ["1s", "1s"], furo: false },
            { type: "shuntsu", hai: ["1p", "2p", "3p"], furo: false },
            { type: "shuntsu", hai: ["4s", "5s", "6s"], furo: false },
            { type: "shuntsu", hai: ["0s", "6s", "7s"], furo: false },
            { type: "anko", hai: ["7z", "7z", "7z"], furo: false },
          ],
        },
        agariHai: "0s",
        tsumo: true,
        doubleYakuman: true,
      },
      "1z",
      "1z",
    );
    expect(result).toEqual(40);
  });

  test("ツモ40符", () => {
    const result = fu(
      {
        hai: {
          hai: [],
          furo: [],
        },
        agari: {
          elements: [
            { type: "toitsu", hai: ["1m", "1m"], furo: false },
            { type: "anko", hai: ["6m", "6m", "6m"], furo: false },
            { type: "shuntsu", hai: ["1p", "2p", "3p"], furo: false },
            { type: "minko", hai: ["2s", "2s", "2s"], furo: true },
            { type: "anko", hai: ["4s", "4s", "4s"], furo: false },
          ],
        },
        agariHai: "4s",
        tsumo: true,
        doubleYakuman: true,
      },
      "1z",
      "1z",
    );
    expect(result).toEqual(40);
  });

  test("ロン30符", () => {
    const result = fu(
      {
        hai: {
          hai: [],
          furo: [],
        },
        agari: {
          elements: [
            { type: "toitsu", hai: ["1m", "1m"], furo: false },
            { type: "anko", hai: ["6m", "6m", "6m"], furo: false },
            { type: "shuntsu", hai: ["1p", "2p", "3p"], furo: false },
            { type: "minko", hai: ["2s", "2s", "2s"], furo: true },
            { type: "minko", hai: ["4s", "4s", "4s"], furo: false },
          ],
        },
        agariHai: "4s",
        tsumo: false,
        doubleYakuman: true,
      },
      "1z",
      "1z",
    );
    expect(result).toEqual(30);
  });

  test("ツモ30符", () => {
    const result = fu(
      {
        hai: {
          hai: [],
          furo: [],
        },
        agari: {
          elements: [
            { type: "toitsu", hai: ["2z", "2z"], furo: false },
            { type: "shuntsu", hai: ["2s", "3s", "4s"], furo: true },
            { type: "shuntsu", hai: ["4s", "5s", "6s"], furo: false },
            { type: "shuntsu", hai: ["7s", "8s", "9s"], furo: false },
            { type: "minko", hai: ["7z", "7z", "7z"], furo: true },
          ],
        },
        agariHai: "5s",
        tsumo: true,
        doubleYakuman: true,
      },
      "2z",
      "3z",
    );
    expect(result).toEqual(30);
  });

  test("ロン40符 連風牌2符", () => {
    const result = fu(
      {
        hai: {
          hai: [],
          furo: [],
        },
        agari: {
          elements: [
            { type: "toitsu", hai: ["1z", "1z"], furo: false },
            { type: "shuntsu", hai: ["1m", "2m", "3m"], furo: false },
            { type: "shuntsu", hai: ["4m", "5m", "6m"], furo: false },
            { type: "anko", hai: ["1p", "1p", "1p"], furo: false },
            { type: "shuntsu", hai: ["5s", "6s", "7s"], furo: false },
          ],
        },
        agariHai: "5s",
        tsumo: false,
        doubleYakuman: true,
      },
      "1z",
      "1z",
      2,
    );
    expect(result).toEqual(40);
  });

  test("ロン50符 連風牌4符", () => {
    const result = fu(
      {
        hai: {
          hai: [],
          furo: [],
        },
        agari: {
          elements: [
            { type: "toitsu", hai: ["1z", "1z"], furo: false },
            { type: "shuntsu", hai: ["1m", "2m", "3m"], furo: false },
            { type: "shuntsu", hai: ["4m", "5m", "6m"], furo: false },
            { type: "anko", hai: ["1p", "1p", "1p"], furo: false },
            { type: "shuntsu", hai: ["5s", "6s", "7s"], furo: false },
          ],
        },
        agariHai: "5s",
        tsumo: false,
        doubleYakuman: true,
      },
      "1z",
      "1z",
      4,
    );
    expect(result).toEqual(50);
  });

  test("ロン60符", () => {
    const result = fu(
      {
        hai: {
          hai: [],
          furo: [],
        },
        agari: {
          elements: [
            { type: "toitsu", hai: ["7z", "7z"], furo: false },
            { type: "anko", hai: ["1p", "1p", "1p"], furo: false },
            { type: "anko", hai: ["1z", "1z", "1z"], furo: false },
            { type: "anko", hai: ["5z", "5z", "5z"], furo: false },
            { type: "minko", hai: ["6z", "6z", "6z"], furo: false },
          ],
        },
        agariHai: "6z",
        tsumo: false,
        doubleYakuman: true,
      },
      "1z",
      "2z",
    );
    expect(result).toEqual(60);
  });

  test("ロン110符 連風牌4符", () => {
    const result = fu(
      {
        hai: {
          hai: [],
          furo: [],
        },
        agari: {
          elements: [
            { type: "toitsu", hai: ["1z", "1z"], furo: false },
            { type: "shuntsu", hai: ["4s", "5s", "6s"], furo: false },
            { type: "ankan", hai: ["9s", "9s", "9s", "9s"], furo: false },
            { type: "anko", hai: ["2z", "2z", "2z"], furo: false },
            { type: "ankan", hai: ["5z", "5z", "5z", "5z"], furo: false },
          ],
        },
        agariHai: "2z",
        tsumo: false,
        doubleYakuman: true,
      },
      "1z",
      "1z",
      4,
    );
    expect(result).toEqual(110);
  });

  test("ツモ110符", () => {
    const result = fu(
      {
        hai: {
          hai: [],
          furo: [],
        },
        agari: {
          elements: [
            { type: "toitsu", hai: ["3p", "3p"], furo: false },
            { type: "ankan", hai: ["1m", "1m", "1m", "1m"], furo: false },
            { type: "ankan", hai: ["9m", "9m", "9m", "9m"], furo: false },
            { type: "shuntsu", hai: ["6s", "7s", "8s"], furo: false },
            { type: "minkan", hai: ["5z", "5z", "5z", "5z"], furo: true },
          ],
        },
        agariHai: "3p",
        tsumo: true,
        doubleYakuman: true,
      },
      "1z",
      "1z",
    );
    expect(result).toEqual(110);
  });
});
