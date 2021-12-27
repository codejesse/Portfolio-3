import "../App.css";
import { Routes, Route} from "react-router-dom";
import About from "./about";
import Home from "../Home";
import Works from "./works";

function Nav() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/works' element={<Works />}></Route>
      </Routes>
    </div>
  );
}

export default Nav;
