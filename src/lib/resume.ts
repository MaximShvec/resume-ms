import type {
  Award,
  ContactChannel,
  ExperienceRole,
  Reason,
  SkillGroup,
} from "@/lib/types";

export const profile = {
  name: ["Максим", "Швец"] as const,
  role: "Frontend Consultant",
  title: "Максим Швец — Frontend Consultant",
  description:
    "Frontend-разработчик с 9+ лет опыта. Специализация: семантичная адаптивная вёрстка, интеграция в CMS, Pixel Perfect.",
  phoneDisplay: "+375 44 732-04-64",
  phoneHref: "+375447320464",
  email: "maximshvec65@gmail.com",
  telegram: "fennyka",
  githubLogin: "MaximShvec",
} as const;

export const about = [
  "Frontend-разработчик с 9+ лет опыта. Специализируюсь на создании чистой, семантичной и адаптивной вёрстки, готовой к бесшовной интеграции в любые CMS (WordPress, Bitrix, OpenCart) и шаблоны. Работаю с макетами Figma, PSD, AI.",
  "В своей практике делаю акцент на высокое качество кода, внимание к деталям и полное соответствие дизайн-макетам. Гарантирую адаптивность, кросс-браузерность и понятную структуру кода для лёгкой передачи проекта команде разработчиков. Всегда на связи, оперативно вношу правки и сопровождаю проект до полного завершения. При необходимости использую Pixel Perfect, но с приоритетом на корректное поведение элементов в браузере и лучшие практики адаптации.",
] as const;

export const contacts: ContactChannel[] = [
  {
    kind: "phone",
    label: "M",
    value: profile.phoneDisplay,
    href: `tel:${profile.phoneHref}`,
  },
  {
    kind: "email",
    label: "E",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    kind: "telegram",
    label: "TG",
    value: `@${profile.telegram}`,
    href: `https://t.me/${profile.telegram}`,
  },
];

export const award: Award = {
  title: "Лауреат Awwwards (Site of the Day)",
  meta: "Проект «The Beyond» · 2023",
  text: "Проект получил награду Site of the Day за выдающийся дизайн и техническую реализацию. Разработал главный фронтенд с нуля.",
};

export const skills: SkillGroup[] = [
  {
    title: "HTML / CSS",
    items:
      "HTML5, CSS3, SCSS, Pug, БЭМ (BEM), Flexbox, CSS Grid, Adaptive / Responsive Design, Pixel Perfect, кросс-браузерная вёрстка",
  },
  {
    title: "JavaScript",
    items: "ES6+, Vue.js (Vue CLI, Vuex, Vue Router), React (базовый уровень)",
  },
  {
    title: "Инструменты",
    items:
      "Figma (продвинутый уровень), Adobe Photoshop, Adobe Illustrator, Git (GitFlow), Webpack, Gulp",
  },
  {
    title: "Оптимизация",
    items: "Core Web Vitals, Lighthouse, оптимизация изображений, lazy loading",
  },
];

export const experience: ExperienceRole[] = [
  {
    title: "Ведущий frontend-разработчик",
    place: "Проект The Beyond (лауреат Awwwards)",
    summary:
      "Разработал главный интерфейс для сайта, получившего престижную награду Awwwards. Обеспечил высокое качество кода, сложную анимацию и уникальный пользовательский опыт.",
    highlights: [
      "Разработал архитектуру фронтенда с нуля, обеспечив масштабируемость и поддерживаемость кода",
      "Реализовал сложные анимации и интерактивные элементы на чистом CSS и JavaScript",
      "Добился Pixel Perfect соответствия дизайну при одновременной оптимизации производительности",
      "Обеспечил кросс-браузерную совместимость и корректное отображение на всех типах устройств",
      "Проект получил награду Awwwards Site of the Day",
    ],
    projects: [
      {
        href: "https://www.awwwards.com/sites/the-beyond",
        host: "awwwards.com/sites/the-beyond",
        description: "The Beyond — главный фронтенд для сайта, награждённого Awwwards",
      },
    ],
  },
  {
    title: "Frontend-разработчик",
    place: "Международные проекты (BalancePay, AnydayCharter, EPBar)",
    summary:
      "Участвовал в разработке и вёрстке лендингов и корпоративных сайтов для зарубежных заказчиков, обеспечивая мультиязычность и интернационализацию интерфейсов.",
    highlights: [
      "Выполнял вёрстку по макетам Figma с использованием HTML5, SCSS, Pug, Flex/Grid",
      "Адаптировал сложные интерфейсы под все типы устройств (mobile-first подход)",
      "Готовил чистый, документированный код для передачи бэкенд-разработчикам и интеграции в CMS",
      "Участвовал в код-ревью и поддерживал высокое качество кодовой базы",
      "Работал с мультиязычными сайтами (ru/en/lv/de)",
    ],
    projects: [
      {
        href: "https://balancepay.org/en",
        host: "balancepay.org/en",
        description: "Международная платёжная система. Вёрстка лендингов, адаптация под все устройства",
      },
      {
        href: "https://my.balancepay.org/",
        host: "my.balancepay.org",
        description:
          "Основной кабинет BalancePay. Сначала собрал на Vue, затем переписал на Next.js",
      },
      {
        href: "https://anydaycharter.com/ru",
        host: "anydaycharter.com/ru",
        description: "Сервис аренды яхт. Разработка каталога с фильтрацией, интеграция с бэкендом",
      },
      {
        href: "https://epbar.eu/en",
        host: "epbar.eu/en",
        description: "Европейский барный проект. Мультиязычный корпоративный сайт (ru/en/de/lv)",
      },
      {
        href: "https://drumstarz.lv/lv",
        host: "drumstarz.lv/lv",
        description: "Музыкальная студия в Латвии. Портфолио, форма онлайн-записи, интеграция с CMS",
      },
    ],
  },
  {
    title: "Frontend-разработчик",
    place: "CSCase, Uniq-Cosmetic, GoldenInvestment, PulseofTG",
    summary:
      "Выполнил полный цикл вёрстки для проектов в сфере игр, косметики и инвестиций. Вёрстка выполнялась с прицелом на дальнейшую интеграцию в различные CMS.",
    highlights: [
      "Создавал компонентную архитектуру с использованием Vue.js (Vue CLI, Vuex)",
      "Разрабатывал сложные интерфейсы с формами обратной связи и калькуляторами",
      "Верстал промо-страницы и спецпроекты",
      "Обеспечивал поддержку и развитие существующих проектов",
      "Работал с макетами в Adobe Photoshop и Illustrator",
    ],
    projects: [
      {
        href: "https://cscase.com",
        host: "cscase.com",
        description: "Сервис кейсов для Counter-Strike. Разработка интерфейса, адаптивная вёрстка",
      },
      {
        href: "https://uniq-cosmetic.ru",
        host: "uniq-cosmetic.ru",
        description: "Косметический бренд. Интернет-магазин, каталог продукции, корзина",
      },
      {
        href: "https://goldeninvestmentdeals.com",
        host: "goldeninvestmentdeals.com",
        description: "Инвестиционная платформа. Лендинг с калькулятором доходности",
      },
      {
        href: "https://pulseoftg.me",
        host: "pulseoftg.me",
        description:
          "Информационный портал / аналитический сервис. Разработка интерфейса, адаптивная вёрстка, интеграция с бэкендом",
      },
      {
        href: "https://specials.sports.ru/nachtostavish/",
        host: "specials.sports.ru/nachtostavish/",
        description: "Спецпроект для Sports.ru. Промо-страница с анимацией и нестандартным дизайном",
      },
    ],
  },
];

export const reasons: Reason[] = [
  {
    title: "Понятный код",
    text: "пишу так, чтобы другой разработчик легко разобрался и продолжил работу",
  },
  {
    title: "Всегда на связи",
    text: "отвечаю в течение часа в рабочее время (Telegram @fennyka)",
  },
  {
    title: "Гибкость",
    text: "могу подключиться к проекту на любом этапе: от вёрстки по Figma до доработки существующего кода",
  },
  {
    title: "Аргументирую решения",
    text: "если вижу, что макет можно сделать лучше и удобнее для пользователей, обязательно предложу вариант",
  },
];

export const ndaNote =
  "Часть проектов выполнена под NDA и не может быть представлена в открытом доступе. По запросу могу предоставить дополнительную информацию.";
