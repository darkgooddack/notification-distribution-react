# notification-distribution-react
Этот проект представляет собой фронтенд для системы рассылки уведомлений. Он позволяет пользователям регистрироваться, авторизовываться, управлять уведомлениями, а также предоставляет администратору возможность отправлять уведомления пользователям. Для взаимодействия с сервером используется FastAPI.
## Основные функции
- Регистрация нового пользователя.
- Авторизация и вход в систему.
- Главная страница, доступная для всех пользователей.
- Страница для администрирования, доступная только для администраторов.

```
src/
├── api/
│   └── api.js                 # Конфигурация API для запросов через Axios
├── components/
│   ├── AuthForm.jsx           # Компонент формы для регистрации/входа
│   └── NotificationSwitch.jsx # Компонент для переключателя уведомлений
├── pages/
│   ├── LoginPage.jsx          # Страница входа
│   ├── RegisterPage.jsx       # Страница регистрации
│   ├── HomePage.jsx           # Главная страница пользователя
│   └── AdminPage.jsx          # Страница администратора для отправки уведомлений
├── css/
│   ├── AdminPage.css          # Стили для страницы администратора
│   ├── AuthForm.css           # Стили для компонента AuthForm
│   └── HomePage.css           # Стили для главной страницы
├── App.jsx                    # Главный компонент для маршрутизации
└── index.js                   # Точка входа для React-приложения
```
## Маршруты
- /register — страница регистрации.
- /login — страница входа в систему.
- / — главная страница.
- /admin — страница администрирования, доступная только для администраторов.

## Основные API-эндпоинты
<span style="color: #6A994E;">POST</span> <mark style="background-color: #D8F3DC;">/auth/register</mark> : Регистрация нового пользователя.

<span style="color: #4F9D97;">POST</span> <mark style="background-color: #A9DADC;">/auth/token</mark> : Вход и получение JWT токена.

<span style="color: #F1A7A6;">POST</span> <mark style="background-color: #F7C4C4;">/auth/logout</mark> : Выход из системы и инвалидизация токена.

<span style="color: #E39A7D;">GET</span> <mark style="background-color: #F1E3C6;">/auth/protected</mark> : Доступ к защищённому маршруту (требуется аутентификация).

<span style="color: #B8D8D8;">POST</span> <mark style="background-color: #B5E4E1;">/notification/toggle-notifications</mark> : Переключение настроек уведомлений для пользователя.

<span style="color: #88D8B0;">GET</span> <mark style="background-color: #A7E7B4;">/notification/notifications</mark> : Получение списка уведомлений для пользователя.

<span style="color: #F28D35;">POST</span> <mark style="background-color: #F4A261;">/notification/send_notifications</mark> : Отправка уведомлений (только для админа).

## Установка
1. Клонируйте репозиторий:

```
git clone https://github.com/darkgooddack/notification-distribution-react.git
cd notification-distribution-react
```
2. Установите зависимости:

```
npm install
```
3. Запустите приложение:
```
npm start
```
Приложение будет доступно по адресу http://localhost:3000.
