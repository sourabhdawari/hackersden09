import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "jquery/dist/jquery";
import $ from "jquery";
import WriteUp from "./Pages/WriteUp";
import Uaa from "./Pages/Blog/Uaa";
import Gds from "./Pages/Blog/Gds";
import Oscp from "./Pages/Blog/Oscp";
import Contact from "./Pages/Contact";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/hackersden09" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<WriteUp />} />
        <Route path="/uaa" element={<Uaa />} />
        <Route path="/gds" element={<Gds />} />
        <Route path="/oscp" element={<Oscp />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
