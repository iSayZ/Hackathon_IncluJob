import { Link } from "react-router-dom";
import "./HomeAbout.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function HomeAbout() {

  const { hash } = useLocation();

  useEffect(() => {
    console.log(hash)
    if (hash) {
      const element = document.getElementById("#");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div className="home_about_all">
      <hr className="hr_90" />
      <p>
        Notre concept et notre démarche pour le handicap et le marché de
        l’emploi dans la région Hauts-de-France
      </p>
      <div className="home_about_button">
        <Link to ="/a-propos#topp">
        <button className="btn one">En savoir plus</button>
        </Link>
      </div>
    </div>
  );
}

export default HomeAbout;
