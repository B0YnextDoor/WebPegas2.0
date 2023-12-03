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
  width: number;
  infoImgs: PhotoType[];
};

type PhotoType = {
  path: string;
  width: number;
  height: number;
};

export const Portfolios: PortfolioType[] = [
  {
    name: "Готовые сайты",
    examples: [
      {
        path: "/BuildedSitesFinsgram",
        height: 375,
        width: 300,
        infoImgs: [
          { path: "1.jpg", width: 300, height: 531.65 },
          { path: "2.jpg", width: 300, height: 554 },
          { path: "3.jpg", width: 300, height: 403 },
          { path: "5.jpg", width: 300, height: 375 },
          { path: "4.jpg", width: 300, height: 677 },
          { path: "8.jpg", width: 300, height: 551.51 },
          { path: "6.jpg", width: 300, height: 533.3 },
          { path: "7.jpg", width: 300, height: 450.87 },
          { path: "9.jpg", width: 300, height: 300 },
        ],
      },
      {
        path: "/BuildedSitesSedona",
        height: 375,
        width: 300,
        infoImgs: [
          { path: "1.jpg", width: 300, height: 508 },
          { path: "2.jpg", width: 300, height: 331.52 },
          { path: "3.jpg", width: 300, height: 363.5 },
          { path: "4.jpg", width: 300, height: 401 },
          { path: "5.jpg", width: 300, height: 533.43 },
        ],
      },
    ],
  },
  {
    name: "Интернет-магазины",
    examples: [
      {
        path: "/IShopsTechnoMart",
        height: 248.3,
        width: 300,
        infoImgs: [
          { path: "2.jpg", width: 300, height: 157.7 },
          { path: "1.jpg", width: 300, height: 138.3 },
          { path: "3.jpg", width: 300, height: 157.16 },
          { path: "4.jpg", width: 300, height: 198.22 },
        ],
      },
    ],
  },
  {
    name: "Landing Pages",
    examples: [
      {
        path: "/LandingsFecit",
        height: 450,
        width: 300,
        infoImgs: [
          { path: "1.jpg", width: 300, height: 533 },
          { path: "2.jpg", width: 300, height: 520 },
          { path: "3.jpg", width: 300, height: 463 },
          { path: "4.jpg", width: 300, height: 470 },
          { path: "5.jpg", width: 300, height: 533 },
          { path: "6.jpg", width: 300, height: 374 },
        ],
      },
      {
        path: "/LandingsActivebox",
        height: 333,
        width: 300,
        infoImgs: [
          { path: "1.jpg", width: 300, height: 300 },
          { path: "2.jpg", width: 300, height: 300 },
          { path: "3.jpg", width: 300, height: 300 },
          { path: "4.jpg", width: 300, height: 375 },
          { path: "5.jpg", width: 300, height: 375 },
          { path: "6.jpg", width: 300, height: 375 },
          { path: "7.jpg", width: 300, height: 375 },
          { path: "8.jpg", width: 300, height: 470 },
        ],
      },
    ],
  },
  {
    name: "Мобильная разработка",
    examples: [
      {
        path: "/MobileDevWeatherApp",
        height: 274,
        width: 300,
        infoImgs: [{ path: "1.jpg", width: 300, height: 400.56 }],
      },
      {
        path: "/MobileDevPizzaApp",
        height: 264,
        width: 300,
        infoImgs: [
          { path: "1.jpg", width: 300, height: 490.83 },
          { path: "2.jpg", width: 300, height: 374.86 },
          { path: "3.jpg", width: 300, height: 400 },
          { path: "4.jpg", width: 300, height: 462.5 },
        ],
      },
    ],
  },
  {
    name: "Обучение нейросетей",
    examples: [
      {
        path: "/NeuralNetsGeneric",
        height: 588.61,
        width: 300,
        infoImgs: [
          { path: "1.jpg", width: 300, height: 347 },
          { path: "2.jpg", width: 300, height: 301.43 },
          { path: "8.jpg", width: 300, height: 293.3 },
          { path: "5.jpg", width: 300, height: 288.34 },
          { path: "6.jpg", width: 300, height: 269.2 },
          { path: "7.jpg", width: 300, height: 236.7 },
          { path: "3.jpg", width: 250, height: 376.77 },
          { path: "4.jpg", width: 300, height: 376.77 },
        ],
      },
      {
        path: "/NeuralNetsSemili",
        height: 582,
        width: 300,
        infoImgs: [
          { path: "1.jpg", width: 300, height: 453.21 },
          { path: "2.jpg", width: 284, height: 354.87 },
          { path: "3.jpg", width: 284, height: 403 },
          { path: "6.jpg", width: 300, height: 331.41 },
          { path: "4.jpg", width: 300, height: 413.11 },
          { path: "5.jpg", width: 300, height: 268.42 },
        ],
      },
    ],
  },
  {
    name: "Создание автоворонок",
    examples: [
      {
        path: "/FunnelsBoldo",
        height: 450,
        width: 300,
        infoImgs: [
          { path: "1.jpg", width: 300, height: 375 },
          { path: "2.jpg", width: 300, height: 375 },
          { path: "3.jpg", width: 300, height: 444 },
          { path: "4.jpg", width: 300, height: 453 },
          { path: "5.jpg", width: 300, height: 587.54 },
        ],
      },
    ],
  },
];
