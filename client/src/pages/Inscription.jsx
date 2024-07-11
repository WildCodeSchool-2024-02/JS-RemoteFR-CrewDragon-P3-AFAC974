// src/components/Register.jsx
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import axios from "axios";

import logo2 from "../assets/logoInsc.png";
import "../styles/Inscription.css";

function Register() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    avatar: "https://avatar.iran.liara.run/public",
    description: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        user
      );
      toast.success(response.data.msg);
    } catch (error) {
      toast.error(error.response.data.error);
      console.error(error.response.data.error);
    }
  };

  return (
    <div className="Insc-container">
      <div className="logo1">
        <img src={logo2} className="logo_Insc" alt="logo_insc" />
      </div>
      <div>
        <form onSubmit={handleSubmit} className="form-insc">
          <div>
            <label htmlFor="firstname">Prénom</label>
            <input
              onChange={handleChange}
              type="text"
              name="firstname"
              value={user.firstname}
              placeholder="Votre prénom"
            />
          </div>
          <div>
            <label htmlFor="lastname">Nom</label>
            <input
              onChange={handleChange}
              type="text"
              name="lastname"
              value={user.lastname}
              placeholder="Votre nom"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              value={user.email}
              placeholder="Votre email"
            />
          </div>
          <div>
            <label htmlFor="password">Mot de passe</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={user.password}
              placeholder="********"
            />
          </div>
          <div>
            <label htmlFor="description">Une courte description</label>
            <textarea
              name="description"
              id="description"
              onChange={handleChange}
            />
          </div>

          <button type="submit">Inscription</button>
          <p>
            Déjà un compte? <Link to="/Login">Connexion</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
