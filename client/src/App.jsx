import { Outlet } from "react-router-dom";
import "./App.css";
import { SettingsProvider } from "./contexts/SettingsContext";
import { SearchProvider } from "./contexts/SearchContext";
import SettingsButton from "./components/SettingsButton/SettingsButton";
import TopBar from "./components/TopBar/TopBar";
import Footer from "./components/Footer/Footer";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import HomeFeature from "./components/HomeFeature/HomeFeature";

function App() {
  return (

    <SearchProvider>
      <SettingsProvider>
        <TopBar />
        <SettingsButton />
        <BurgerMenu />
        <Outlet />
        <Footer />
      </SettingsProvider>
    </SearchProvider>

  );
}

export default App;
