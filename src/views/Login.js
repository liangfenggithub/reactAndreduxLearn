import React from "react"
class Login extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div>please input your username and password</div>
        <form action="">
          <input type="text" />
          <input type="password" />
          <input onClick={this.submit.bind(this)} />
        </form>
      </div>

    )
  }
  submit = () => {
    this.props.push("/index")
  }

}