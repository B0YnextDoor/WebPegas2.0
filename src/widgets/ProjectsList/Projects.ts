type Project = {
  name: string;
  color: string;
  img: string;
  id: string;
  style: any;
};

export const ProjectColl: Project[] = [
  {
    name: "SaluteBot",
    color: "rgb(255, 255, 255)",
    img: "url('/SaluteBot.jpg')",
    id: "7",
    style: {
      color: "rgb(0, 0, 0)",
      borderColor: "rgb(237, 153, 55)",
    },
  },
  {
    name: "FECIT SERVICE",
    color: "rgb(13, 13, 13)",
    img: "url('/LandingsFecit.jpg')",
    id: "1",
    style: {},
  },
  {
    name: "BOLDO BLOG",
    color: "rgb(255, 255, 255)",
    img: "url('/FunnelsBoldo.jpg')",
    id: "21",
    style: {
      color: "rgb(9, 39, 65)",
      borderColor: "blueviolet",
    },
  },
];
