
//用promis和延时来模拟异步接口请求，后期修改为真正的异步请求

export default {
  createItem(newitem = "newitem") {

    return fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        return json
      })

    // return new Promise(function (resolve, reject) {
    //   let successRes = {
    //     success: true,
    //     code: 200,
    //     message: "新增item成功"
    //   }
    //   //模拟异步请求
    //   setTimeout(() => {
    //     //成功
    //     resolve(successRes)//传值
    //   }, 2000);
    // })
  },

  updateItem(id, newitem) {
    return new Promise(function (resolve, reject) {
      let successRes = {
        success: true,
        code: 200,
        message: `修改id为${id}的item为${newitem}成功`
      }
      //模拟异步请求
      setTimeout(() => {
        resolve(successRes)//传值
      }, 2000);
    })
  },

  readItem(id) {
    return new Promise(function (resolve, reject) {
      let successRes = {
        success: true,
        code: 200,
        message: `查询id为${id}的item成功`
      }
      //模拟异步请求
      setTimeout(() => {
        resolve(successRes)//传值
      }, 2000);
    })
  },

  deleteItem(id) {
    return new Promise(function (resolve, reject) {
      let successRes = {
        success: true,
        code: 200,
        message: `删除id为${id}的item成功`
      }
      //模拟异步请求
      setTimeout(() => {
        resolve(successRes)//传值
      }, 2000);
    })
  }
}