//saga用到的reducer， 这里和其他的reducer没什么区别。

import { GET_USER_LIST_OK, GET_USER_LIST_BEGIN } from "../canstants"
const initState = {
  userList: [],//用户列表
  beginGet: false,//用户获取开始获取标志
}


const sagareducer = (state = initState, action = {}) => {
  switch (action.type) {
    case GET_USER_LIST_BEGIN:
      return Object.assign({},{beginGet:true,userList:[]})
    case GET_USER_LIST_OK:
      return Object.assign({}, state, { userList: action.userlist,beginGet:false })
    default:
      return state
  }
}


export default sagareducer