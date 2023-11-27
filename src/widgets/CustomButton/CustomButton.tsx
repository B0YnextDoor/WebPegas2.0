import { useEffect } from "react";
import "./CutomButton.css";

export const CustomButton = ({ children }: any) => {
  useEffect(() => {
    const scriptContent = `
       (function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://cdn-ru.bitrix24.ru/b22393560/crm/form/loader_10.js');
      `;
    const scriptElement = document.createElement("script");
    scriptElement.innerHTML = scriptContent;
    document.body.appendChild(scriptElement);
    return () => {
      document.body.removeChild(scriptElement);
    };
  }, []);

  return (
    <div className="buttoncontainer">
      <script data-b24-form="click/10/83b21a" data-skip-moving="true"></script>
      <button>{children}</button>
      <br />
      <div style={{ fontSize: "14px", lineHeight: "16px" }}>
        * Если наши менеджеры не ответят вам в течении 10 минут.{" "}
        <span className="orangeColor">Скидка 10%</span> на первый заказ.
      </div>
    </div>
  );
};
