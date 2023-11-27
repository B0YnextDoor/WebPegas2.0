import "./App.css";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Contacts } from "./components/Contacts/Contacts";
import { MainInfo } from "./components/MainInfo/MainInfo";
import { Services } from "./components/Services/Servises";
import { Footer } from "./widgets/Footer/Footer";

function App() {
  return (
    <>
      <MainInfo />
      <main>
        <Services />
        <AboutUs />
        <Contacts />
        <Footer />
      </main>
    </>
  );
}

export default App;
