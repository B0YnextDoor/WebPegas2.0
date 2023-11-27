import { Header } from "../widgets/Header/Header";
import "./Portfolio.css";
import { useParams } from "react-router-dom";
import { Portfolios } from "./Portfolios";
import { ErrorPage } from "../widgets/ErrorPage/ErrorPage";
import { PortfolioCard } from "../widgets/PortfolioCard/PortfolioCard";

export const Portfolio = () => {
  const { id } = useParams();
  if (!id) {
    return (
      <ErrorPage props={"500 Internal Server Error. Can't load portfolio."} />
    );
  }
  const portfolio = Portfolios[+id - 1];
  return (
    <div className="container">
      <Header />
      <div className="portfolio">
        <>
          <h2>{portfolio.name}</h2>
          <PortfolioCard examples={portfolio.examples} />
        </>
      </div>
    </div>
  );
};
