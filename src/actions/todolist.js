import { GET_ITEMS, ADD_ITEM, EDIT_ITEM, REMOVE_ITEM, COMPLATE, CHANGE_FILTER, filterOption } from "../canstants"


export const additem = (data) => {
  return {
    type: ADD_ITEM,
    data
  }
}
export const complateitem = (id) => {
  return {
    type: COMPLATE,
    id
  }
}
export const changefilter = (filter) => {
  console.log("changefilter")
  return {
    type: CHANGE_FILTER,
    filter
  }
}
export const removeitem = (id) => {
  return {
    type: REMOVE_ITEM,
    id
  }
}
export const edititem = (id) => {
  return {
    type: EDIT_ITEM,
    id
  }
}

