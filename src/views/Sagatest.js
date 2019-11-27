import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { getUserList } from "../actions/sagaaction"
class Sagatest extends React.Component {
  constructor(props) {
    super(props)
  }
  189872
  render() {
    return (
      <div>
        <h1>Saga测试</h1>
        <button
          onClick={this.props.getUserList}
        >
          {
            this.props.state.beginGet ? 
            "正在获取,请稍后"
            :
            "点击我获取"
          }
        </button>
        <div>
          <div>用户列表：</div>
          {
            this.props.state.userList.length > 0 ?
              this.props.state.userList.map((item) => {
                return <li key={item.username}>{`用户名：${item.username}, 密码:${item.password}`}</li>
              })
              : <p>暂未获取用户列表，点击执行异步action，获取用户列表</p>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.sagaReducer,
  }
}
const mapDisPatchToProps = (dispatch) => {
  return bindActionCreators({
    getUserList,
  }, dispatch)
}

export default connect(mapStateToProps, mapDisPatchToProps)(Sagatest);