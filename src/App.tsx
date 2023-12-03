import "./App.css";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { MainInfo } from "./components/MainInfo/MainInfo";
import { Projects } from "./components/Projects/Projects";
import { Reviews } from "./components/Reviews/Reviews";
import { Services } from "./components/Services/Servises";
import { Vacancies } from "./components/Vacancies/Vacancies";
import { Footer } from "./widgets/Footer/Footer";

function App() {
  return (
    <>
      <MainInfo />
      <main>
        <Services />
        <AboutUs />
        <Projects />
        <Reviews />
        <Vacancies />
      </main>
      <Footer />
    </>
  );
}

export default App;
