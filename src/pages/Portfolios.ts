export interface IPortfolioProps {
  examples: PortfolioExmplType[];
}

type PortfolioType = {
  name: string;
  examples: PortfolioExmplType[];
};

export type PortfolioExmplType = {
  path: string;
  height: number;
  infoImgs: PhotoType[];
};

type PhotoType = {
  path: string;
  height: number;
};

export const Portfolios: PortfolioType[] = [
  {
    name: "Готовые сайты",
    examples: [
      {
        path: "/src/static/BuildedSitesFinsgram",
        height: 375,
        infoImgs: [
          { path: "1.jpg", height: 531.65 },
          { path: "2.jpg", height: 554 },
          { path: "3.jpg", height: 403 },
          { path: "5.jpg", height: 375 },
          { path: "4.jpg", height: 677 },
          { path: "8.jpg", height: 551.51 },
          { path: "6.jpg", height: 533.3 },
          { path: "7.jpg", height: 450.87 },
          { path: "9.jpg", height: 300 },
        ],
      },
      {
        path: "/src/static/BuildedSitesSedona",
        height: 375,
        infoImgs: [
          { path: "1.jpg", height: 508 },
          { path: "2.jpg", height: 331.52 },
          { path: "3.jpg", height: 363.5 },
          { path: "4.jpg", height: 401 },
          { path: "5.jpg", height: 533.43 },
        ],
      },
    ],
  },
  {
    name: "Интернет-магазины",
    examples: [
      {
        path: "/src/static/IShopsTechnoMart",
        height: 248.3,
        infoImgs: [
          { path: "2.jpg", height: 157.7 },
          { path: "1.jpg", height: 138.3 },
          { path: "3.jpg", height: 157.16 },
          { path: "4.jpg", height: 198.22 },
        ],
      },
    ],
  },
  {
    name: "Landing Pages",
    examples: [
      {
        path: "/src/static/LandingsFecit",
        height: 450,
        infoImgs: [
          { path: "1.jpg", height: 533 },
          { path: "2.jpg", height: 520 },
          { path: "3.jpg", height: 463 },
          { path: "4.jpg", height: 470 },
          { path: "5.jpg", height: 533 },
          { path: "6.jpg", height: 374 },
        ],
      },
      {
        path: "/src/static/LandingsActivebox",
        height: 333,
        infoImgs: [
          { path: "1.jpg", height: 300 },
          { path: "2.jpg", height: 300 },
          { path: "3.jpg", height: 300 },
          { path: "4.jpg", height: 375 },
          { path: "5.jpg", height: 375 },
          { path: "6.jpg", height: 375 },
          { path: "7.jpg", height: 375 },
          { path: "8.jpg", height: 470 },
        ],
      },
    ],
  },
  {
    name: "Мобильная разработка",
    examples: [
      {
        path: "/src/static/MobileDevWeatherApp",
        height: 274,
        infoImgs: [{ path: "1.jpg", height: 400.56 }],
      },
      {
        path: "/src/static/MobileDevPizzaApp",
        height: 264,
        infoImgs: [
          { path: "1.jpg", height: 490.83 },
          { path: "2.jpg", height: 374.86 },
          { path: "3.jpg", height: 400 },
          { path: "4.jpg", height: 462.5 },
        ],
      },
    ],
  },
  {
    name: "Обучение нейросетей",
    examples: [
      {
        path: "/src/static/NeuralNetsGeneric",
        height: 588.61,
        infoImgs: [],
      },
      {
        path: "/src/static/NeuralNetsSemili",
        height: 582,
        infoImgs: [],
      },
    ],
  },
  {
    name: "Создание автоворонок",
    examples: [
      {
        path: "/src/static/FunnelsBoldo",
        height: 570,
        infoImgs: [
          { path: "1.jpg", height: 375 },
          { path: "2.jpg", height: 375 },
          { path: "3.jpg", height: 444 },
          { path: "4.jpg", height: 453 },
          { path: "5.jpg", height: 587.54 },
        ],
      },
    ],
  },
];
