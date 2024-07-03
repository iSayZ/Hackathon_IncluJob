import "./SettingsMenu.css"
import { useSettings } from "../../contexts/SettingsContext";
import { Link } from "react-router-dom";

function SettingsMenu () {

    const { hangleToggleTheme, hangleToggleSize } = useSettings();

    return (
        <>
                    <nav>
          <Link to="/">Accueil</Link>
          <Link to="/">A propos</Link>
          <Link to="/">Offres</Link>
        </nav>
        <h1>Change Theme</h1>
        <button onClick={hangleToggleTheme}>
          Toggle Theme
        </button>
        <h1>Change Size</h1>
        <button onClick={hangleToggleSize}>
          Toggle Size
        </button>
        <button aria-label="ceci est un test" className="btn one">Btn 1</button>
        <button className="btn two">Btn 2</button>
        <button className="btn three">Btn 3</button>
        <input className="input" type="text" placeholder="test" />
        </>
    )
}

export default SettingsMenu;