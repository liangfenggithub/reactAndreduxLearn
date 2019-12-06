import Dashboard from "../views/Dashboard"
import Password from "../views/Password"
import UserInfo from "../views/UserInfo"
import Jsonshow from "../views/Jsonshow"

export default [
  {
    path: "/index/dashboard",
    exact: true,
    component: Dashboard,
  },
  {
    path: "/index/password",
    exact: true,
    component: Password
  },
  {
    path: "/index/userinfo",
    exact: true,
    component: UserInfo
  },
  {
    path: "/index/jsonshow",
    exact: true,
    component: Jsonshow
  },
]