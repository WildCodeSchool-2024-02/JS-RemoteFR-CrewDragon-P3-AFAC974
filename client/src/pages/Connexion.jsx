import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Connexion.css";

import axios from "axios";
import logo2 from "../assets/logoInsc.png";

function Login() {
  const nav = useNavigate();
  /**
   * const [email, setEmail] = useState("");
   * const [password, setPassword] = useState("");
   */

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        login
      );
      localStorage.setItem("user", JSON.stringify(response.data.user));
      toast.success(
        `Bonjour ${response.data.user.firstname}, vous êtes bien connecté`
      );
      nav("/");
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
              className="insc_flex"
              type="email"
              name="email"
              placeholder="Votre email"
              onChange={handleChange}
              value={login.email}
            />
          </div>
          <div>
            <label htmlFor="password">Mot de passe</label>
            <input
              className="insc_flex"
              type="password"
              name="password"
              placeholder="********"
              onChange={handleChange}
              value={login.password}
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
