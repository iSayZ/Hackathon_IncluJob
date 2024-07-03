import "./Search.css"

function Search() {
    return (
        <div className="search_container">
            <h2>Trouvez votre futur emploi</h2>
            <p>Notre objectif est de permettre à tous de trouver l’emploi qui correspond à leur profil</p>
            <div>
                <input className="input" type="text" placeholder="Tapez ici un emploi ou un secteur" />
            </div>
            <div>
                <input className="input" type="text" placeholder="Tapez ici une ville ou un département" />
            </div>
            <p>Utilisez les filtres avancés pour affiner votre recherche</p>
            <button className="btn_show_filter no_btn zoom" type="button" aria-label="Afficher les filtres de recherche"><img src="/assets/images/icons/down-arrow.png" alt="Icone de chevron vers le bas" /></button>
            <button className="btn three" type="button">Filtres</button>
            <button className="btn two" type="button">Rechercher</button>
        </div>
    )
}

export default Search;