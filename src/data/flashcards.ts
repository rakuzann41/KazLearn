export type Flashcard = {
  id: number;
  word: string;
  translation: string;
  example: string;
};

export type FlashcardSet = {
  slug: string;
  title: string;
  description: string;
  cards: Flashcard[];
};

export const flashcardSets: FlashcardSet[] = [
  {
    slug: "family",
    title: "Отбасы",
    description: "Отбасы мүшелеріне байланысты негізгі сөздер.",
    cards: [
      {
        id: 1,
        word: "ана",
        translation: "мама",
        example: "Менің анам үйде.",
      },
      {
        id: 2,
        word: "әке",
        translation: "папа",
        example: "Менің әкем жұмысқа барады.",
      },
      {
        id: 3,
        word: "аға",
        translation: "старший брат",
        example: "Менің ағам университетте оқиды.",
      },
      {
        id: 4,
        word: "іні",
        translation: "младший брат",
        example: "Менің інім мектепте оқиды.",
      },
      {
        id: 5,
        word: "әпке",
        translation: "старшая сестра",
        example: "Менің әпкем кітап оқиды.",
      },
      {
        id: 6,
        word: "әже",
        translation: "бабушка",
        example: "Менің әжем ауылда тұрады.",
      },
      {
        id: 7,
        word: "ата",
        translation: "дедушка",
        example: "Менің атам газет оқиды.",
      },
    ],
  },

  {
    slug: "food",
    title: "Тағам",
    description: "Күнделікті тағам мен сусын атаулары.",
    cards: [
      {
        id: 1,
        word: "алма",
        translation: "яблоко",
        example: "Мен алма жеймін.",
      },
      {
        id: 2,
        word: "нан",
        translation: "хлеб",
        example: "Біз таңғы асқа нан жейміз.",
      },
      {
        id: 3,
        word: "су",
        translation: "вода",
        example: "Мен су ішемін.",
      },
      {
        id: 4,
        word: "шай",
        translation: "чай",
        example: "Әжем шай ішеді.",
      },
      {
        id: 5,
        word: "қымыз",
        translation: "кумыс",
        example: "Қымыз — ұлттық сусын.",
      },
      {
        id: 6,
        word: "ет",
        translation: "мясо",
        example: "Біз кешкі асқа ет жейміз.",
      },
      {
        id: 7,
        word: "сүт",
        translation: "молоко",
        example: "Бала сүт ішеді.",
      },
    ],
  },

  {
    slug: "home",
    title: "Үй",
    description: "Үй мен күнделікті тұрмысқа байланысты сөздер.",
    cards: [
      {
        id: 1,
        word: "үй",
        translation: "дом",
        example: "Менің үйім үлкен.",
      },
      {
        id: 2,
        word: "бөлме",
        translation: "комната",
        example: "Менің бөлмем жарық.",
      },
      {
        id: 3,
        word: "үстел",
        translation: "стол",
        example: "Кітап үстелде жатыр.",
      },
      {
        id: 4,
        word: "орындық",
        translation: "стул",
        example: "Орындық терезенің жанында тұр.",
      },
      {
        id: 5,
        word: "есік",
        translation: "дверь",
        example: "Есік ашық тұр.",
      },
      {
        id: 6,
        word: "терезе",
        translation: "окно",
        example: "Терезе ашық.",
      },
      {
        id: 7,
        word: "ас үй",
        translation: "кухня",
        example: "Анам ас үйде тамақ дайындайды.",
      },
    ],
  },

  {
    slug: "city",
    title: "Қала",
    description: "Қалада жиі кездесетін орындар мен сөздер.",
    cards: [
      {
        id: 1,
        word: "дүкен",
        translation: "магазин",
        example: "Мен дүкенге барамын.",
      },
      {
        id: 2,
        word: "мектеп",
        translation: "школа",
        example: "Балалар мектепте оқиды.",
      },
      {
        id: 3,
        word: "саябақ",
        translation: "парк",
        example: "Біз саябақта серуендейміз.",
      },
      {
        id: 4,
        word: "көше",
        translation: "улица",
        example: "Бұл көше өте ұзын.",
      },
      {
        id: 5,
        word: "автобус",
        translation: "автобус",
        example: "Мен автобуспен жүремін.",
      },
      {
        id: 6,
        word: "аурухана",
        translation: "больница",
        example: "Аурухана осы көшеде орналасқан.",
      },
      {
        id: 7,
        word: "дәріхана",
        translation: "аптека",
        example: "Дәріхана дүкеннің жанында.",
      },
    ],
  },

  {
    slug: "nature",
    title: "Табиғат",
    description: "Табиғат пен қоршаған ортаға байланысты негізгі сөздер.",
    cards: [
      {
        id: 1,
        word: "тау",
        translation: "гора",
        example: "Біз тауға барамыз.",
      },
      {
        id: 2,
        word: "өзен",
        translation: "река",
        example: "Өзеннің суы таза.",
      },
      {
        id: 3,
        word: "орман",
        translation: "лес",
        example: "Орманда ағаш көп.",
      },
      {
        id: 4,
        word: "көл",
        translation: "озеро",
        example: "Көлдің суы салқын.",
      },
      {
        id: 5,
        word: "ағаш",
        translation: "дерево",
        example: "Аулада үлкен ағаш бар.",
      },
      {
        id: 6,
        word: "гүл",
        translation: "цветок",
        example: "Бақта әдемі гүлдер өседі.",
      },
      {
        id: 7,
        word: "аспан",
        translation: "небо",
        example: "Бүгін аспан ашық.",
      },
    ],
  },

  {
    slug: "daily",
    title: "Күнделікті сөздер",
    description: "Күнделікті сөйлесуде жиі қолданылатын қарапайым сөздер.",
    cards: [
      {
        id: 1,
        word: "сәлем",
        translation: "привет",
        example: "Сәлем, қалайсың?",
      },
      {
        id: 2,
        word: "рахмет",
        translation: "спасибо",
        example: "Көмегіңе рахмет.",
      },
      {
        id: 3,
        word: "иә",
        translation: "да",
        example: "Иә, мен барамын.",
      },
      {
        id: 4,
        word: "жоқ",
        translation: "нет",
        example: "Жоқ, мен білмеймін.",
      },
      {
        id: 5,
        word: "өтінемін",
        translation: "пожалуйста",
        example: "Кіріңіз, өтінемін.",
      },
      {
        id: 6,
        word: "кешіріңіз",
        translation: "извините",
        example: "Кешіріңіз, бұл орын бос па?",
      },
      {
        id: 7,
        word: "жақсы",
        translation: "хорошо",
        example: "Бүгін ауа райы жақсы.",
      },
    ],
  },
];