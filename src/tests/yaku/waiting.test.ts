import { waiting } from "../../mahjong/yaku/waiting";

describe("waiting", () => {
  test("両面1", () => {
    const result = waiting({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["3m", "3m"], furo: false },
          { type: "shuntsu", hai: ["1m", "2m", "3m"], furo: false },
          { type: "shuntsu", hai: ["2p", "3p", "4p"], furo: false },
          { type: "shuntsu", hai: ["3s", "4s", "5s"], furo: false },
          { type: "anko", hai: ["3z", "3z", "3z"], furo: false },
        ],
      },
      agariHai: "3s",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      ryammen: true,
      shampon: false,
      penchan: false,
      kanchan: false,
      tanki: false,
    });
  });

  test("両面2", () => {
    const result = waiting({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["3m", "3m"], furo: false },
          { type: "shuntsu", hai: ["2m", "3m", "4m"], furo: false },
          { type: "anko", hai: ["0m", "5m", "5m"], furo: false },
          { type: "shuntsu", hai: ["5m", "6m", "7m"], furo: false },
          { type: "anko", hai: ["3z", "3z", "3z"], furo: false },
        ],
      },
      agariHai: "5m",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      ryammen: true,
      shampon: false,
      penchan: false,
      kanchan: false,
      tanki: false,
    });
  });

  test("双碰", () => {
    const result = waiting({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["1m", "1m"], furo: false },
          { type: "anko", hai: ["1z", "1z", "1z"], furo: false },
          { type: "anko", hai: ["2z", "2z", "2z"], furo: false },
          { type: "anko", hai: ["3z", "3z", "3z"], furo: false },
          { type: "anko", hai: ["4z", "4z", "4z"], furo: false },
        ],
      },
      agariHai: "2z",
      tsumo: true,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      ryammen: false,
      shampon: true,
      penchan: false,
      kanchan: false,
      tanki: false,
    });
  });

  test("辺張", () => {
    const result = waiting({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["3s", "3s"], furo: false },
          { type: "shuntsu", hai: ["1m", "2m", "3m"], furo: false },
          { type: "shuntsu", hai: ["2p", "3p", "4p"], furo: false },
          { type: "shuntsu", hai: ["3s", "4s", "5s"], furo: false },
          { type: "anko", hai: ["3z", "3z", "3z"], furo: false },
        ],
      },
      agariHai: "3m",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      ryammen: false,
      shampon: false,
      penchan: true,
      kanchan: false,
      tanki: false,
    });
  });

  test("嵌張", () => {
    const result = waiting({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["3m", "3m"], furo: false },
          { type: "shuntsu", hai: ["1m", "2m", "3m"], furo: false },
          { type: "shuntsu", hai: ["2p", "3p", "4p"], furo: false },
          { type: "shuntsu", hai: ["3s", "4s", "5s"], furo: false },
          { type: "anko", hai: ["3z", "3z", "3z"], furo: false },
        ],
      },
      agariHai: "3p",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      ryammen: false,
      shampon: false,
      penchan: false,
      kanchan: true,
      tanki: false,
    });
  });

  test("単騎", () => {
    const result = waiting({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["0p", "5p"], furo: false },
          { type: "shuntsu", hai: ["1p", "2p", "3p"], furo: true },
          { type: "shuntsu", hai: ["4p", "5p", "6p"], furo: true },
          { type: "shuntsu", hai: ["7p", "8p", "9p"], furo: true },
          { type: "minko", hai: ["9p", "9p", "9p"], furo: true },
        ],
      },
      agariHai: "0p",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      ryammen: false,
      shampon: false,
      penchan: false,
      kanchan: false,
      tanki: true,
    });
  });

  test("両面・双碰", () => {
    const result = waiting({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["3m", "3m"], furo: false },
          { type: "shuntsu", hai: ["2m", "3m", "4m"], furo: false },
          { type: "anko", hai: ["0m", "5m", "5m"], furo: false },
          { type: "shuntsu", hai: ["5m", "6m", "7m"], furo: false },
          { type: "anko", hai: ["3z", "3z", "3z"], furo: false },
        ],
      },
      agariHai: "5m",
      tsumo: true,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      ryammen: true,
      shampon: true,
      penchan: false,
      kanchan: false,
      tanki: false,
    });
  });

  test("両面・単騎", () => {
    const result = waiting({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["3s", "3s"], furo: false },
          { type: "shuntsu", hai: ["1m", "2m", "3m"], furo: false },
          { type: "shuntsu", hai: ["2p", "3p", "4p"], furo: false },
          { type: "shuntsu", hai: ["3s", "4s", "5s"], furo: false },
          { type: "anko", hai: ["3z", "3z", "3z"], furo: false },
        ],
      },
      agariHai: "3s",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      ryammen: true,
      shampon: false,
      penchan: false,
      kanchan: false,
      tanki: true,
    });
  });

  test("延べ単", () => {
    const result = waiting({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["0s", "5s"], furo: false },
          { type: "shuntsu", hai: ["1p", "2p", "3p"], furo: false },
          { type: "shuntsu", hai: ["4p", "5p", "6p"], furo: false },
          { type: "shuntsu", hai: ["7p", "8p", "9p"], furo: false },
          { type: "shuntsu", hai: ["2s", "3s", "4s"], furo: false },
        ],
      },
      agariHai: "5s",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      ryammen: false,
      shampon: false,
      penchan: false,
      kanchan: false,
      tanki: true,
    });
  });

  test("辺張・単騎", () => {
    const result = waiting({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["3m", "3m"], furo: false },
          { type: "shuntsu", hai: ["1m", "2m", "3m"], furo: false },
          { type: "shuntsu", hai: ["2p", "3p", "4p"], furo: false },
          { type: "shuntsu", hai: ["3s", "4s", "5s"], furo: false },
          { type: "anko", hai: ["3z", "3z", "3z"], furo: false },
        ],
      },
      agariHai: "3m",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      ryammen: false,
      shampon: false,
      penchan: true,
      kanchan: false,
      tanki: true,
    });
  });

  test("嵌張・単騎", () => {
    const result = waiting({
      hai: {
        hai: [],
        furo: [],
      },
      agari: {
        elements: [
          { type: "toitsu", hai: ["3p", "3p"], furo: false },
          { type: "shuntsu", hai: ["1m", "2m", "3m"], furo: false },
          { type: "shuntsu", hai: ["2p", "3p", "4p"], furo: false },
          { type: "shuntsu", hai: ["3s", "4s", "5s"], furo: false },
          { type: "anko", hai: ["3z", "3z", "3z"], furo: false },
        ],
      },
      agariHai: "3p",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      ryammen: false,
      shampon: false,
      penchan: false,
      kanchan: true,
      tanki: true,
    });
  });

  test("国士無双", () => {
    const result = waiting({
      hai: {
        hai: ["1m", "1m", "9m", "1p", "9p", "1s", "9s", "1z", "2z", "3z", "4z", "5z", "6z", "7z"],
        furo: [],
      },
      agari: {
        elements: [],
      },
      agariHai: "1m",
      tsumo: false,
      doubleYakuman: true,
    });
    expect(result).toEqual({
      ryammen: false,
      shampon: false,
      penchan: false,
      kanchan: false,
      tanki: false,
    });
  });
});
