import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./pages/home";
// import Wishes from "./pages/Wishes";
// import Letter from "./components/Letter";
import Projects from "./pages/Projects";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from "./components/Footer";

function App() {
  const [navColor, setNavColor] = useState("#a0a2d0");
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return (
    <>
      <div className="flex flex-col">
        <NavBar navColor={navColor} />
        <div className="flex grow overflow-auto">
          <Routes>
            <Route path="/" element={<Home setNavColor={setNavColor} />} />
            <Route path="/projects" element={<Projects /> }/>
            <Route path="/articles" element={<Articles /> }/>
            <Route path="/contact" element={<Contact /> }/>

            {/* <Route path="/hariti" element={<Wishes /> }/>
            <Route path="/letter" element={<Letter /> }/> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
