import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import OurTeam from "./pages/OurTeam";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Volunteer from "./pages/Volunteer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/team" element={<OurTeam />}></Route>
          <Route path="/volunteer" element={<Volunteer />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
