//action creater
// function makeActionCreator(type, ...argNames){
//   return function(...args){
//     const action = { type }
//     argNames.forEach((arg,index) => {
//       action[argNames[index]] = args[index]
//     })
//     return action
//   }
// }

// //action creater 的使用
// const ADD_TODO = "ADD_TODO"
// export const addTodo = makeActionCreator(ADD_TODO,"text" ); //其中ADD_TODO是type，text是要传递到reducer的变量