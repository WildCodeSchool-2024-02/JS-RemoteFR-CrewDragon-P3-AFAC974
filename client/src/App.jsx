import { Routes, Route } from "react-router-dom";
import BurgerMenu from "./components/BurgerMenu";
import Home from "./pages/Home";
import Galerie from "./pages/Galerie";
import Inscription from "./pages/Inscription";
import Connexion from "./pages/Connexion";
import Artiste from "./pages/Artiste";
import Category from "./pages/Category";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Artworks from "./pages/Artworks";

function App() {
  return (
    <>
      <BurgerMenu />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artwork" element={<Artworks />} />
        <Route path="/category" element={<Category />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/artiste" element={<Artiste />} />
        <Route path="/register" element={<Inscription />} />
        <Route path="/login" element={<Connexion />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
