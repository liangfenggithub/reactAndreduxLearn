import { CREATE_ITEM_OK, UPDATE_ITEM_OK, READ_ITEM_OK, DELETE_ITEM_OK } from "../canstants"

//actionCreater
const initState = {
  message: ""
}
const item = (state = initState, action) => {
  switch (action.type) {
    case CREATE_ITEM_OK:
      return { ...state, message: action.data }
    case UPDATE_ITEM_OK:
      return { ...state, message: action.data }
    case READ_ITEM_OK:
      return { ...state, message: action.data }
    case DELETE_ITEM_OK:
      return { ...state, message: action.data }
    default:
      return state
  }
}
export default item 