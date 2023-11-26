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
        path: "",
        height: 0,
        infoImgs: [],
      },
    ],
  },
  {
    name: "Интернет-магазин",
    examples: [
      {
        path: "",
        height: 0,
        infoImgs: [],
      },
    ],
  },
  {
    name: "Landing Page",
    examples: [
      {
        path: "/src/assets/Landings/Boldo",
        height: 570,
        infoImgs: [
          { path: "1.jpg", height: 375 },
          { path: "2.jpg", height: 375 },
          { path: "3.jpg", height: 444 },
          { path: "4.jpg", height: 453 },
          { path: "5.jpg", height: 587.54 },
        ],
      },
      {
        path: "/src/assets/Landings/Fecit",
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
        path: "/src/assets/Landings/Activebox",
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
        path: "",
        height: 0,
        infoImgs: [],
      },
    ],
  },
  {
    name: "Обучение нейросетей",
    examples: [
      {
        path: "",
        height: 0,
        infoImgs: [],
      },
    ],
  },
  {
    name: "Создание автоворонок",
    examples: [
      {
        path: "",
        height: 0,
        infoImgs: [],
      },
    ],
  },
];
