import { Outlet } from "react-router-dom";
import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BurgerMenu from "./components/BurgerMenu";

function App() {
  return (
    <>
      {" "}
      <BurgerMenu />
      <main className="container">
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default App;
