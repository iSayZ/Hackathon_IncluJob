import { Outlet } from "react-router-dom";
import "./App.css";
import { SettingsProvider } from "./contexts/SettingsContext";
import SettingsButton from "./components/SettingsButton/SettingsButton";
import TopBar from "./components/TopBar/TopBar";
import Footer from "./components/Footer/Footer";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import HomeFeature from "./components/HomeFeature/HomeFeature";

function App() {
  return (
    <SettingsProvider>
      <TopBar />
      <SettingsButton />
      <BurgerMenu />
      <Outlet />
      <HomeFeature />
      <Footer />
    </SettingsProvider>
  );
}

export default App;
