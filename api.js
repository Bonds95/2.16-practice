const host = "https://webdev-hw-api.vercel.app/api/v2/todos"

export function getApi({ token }) {
    return fetch(host, {
        method: "GET",
        headers: {
            Authorization: token
        }
    })
        .then((response) => {

            if (response.status === 401) {
                // token = prompt('вы ввели неверный пароль. попробуйте снова')
                // fetchTodosAndRender()
                throw new Error('нет авторизации')
            }
            return response.json();
        })
}

export function deleteApi({id, token}) {
    return fetch("https://webdev-hw-api.vercel.app/api/todos/" + id, {
        method: "DELETE",
        headers: {
            Authorization: token
        }
    })
        .then((response) => {
            return response.json();
        })
}

export function postApi({ text, token}) {
    return fetch(host, {
        method: "POST",
        body: JSON.stringify({
            text,
        }),
        headers: {
            Authorization: token
        }
    })
        .then((response) => {
            return response.json();
        })
}

export function loginApi({login, password}) {
    return fetch("https://wedev-api.sky.pro/api/user/login", {
        method: "POST",
        body: JSON.stringify({
            login,
            password
        }),
    })
        .then((response) => {
            if (response.status === 400) {
                throw new Error('Неверный логин или пароль')
                
            }
            return response.json();
        })
}

export function regApi({login, password, name}) {
    return fetch("https://wedev-api.sky.pro/api/user", {
        method: "POST",
        body: JSON.stringify({
            login,
            password,
            name
        }),
    })
        .then((response) => {
            if (response.status === 400) {
                throw new Error('Такой пользователь уже существует')
                
            }
            return response.json();
        })
}