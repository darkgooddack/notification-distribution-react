import { useState } from "react";
import { sendNotifications } from "../api/api";
import "../css/AdminPage.css";

export default function AdminPage() {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await sendNotifications(localStorage.getItem("token"), { title, message });
            alert("Уведомление отправлено!");
            setTitle("");
            setMessage("");
        } catch {
            alert("Ошибка при отправке");
        }
    };

    return (
        <div>
            <h2>Админ: Рассылка</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder="Заголовок" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea placeholder="Сообщение" value={message} onChange={(e) => setMessage(e.target.value)} />
                <button type="submit">Отправить</button>
            </form>
        </div>
    );
}
