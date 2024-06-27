import { INCREASE_COUNT, DECREASE_COUNT, RESET_COUNT } from "./action_types"

export const increaseCount = () => {
    return {
        type: INCREASE_COUNT,
    }
}

export const decreaseCount = () => {
    return {
        type: DECREASE_COUNT,
    }
}

export const resetCount = () => {
    return {
        type: RESET_COUNT,
    }
}