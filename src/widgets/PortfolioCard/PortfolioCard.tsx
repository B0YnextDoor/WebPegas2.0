import { FC, useState, useEffect } from "react";
import "./PortfolioCard.css";
import {
  IPortfolioProps,
  PortfolioExmplType,
} from "../../pages/PortfolioOld/Portfolios";
import { animateScroll as scroll } from "react-scroll";

export const PortfolioCard: FC<IPortfolioProps> = ({ examples, show }) => {
  const [shownel, setShownEl] = useState<PortfolioExmplType>({
    path: "",
    height: 0,
    width: 0,
    infoImgs: [],
  });
  const handleClickShowList = (e: any) => {
    e.preventDefault();
    setShownEl(examples.filter((ex) => ex.path == e.target.id)[0]);
    scroll.scrollTo(600);
  };
  const handleClickHideList = (e: any) => {
    e.preventDefault();
    scroll.scrollToTop({ smooth: true, delay: 0, duration: 200 });
    setShownEl({
      path: "",
      height: 0,
      width: 0,
      infoImgs: [],
    });
  };
  useEffect(() => {
    scroll.scrollToTop({ smooth: false, delay: 0, duration: 0 });
  }, []);
  return (
    <div className="cardscontainer" style={show ? { display: "none" } : {}}>
      <div className="btncont">
        {examples.map((el: any) => (
          <div key={el.path} className="portbtn">
            <button onClick={(e) => handleClickShowList(e)}>
              <img
                src={`${el.path}.jpg`}
                id={el.path}
                alt=""
                width={el.width}
                height={el.height}
              />
            </button>
          </div>
        ))}
      </div>
      {!shownel.height ? (
        <></>
      ) : (
        <button onClick={(e) => handleClickHideList(e)}>
          <div className="spreadList">
            <img
              src={`${shownel.path}.jpg`}
              alt=""
              width={shownel.width}
              height={shownel.height}
            />
            {shownel.infoImgs.map((image) => (
              <img
                key={image.path}
                src={`${shownel.path}${image.path}`}
                alt=""
                width={image.width}
                height={image.height}
              />
            ))}
          </div>
        </button>
      )}
    </div>
  );
};
