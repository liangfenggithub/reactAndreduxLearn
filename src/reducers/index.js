import counterReducer from "./counterReducer"
import sagaReducer from "./sagaReducer"
import systemReducer from "./systemReducer"
import itemReducer from "./itemReducer"
import todolistReducer from "./todolist.js"
import { combineReducers } from "redux"

const reducer = combineReducers({
  counterReducer,
  systemReducer,//暂时没用
  sagaReducer,
  itemReducer,
  todolistReducer
})

export default reducer