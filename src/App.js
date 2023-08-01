import { useState } from "react";
import "./App.css";
import About from "./component/About";
import Navbar from "./component/Navbar";
import TextFrom from "./component/TextFrom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.title = "Vihaa Infotech-Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "Vihaa Infotech";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="Vihaa"
          mode={mode}
          homeText="Home"
          aboutText="About"
          toggleMode={toggleMode}
        />

        <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextFrom mode={mode} />}></Route>

            <Route>
              <Route path="/about" element={<About mode={mode} />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
