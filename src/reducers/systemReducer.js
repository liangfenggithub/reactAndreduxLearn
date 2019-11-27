import { LOGIN_SUCCESS, LOGOUT } from "../canstants"

let initState = 1
const system = (state = initState, action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return state + 1;
    case LOGOUT:
      return state - 1;
    default:
      return state
  }
}

export default system;