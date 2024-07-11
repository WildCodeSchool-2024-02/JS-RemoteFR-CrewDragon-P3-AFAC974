import { Routes, Route } from "react-router-dom";
import BurgerMenu from "./components/BurgerMenu";
import Home from "./pages/Home";
import Galerie from "./pages/Galerie";
import Inscription from "./pages/Inscription";
import Connexion from "./pages/Connexion";
import Artiste from "./pages/Artiste";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BurgerMenu />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Galerie" element={<Galerie />} />
        <Route path="/Artiste" element={<Artiste />} />
        <Route path="/register" element={<Inscription />} />
        <Route path="/login" element={<Connexion />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
