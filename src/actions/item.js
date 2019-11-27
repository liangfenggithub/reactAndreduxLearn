import { CREATE_ITEM_ASYN, UPDATE_ITEM_ASYN, READ_ITEM_ASYN, DELETE_ITEM_ASYN } from "../canstants"
import { CREATE_ITEM_OK, UPDATE_ITEM_OK, READ_ITEM_OK, DELETE_ITEM_OK } from "../canstants"

//actionCreater
//供saga捕捉
export const createItemAsyn = (newitem) => {
  return {
    type: CREATE_ITEM_ASYN,
    newitem: newitem,
  }
}

export const updateItemAsyn = (id, newitem) => {
  return {
    type: UPDATE_ITEM_ASYN,
    id: id,
    newitem: newitem,
  }
}

export const readItemAsyn = (id) => {
  return {
    type: READ_ITEM_ASYN,
    id
  }
}

export const deleteItemAsyn = (id) => {
  return {
    type: DELETE_ITEM_ASYN,
    id
  }
}


//供同步reducer捕捉
export const createItemOk = (data) => {
  return {
    type: CREATE_ITEM_OK,
    data: data
  }
}

export const updateItemOk = (data) => {
  return {
    type: UPDATE_ITEM_OK,
    data: data
  }
}

export const readItemOk = (data) => {
  return {
    type: READ_ITEM_OK,
    data: data
  }
}

export const deleteItemOk = (data) => {
  return {
    type: DELETE_ITEM_OK,
    data: data
  }
}