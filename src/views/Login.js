import React from "react"
class Login extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>


        <div>点击下方登录跳转到index页面，测试 react-router</div>
        <form action="">
          <input type="text" />
          <input type="password" />
          <input type="submit" onClick={this.submit.bind(this)} />
        </form>
        <br /><br />

        <div>点击进入redux 测试页面</div>
        <button onClick={() => { this.props.history.push("/counter") }}>点我</button>
        <br /><br />

        <div>点击进入redux-saga简单测试页面</div>
        <button onClick={() => this.props.history.push("/sagatest")}>点我</button>
        <br /><br />

        <div>点击进入redux-saga CURD 页面</div>
        <button onClick={() => this.props.history.push("/itemcurd")}>点我</button>
        <br /> <br />

        <div>点击进入 todo list 页面</div>
        <button onClick={() => this.props.history.push("todolist")}>点我 </button>

      </div>

    )
  }
  submit = () => {
    this.props.history.push("/index")
  }

}
export default Login