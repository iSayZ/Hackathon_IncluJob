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
    const [disability, setDisability] = useState("");

    const handleChangeJob = (e) => {
        setJob(e.target.value)
        console.log("job =>", job)
    }

    const handleChangeSector = (e) => {
        setSector(e.target.value)
        console.log("sector =>", sector)
    }

    const handleChangeDisability = (e) => {
      setDisability(e)
      console.log("Disability =>", disability)
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
        setResult(response.data)
    } catch(err) {
      console.log(err)
    }
    }

      return (
          <SearchContext.Provider value={{ handleChangeJob, job, handleChangeSector, handleChangeLocation, location, handleChangeContract, handleChangeDisability, goSearch }}>
              {children}
          </SearchContext.Provider>
      )
  }
  // J'exporte mon hook personnalisé
  export const useSearch =
    () => useContext(SearchContext);