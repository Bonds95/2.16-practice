export function renderLoginComponent ({appEl, fetchTodosAndRender, setToken}) {
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
            // token = "Bearer asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k"
            setToken("Bearer asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k")
            fetchTodosAndRender()
        })
}