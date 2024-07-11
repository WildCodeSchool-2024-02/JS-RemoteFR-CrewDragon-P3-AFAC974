// src/components/Login.js
// src/components/Login.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Connexion.css";
import axios from "axios";
import logo2 from "../assets/logoInsc.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/api/login", {
        email,
        password,
      });

      setSuccess(response.data.msg);
      setError("");
      localStorage.setItem("token", response.data.token);
    } catch {
      setError(error.response.data.errors[0].msg);
      setSuccess("");
    }
  };

  return (
    <>
      <h2>Connexion</h2>
      <div className="login-container">
        <div className="login-image">
          <img src={logo2} alt="Login" />
        </div>
        <div className="login-form">
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
          <form onSubmit={handleSubmit}>
            <div>
              <input
                placeholder="E-mail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="insc-btn" type="submit">
              Connexion
            </button>
          </form>

          <div>
            <p>
              Pas de compte? <Link to="/register">Inscrivez-vous</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
