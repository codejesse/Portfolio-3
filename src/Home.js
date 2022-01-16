import "./App.css";
import { Link } from "react-router-dom";
import "animate.css";
import FloatingComponent from 'react-floating-component';

function Home() {
  return (
    <div className="container">
      <FloatingComponent><img className="animate__animated animate__fadeInUp" src="face.png" alt="Jesse" /></FloatingComponent>
      <h2 className="animate__animated animate__fadeInUp">
      Hi i'm <Link className="link" to="/about">Jesse Beke</Link>
      </h2>
      <p className="animate__animated animate__fadeInUp">Frontend developer extraordinaire</p>
      <Link to="about"><button className="animate__animated animate__fadeInUp">EXPLORE</button></Link>
    </div>
  );
}

export default Home;
