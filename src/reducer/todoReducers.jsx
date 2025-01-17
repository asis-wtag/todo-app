import { ADD_TODO, DELETE_TODO, REMOVE_TODO } from "../actions/todo/action_types";

const initialData = {
  list: [],
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    case DELETE_TODO:
      const newList = state.list.filter(
        (element) => element.id !== action.payload.todoId
      );
      return {
        ...state,
        list: newList,
      };
    case REMOVE_TODO:
      return {
        ...state,
        list: []
      }
    default:
      return state;
  }
};

export default todoReducers;
