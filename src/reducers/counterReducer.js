import { INCREMENT, DECREMENT } from "../canstants"

let initState = 1
const counter = (state = initState, action = {}) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state
  }
}

export default counter;