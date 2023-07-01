export const noto = [
  "'Noto Sans'",

  "'Noto Sans Arabic'",
  "'Noto Sans Armenian'",
  "'Noto Sans Balinese'",
  "'Noto Sans Batak'",
  "'Noto Sans Bengali'",
  "'Noto Sans Canadian Aboriginal'",
  "'Noto Sans Cherokee'",
  "'Noto Sans Coptic'",
  "'Noto Sans Devanagari'",
  "'Noto Sans Ethiopic'",
  "'Noto Sans Georgian'",
  "'Noto Sans Gothic'",
  "'Noto Sans Gujarati'",
  "'Noto Sans Gurmukhi'",
  "'Noto Sans Hanunoo'",
  "'Noto Sans Hebrew'",
  "'Noto Sans Javanese'",
  "'Noto Sans Kannada'",
  "'Noto Sans Khmer'",
  "'Noto Sans Lao'",
  "'Noto Sans Linear B'",
  "'Noto Sans Malayalam'",
  "'Noto Sans Mandaic'",
  "'Noto Sans Miao'",
  "'Noto Sans Mongolian'",
  "'Noto Sans Myanmar'",
  "'Noto Sans NKo'",
  "'Noto Sans Ogham'",
  "'Noto Sans Ol Chiki'",
  "'Noto Sans Phags Pa'",
  "'Noto Sans Phoenician'",
  "'Noto Sans Runic'",
  "'Noto Sans Sinhala'",
  "'Noto Sans Sundanese'",
  "'Noto Sans Syriac'",
  "'Noto Sans Tagalog'",
  "'Noto Sans Tamil'",
  "'Noto Sans Telugu'",
  "'Noto Sans Thaana'",
  "'Noto Sans Thai'",
  "'Noto Sans Tifinagh'",
  "'Noto Sans Vai'",
  "'Noto Sans Yi'",
  "'Noto Serif Tibetan'",
  "'Noto Traditional Nushu'",

  "'Noto Sans Symbols'",
  "'Noto Sans Symbols 2'",
  "'Noto Music'",
  "'Noto Sans Math'",
];

export const fontFamily = {
  sans: [
    "'Sapota'",
    "'Pretendard Variable'",

    "'Source Han Sans KR'",
    "'Source Han Sans JP'",
    "'Source Han Sans TC'",
    "'Source Han Sans HK'",
    "'Source Han Sans SC'",

    ...noto,

    "sans-serif",
  ],
  kr: [
    "'Sapota'",
    "'Pretendard Variable'",

    "'Source Han Sans KR'",
    "'Source Han Sans JP'",
    "'Source Han Sans TC'",
    "'Source Han Sans HK'",
    "'Source Han Sans SC'",

    ...noto,

    "sans-serif",
  ],
  oldHangul: [
    "'Sapota'",
    "'Source Han Sans KR'",
    "'Pretendard Variable'",

    "'Source Han Sans JP'",
    "'Source Han Sans TC'",
    "'Source Han Sans HK'",
    "'Source Han Sans SC'",

    ...noto,

    "sans-serif",
  ],
  jp: [
    "'Sapota'",
    "'Pretendard Variable'",

    "'Source Han Sans JP'",
    "'Source Han Sans KR'",
    "'Source Han Sans TC'",
    "'Source Han Sans HK'",
    "'Source Han Sans SC'",

    ...noto,

    "sans-serif",
  ],
  tw: [
    "'Sapota'",
    "'Pretendard Variable'",

    "'Source Han Sans TC'",
    "'Source Han Sans HK'",
    "'Source Han Sans KR'",
    "'Source Han Sans JP'",
    "'Source Han Sans SC'",

    ...noto,

    "sans-serif",
  ],
  hk: [
    "'Sapota'",
    "'Pretendard Variable'",

    "'Source Han Sans HK'",
    "'Source Han Sans TC'",
    "'Source Han Sans KR'",
    "'Source Han Sans JP'",
    "'Source Han Sans SC'",

    ...noto,

    "sans-serif",
  ],
  cn: [
    "'Sapota'",
    "'Pretendard Variable'",

    "'Source Han Sans SC'",
    "'Source Han Sans HK'",
    "'Source Han Sans TC'",
    "'Source Han Sans JP'",
    "'Source Han Sans KR'",

    ...noto,

    "sans-serif",
  ],
};

export function testFamily() {
  [
    "'Sapota'",
    "'Pretendard Variable'",

    "'Source Han Sans KR'",
    "'Source Han Sans JP'",
    "'Source Han Sans TC'",
    "'Source Han Sans HK'",
    "'Source Han Sans SC'",

    "'Noto Sans'",

    "'Noto Sans Arabic'",
    "'Noto Sans Armenian'",
    "'Noto Sans Balinese'",
    "'Noto Sans Batak'",
    "'Noto Sans Bengali'",
    "'Noto Sans Canadian Aboriginal'",
    "'Noto Sans Cherokee'",
    "'Noto Sans Coptic'",
    "'Noto Sans Devanagari'",
    "'Noto Sans Ethiopic'",
    "'Noto Sans Georgian'",
    "'Noto Sans Gothic'",
    "'Noto Sans Gujarati'",
    "'Noto Sans Gurmukhi'",
    "'Noto Sans Hanunoo'",
    "'Noto Sans Hebrew'",
    "'Noto Sans Javanese'",
    "'Noto Sans Kannada'",
    "'Noto Sans Khmer'",
    "'Noto Sans Lao'",
    "'Noto Sans Linear B'",
    "'Noto Sans Malayalam'",
    "'Noto Sans Mandaic'",
    "'Noto Sans Miao'",
    "'Noto Sans Mongolian'",
    "'Noto Sans Myanmar'",
    "'Noto Sans NKo'",
    "'Noto Sans Ogham'",
    "'Noto Sans Ol Chiki'",
    "'Noto Sans Phags Pa'",
    "'Noto Sans Phoenician'",
    "'Noto Sans Runic'",
    "'Noto Sans Sinhala'",
    "'Noto Sans Sundanese'",
    "'Noto Sans Syriac'",
    "'Noto Sans Tagalog'",
    "'Noto Sans Tamil'",
    "'Noto Sans Telugu'",
    "'Noto Sans Thaana'",
    "'Noto Sans Thai'",
    "'Noto Sans Tifinagh'",
    "'Noto Sans Vai'",
    "'Noto Sans Yi'",
    "'Noto Serif Tibetan'",
    "'Noto Traditional Nushu'",

    "'Noto Sans Symbols'",
    "'Noto Sans Symbols 2'",
    "'Noto Music'",
    "'Noto Sans Math'",

    "sans-serif",
  ].map((i) => {
    if (!fontFamily.sans.includes(i)) console.log("default, ", i);
    if (!fontFamily.kr.includes(i)) console.log("kr, ", i);
    if (!fontFamily.oldHangul.includes(i)) console.log("kr, ", i);
    if (!fontFamily.jp.includes(i)) console.log("jp, ", i);
    if (!fontFamily.tw.includes(i)) console.log("tw, ", i);
    if (!fontFamily.hk.includes(i)) console.log("hk, ", i);
    if (!fontFamily.cn.includes(i)) console.log("cn, ", i);
  });
}
