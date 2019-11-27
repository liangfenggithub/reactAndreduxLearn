import { GET_USER_LIST_OK, GET_USER_LIST_BEGIN, GET_USER_LIST_ASYN } from "../canstants"
import { fork, call, put, takeEvery, delay, take, all } from "redux-saga/effects"
import { getUserList } from "../actions"
import { CREATE_ITEM_ASYN, UPDATE_ITEM_ASYN, READ_ITEM_ASYN, DELETE_ITEM_ASYN } from "../canstants"
import { createItem, updateItem, readItem, deleteItem } from "./item.js"

//模拟用户列表
let userlist = new Array(10).fill(" ").map((item, index) => {
  return {
    username: "用户" + index,
    password: "***********"
  }
})

//模拟异步请求
function* mockapi(url) {

  yield delay(3000) //模拟异步请求
  return userlist
}

//异步reducer执行函数
function* getData(action) {
  yield put({ type: GET_USER_LIST_BEGIN })
  const data = yield call(mockapi, "api.xxx.com/list/xxx")
  yield put({ type: GET_USER_LIST_OK, userlist: data })
}
//异步aciton捕捉函数
function* watchAsynAction() {
  yield all([
    //捕捉到action就执行对应的异步动作
    takeEvery(GET_USER_LIST_BEGIN, getData), //简单测试
    //CRUD
    takeEvery(CREATE_ITEM_ASYN, createItem),
    takeEvery(UPDATE_ITEM_ASYN, updateItem),
    takeEvery(READ_ITEM_ASYN, readItem),
    takeEvery(DELETE_ITEM_ASYN, deleteItem),
  ])


  // 与 takeEvery(GET_USER_LIST_BEGIN, getData), //简单测试  功能相同
  // while (true) {
  //   let request = yield take('GET_USER_LIST_BEGIN');
  //   yield delay(3000) //延时模拟异步请求
  //   yield put({ type: GET_USER_LIST_OK, userlist: userlist })
  // }
}
export default watchAsynAction