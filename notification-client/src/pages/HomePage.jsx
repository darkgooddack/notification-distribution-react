import NotificationSwitch from "../components/NotificationSwitch";
import { logout } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout(localStorage.getItem("token"));
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div className="home-page">
            <h2 className="welcome-header">Личный кабинет</h2>
            <NotificationSwitch />
        </div>
    );
}
