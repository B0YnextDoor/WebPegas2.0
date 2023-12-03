import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Portfolio } from "./pages/PortfolioOld/Portfolio.tsx";
import { ErrorPage } from "./widgets/ErrorPage/ErrorPage.tsx";
import { Projects } from "./pages/Projects/Projects.tsx";
import { ProjectPage } from "./pages/Projects/ProjectPage/ProjectPage.tsx";
import { Vacancy } from "./pages/Vacancies/Vacancy.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />} />
      <Route path="/portfolio/:id" element={<Portfolio />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectPage />} />
      <Route path="/vacancy/:id" element={<Vacancy />} />
      <Route path="*" element={<ErrorPage props={null} />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
