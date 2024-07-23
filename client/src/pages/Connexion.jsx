import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "../styles/Connexion.css";

import axios from "axios";
import logo2 from "../assets/logoInsc.png";

function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
    avatar: "https://avatar.iran.liara.run/public",
  });

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.email]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        login
      );
      toast.success(response.data.msg);
    } catch (error) {
      toast.error(error.response.data.error);
      console.error(error.response.data.error);
    }
  };

  return (
    <div className="conex-container">
      <div className="logo1">
        <img src={logo2} className="logo_Insc" alt="logo_insc" />
      </div>
      <div>
        <form onSubmit={handleSubmit} className="form-conex">
          <div>
            <label htmlFor="email">Email</label>
            <input
              className="conex_flex"
              onChange={handleChange}
              type="email"
              name="email"
              value={login.email}
              placeholder="Votre email"
            />
          </div>
          <div>
            <label htmlFor="password">Mot de passe</label>
            <input
              className="conex_flex"
              onChange={handleChange}
              type="password"
              name="password"
              value={login.password}
              placeholder="********"
            />
          </div>

          <button type="submit" className="btn-conex">
            Connexion
          </button>
          <p>
            Pas de compte?{" "}
            <Link className="login-conex" to="/register">
              s'inscrire
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
