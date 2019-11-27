// 模拟 一个 对接后台接口的 CURD 操作

import api from "../api/index.js"
import { fork, call, put, takeEvery, delay, take } from "redux-saga/effects"
import { CREATE_ITEM_ASYN, UPDATE_ITEM_ASYN, READ_ITEM_ASYN, DELETE_ITEM_ASYN } from "../canstants"
import { CREATE_ITEM_OK, UPDATE_ITEM_OK, READ_ITEM_OK, DELETE_ITEM_OK } from "../canstants"
import { createItemOk, updateItemOk, readItemOk, deleteItemOk } from "../actions/item"

export function* createItem(action) {

  //疑问：select如何应用？？？
  //     怎么接受action 发出的数据？？？


  //同步写法写异步请求
  const json = yield call(api.createItem, action.newitem);
  if (json.success) {
    yield put(createItemOk(json.message))
  }
}

export function* updateItem(action) {
  const json = yield call(api.updateItem, action.id, action.newitem);
  if (json.success) {
    yield put(updateItemOk(json.message))
  }
}

export function* readItem(action) {
  const json = yield call(api.readItem, action.id);
  if (json.success) {
    yield put(readItemOk(json.message))
  }
}

export function* deleteItem(action) {
  const json = yield call(api.deleteItem, action.id);
  if (json.success) {
    yield put(deleteItemOk(json.message))
  }
}

