import "../App.css";
import data from "./data";
import "animate.css";
import { Link } from "react-router-dom";

function works() {
  return (
    <div id="container">
      {data.map((projects) => (
        <div className="card animate__animated animate__fadeInDown" key={projects.id}>
          <img src={projects.img} alt="" />
          <div className="card__details">
          <div className="card_struc">
            <div className="name animate__animated animate__fadeInUp">{projects.title}</div>
            <p>{projects.desc}</p>
            <a href={projects.site}><button>Visit</button></a>
            <a href={projects.github}><button>Github</button></a>
            </div>
          </div>
        </div>
      ))}
      <Link to="/"><button className="wrk-btn animate__animated animate__fadeInUp">HOME &rarr;</button></Link>
    </div>
  );
}
export default works;
