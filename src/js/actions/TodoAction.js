import dispatcher from "../dispatcher";

export function createTodo(text) {
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text
    });
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type: "DELETE_TODO",
        id
    });
}

export function reloadTodos() {
    dispatcher.dispatch({ type: "FETCH_TODOS" });
    setTimeout(() => {
        dispatcher.dispatch({ type: "RECEIVE_TODOS", todos: [
            {
                id: 123,
                text: "Changed Todo",
                completed: true
            },
            {
                id: 124,
                text: "change",
                completed: false
            }
        ]});

    }, 1000);
}