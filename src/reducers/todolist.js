import { GET_ITEMS, ADD_ITEM, EDIT_ITEM, REMOVE_ITEM, COMPLATE, CHANGE_FILTER, filterOption } from "../canstants"
import item from "../api/item";



let initState = {
  list: [],
  filter: filterOption.SHOW_ALL
}
let id = 0;
const todolist = function (state = initState, action) {
  let list = state.list;
  switch (action.type) {
    case ADD_ITEM:
      id = id + 1
      let newitem = {
        id: id,
        content: action.data,
        complate: false,
      }
      list = [...list, newitem]
      return { ...state, list }
    case EDIT_ITEM:
      list = list.map((item) => {
        if (action.id == item.id) {
          item.content = action.content
        }
        return item
      })
      return list
    case COMPLATE:
      list = list.map((item) => {
        if (action.id == item.id) {
          item.complate = !item.complate;
        }
        return item
      })
      return { ...state, list: list }
    case REMOVE_ITEM:
      //TDDO
      list = list.filter(item => action.id != item.id)
      return { ...state, list }
    case CHANGE_FILTER:
      console.log("CHANGE_FILTER")
      return { ...state, filter: action.filter }

    default: return state
  }
}
export default todolist
