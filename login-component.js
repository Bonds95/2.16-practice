import { loginApi, regApi } from "./api.js";

export function renderLoginComponent({ appEl, fetchTodosAndRender, setToken }) {

    let isLoginMode = true

    const renderForm = () => {
        let appHtml = `<div class="form">
        <h3 class="form-title">Форма ${isLoginMode ? 'входа' : 'регистрации'}</h3>
        <div class="form-row">
        ${isLoginMode ? '' : `Имя:
        <input type="text" id="name-input" class="input" placeholder="Введите имя" />
        <br>`}
        
        Логин:
        <input type="text" id="login-input" class="input" placeholder="Введите логин" />
        <br>
        Пароль:
        <input type="password" id="password-input" class="input" placeholder="Введите пароль" />
        </div>
        <br>
        <button class="button" id="login-button">${isLoginMode ? "Войти" : "Зарегистрироваться"}</button>
        <br>
        <br>
        <button class="button" id="toggle-button">Перейти к ${isLoginMode ? "регистрации" : "входу"}</button>`
        appEl.innerHTML = appHtml;

        document.getElementById('login-button').addEventListener('click', () => {

            if (isLoginMode) {
                const login = document.getElementById('login-input').value
                const password = document.getElementById('password-input').value
                

                if (!login) {
                    alert('Введите логин')
                    return
                }

                if (!password) {
                    alert('Введите пароль')
                    return
                }
                loginApi({
                    login: login,
                    password: password
                }).then((user) => {
                    setToken(`Bearer ${user.user.token}`)
                    fetchTodosAndRender()
                }).catch(error => {
                    alert(error.message)

                })
            }
            else {
                const login = document.getElementById('login-input').value
                const password = document.getElementById('password-input').value
                const name = document.getElementById('name-input').value
                if (!name) {
                    alert('Введите логин')
                    return
                }
                if (!login) {
                    alert('Введите логин')
                    return
                }

                if (!password) {
                    alert('Введите пароль')
                    return
                }
                regApi({
                    login: login,
                    password: password,
                    name: name
                }).then((user) => {
                    setToken(`Bearer ${user.user.token}`)
                    fetchTodosAndRender()
                }).catch(error => {
                    alert(error.message)

                })
            }

        })
        document.getElementById('toggle-button').addEventListener('click', () => {
            isLoginMode = !isLoginMode
            renderForm()
        })
    }

    renderForm()
}