import { ADD_TODO, DELETE_TODO, REMOVE_TODO } from "./action_types"

export const addTodo = (data) => {
    return {
        type: ADD_TODO,
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const deleteTodo = (todoId) => {
    return {
        type: DELETE_TODO,
        payload: {
            todoId: todoId
        }
    }
}

export const removeTodo = () => {
    return {
        type: REMOVE_TODO,
    }
}