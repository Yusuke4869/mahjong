import { getYaku } from "../../mahjong";

describe("getYaku", () => {
  test("平和ツモ", () => {
    const result = getYaku({
      hai: {
        hai: ["1m", "2m", "3m", "6p", "7p", "8p", "8p", "8p", "3s", "4s", "4s", "5s", "5s", "6s"],
        furo: [],
      },
      agariHai: "5s",
      bakaze: "1z",
      jikaze: "4z",
      tsumo: true,
      doraHyo: ["7m"],
    });
    expect(result.yaku.map((v) => v.name)).toEqual(["門前清自摸和", "平和"]);
    expect(result.fu).toBe(20);
    expect(result.han).toBe(2);
    expect(result.yakuman).toBe(0);
    expect(result.rawScore).toBe(1500);
  });

  test("60符24翻", () => {
    const result = getYaku({
      hai: {
        hai: ["1p", "1p", "1p", "1z", "1z", "1z", "5z", "5z", "5z", "6z", "6z", "7z", "7z", "6z"],
        furo: [],
      },
      agariHai: "6z",
      bakaze: "1z",
      jikaze: "2z",
      tsumo: false,
      doraHyo: ["6z", "4p", "6p", "3z"],
      reach: true,
      uradoraHyo: ["7p", "1p", "4z", "7z"],
      hotei: true,
      sanma: true,
    });
    expect(result.yaku.map((v) => v.name)).toEqual([
      "立直",
      "河底撈魚",
      "混一色",
      "対々和",
      "混老頭",
      "小三元",
      "三暗刻",
      "白",
      "發",
      "場風牌",
      "ドラ",
      "裏ドラ",
    ]);
    expect(result.fu).toBe(60);
    expect(result.han).toBe(24);
    expect(result.yakuman).toBe(0);
    expect(result.rawScore).toBe(32000);
  });

  test("60符23翻", () => {
    const result = getYaku({
      hai: {
        hai: ["2p", "2p", "2p", "4p", "4p", "4p", "5p", "6p", "8s", "8s", "7p"],
        furo: [
          {
            type: "ankan",
            hai: ["0s", "5s", "5s", "5s"],
          },
        ],
      },
      agariHai: "7p",
      bakaze: "1z",
      jikaze: "3z",
      tsumo: false,
      doraHyo: ["5z", "1p", "3p", "9p"],
      reach: true,
      uradoraHyo: ["7s", "1p", "1p", "4s"],
      sanma: true,
    });
    expect(result.yaku.map((v) => v.name)).toEqual(["立直", "三暗刻", "断么九", "ドラ", "赤ドラ", "裏ドラ"]);
    expect(result.fu).toBe(60);
    expect(result.han).toBe(23);
    expect(result.yakuman).toBe(0);
    expect(result.rawScore).toBe(32000);
  });

  test("裏16", () => {
    const result = getYaku({
      hai: {
        hai: ["1p", "2p", "3p", "4p", "0p", "6p", "2s", "4s", "7s", "7s", "3s"],
        furo: [
          {
            type: "ankan",
            hai: ["6s", "6s", "6s", "6s"],
          },
        ],
      },
      agariHai: "3s",
      bakaze: "2z",
      jikaze: "1z",
      tsumo: false,
      doraHyo: ["3s", "8s", "5p", "4z"],
      reach: true,
      uradoraHyo: ["0s", "5s", "5s", "5s"],
      oya: true,
    });
    expect(result.yaku.map((v) => v.name)).toEqual(["立直", "ドラ", "赤ドラ", "裏ドラ"]);
    expect(result.fu).toBe(50);
    expect(result.han).toBe(20);
    expect(result.yakuman).toBe(0);
    expect(result.rawScore).toBe(48000);
  });

  test("50符20翻", () => {
    const result = getYaku({
      hai: {
        hai: ["2p", "2p", "0p", "5p", "6p", "6p", "6p", "7p", "7p", "7p", "9p", "9p", "9p", "2p"],
        furo: [],
      },
      agariHai: "2p",
      bakaze: "2z",
      jikaze: "2z",
      tsumo: false,
      doraHyo: ["5p", "8p", "6p"],
    });
    expect(result.yaku.map((v) => v.name)).toEqual(["清一色", "対々和", "三暗刻", "ドラ", "赤ドラ"]);
    expect(result.fu).toBe(50);
    expect(result.han).toBe(20);
    expect(result.yakuman).toBe(0);
    expect(result.rawScore).toBe(32000);
  });

  test("6倍役満", () => {
    const result = getYaku({
      hai: {
        hai: ["5z", "5z"],
        furo: [
          {
            type: "ankan",
            hai: ["3z", "3z", "3z", "3z"],
          },
          {
            type: "ankan",
            hai: ["2z", "2z", "2z", "2z"],
          },
          {
            type: "ankan",
            hai: ["4z", "4z", "4z", "4z"],
          },
          {
            type: "ankan",
            hai: ["1z", "1z", "1z", "1z"],
          },
        ],
      },
      agariHai: "5z",
      bakaze: "2z",
      jikaze: "4z",
      tsumo: true,
      doraHyo: ["6p", "6s", "7z", "5p", "1m"],
      rinshan: true,
    });
    expect(result.yaku.map((v) => v.name)).toEqual(["字一色", "大四喜", "四槓子", "四暗刻単騎"]);
    expect(result.fu).toBe(0);
    expect(result.han).toBe(0);
    expect(result.yakuman).toBe(6);
    expect(result.rawScore).toBe(192000);
  });

  test("裏3", () => {
    const result = getYaku({
      hai: {
        hai: ["7m", "7m", "7m", "0p", "5p", "7p", "8p", "1s", "2s", "3s", "9s", "9s", "9s", "6p"],
        furo: [],
      },
      agariHai: "6p",
      bakaze: "1z",
      jikaze: "1z",
      tsumo: false,
      doraHyo: ["5s"],
      reach: true,
      uradoraHyo: ["8s"],
      oya: true,
    });
    expect(result.yaku.map((v) => v.name)).toEqual(["立直", "赤ドラ", "裏ドラ"]);
    expect(result.fu).toBe(50);
    expect(result.han).toBe(5);
    expect(result.yakuman).toBe(0);
    expect(result.rawScore).toBe(12000);
  });

  test("平和ロン 切り上げ満貫", () => {
    const result = getYaku({
      hai: {
        hai: ["3m", "4m", "4m", "5m", "5m", "6m", "7p", "7p", "1s", "2s", "3s", "0s", "6s", "4s"],
        furo: [],
      },
      agariHai: "4s",
      bakaze: "1z",
      jikaze: "1z",
      tsumo: false,
      doraHyo: ["6p"],
      oya: true,
      kiriageMangan: true,
    });
    expect(result.yaku.map((v) => v.name)).toEqual(["平和", "ドラ", "赤ドラ"]);
    expect(result.fu).toBe(30);
    expect(result.han).toBe(4);
    expect(result.yakuman).toBe(0);
    expect(result.rawScore).toBe(12000);
  });

  test("リーチツモドラ 切り上げ満貫", () => {
    const result = getYaku({
      hai: {
        hai: ["4m", "4m", "6m", "7m", "8m", "5p", "6p", "7p", "2s", "3s", "4s", "9s", "9s", "9s"],
        furo: [],
      },
      agariHai: "9s",
      bakaze: "1z",
      jikaze: "3z",
      tsumo: true,
      doraHyo: ["3m"],
      reach: true,
      uradoraHyo: ["9p"],
      kiriageMangan: true,
    });
    expect(result.yaku.map((v) => v.name)).toEqual(["立直", "門前清自摸和", "ドラ"]);
    expect(result.fu).toBe(30);
    expect(result.han).toBe(4);
    expect(result.yakuman).toBe(0);
    expect(result.rawScore).toBe(8000);
  });

  test("リーチ平和", () => {
    const result = getYaku({
      hai: {
        hai: ["2p", "2p", "3p", "4p", "7p", "8p", "9p", "3s", "4s", "5s", "7s", "8s", "9s", "5p"],
        furo: [],
      },
      agariHai: "5p",
      bakaze: "1z",
      jikaze: "4z",
      tsumo: false,
      doraHyo: ["5m"],
      reach: true,
      uradoraHyo: ["4m"],
    });
    expect(result.yaku.map((v) => v.name)).toEqual(["立直", "平和"]);
    expect(result.fu).toBe(30);
    expect(result.han).toBe(2);
    expect(result.yakuman).toBe(0);
    expect(result.rawScore).toBe(2000);
  });

  test("リーチツモ平和ドラ", () => {
    const result = getYaku({
      hai: {
        hai: ["2m", "3m", "4m", "5m", "6m", "7m", "4p", "0p", "6p", "1s", "1s", "3s", "4s", "5s"],
        furo: [],
      },
      agariHai: "5s",
      bakaze: "1z",
      jikaze: "2z",
      tsumo: true,
      doraHyo: ["3s"],
      reach: true,
      uradoraHyo: ["6z"],
    });
    expect(result.yaku.map((v) => v.name)).toEqual(["立直", "門前清自摸和", "平和", "ドラ", "赤ドラ"]);
    expect(result.fu).toBe(20);
    expect(result.han).toBe(5);
    expect(result.yakuman).toBe(0);
    expect(result.rawScore).toBe(8000);
  });

  test("リーチツモドラ", () => {
    const result = getYaku({
      hai: {
        hai: ["3m", "3m", "3m", "7m", "9m", "5p", "5p", "0s", "5s", "5s", "7s", "8s", "9s", "8m"],
        furo: [],
      },
      agariHai: "8m",
      bakaze: "2z",
      jikaze: "1z",
      tsumo: true,
      doraHyo: ["7z"],
      reach: true,
      uradoraHyo: ["7p"],
      oya: true,
    });
    expect(result.yaku.map((v) => v.name)).toEqual(["立直", "門前清自摸和", "赤ドラ"]);
    expect(result.fu).toBe(40);
    expect(result.han).toBe(3);
    expect(result.yakuman).toBe(0);
    expect(result.rawScore).toBe(7800);
  });

  test("リーチ平和ドラ", () => {
    const result = getYaku({
      hai: {
        hai: ["1m", "2m", "3m", "5m", "5m", "7m", "8m", "9m", "2p", "3p", "6s", "7s", "8s", "1p"],
        furo: [],
      },
      agariHai: "1p",
      bakaze: "2z",
      jikaze: "1z",
      tsumo: false,
      doraHyo: ["1m"],
      reach: true,
      uradoraHyo: ["8p"],
      oya: true,
    });
    expect(result.yaku.map((v) => v.name)).toEqual(["立直", "平和", "ドラ"]);
    expect(result.fu).toBe(30);
    expect(result.han).toBe(3);
    expect(result.yakuman).toBe(0);
    expect(result.rawScore).toBe(5800);
  });

  test("混一色役牌", () => {
    const result = getYaku({
      hai: {
        hai: ["2m", "3m", "4m", "6m", "6m", "2z", "2z", "7z", "7z", "7z", "2z"],
        furo: [
          {
            type: "pon",
            hai: ["5z", "5z", "5z"],
          },
        ],
      },
      agariHai: "2z",
      bakaze: "2z",
      jikaze: "1z",
      tsumo: false,
      doraHyo: ["3m"],
      oya: true,
    });
    expect(result.yaku.map((v) => v.name)).toEqual(["混一色", "白", "中", "場風牌", "ドラ"]);
    expect(result.fu).toBe(40);
    expect(result.han).toBe(6);
    expect(result.yakuman).toBe(0);
    expect(result.rawScore).toBe(18000);
  });

  test("ジュンチャン三色", () => {
    const result = getYaku({
      hai: {
        hai: ["1m", "2m", "3m", "1p", "2p", "3p", "9p", "9p", "1s", "2s", "7s", "8s", "9s", "3s"],
        furo: [],
      },
      agariHai: "3s",
      bakaze: "2z",
      jikaze: "3z",
      tsumo: false,
      doraHyo: ["1m", "3s"],
    });
    expect(result.yaku.map((v) => v.name)).toEqual(["純全帯么九", "三色同順", "ドラ"]);
    expect(result.fu).toBe(40);
    expect(result.han).toBe(6);
    expect(result.yakuman).toBe(0);
    expect(result.rawScore).toBe(12000);
  });

  test("対々和三暗刻", () => {
    const result = getYaku({
      hai: {
        hai: ["1m", "1m", "1m", "1p", "1p", "1p", "9p", "9p", "9p", "7s", "7s", "9s", "9s", "9s"],
        furo: [],
      },
      agariHai: "9s",
      bakaze: "1z",
      jikaze: "1z",
      tsumo: false,
    });
    expect(result.yaku.map((v) => v.name)).toEqual(["対々和", "三暗刻"]);
    expect(result.fu).toBe(60);
    expect(result.han).toBe(4);
    expect(result.yakuman).toBe(0);
    expect(result.rawScore).toBe(8000);
  });

  test("混一色", () => {
    const result = getYaku({
      hai: {
        hai: ["4p", "5p", "8p", "8p", "6p"],
        furo: [
          {
            type: "pon",
            hai: ["7z", "7z", "7z"],
          },
          {
            type: "pon",
            hai: ["5z", "5z", "5z"],
          },
          {
            type: "chi",
            hai: ["1p", "2p", "3p"],
          },
        ],
      },
      agariHai: "6p",
      bakaze: "1z",
      jikaze: "1z",
      tsumo: true,
      doraHyo: ["2z"],
      oya: true,
      kiriageMangan: true,
    });
    expect(result.yaku.map((v) => v.name)).toEqual(["混一色", "白", "中"]);
    expect(result.fu).toBe(30);
    expect(result.han).toBe(4);
    expect(result.yakuman).toBe(0);
    expect(result.rawScore).toBe(12000);
  });

  test("三色断么九平和", () => {
    const result = getYaku({
      hai: {
        hai: ["2m", "3m", "3m", "4m", "5m", "2p", "3p", "4p", "7p", "7p", "2s", "3s", "4s", "4m"],
        furo: [],
      },
      agariHai: "4m",
      bakaze: "1z",
      jikaze: "4z",
      tsumo: true,
      doraHyo: ["3m"],
      reach: true,
      uradoraHyo: ["6s"],
    });
    expect(result.yaku.map((v) => v.name)).toEqual(["立直", "門前清自摸和", "三色同順", "断么九", "平和", "ドラ"]);
    expect(result.fu).toBe(20);
    expect(result.han).toBe(8);
    expect(result.yakuman).toBe(0);
    expect(result.rawScore).toBe(16000);
  });

  test("リーチ断么九平和", () => {
    const result = getYaku({
      hai: {
        hai: ["7m", "7m", "3p", "4p", "4p", "5p", "5p", "2s", "3s", "4s", "6s", "7s", "8s", "6p"],
        furo: [],
      },
      agariHai: "6p",
      bakaze: "2z",
      jikaze: "1z",
      tsumo: false,
      doraHyo: ["9m"],
      reach: true,
      uradoraHyo: ["3p"],
      oya: true,
    });
    expect(result.yaku.map((v) => v.name)).toEqual(["立直", "断么九", "平和", "裏ドラ"]);
    expect(result.fu).toBe(30);
    expect(result.han).toBe(5);
    expect(result.yakuman).toBe(0);
    expect(result.rawScore).toBe(12000);
  });

  test("リーチ一発三色", () => {
    const result = getYaku({
      hai: {
        hai: ["5m", "6m", "7m", "9m", "9m", "5p", "7p", "4s", "0s", "5s", "6s", "6s", "7s", "6p"],
        furo: [],
      },
      agariHai: "6p",
      bakaze: "1z",
      jikaze: "3z",
      tsumo: false,
      doraHyo: ["4p"],
      reach: true,
      uradoraHyo: ["0m"],
      ippatsu: true,
    });
    expect(result.yaku.map((v) => v.name)).toEqual(["立直", "一発", "三色同順", "ドラ", "赤ドラ", "裏ドラ"]);
    expect(result.fu).toBe(40);
    expect(result.han).toBe(7);
    expect(result.yakuman).toBe(0);
    expect(result.rawScore).toBe(12000);
  });

  test("断么九平和一盃口", () => {
    const result = getYaku({
      hai: {
        hai: ["4m", "4m", "0m", "5m", "6m", "6m", "3p", "4p", "5p", "6p", "7p", "2s", "2s", "8p"],
        furo: [],
      },
      agariHai: "8p",
      bakaze: "2z",
      jikaze: "1z",
      tsumo: false,
      doraHyo: ["1s"],
      oya: true,
    });
    expect(result.yaku.map((v) => v.name)).toEqual(["断么九", "平和", "一盃口", "ドラ", "赤ドラ"]);
    expect(result.fu).toBe(30);
    expect(result.han).toBe(6);
    expect(result.yakuman).toBe(0);
    expect(result.rawScore).toBe(18000);
  });

  test("一気通貫", () => {
    const result = getYaku({
      hai: {
        hai: ["1p", "2p", "3p", "4p", "5p", "6p", "7p", "9p", "2s", "3s", "4s", "6s", "6s", "8p"],
        furo: [],
      },
      agariHai: "8p",
      bakaze: "2z",
      jikaze: "3z",
      tsumo: false,
      doraHyo: ["4p"],
      reach: true,
      uradoraHyo: ["5z"],
      ippatsu: true,
    });
    expect(result.yaku.map((v) => v.name)).toEqual(["立直", "一発", "一気通貫", "ドラ"]);
    expect(result.fu).toBe(40);
    expect(result.han).toBe(5);
    expect(result.yakuman).toBe(0);
    expect(result.rawScore).toBe(8000);
  });

  test("国士無双十三面待ち 三麻 親ツモ", () => {
    const result = getYaku({
      hai: {
        hai: ["1m", "9m", "1p", "9p", "1s", "9s", "1z", "2z", "3z", "4z", "5z", "6z", "7z", "1m"],
        furo: [],
      },
      agariHai: "1m",
      bakaze: "1z",
      jikaze: "1z",
      tsumo: true,
      doraHyo: ["4p", "4s"],
      oya: true,
      sanma: true,
    });
    expect(result.yaku.map((v) => v.name)).toEqual(["国士無双十三面待ち"]);
    expect(result.fu).toBe(0);
    expect(result.han).toBe(0);
    expect(result.yakuman).toBe(2);
    expect(result.rawScore).toBe(64000);
  });

  test("対々和三暗刻 三麻ツモ", () => {
    const result = getYaku({
      hai: {
        hai: ["7p", "7p", "4s", "4s", "4s", "6s", "6s", "6s", "8s", "8s", "7p"],
        furo: [
          {
            type: "pon",
            hai: ["5z", "5z", "5z"],
          },
        ],
      },
      agariHai: "7p",
      bakaze: "1z",
      jikaze: "3z",
      tsumo: true,
      doraHyo: ["0s"],
      sanma: true,
    });
    expect(result.yaku.map((v) => v.name)).toEqual(["対々和", "三暗刻", "白", "ドラ"]);
    expect(result.fu).toBe(40);
    expect(result.han).toBe(8);
    expect(result.yakuman).toBe(0);
    expect(result.rawScore).toBe(12000);
  });

  test("二盃口混一色 三麻ツモ", () => {
    const result = getYaku({
      hai: {
        hai: ["2s", "2s", "3s", "3s", "4s", "4s", "0s", "5s", "6s", "7s", "7s", "2z", "2z", "6s"],
        furo: [],
      },
      agariHai: "6s",
      bakaze: "1z",
      jikaze: "2z",
      tsumo: true,
      doraHyo: ["7z"],
      sanma: true,
    });
    expect(result.yaku.map((v) => v.name)).toEqual(["門前清自摸和", "二盃口", "混一色", "赤ドラ"]);
    expect(result.fu).toBe(30);
    expect(result.han).toBe(8);
    expect(result.yakuman).toBe(0);
    expect(result.rawScore).toBe(12000);
  });

  test("リンシャン断么九", () => {
    const result = getYaku({
      hai: {
        hai: ["3p", "4p", "0p", "6p", "7p", "8p", "2s", "2s", "0s", "5s", "2s"],
        furo: [
          {
            type: "kakan",
            hai: ["8s", "8s", "8s", "8s"],
          },
        ],
      },
      agariHai: "2s",
      bakaze: "1z",
      jikaze: "1z",
      tsumo: true,
      doraHyo: ["7s"],
      rinshan: true,
      oya: true,
    });
    expect(result.yaku.map((v) => v.name)).toEqual(["嶺上開花", "断么九", "ドラ", "赤ドラ"]);
    expect(result.fu).toBe(40);
    expect(result.han).toBe(8);
    expect(result.yakuman).toBe(0);
    expect(result.rawScore).toBe(24000);
  });

  test("三倍満", () => {
    const result = getYaku({
      hai: {
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
      },
      agariHai: "7z",
      bakaze: "1z",
      jikaze: "4z",
      tsumo: false,
      doraHyo: ["6z", "7p"],
    });
    expect(result.yaku.map((v) => v.name)).toEqual(["対々和", "發", "中", "自風牌", "ドラ"]);
    expect(result.fu).toBe(40);
    expect(result.han).toBe(12);
    expect(result.yakuman).toBe(0);
    expect(result.rawScore).toBe(24000);
  });

  test("70符2翻", () => {
    const result = getYaku({
      hai: {
        hai: ["3m", "4m", "5m", "6p", "7p", "8p", "2z", "2z", "3z", "3z", "2z"],
        furo: [
          {
            type: "ankan",
            hai: ["1m", "1m", "1m", "1m"],
          },
        ],
      },
      agariHai: "2z",
      bakaze: "1z",
      jikaze: "4z",
      tsumo: true,
      doraHyo: ["5z"],
      reach: true,
      uradoraHyo: ["6z"],
    });
    expect(result.yaku.map((v) => v.name)).toEqual(["立直", "門前清自摸和"]);
    expect(result.fu).toBe(70);
    expect(result.han).toBe(2);
    expect(result.yakuman).toBe(0);
    expect(result.rawScore).toBe(4700);
  });

  test("80符1翻", () => {
    const result = getYaku({
      hai: {
        hai: ["1s", "2s", "3s", "6s", "7s", "8s", "7z", "7z"],
        furo: [
          {
            type: "ankan",
            hai: ["9m", "9m", "9m", "9m"],
          },
          {
            type: "daiminkan",
            hai: ["5z", "5z", "5z", "5z"],
          },
        ],
      },
      agariHai: "7z",
      bakaze: "2z",
      jikaze: "1z",
      tsumo: false,
      doraHyo: ["1z"],
      oya: true,
    });
    expect(result.yaku.map((v) => v.name)).toEqual(["白"]);
    expect(result.fu).toBe(80);
    expect(result.han).toBe(1);
    expect(result.yakuman).toBe(0);
    expect(result.rawScore).toBe(3900);
  });

  test("ジュンチャン一盃口平和", () => {
    const result = getYaku({
      hai: {
        hai: ["1p", "1p", "1p", "2p", "2p", "2p", "3p", "3p", "3p", "7s", "8s", "9s", "9s", "9s"],
        furo: [],
      },
      agariHai: "9s",
      bakaze: "1z",
      jikaze: "1z",
      tsumo: true,
      doraHyo: ["7m"],
      uradoraHyo: ["1m"],
      oya: true,
    });
    expect(result.yaku.map((v) => v.name)).toEqual(["門前清自摸和", "純全帯么九", "平和", "一盃口"]);
    expect(result.fu).toBe(20);
    expect(result.han).toBe(6);
    expect(result.yakuman).toBe(0);
    expect(result.rawScore).toBe(18000);
  });

  test("二盃口", () => {
    const result = getYaku({
      hai: {
        hai: ["2m", "2m", "3m", "3m", "4m", "4m", "2p", "2p", "3p", "3p", "4p", "4p", "1s", "1s"],
        furo: [],
      },
      agariHai: "1s",
      bakaze: "1z",
      jikaze: "2z",
      tsumo: false,
      doraHyo: ["7m"],
    });
    expect(result.yaku.map((v) => v.name)).toEqual(["二盃口"]);
    expect(result.fu).toBe(40);
    expect(result.han).toBe(3);
    expect(result.yakuman).toBe(0);
    expect(result.rawScore).toBe(5200);
  });

  test("三色同順", () => {
    const result = getYaku({
      hai: {
        hai: ["1m", "2m", "3m", "1p", "1p", "2p", "3p", "3p", "4p", "4p", "1s", "2s", "3s", "2p"],
        furo: [],
      },
      agariHai: "2p",
      bakaze: "1z",
      jikaze: "2z",
      tsumo: false,
    });
    expect(result.yaku.map((v) => v.name)).toEqual(["三色同順", "一盃口"]);
    expect(result.fu).toBe(40);
    expect(result.han).toBe(3);
    expect(result.yakuman).toBe(0);
    expect(result.rawScore).toBe(5200);
  });
});
