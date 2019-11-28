import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { complateitem, removeitem, changefilter } from "../../actions/todolist"
import { filterOption } from "../../canstants"
class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div className="clearFloat footer">
      <div onClick={this.props.changefilter.bind(this, filterOption.SHOW_ALL)} className={this.props.state.filter == filterOption.SHOW_ALL ? "pushBtn left btn" : "normalBtn left btn"}>所有</div>
      <div onClick={this.props.changefilter.bind(this, filterOption.SHOW_TODO)} className={this.props.state.filter == filterOption.SHOW_TODO ? "pushBtn left btn" : "normalBtn left btn"}>待办</div>
      <div onClick={this.props.changefilter.bind(this, filterOption.SHOW_COMPLATE)} className={this.props.state.filter == filterOption.SHOW_COMPLATE ? "pushBtn left btn" : "normalBtn left btn"}>完成</div>

    </div>
  }
}

const mapStateToProps = state => {
  return {
    state: state.todolistReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    changefilter
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer)