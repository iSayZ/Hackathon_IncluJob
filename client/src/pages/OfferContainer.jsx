import "./styles/OfferContainer.css"
import { useSearch } from "../contexts/SearchContext";
import CardOfferHome from "../components/CardOfferHome/CardOfferHome";

function OfferContainer () {

    const { result } = useSearch();

    return (
        <>
            {result && <>
            <h2 id="title_result">Resultat de votre recherche :</h2>
        <div className="offer_container">
             {result.map((offer) =>
                <CardOfferHome offer={offer} />
            )}
        </div>
            </>}
        </>
    )
}

export default OfferContainer;