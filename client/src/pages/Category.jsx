import { useState } from "react";
import axios from "axios";
import "../styles/Category.css";
import cubcat from "../assets/cubcat.jpeg";

function Category() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    // Ne pas rafraichir la page
    e.preventDefault();

    // Requete POST

    axios
      .post(`${import.meta.env.VITE_API_URL}/api/category`, { name })
      .catch((err) => console.error(err));
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <section className="cat-flex">
      <img src={cubcat} alt="img-cat" className="img-cat" />

      <form onSubmit={handleSubmit}>
        <input
          className="insc_flex"
          type="text"
          name="category"
          onChange={handleChange}
          value={name}
          placeholder="Ajout d'une category"
        />
        <button type="submit" className="btn-cat">
          Envoyer
        </button>
      </form>
    </section>
  );
}

export default Category;
