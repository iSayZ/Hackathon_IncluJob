import { Outlet } from "react-router-dom";
import "./App.css";
import { SettingsProvider } from "./contexts/SettingsContext";
import SettingsBtn from "./components/SettingsMenu/SettingsMenu";

function App () {

  return (
    <SettingsProvider>
        <SettingsBtn />
        <Outlet />
    </SettingsProvider>
  );
};

export default App;
