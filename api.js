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

export function deleteApi({ token, id}) {
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
            text
        }),
        headers: {
            Authorization: token
        }
    })
        .then((response) => {
            return response.json();
        })
}