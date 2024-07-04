import "./styles/HomePage.css";
import Search from "../components/Search/Search";
import { useEffect, useState } from "react";
import myAxios from "../services/myAxios";
import HomeFeature from "../components/HomeFeature/HomeFeature";
import DemoCarousel from "../components/Caroussel/Caroussel";

function HomePage() {
  const [disabilities, setDisabilities] = useState();
  const [sectors, setSectors] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const [disabilitiesResponse, sectorsResponse] = await Promise.all([
          myAxios.get(`/api/disabilities`),
          myAxios.get(`/api/sectors`),
        ]);
        setDisabilities(disabilitiesResponse.data);
        setSectors(sectorsResponse.data);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  return (
    <div className="homepage">
      <Search sectors={sectors} disabilities={disabilities} />
      <HomeFeature />
      <DemoCarousel />
    </div>
  );
}

export default HomePage;
