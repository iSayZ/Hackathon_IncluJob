import "./Filter.css"
import { useSettings } from "../../contexts/SettingsContext";
import { useSearch } from "../../contexts/SearchContext";
import { useState } from "react";

function Filter({sectors, disabilities}) {

    const { handleChangeSector, handleChangeContract, handleChangeDisability } = useSearch();
    const { openFilter } = useSettings();

    const [activated, setActivated] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false
    });

    const active = (disabilityId) => {
        handleChangeDisability(disabilityId);
    
        setActivated(prevState => ({
            ...prevState,
            [disabilityId]: !prevState[disabilityId]
        }));
        console.log(activated)
    };

    return (
        <div className={openFilter ? "filter open" : "filter"}>
            <div className="filter_checkbox">
                <div className="checkbox_container">
                    <input type="checkbox" id="cdi" name="cdi" value="cdi" onChange={handleChangeContract}/>
                    <label htmlFor="cdi">CDI</label>
                </div>
                <div>
                    <input type="checkbox" id="cdd" name="cdd" value="cdd" onChange={handleChangeContract}/>
                    <label htmlFor="cdd">CDD</label>
                </div>
                <div>
                    <input type="checkbox" id="remote" name="remote" value="remote" onChange={handleChangeContract}/>
                    <label htmlFor="remote">Télétravail</label>
                </div>
            </div>
            <select className="input input_chevron" id="" onChange={handleChangeSector}>
            <option value="">Sélectionnez un secteur d'activité</option>
            {sectors.map((sector)=>
                <option key={sector.id_sector} value={sector.id_sector}>{sector.name}</option>
            )}
            </select>
            <div className="handicap_filter">
                <p>Handicap</p>
                <div className="handicap_filter_container">
                    {disabilities.map((disability) =>
                        <button key={disability.id_disability} onClick={() => active(disability.id_disability)} className={activated[disability.id_disability] ? "handicap_btn no_btn active" : "handicap_btn no_btn"} type="button" aria-label={`Bouton de sélection de l'${disability.name}`}><img src={activated[disability.id_disability] ? `/assets/images/icons/${disability.id_disability}.svg` : disability.pictogram} alt={`Icone de l'${disability.name}`} /></button>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Filter;