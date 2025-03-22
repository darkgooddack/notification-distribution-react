import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register, login } from "../api/api";
import '../css/AuthForm.css';

const AuthForm = ({ type }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            username,
            password,
        };

        try {
            if (type === "register") {
                await register(formData);
                alert("Пользователь зарегистрирован. Войдите.");
                navigate("/login");
            } else {
                const res = await login(formData);
                localStorage.setItem("token", res.data.access_token);
                navigate("/");
            }
        } catch (err) {
            alert("Ошибка: " + err.response?.data?.detail || "Что-то пошло не так");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{type === "register" ? "Регистрация" : "Вход"}</h2>
            <input
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">{type === "register" ? "Зарегистрироваться" : "Войти"}</button>
        </form>
    );
};

export default AuthForm;
