// src/components/Register.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo2 from "../assets/logoInsc.png";
import "../styles/Inscription.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/api/register", {
        email,
        password,
        confirmPassword,
      });

      setSuccess(response.data.msg);
      setError("");
    } catch (errorTry) {
      setError(errorTry.response.data.errors[0].msg);
      setSuccess("");
    }
  };

  return (
    <div className="Insc-container">
      <div className="logo1">
        <div className="insc-form">
          {" "}
          <h2>Inscription</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
        </div>
        <img src={logo2} className="logo_Insc" alt="logo_insc" />
      </div>
      <div>
        <form onSubmit={handleSubmit} className="form-insc">
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
          <div>
            <input
              placeholder="Confirme-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Inscription</button>
          <p>
            Déjà un compte? <Link to="/Login">Connexion</Link>
          </p>
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default Register;
