import { INCREASE_COUNT, DECREASE_COUNT, RESET_COUNT } from "../actions/counter/action_types";

const initialData = {
  value: 0
};

const counterReducers = (state = initialData, action) => {
  switch (action.type) {
    case INCREASE_COUNT:
      return {
        ...state,
        value: state.value + 1
      };
    case DECREASE_COUNT:
      return {
        ...state,
        value: state.value - 1
      };
    case RESET_COUNT:
      return {
        ...state,
        value: 0
      }
    default:
      return state;
  }
};

export default counterReducers;
