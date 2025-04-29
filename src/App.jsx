import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./pages/home";
import Wishes from "./pages/Wishes";
import Letter from "./components/Letter";

function App() {
  const [navColor, setNavColor] = useState("#a0a2d0");

  return (
    <>
      <div className="flex flex-col">
        <NavBar navColor={navColor} />
        <div className="flex grow overflow-auto">
          <Routes>
            <Route path="/" element={<Home setNavColor={setNavColor} />} />
            <Route path="/hariti" element={<Wishes /> }/>
            <Route path="/letter" element={<Letter /> }/>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
