import "./Search.css"
import Filter from "../Filter/Filter";
import { useSettings } from "../../contexts/SettingsContext";
import { useSearch } from "../../contexts/SearchContext";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Search({sectors, disabilities}) {

    const { handleChangeJob, handleChangeLocation, job, location, goSearch } = useSearch();
    const { toggleFilterMenu, openFilter } = useSettings();
    const { hash } = useLocation();

    useEffect(() => {
        console.log(hash)
        if (hash) {
          const element = document.getElementById("search");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, [hash]);

    return (
        <div id="search" className="search_container">
            <h2>Trouvez votre futur emploi</h2>
            <p>Notre objectif est de permettre à tous de trouver l’emploi qui correspond à leur profil</p>
            <div>
                <input onChange={handleChangeJob} value={job} className="input input_search" type="text" placeholder="Tapez ici un emploi" />
            </div>
            <div>
                <input onChange={handleChangeLocation} value={location} className="input input_location" type="text" placeholder="Tapez ici une ville ou un département" />
            </div>
            <p>Utilisez les filtres avancés pour affiner votre recherche</p>
            {openFilter && <Filter sectors={sectors} disabilities={disabilities}/>}
            <button className="btn three" type="button" onClick={toggleFilterMenu}>Filtres</button>
            <button className="btn two" type="submit" onClick={goSearch}>Rechercher</button>
        </div>
    )
}

export default Search;