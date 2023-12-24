import "./Portfolio.css";
import { useParams } from "react-router-dom";
import { Portfolios } from "./Portfolios";
import { ErrorPage } from "../../widgets/ErrorPage/ErrorPage";
import { PortfolioCard } from "../../widgets/PortfolioCard/PortfolioCard";
import { Header } from "../../widgets/Header/Header";
import { useState } from "react";

export const Portfolio = () => {
  const { id } = useParams();
  if (!id) {
    return (
      <ErrorPage props={"500 Internal Server Error. Can't load portfolio."} />
    );
  }
  const portfolio = Portfolios[+id - 1];
  const [show, setShow] = useState(false);
  return (
    <div className="container">
      <Header show={show} setShow={setShow} />
      <div className="portfolio">
        <>
          <h2 style={show ? { display: "none" } : {}}>{portfolio.name}</h2>
          <PortfolioCard examples={portfolio.examples} show={show} />
        </>
      </div>
    </div>
  );
};
