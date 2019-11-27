import React from "react"
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom"
import routes from "../routes/myroutes.js"

class Index extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        {/* 导航 */}
        <div style={{ width: "30%", float: "left" }}>
          <ul>
            <li>
              React导航
            </li>
            <li>
              <Link to="/index/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/index/userinfo">Userinfo </Link>
            </li>
            <li>
              <Link to="/index/password">Password</Link>
            </li>
          </ul>
        </div>
        {/* 内容 */}
        <div style={{ width: "70%", float: "right" }}>
          <Switch>
            {
              routes.map((r, key) => {
                return <Route key={key} path={r.path} component={r.component} exact={r.exact ? true : false}></Route>
              })
            }
          </Switch>
        </div>
      </div>

    )
  }
}
export default Index