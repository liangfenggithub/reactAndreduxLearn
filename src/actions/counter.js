import { INCREMENT, DECREMENT, GET_USER_LIST_BEGIN } from "../canstants";

export const increment = () => {
  return {
    type: INCREMENT
  }
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}


