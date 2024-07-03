import { Outlet } from "react-router-dom";
import "./App.css";
import { SettingsProvider } from "./contexts/SettingsContext";
import SettingsMenu from "./components/SettingsMenu/SettingsMenu";
import TopBar from "./components/TopBar/TopBar";
import Footer from "./components/Footer/Footer"
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";

function App () {

  return (
    <SettingsProvider>
      <TopBar />
      {/* <SettingsMenu /> */}
      <BurgerMenu />
      <Outlet />
      <Footer />
    </SettingsProvider>
  );
};

export default App;
