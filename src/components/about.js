import { Link } from "react-router-dom";
import "../App.css";
import "animate.css";

function about() {
  return (
    <div className="about-page">
      <h1 className="animate__animated animate__fadeInUp">Jesse Beke</h1>
      <p className="animate__animated animate__fadeInUp">/'jes:e/ ['be:kE]</p>
      <p className="animate__animated animate__fadeInUp">
        Hi 👋🏿 i'm Jesse a Front-End developer passionate about the web and
        building web applications that scale; my stack revolves around HTML,
        CSS, javaScript(ES6), TypeScript, Reactjs, Nextjs & Firebase.
      </p>
      <div className="p-link">
        <p>
          <a title="Twitter" href="https://twitter.com/jessebeke">
            TW
          </a>
        </p>
        <p>
          <a title="Mail" href="mailto:jessebeke10@gmail.com">
            MAIL
          </a>
        </p>
        <p>
          <a title="Github" href="https://github.com/codejesse/">
            GIT
          </a>
        </p>
        <p>
          <a title="Download resume" href="https://twitter.com/jessebeke">
            RSM
          </a>
        </p>
      </div>
      <Link to="/works">
        <button className="nav-btn">WORKS &rarr;</button>
      </Link>
    </div>
  );
}

export default about;
