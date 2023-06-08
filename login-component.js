import { loginApi } from "./api.js";

export function renderLoginComponent({ appEl, fetchTodosAndRender, setToken }) {
    let appHtml = `<div class="form">
            <h3 class="form-title">Форма авторизации</h3>
            <div class="form-row">
            Логин:
            <input type="text" id="login-input" class="input" placeholder="Выпить кофе" />
            <br>
            Пароль:
            <input type="password" id="password-input" class="input" placeholder="Выпить кофе" />
            </div>
            <br>
            <button class="button" id="login-button">Войти</button>`
    appEl.innerHTML = appHtml;

    document.getElementById('login-button').addEventListener('click', () => {
        loginApi({
            login: 'admin',
            password: 'admin'
        }).then((user) => {
            console.log(user);
            setToken(`Bearer ${user.user.token}`)
            fetchTodosAndRender()
        })
    })
}