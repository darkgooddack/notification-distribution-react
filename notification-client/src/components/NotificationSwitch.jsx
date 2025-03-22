import { useState, useEffect } from "react";
import { toggleNotifications, getNotifications } from "../api/api";
import '../css/NotificationSwitch.css';  // Импортируем CSS файл для стилей

const NotificationSwitch = () => {
    const [enabled, setEnabled] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const token = localStorage.getItem("token");

    const handleToggle = async () => {
        const res = await toggleNotifications(token);
        setEnabled(res.data.receive_notifications);
    };

    useEffect(() => {
        const loadNotifications = async () => {
            try {
                const res = await getNotifications(token);
                setNotifications(res.data);
            } catch {
                setNotifications([]);
            }
        };

        loadNotifications();
    }, [token]);

    return (
        <div className="notification-container">
            <div className="switch-container">
                <label className="switch">
                    <input
                        type="checkbox"
                        checked={enabled}
                        onChange={handleToggle}
                    />
                    <span className="slider"></span>
                </label>
                <span className="label">Получать уведомления</span>
            </div>

            <h3 className="notification-header">Уведомления:</h3>
            {notifications.length === 0 ? (
                <p className="no-notifications">У вас нет уведомлений.</p>
            ) : (
                <ul className="notification-list">
                    {notifications.map((n) => (
                        <li key={n.id} className="notification-item">
                            <b>{n.title}</b>: {n.message}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NotificationSwitch;
