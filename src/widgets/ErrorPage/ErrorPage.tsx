import { FC } from "react";
import "./ErrorPage.css";

interface IErrorProps {
  props: string | null;
}

export const ErrorPage: FC<IErrorProps> = ({ props }) => {
  return (
    <div className="errcontainer">
      <div>{props ? props : "404 Page not found!"}</div>
    </div>
  );
};
