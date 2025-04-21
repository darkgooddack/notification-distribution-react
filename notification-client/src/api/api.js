import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8000/api/v1",
    headers: {
        "Content-Type": "application/json",  // Правильный заголовок для JSON
    },
});

export const register = (data) => API.post("/users/register", data);  // Без лишних заголовков
export const login = (data) => API.post("/auth/token", data);  // Также без лишних заголовков

export const logout = (token) => API.post("/auth/logout", {}, { headers: { Authorization: `Bearer ${token}` } });
export const getProtected = (token) => API.get("/auth/protected", { headers: { Authorization: `Bearer ${token}` } });
export const toggleNotifications = (token) => API.post("/notification/toggle-notifications", {}, { headers: { Authorization: `Bearer ${token}` } });
export const getNotifications = (token) => API.post("/notification/notifications", {}, { headers: { Authorization: `Bearer ${token}` } });
export const sendNotifications = (token, data) => API.post("/notification/send_notifications", data, { headers: { Authorization: `Bearer ${token}` } });

export default API;
