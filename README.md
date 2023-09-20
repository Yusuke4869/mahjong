# @yusuke4869/mahjong

mahjong yaku judgment and score calculation

## Installation

From GitHub Packages Registry

[Check here for more information](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package)

```sh
npm install @yusuke4869/mahjong
```

## Example

```js
import { getYaku } from "@yusuke4869/mahjong";

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
  honba: 1,
});

console.log(result);

// {
//   "yaku": [
//     { "name": "立直", "han": 1 },
//     { "name": "門前清自摸和", "han": 1 },
//     { "name": "平和", "han": 1 },
//     { "name": "ドラ", "han": 1 },
//     { "name": "赤ドラ", "han": 1 }
//   ],
//   "fu": 20,
//   "han": 5,
//   "yakuman": 0,
//   "scoreType": "満貫",
//   "rawScore": 8000,
//   "score": 8300,
//   "pay": { "oya": 4100, "ko": 2100 },
//   "detail": {
//     "bakaze": "1z",
//     "jikaze": "2z",
//     "doraHyo": ["3s"],
//     "uradoraHyo": ["6z"],
//     "tsumo": true,
//     "oya": false,
//     "honba": 1,
//     "agari": [
//       { "type": "toitsu", "hai": ["1s", "1s"], "furo": false },
//       { "type": "shuntsu", "hai": ["2m", "3m", "4m"], "furo": false },
//       { "type": "shuntsu", "hai": ["5m", "6m", "7m"], "furo": false },
//       { "type": "shuntsu", "hai": ["4p", "0p", "6p"], "furo": false },
//       { "type": "shuntsu", "hai": ["3s", "4s", "5s"], "furo": false }
//     ]
//   },
//   "rule": {
//     "rempuhai": 2,
//     "kazoeYakuman": true,
//     "doubleYakuman": true,
//     "kiriageMangan": false,
//     "sanma": false
//   }
// }
```

## License

MIT
