import { useNavigate } from "react-router-dom";
import "../../css/dashboard.css";

export default function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div className="dashboard-glass">
        <h1 className="dashboard-title">Bienvenido al Dashboard!</h1>

        <p className="dashboard-status">Token Autenticado</p>

        <p className="dashboard-security">
            Estás registrado en <strong>Bridgestone</strong>.  
            Para tu seguridad, tus credenciales están protegidas mediante
            <span> JWT encriptado</span> y hashing de contraseñas.
        </p>

        <button className="dashboard-logout" onClick={handleLogout}>
            Cerrar Sesión
        </button>
        </div>
    );
}