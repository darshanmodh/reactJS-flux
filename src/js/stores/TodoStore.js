import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [
            {
                id: 123,
                text: "Go shopping",
                completed: false
            },
            {
                id: 124,
                text: "Pay WATER Bills",
                completed: false
            }
        ];
    }

    getAll() {
        return this.todos;
    }

    handleAction(action) {
        switch(action.type) {
            case "CREATE_TODO": {
                this.createTodo(action.text);
            }
            case "RECEIVE_TODOS": {
                this.todos = action.todos;
                this.emit("change");
            }
        }
    }

    createTodo(text) {
        const id = Date.now();
        this.todos.push({
            id,                    
            text,
            completed: false
        });

        this.emit("change");
    }
}

const todoStore = new TodoStore;

dispatcher.register(todoStore.handleAction.bind(todoStore));

export default todoStore;