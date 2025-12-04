import { useState } from "react";
import { api } from "../api/axios";
import { useNavigate } from "react-router-dom";
import "../../css/register.css";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
        await api.post("/users/register", {
            email,
            password,
        });

        alert("Usuario creado");
        navigate("/login");

        } catch (error) {
        alert("Error al registrar");
        }
    };

    return (
        <form className="register-glass" onSubmit={handleRegister}>
            <h2 className="register-title">Crear Cuenta!</h2>
            <p className="register-subtitle">Registrate para comenzar</p>

            <input
                className="register-input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <input
                className="register-input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <button className="register-button">Registrarse</button>

            <p className="register-login">
                ¿Ya tenés cuenta?{" "}
                <span onClick={() => navigate("/login")}>Iniciar sesión</span>
            </p>
            </form>
    );
}