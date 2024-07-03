import { Outlet } from "react-router-dom";
import "./App.css";
import { SettingsProvider } from "./contexts/SettingsContext";
import SettingsMenu from "./components/SettingsMenu/SettingsMenu";
import TopBar from "./components/TopBar/TopBar";
import Footer from "./components/Footer/Footer"

function App () {

  return (
    <SettingsProvider>
      <TopBar />
      <Outlet />
      <Footer />
    </SettingsProvider>
  );
};

export default App;
