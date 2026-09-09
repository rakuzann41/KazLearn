export type AlphabetLetter = {
  upper: string;
  lower: string;
  word?: string;
  translation?: string;
  image?: string;
  audio: string;
  special?: boolean;
};

export const alphabet: AlphabetLetter[] = [
  { upper: "А", lower: "а", word: "ана", image: "/images/alphabet/ana.webp", audio: "/audio/alphabet/a.mp3" },
  { upper: "Ә", lower: "ә", word: "әке", image: "/images/alphabet/ake.jpg", audio: "/audio/alphabet/ae.mp3", special: true },
  { upper: "Б", lower: "б", word: "бала", image: "/images/alphabet/bala.webp", audio: "/audio/alphabet/b.mp3" },

  { upper: "В", lower: "в", image: "/images/alphabet/oyu.jpg", audio: "/audio/alphabet/v.mp3" },

  { upper: "Г", lower: "г", word: "гүл", image: "/images/alphabet/gul.avif", audio: "/audio/alphabet/g.mp3" },
  { upper: "Ғ", lower: "ғ", word: "ғалым", image: "/images/alphabet/galym.jpg", audio: "/audio/alphabet/gh.mp3", special: true },
  { upper: "Д", lower: "д", word: "домбыра", image: "/images/alphabet/dombyra.png", audio: "/audio/alphabet/d.mp3" },
  { upper: "Е", lower: "е", word: "ел", image: "/images/alphabet/el.jpg", audio: "/audio/alphabet/e.mp3" },

  { upper: "Ё", lower: "ё",image: "/images/alphabet/oyu.jpg", audio: "/audio/alphabet/yo.mp3" },

  { upper: "Ж", lower: "ж", word: "жігіт", image: "/images/alphabet/zhigit.webp", audio: "/audio/alphabet/zh.mp3" },
  { upper: "З", lower: "з", word: "заң", image: "/images/alphabet/zan.avif", audio: "/audio/alphabet/z.mp3" },
  { upper: "И", lower: "и", word: "ине", image: "/images/alphabet/ine.png", audio: "/audio/alphabet/i.mp3" },

  { upper: "Й", lower: "й", image: "/images/alphabet/oyu.jpg",audio: "/audio/alphabet/y.mp3" },

  { upper: "К", lower: "к", word: "күн", image: "/images/alphabet/kun.jpg", audio: "/audio/alphabet/k.mp3" },
  { upper: "Қ", lower: "қ", word: "қымыз", image: "/images/alphabet/kymyz.jpg", audio: "/audio/alphabet/q.mp3", special: true },
  { upper: "Л", lower: "л", word: "лақ", image: "/images/alphabet/laq.jpg", audio: "/audio/alphabet/l.mp3" },
  { upper: "М", lower: "м", word: "мысық", image: "/images/alphabet/mysyq.webp", audio: "/audio/alphabet/m.mp3" },
  { upper: "Н", lower: "н", word: "наурыз", image: "/images/alphabet/nauryz.jpg", audio: "/audio/alphabet/n.mp3" },

  { upper: "Ң", lower: "ң",image: "/images/alphabet/oyu.jpg", audio: "/audio/alphabet/ng.mp3", special: true },

  { upper: "О", lower: "о", word: "орман", image: "/images/alphabet/orman.jpg", audio: "/audio/alphabet/o.mp3" },
  { upper: "Ө", lower: "ө", word: "өзен", image: "/images/alphabet/ozen.avif", audio: "/audio/alphabet/oe.mp3", special: true },
  { upper: "П", lower: "п", word: "пияз", image: "/images/alphabet/piyaz.png", audio: "/audio/alphabet/p.mp3" },
  { upper: "Р", lower: "р", word: "рахмет", image: "/images/alphabet/oyu.jpg", audio: "/audio/alphabet/r.mp3" },
  { upper: "С", lower: "с", word: "су", image: "/images/alphabet/su.jpg", audio: "/audio/alphabet/s.mp3" },
  { upper: "Т", lower: "т", word: "тау", image: "/images/alphabet/tau.jpg", audio: "/audio/alphabet/t.mp3" },
  { upper: "У", lower: "у", word: "уық", image: "/images/alphabet/uyq.jpg", audio: "/audio/alphabet/u.mp3" },
  { upper: "Ұ", lower: "ұ", word: "ұл", image: "/images/alphabet/ul.jpg", audio: "/audio/alphabet/uu.mp3", special: true },
  { upper: "Ү", lower: "ү", word: "үй", image: "/images/alphabet/ui.jpeg", audio: "/audio/alphabet/ue.mp3", special: true },
  { upper: "Ф", lower: "ф", word: "футбол", image: "/images/alphabet/football.png", audio: "/audio/alphabet/f.mp3" },
  { upper: "Х", lower: "х", word: "халық", image: "/images/alphabet/halyq.webp", audio: "/audio/alphabet/h.mp3" },

  { upper: "Һ", lower: "һ",image: "/images/alphabet/oyu.jpg", audio: "/audio/alphabet/hh.mp3", special: true },
  { upper: "Ц", lower: "ц", image: "/images/alphabet/oyu.jpg",audio: "/audio/alphabet/ts.mp3" },
  { upper: "Ч", lower: "ч", image: "/images/alphabet/oyu.jpg", audio: "/audio/alphabet/ch.mp3" },

  { upper: "Ш", lower: "ш", word: "шай", image: "/images/alphabet/shai.jpg", audio: "/audio/alphabet/sh.mp3" },

  { upper: "Щ", lower: "щ", image: "/images/alphabet/oyu.jpg",audio: "/audio/alphabet/shch.mp3" },
  { upper: "Ъ", lower: "ъ",image: "/images/alphabet/oyu.jpg", audio: "/audio/alphabet/hard-sign.mp3" },

  { upper: "Ы", lower: "ы", word: "ыдыс", image: "/images/alphabet/ydys.avif", audio: "/audio/alphabet/y-back.mp3" },
  { upper: "І", lower: "і", word: "іні", image: "/images/alphabet/ini.jpg", audio: "/audio/alphabet/i-kazakh.mp3", special: true },

  { upper: "Ь", lower: "ь",image: "/images/alphabet/oyu.jpg", audio: "/audio/alphabet/soft-sign.mp3" },
  { upper: "Э", lower: "э", image: "/images/alphabet/oyu.jpg",audio: "/audio/alphabet/e-reverse.mp3" },
  { upper: "Ю", lower: "ю", image: "/images/alphabet/oyu.jpg",audio: "/audio/alphabet/yu.mp3" },
  { upper: "Я", lower: "я", image: "/images/alphabet/oyu.jpg", audio: "/audio/alphabet/ya.mp3" },
];