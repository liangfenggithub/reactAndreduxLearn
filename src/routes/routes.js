import Login from "../views/Login.js"
import Index from "../views/Index.js"
import Sagatest from "../views/Sagatest.js"
import Counter from "../views/Counter"
import item from "../views/Item.js"
import Todolist from "../views/Todolist/Todolist.js"
export default [
  {
    path: '/',
    exact: true,
    component: Login
  },
  {
    path: "/index",
    exact: true,
    component: Index,
  },
  {
    path: '/counter',
    exact: true,
    component: Counter
  },
  {
    path: '/sagatest',
    exact: true,
    component: Sagatest,
  },
  {
    path: "/itemcurd",
    exact: true,
    component: item,
  },
  {
    ptah: "todolist",
    exact: true,
    component: Todolist
  }


]