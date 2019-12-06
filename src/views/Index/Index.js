import React from "react"
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom"
import routes from "../../routes/myroutes.js"
import { Layout, Menu, Breadcrumb, Icon } from "antd"
const { Header, Content, Footer, Sider } = Layout;
const { Item, SubMenu } = Menu;

import siderMenu from "../../config/sider.js"
import style from "./index.css"

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }
  toggle = collapsed => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  render() {
    return (
      <div>

        <Layout style={{ minHeight: '100vh' }}>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed} >
            <div className="logo">
              我是logo
              </div>
            <Menu
              theme="dark"
              defaultSelectedKeys={["1"]}
              mode="inline"
            >
              {
                siderMenu.map((item) => {
                  return item.subMenu && item.subMenu
                    ?//有子菜单项
                    <SubMenu
                      key={item.key}
                      title={
                        <span>
                          <Icon type={item.icon} />
                          <span>{item.name}</span>
                        </span>
                      }
                    >
                      {
                        item.subMenu.map((subitem) => {
                          return <Item key={subitem.key}>
                            <Link to={subitem.route}>
                              <Icon type={subitem.icon}></Icon>
                              <span>{subitem.name}</span>
                            </Link>
                          </Item>
                        })
                      }
                    </SubMenu>
                    : //无子菜单项
                    <Item key={item.key}>
                      <Link to={item.route}>
                        <Icon type={item.icon}></Icon>
                        <span>{item.name}</span>
                      </Link>
                    </Item>
                })
              }
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0 }} >
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content style={{ margin: "0 16px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>

              <div style={{ padding: 24, background: "#fff", }}>
                <Switch>
                  {
                    routes.map((r, key) => {
                      console.log(r)
                      return <Route key={key} path={r.path} component={r.component} exact={r.exact ? true : false}></Route>
                    })
                  }
                </Switch>
              </div>

            </Content>
            <Footer style={{ textAlign: "center" }}>F Design @2019 Created by Ant Design</Footer>
          </Layout>
        </Layout>


      </div>

    )
  }
}
export default Index