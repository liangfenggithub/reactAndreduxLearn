import React from "react"
import "./todolist.css"


class InputTodo extends React.Component {
  constructor(props) {
    super(props)
    this.input = null
  }

  render() {
    return <div>
      <input ref={(input) => { this.input = input }} type="text" placeholder="请输入代办事项" />
      <button className="btn" onClick={this.add.bind(this)}>提交</button>
    </div>
  }
  add = () => {
    if (this.input.value.length != 0) {
      this.props.additem(this.input.value)
      this.input.value = "";
    } else {
      alert("请输入待办事项")
    }

  }
}

export default InputTodo


