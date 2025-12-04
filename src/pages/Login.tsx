import { useState } from "react";
import { api } from "../api/axios.ts";
import { useNavigate } from "react-router-dom";
import React from "react";
import "../../css/login.css"

export default function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();

const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
        const response = await api.post("/users/login", { email, password });

        localStorage.setItem("token", response.data.access_token);
        console.log(localStorage);
        
        navigate("/dashboard");

        } catch (error) {
        alert("Login inválido");
        }
    };

    return (
        <form className="login-glass" onSubmit={handleLogin}>
        <h2 className="login-title">Bienvenidos</h2>
        <p className="login-subtitle">Accedé a tu cuenta</p>

        <input
            className="login-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />

        <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />

        <button type="submit" className="login-button">Login</button>

        <p className="login-register"> ¿Nuevo usuario?{" "} <span onClick={() => navigate("/register")}> Registrate </span> </p>
        </form>
    );
}