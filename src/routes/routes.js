export default [
  {
    path: '/',
    exact: true,
    component: import("../views/Login.js")
  },
  {
    path: "/index",
    exact: true,
    component: import("../views/Dashboard")
  },
  {
    path: "/password",
    exact: true,
    component: import("../views/Password")
  },
  {
    path: "/userinfo",
    exact: true,
    component: import("../views/UserInfo")
  },
]