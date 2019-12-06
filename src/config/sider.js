const siderMenu = [
  {
    key: "1",
    name: "Dashboard",
    icon: "pie-chart",
    route: "/index/dashboard",
  },
  {
    key: "2",
    name: "UserInfo",
    icon: "pie-chart",
    route: "/index/userinfo",
  },
  {
    key: "3",
    name: "Password",
    icon: "pie-chart",
    route: "/index/password",
  },
  {
    key: "4",
    name: "Echart",
    icon: "pie-chart",
    route: "/index/Chart",
    subMenu: [
      {
        key: "5",
        name: "Echart图表",
        icon: "pie-chart",
        route: "/index/chart",
      },
      {
        key: "6",
        name: "test2",
        icon: "pie-chart",
        route: "/index/password",
      },
      {
        key: "7",
        name: "test1",
        icon: "pie-chart",
        route: "/index/password",
      },
    ]
  },
  {
    key: "8",
    name: "Jsonshow",
    icon: "pie-chart",
    route: "/index/jsonshow",
  },
]

export default siderMenu;