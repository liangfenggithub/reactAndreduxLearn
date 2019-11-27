//自定义中间件
//中间件是三级函数，next为各种中间件函数引用的包装，最下层是store.dispatch
export const logMiddle = store => next => action => {
  console.log(`Action is ${action.type}`)
  let result = next(action)
  console.log(`nextState is`, store.getState())
  return result;
}
export const helloMiddle = store => next => action => {
  console.log("hello Middle")
  let result = next(action)
  return result;
}
export const timerMiddle = store => next => action => {
  console.log(`action执行时间是 ${new Date().getTime()}`)
  let result = next(action)
  return result;
}

