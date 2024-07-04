import {
    createContext, useContext, useState, useEffect
  } from "react";
import myAxios from "../services/myAxios"

  const SearchContext = createContext();

  export function SearchProvider({
    children,
  }) {

    const [result, setResult] = useState();

    const [job, setJob] = useState("");
    const [sector, setSector] = useState("");
    const [location, setLocation] = useState("");
    const [contract, setContract] = useState({});
    const [disability, setDisability] = useState({});

    function processResults(results) {
      // Utiliser un Set pour éliminer les doublons basés sur l'id_offer
      const uniqueResults = new Map();
  
      results.forEach(result => {
          if (!uniqueResults.has(result.id_offer)) {
              uniqueResults.set(result.id_offer, result);
          }
      });
  
      // Convertir le Map en tableau
      const uniqueArray = Array.from(uniqueResults.values());
  
      // Mélanger les objets de manière aléatoire
      for (let i = uniqueArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [uniqueArray[i], uniqueArray[j]] = [uniqueArray[j], uniqueArray[i]];
      }
  
      return uniqueArray;
  }

    const handleChangeJob = (e) => {
        setJob(e.target.value)
        console.log("job =>", job)
    }

    const handleChangeSector = (e) => {
        setSector(e.target.value)
        console.log("sector =>", sector)
    }

    const handleChangeDisability = (disabilityId) => {
      
      // Vérifier si la clé existe déjà dans l'état contract
      if (!disability.hasOwnProperty(disabilityId)) {
        // Mettre à jour l'état en ajoutant la nouvelle clé et sa valeur
        setDisability({ ...disability, [disabilityId]: disabilityId });
      } else {
        // Si la clé existe déjà, la supprimer pour désélectionner la case à cocher
        const updatedDisability = { ...disability };
        delete updatedDisability[disabilityId];
        setDisability(updatedDisability);
      }
      console.log("disability =>", disability)
    }

    const handleChangeLocation = (e) => {
        setLocation(e.target.value)
        console.log("location =>", location)
    }

    const handleChangeContract = (e) => {
      const { name, value } = e.target;
      
      // Vérifier si la clé existe déjà dans l'état contract
      if (!contract.hasOwnProperty(name)) {
        // Mettre à jour l'état en ajoutant la nouvelle clé et sa valeur
        setContract({ ...contract, [name]: value });
      } else {
        // Si la clé existe déjà, la supprimer pour désélectionner la case à cocher
        const updatedContract = { ...contract };
        delete updatedContract[name];
        setContract(updatedContract);
      }
      console.log("contract =>", contract)
    }

    const goSearch = async (e) => {
      e.preventDefault();
    try {
      const response = await myAxios.post(
        `/api/offers/filter`,
        {
          job,
          sector,
          location,
          contract,
          disability
        });

        console.log(response.data)
        setResult(processResults(response.data))
    } catch(err) {
      console.log(err)
    }
    }

      return (
          <SearchContext.Provider value={{ handleChangeJob, job, handleChangeSector, handleChangeLocation, location, handleChangeContract, handleChangeDisability, goSearch, result }}>
              {children}
          </SearchContext.Provider>
      )
  }
  // J'exporte mon hook personnalisé
  export const useSearch =
    () => useContext(SearchContext);