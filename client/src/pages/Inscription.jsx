import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo2 from "../assets/logoInsc.png";
import "../styles/Inscription.css";

function Register() {
  const nav = useNavigate();

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
      nav("/login");
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
            <label htmlFor="lastname">Prénom</label>
            <input
              className="insc_flex"
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
              className="insc_flex"
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
              className="insc_flex"
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
              className="insc_flex"
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
              className="insc_flex"
              name="description"
              id="description"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn-insc">
            Inscription
          </button>
          <p>
            Déjà un compte?{" "}
            <Link className="login-insc" to="/Login">
              se connecter
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
